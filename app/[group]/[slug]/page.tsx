import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/common/Container";
import PageHero from "@/components/common/PageHero";
import ProgramDetailSections from "@/components/sections/ProgramDetailSections";
import GridSection from "@/components/sections/GridSection";
import Card from "@/components/common/Card";
import type { ContentItem } from "@/types/common";
import { navigation, policyLinks } from "@/data/navigation";
import type { NavigationLink } from "@/types/navigation";
import { programDetails } from "@/data/programDetails";
import { pageHeroImage } from "@/data/pages";
import { courses } from "@/data/courses";
import { createMetadata } from "@/lib/seo";

const preservedRoutes: NavigationLink[] = [
  { label: "Free Trial", href: "/academics/admission" },
  { label: "Class Timings", href: "/academics/class-schedule" },
  { label: "Course information", href: "/programs/full-time-program" },
  { label: "Course information", href: "/programs/part-time-program" },
  { label: "Quran Reading / Nazra Quran", href: "/programs/nazra-quran" },
  { label: "Quran with Tajweed", href: "/programs/tajweed" },
  { label: "Hifz-ul-Quran", href: "/programs/hifz-ul-quran" },
  { label: "Basic Islamic Studies", href: "/programs/islamic-studies" },
];
const courseEntries: NavigationLink[] = courses.flatMap(course => course.href ? [{ label: course.title, href: course.href, description: course.description }] : []);
const candidates = [...courseEntries, ...navigation.flatMap(item => item.children ?? []), ...policyLinks, ...preservedRoutes];
const entries = [...new Map(candidates.filter(item => item.href.split("/")[1] !== "contact" && item.href.split("/").length === 3).map(item => [item.href, item] as const)).values()];
const legacyCourseSlugs: Record<string, string> = {
  "nazra-quran": "quran-reading",
  tajweed: "quran-with-tajweed",
  "hifz-ul-quran": "hifz-ul-quran",
  "islamic-studies": "basic-islamic-studies",
};

const existingPageCopy: Record<string, { hero: string; title?: string; description?: string; cards?: ContentItem[]; body?: string }> = {
  "/academics/admission": {
    hero: "Start with a free trial class and discuss the student's current learning level and course.",
    title: "Getting Started",
    description: "New students can attend a free trial class before choosing a course and schedule.",
    cards: [
      { id: "enquire", title: "Contact the institute", description: "Ask about available courses and class times by WhatsApp, phone or email." },
      { id: "trial", title: "Attend a free trial", description: "A teacher can understand the student's current Quran learning level." },
      { id: "choose", title: "Choose a course and schedule", description: "Discuss a suitable course and arrange class times according to availability." },
    ],
  },
  "/academics/class-schedule": {
    hero: "Class times are arranged according to the student's and teacher's availability.",
    title: "Flexible Class Timings",
    description: "Morning, afternoon, evening and night slots may be available for students in different time zones.",
    cards: [
      { id: "morning", title: "Morning", description: "Before school or work." },
      { id: "afternoon", title: "Afternoon", description: "A calm midday slot." },
      { id: "evening", title: "Evening", description: "After school or work." },
      { id: "night", title: "Night", description: "Later slots for other time zones." },
    ],
  },
  "/about/career": { hero: "Career details have not been supplied.", body: "Contact Al Badar Quran Institute to ask about current opportunities." },
};

export function generateStaticParams() {
  return entries.map(item => {
    const [, group, slug] = item.href.split("/");
    return { group, slug };
  });
}

export async function generateMetadata({ params }: { params: Promise<{ group: string; slug: string }> }): Promise<Metadata> {
  const { group, slug } = await params;
  const item = entries.find(entry => entry.href === `/${group}/${slug}`);
  const detailSlug = group === "courses" ? slug : group === "programs" ? legacyCourseSlugs[slug] : undefined;
  const detail = detailSlug ? programDetails[detailSlug] : undefined;
  if (item && detail) return createMetadata({ title: item.label, description: detail.description, path: `/${group}/${slug}` });
  return { title: item?.label ?? "Page not found", robots: { index: false, follow: true } };
}

export default async function NavigationDetailPage({ params }: { params: Promise<{ group: string; slug: string }> }) {
  const { group, slug } = await params;
  const item = entries.find(entry => entry.href === `/${group}/${slug}`);
  if (!item) notFound();
  const copy = existingPageCopy[item.href];
  const detailSlug = group === "courses" ? slug : group === "programs" ? legacyCourseSlugs[slug] : undefined;
  const course = detailSlug ? programDetails[detailSlug] : undefined;
  const isCourse = Boolean(course);
  return <>
    <PageHero variant={isCourse ? "course" : undefined} eyebrow={course ? `AL BADAR QURAN INSTITUTE · ${course.level.toUpperCase()}` : "Al Badar Quran Institute"} title={item.label} description={course ? (detailSlug === "noorani-qaida" ? "Start with Arabic letters, their sounds and the foundations of Quran reading." : course.description) : copy?.hero ?? (group === "programs" ? item.description : group === "policies" ? "This page is being prepared." : "Confirmed details will be published here when available.")} backgroundImage={{ src: isCourse ? "/assets/home/images/about-child-quran-laptop.png" : pageHeroImage(slug), alt: isCourse ? "Child reading the Quran beside a laptop" : "" }} backButton={!isCourse} primaryCTA={isCourse ? { label: "Discuss this course", href: "/contact#enquiry" } : undefined} secondaryCTA={isCourse ? { label: "Contact us", href: "/contact" } : { label: "Contact Us", href: "/contact" }} />
    {isCourse && detailSlug ? <ProgramDetailSections slug={detailSlug} title={item.label} /> : copy?.cards ? <GridSection title={copy.title ?? item.label} description={copy.description}>{copy.cards.map(card => <Card key={card.id} item={card} />)}</GridSection> : <section className="section"><Container><p>{copy?.body ?? (group === "programs" ? <>These course details are not available here. Please browse <Link href="/courses">all courses</Link> or <Link href="/contact">contact Al Badar Quran Institute</Link>.</> : <>For current information, please <Link href="/contact">contact Al Badar Quran Institute</Link>.</>)}</p></Container></section>}
  </>;
}
