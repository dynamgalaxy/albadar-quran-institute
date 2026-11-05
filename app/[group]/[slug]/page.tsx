import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/common/Container";
import PageHero from "@/components/common/PageHero";
import ProgramDetailSections from "@/components/sections/ProgramDetailSections";
import GridSection from "@/components/sections/GridSection";
import Card from "@/components/common/Card";
import ResourceCatalog from "@/components/sections/ResourceCatalog";
import type { ContentItem } from "@/types/common";
import { navigation, policyLinks, preservedPageLinks } from "@/data/navigation";
import type { NavigationLink } from "@/types/navigation";
import { programDetails } from "@/data/programDetails";
import { pageHeroImage } from "@/data/pages";
import { courses } from "@/data/courses";
import { resourceBooks } from "@/data/resourceBooks";
import { policyPages } from "@/data/policies";
import { createMetadata } from "@/lib/seo";
import styles from "./PolicyPage.module.css";

const courseEntries: NavigationLink[] = courses.flatMap(course => course.href ? [{ label: course.title, href: course.href, description: course.description }] : []);
const candidates = [...courseEntries, ...navigation.flatMap(item => item.children ?? []), ...policyLinks, ...preservedPageLinks];
const entries = [...new Map(candidates.filter(item => item.href.split("/")[1] !== "contact" && item.href.split("/").length === 3).map(item => [item.href, item] as const)).values()];
const legacyCourseSlugs: Record<string, string> = {
  "nazra-quran": "quran-reading",
  tajweed: "quran-with-tajweed",
  "hifz-ul-quran": "hifz-ul-quran",
  "islamic-studies": "islamic-studies",
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
  if (item && group === "resources") return createMetadata({ title: item.label, description: item.description ?? item.label, path: item.href });
  const policy = policyPages.find(page => page.href === `/${group}/${slug}`);
  if (policy) return { ...createMetadata({ title: policy.title, description: policy.description, path: policy.href }), robots: { index: false, follow: true } };
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
  const isResource = group === "resources";
  const policy = policyPages.find(page => page.href === item.href);
  return <>
    <PageHero variant={isCourse ? "course" : undefined} eyebrow={course ? `AL BADAR QURAN INSTITUTE · ${course.level.toUpperCase()}` : "Al Badar Quran Institute"} title={item.label} description={course ? (detailSlug === "noorani-qaida" ? "Start with Arabic letters, their sounds and the foundations of Quran reading." : course.description) : policy?.description ?? copy?.hero ?? (isResource || group === "programs" ? item.description : "Confirmed details will be published here when available.")} backgroundImage={{ src: isCourse || isResource ? "/assets/home/images/about-child-quran-laptop.png" : policy ? (slug === "privacy-policy" ? "/assets/page-imagery/privacy-policy-hero.webp" : "/assets/page-imagery/terms-of-use-hero.webp") : pageHeroImage(slug), alt: isCourse || isResource ? "Child reading the Quran beside a laptop" : "" }} />
    {policy ? <section className={styles.section}><Container><div className={styles.content}>
      <p className={styles.notice}>The complete policy is awaiting institute approval. The details below are limited to information confirmed on this website.</p>
      {policy.sections.map(section => <section className={styles.entry} key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}
      <p className={styles.contact}>Questions about this policy? <Link href="/contact">Contact Al Badar Quran Institute</Link>.</p>
    </div></Container></section> : isResource ? <ResourceCatalog title={item.label} books={resourceBooks[slug] ?? []} /> : isCourse && detailSlug ? <ProgramDetailSections slug={detailSlug} title={item.label} /> : copy?.cards ? <GridSection title={copy.title ?? item.label} description={copy.description}>{copy.cards.map(card => <Card key={card.id} item={card} />)}</GridSection> : <section className="section"><Container><p>{copy?.body ?? (group === "programs" ? <>These course details are not available here. Please browse <Link href="/courses">all courses</Link> or <Link href="/contact">contact Al Badar Quran Institute</Link>.</> : <>For current information, please <Link href="/contact">contact Al Badar Quran Institute</Link>.</>)}</p></Container></section>}
  </>;
}
