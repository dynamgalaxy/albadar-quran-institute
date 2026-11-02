import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Link from "next/link";
import type { Program } from "@/types/program";
import AnimatedArrow from "@/components/common/AnimatedArrow";

const iconDrawings = {
  book: <><path d="M12 5c-2.5-1.6-5-2-8-1.5v14c3-.5 5.5 0 8 1.5 2.5-1.5 5-2 8-1.5v-14c-3-.5-5.5-.1-8 1.5Z"/><path d="M12 5v14"/></>,
  recite: <><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 10v3a6 6 0 0 0 12 0v-3M12 19v3M9 22h6"/></>,
  bookmark: <path d="M6 3h12v18l-6-4-6 4V3Z"/>,
  text: <><path d="M4 5h16M4 9h11M4 13h16M4 17h10"/><path d="m17 17 2 2 2-2"/></>,
  crescent: <><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z"/><path d="m16 4 .4 1.6L18 6l-1.6.4L16 8l-.4-1.6L14 6l1.6-.4L16 4Z"/></>,
  heart: <path d="M12 20s-8-4.5-8-10a4.5 4.5 0 0 1 8-2.7A4.5 4.5 0 0 1 20 10c0 5.5-8 10-8 10Z"/>,
  scroll: <><path d="M6 4h12v13a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3ZM8 9h7M8 13h7"/></>,
  math: <><path d="M4 7h7M7.5 3.5v7M14 7h6M4 17h7M14 14l6 6M20 14l-6 6"/></>,
  atom: <><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(45 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(-45 12 12)"/><circle cx="12" cy="12" r="1"/></>,
  flask: <><path d="M9 3h6M10 3v7l-6 9a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2l-6-9V3M8 15h8"/></>,
  leaf: <><path d="M20 4c-9 0-15 4-15 11a5 5 0 0 0 5 5c7 0 11-6 10-16Z"/><path d="M5 20c3-5 6-8 11-11"/></>,
  language: <><path d="M5 5h14v11H9l-4 4V5Z"/><path d="M8 9h8M8 12h5"/></>,
};

const iconByCourse: Record<string, keyof typeof iconDrawings> = {
  "noorani-qaida": "book", "quran-reading": "book", "quran-with-tajweed": "recite",
  "hifz-ul-quran": "bookmark", "quran-translation-and-tafsir": "text", "islamic-studies": "crescent",
  "arabic-language-basics": "language", "women-guidance": "heart", "nasheed-reciting": "recite",
  "islamic-grooming": "heart", "pre-marital-guidance": "heart", "islamic-fiqh": "scroll",
  "hadith-studies": "scroll", "seerah-and-history": "scroll", "islamic-ethics": "heart",
  mathematics: "math", physics: "atom", chemistry: "flask", biology: "leaf",
  "general-science": "atom", english: "language", urdu: "language",
};

function CourseIcon({ href }: { href?: string }) {
  const slug = href?.split("/").pop() ?? "";
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{iconDrawings[iconByCourse[slug] ?? "book"]}</svg>;
}

export default function ProgramCard({ program, editorial = false }: { program: Program; editorial?: boolean }) {
  if (editorial) {
    return <article className="home-program-card">
      <div className="home-program-card-top">
        <span className="home-program-icon"><CourseIcon href={program.href} /></span>
        <Link className="home-program-corner" href={program.href ?? "/contact#enquiry"} aria-label={`Explore ${program.title}`}><AnimatedArrow /></Link>
      </div>
      <h3>{program.title}</h3>
      <p>{program.description}</p>
      <Link className="home-program-cta" href={program.href ?? "/contact#enquiry"} aria-label={`${program.href ? "Learn more about" : "Ask about"} ${program.title}`}>{program.href ? "Learn more" : "Ask about this course"}</Link>
    </article>;
  }
  return <Card item={program} label={program.dateLabel}><Button href="/contact#enquiry" variant="secondary">Ask about programmes</Button></Card>;
}
