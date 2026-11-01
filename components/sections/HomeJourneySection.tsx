import Image from "next/image";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import AnimatedArrow from "@/components/common/AnimatedArrow";
import { journeyFacts, journeyMilestones } from "@/data/journey";

export default function HomeJourneySection() {
  return <section id="our-journey" className="home-journey" aria-labelledby="journey-title">
    <div className="home-journey-main" data-header-surface="dark">
      <Container>
        <div className="journey-heading">
          <span>About Al Badar</span>
          <h2 id="journey-title">Our Journey of Quranic Learning</h2>
          <p>From a first encounter with Arabic letters to deeper understanding, each learner can find a path suited to their goals.</p>
        </div>
        <div className="journey-art" aria-hidden="true">
          <div className="journey-note">Begin with what you know. Keep building with care.</div>
          <span className="journey-quote-mark">“</span>
          <div className="journey-ribbon">READ · RECITE · UNDERSTAND</div>
          <div className="journey-image"><Image src="/assets/home/images/about-child-quran-laptop.png" alt="A child reading Quran beside a laptop" fill sizes="(max-width: 600px) 160px, 240px" /></div>
          <div className="journey-quote"><span>✦</span><p>Learning grows through attentive teaching and steady practice.</p></div>
        </div>
        <ol className="journey-timeline">
          {journeyMilestones.map(item => <li key={item.year}>
            <span className="journey-year">{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>)}
        </ol>
        <div className="journey-main-action"><Button href="/about">Explore our approach <AnimatedArrow /></Button></div>
      </Container>
    </div>
    <div className="home-journey-bottom"><Container>
      <div className="journey-facts">{journeyFacts.map(fact => <div key={fact.label}><strong>{fact.value}</strong><span>{fact.label}</span></div>)}</div>
      <div className="journey-bottom-content"><div><h3>Every learner, a journey of their own.</h3><Button href="/about" variant="secondary">About Al Badar <AnimatedArrow /></Button></div><p>Al Badar teaches Quran and Islamic studies through one-to-one online lessons for children, teenagers and adults. A free trial gives each learner space to share their experience and discuss where to begin; from there, reading, recitation and understanding can develop at a suitable pace.</p></div>
    </Container></div>
  </section>;
}
