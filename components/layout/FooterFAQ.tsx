import Link from "next/link";
import Container from "@/components/common/Container";
import Accordion from "@/components/ui/Accordion";
import AnimatedArrow from "@/components/common/AnimatedArrow";
import { faqs } from "@/data/faqs";
import type { FAQ } from "@/types/faq";

export default function FooterFAQ({ items = faqs.slice(0, 6), title = "Clear answers for Quran learning", description = "Helpful details about courses, online lessons and taking your first step with Al Badar." }: { items?: FAQ[]; title?: string; description?: string }) {
  return <section id="faqs" className="footer-faq" aria-labelledby="footer-faq-title">
    <Container className="footer-faq-inner">
      <div className="footer-faq-intro">
        <p className="footer-faq-eyebrow"><span aria-hidden="true">✦</span> Questions &amp; answers</p>
        <h2 id="footer-faq-title">{title}</h2>
        <p className="footer-faq-description">{description}</p>
        <aside className="footer-faq-contact">
          <h3>Need help?</h3>
          <p>Ask about courses or a free trial.</p>
          <Link href="/contact"><AnimatedArrow className="footer-faq-contact-icon" />Contact us</Link>
        </aside>
      </div>
      <Accordion items={items} defaultOpenFirst />
    </Container>
  </section>;
}
