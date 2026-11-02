import Link from "next/link";
import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import { site } from "@/config/site";

const navigationLinks = [
  { label: "Home", href: "/" }, { label: "About Us", href: "/about" },
  { label: "Courses", href: "/courses" }, { label: "Teachers", href: "/about" },
  { label: "Pricing", href: "/pricing" }, { label: "Contact Us", href: "/contact" },
];

const quickLinks = [
  { label: "Book a free trial", href: "/contact#enquiry" },
  { label: "Questions & answers", href: "/faqs" },
  { label: "Contact us", href: "/contact" },
  { label: "WhatsApp", href: "https://wa.me/923155044602" },
];

const programLinks = [
  { label: "Noorani Qaida", href: "/courses/noorani-qaida" },
  { label: "Quran Reading / Nazra Quran", href: "/courses/quran-reading" },
  { label: "Quran with Tajweed", href: "/courses/quran-with-tajweed" },
  { label: "Hifz-ul-Quran", href: "/courses/hifz-ul-quran" },
  { label: "Quran Translation & Tafsir", href: "/courses/quran-translation-and-tafsir" },
  { label: "Islamic Studies", href: "/courses/islamic-studies" },
  { label: "Arabic Language Basics", href: "/courses/arabic-language-basics" },
];

export default function Footer() {
  return <footer className="site-footer" data-header-surface="dark"><Container>
    <div className="footer-grid">
      <div className="footer-brand">
        <div className="footer-brand-lockup"><Logo light /></div>
        <p className="footer-headline">Personal online Quran learning for children and adults, taught one-to-one.</p>
        <div className="footer-brand-contact">
          <a className="footer-email" href={`mailto:${site.email}`}>{site.email}<span aria-hidden="true">↗</span></a>
          <a href={`tel:${site.phone}`}>{site.phone}</a>
          <p>Islamabad, Pakistan</p>
        </div>
      </div>
      <nav className="footer-column" aria-label="Footer navigation"><h2>Navigation</h2><ul className="footer-links">{navigationLinks.map(item => <li key={item.label}><Link href={item.href}>{item.label}</Link></li>)}</ul></nav>
      <nav className="footer-column" aria-label="Footer courses"><h2>Courses</h2><ul className="footer-links">{programLinks.map(item => <li key={item.label}><Link href={item.href}>{item.label}</Link></li>)}</ul></nav>
      <nav className="footer-column" aria-label="Footer useful links"><h2>Useful Links</h2><ul className="footer-links">{quickLinks.map(item => <li key={item.label}>{item.href.startsWith("https:") ? <a href={item.href} target="_blank" rel="noopener noreferrer">{item.label}</a> : <Link href={item.href}>{item.label}</Link>}</li>)}</ul></nav>
      <div className="footer-column"><h2>Social</h2><ul className="footer-links">{site.socialLinks.filter(link => link.href).map(link => <li key={link.id}><a href={link.href!} target="_blank" rel="noopener noreferrer">{link.label}</a></li>)}</ul></div>
    </div>
    <div className="footer-bottom"><span>© 2026 Al Badar Quran Institute. All rights reserved.</span><span>Website by <a href="https://dynamgalaxy.com" target="_blank" rel="noopener noreferrer">Dynam Galaxy</a></span></div>
  </Container></footer>;
}
