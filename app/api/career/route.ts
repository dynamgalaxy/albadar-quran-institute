import { NextRequest, NextResponse } from "next/server";
import { jobs, qualifications } from "@/data/jobs";
import { company } from "@/data/company";

export const runtime = "nodejs";

const maxFileSize = 5 * 1024 * 1024;
const field = (form: FormData, name: string) => String(form.get(name) ?? "").trim();
const invalid = (message: string, status = 400) => NextResponse.json({ message }, { status });

function fileType(bytes: Buffer, name: string) {
  if (name === "educationDocument") {
    if (bytes.subarray(0, 5).toString() === "%PDF-") return "application/pdf";
    if (bytes.subarray(0, 3).equals(Buffer.from([0xff, 0xd8, 0xff]))) return "image/jpeg";
    if (bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) return "image/png";
  }
  if (name === "cv") {
    if (bytes.subarray(0, 5).toString() === "%PDF-") return "application/pdf";
    if (bytes.subarray(0, 4).toString() === "PK\u0003\u0004" && bytes.includes(Buffer.from("word/document.xml"))) return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  }
  return null;
}

export async function POST(request: NextRequest) {
  if (!jobs.length) return invalid("No positions are open right now.", 503);
  const origin = request.headers.get("origin");
  if (origin && origin !== request.nextUrl.origin) return invalid("Request origin is not allowed.", 403);
  const size = Number(request.headers.get("content-length") || 0);
  if (size > 12 * 1024 * 1024) return invalid("Application files are too large.", 413);

  let form: FormData;
  try { form = await request.formData(); } catch { return invalid("Invalid application form."); }
  if (field(form, "website")) return NextResponse.json({ message: "Application received." });
  const job = jobs.find(item => item.id === field(form, "jobId"));
  if (!job) return invalid("Select a valid role.");
  const required = ["fullName", "fatherName", "email", "phone", "address", "city", "postalCode", "region", "cnic"] as const;
  if (required.some(name => !field(form, name) || field(form, name).length > 254)) return invalid("Complete all required details.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field(form, "email"))) return invalid("Enter a valid email address.");
  if (!/^\d{5}-?\d{7}-?\d$/.test(field(form, "cnic"))) return invalid("Enter a valid CNIC number.");
  if (field(form, "consent") !== "yes") return invalid("Consent is required.");
  const selected = form.getAll("qualifications").map(String);
  if (!selected.length || selected.some(value => !qualifications.some(item => item === value))) return invalid("Select a completed qualification.");

  const attachments: { filename: string; content: string; content_type: string }[] = [];
  for (const name of ["educationDocument", "cv"] as const) {
    const file = form.get(name);
    if (!(file instanceof File) || !file.size || file.size > maxFileSize) return invalid("Upload both documents, each no larger than 5 MB.");
    const bytes = Buffer.from(await file.arrayBuffer());
    const contentType = fileType(bytes, name);
    if (!contentType) return invalid("Use PDF, JPG or PNG for education documents and PDF or DOCX for CVs.");
    attachments.push({ filename: `${name}-${file.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 100)}`, content: bytes.toString("base64"), content_type: contentType });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CAREER_FROM_EMAIL;
  if (!apiKey || !from || !company.email) return invalid("Applications are temporarily unavailable. Please contact the institute directly.", 503);
  const experience = field(form, "experience");
  if (experience.length > 1000) return invalid("Experience details are too long.");
  const lines = [`Role: ${job.title}`, ...required.map(name => `${name}: ${field(form, name).replace(/[\r\n]/g, " ")}`), `Qualifications: ${selected.join(", ")}`, `Relevant experience: ${experience || "Not provided"}`];
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [company.email], subject: `Career application: ${job.title}`, text: lines.join("\n"), attachments }),
      cache: "no-store",
    });
    if (!response.ok) return invalid("Application could not be delivered. Please try again later.", 502);
    return NextResponse.json({ message: "Application sent." });
  } catch { return invalid("Application could not be delivered. Please try again later.", 502); }
}
