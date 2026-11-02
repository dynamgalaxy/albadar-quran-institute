import Link from "next/link";
import Container from "@/components/common/Container";
import PageHero from "@/components/common/PageHero";
import { navigation, policyLinks } from "@/data/navigation";
import { courses } from "@/data/courses";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Sitemap",
  path: "/sitemap",
  description: "Browse Al Badar Quran Institute pages and courses.",
});

const groups = [
  { title: "Explore", links: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Programs", href: "/courses" },
    { label: "Pricing", href: "/pricing" },
    { label: "Services", href: "/services" },
    { label: "Media", href: "/media" },
    { label: "Contact Us", href: "/contact" },
  ] },
  { title: "Courses", links: courses.map(course => ({ label: course.title, href: course.href ?? "/courses" })) },
  { title: "Getting Started", links: [
    { label: "Free Trial", href: "/academics/admission" },
    { label: "Class Timings", href: "/academics/class-schedule" },
  ] },
  { title: "About", links: [
    ...(navigation.find(item => item.label === "About")?.children ?? []),
    { label: "Sitemap", href: "/sitemap" },
  ] },
  { title: "Policies", links: policyLinks },
];

export default function SitemapPage() {
  return <>
    <PageHero eyebrow="Al Badar Quran Institute" title="Sitemap" description="Find your way through our courses and institute pages." backgroundImage={{ src: "/assets/home/images/about-child-quran-laptop.png", alt: "" }} />
    <section className="section sitemap-directory" aria-label="Website pages"><Container><div className="sitemap-grid">{groups.map(group => <div className="sitemap-group" key={group.title}><h2>{group.title}</h2><ul>{group.links.map(link => <li key={link.href}><Link href={link.href}>{link.label}<span aria-hidden="true">↗</span></Link></li>)}</ul></div>)}</div></Container></section>
  </>;
}
