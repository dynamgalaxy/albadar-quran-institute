import Link from "next/link";
import Container from "@/components/common/Container";
import type { startSteps } from "@/data/programs";
import AnimatedArrow from "@/components/common/AnimatedArrow";

export default function HomeHighlightsSection({ items }: { items: typeof startSteps }) {
  return <section id="get-started" className="home-highlights" data-header-surface="dark" aria-label="Three steps to get started">
    <Container className="home-highlights-inner">
      <div className="home-highlights-facts">
        {items.map((item, index) => <div className="home-highlight" key={item.id}>
          <strong><span className="home-highlight-index">{index + 1}</span><span className="home-highlight-title">{item.title}</span></strong>
          <span className="home-highlight-description">{item.description}</span>
        </div>)}
      </div>
      <div className="home-highlights-cta">
        <p>Not sure where to begin? Tell us what you hope to learn.</p>
        <Link href="/contact#enquiry">Send an enquiry <AnimatedArrow /></Link>
      </div>
    </Container>
  </section>;
}
