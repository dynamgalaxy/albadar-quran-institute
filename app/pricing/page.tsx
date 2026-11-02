import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import HeroSection from "@/components/sections/HeroSection";
import FooterFAQ from "@/components/layout/FooterFAQ";
import { createMetadata } from "@/lib/seo";
import type { FAQ } from "@/types/faq";
import styles from "./PricingPage.module.css";

export const metadata = createMetadata({
  title: "Online Quran Class Fees and Monthly Plans",
  path: "/pricing",
  description: "Compare Al Badar Quran Institute's Basic, Standard, and Intensive online Quran class plans, priced in USD per student per month. Every plan starts with a free trial class.",
});

const plans = [
  {
    name: "Basic Plan",
    description: "A steady start for new students.",
    price: 20,
    schedule: "3 classes per week",
    duration: "30 minutes per class",
    features: ["One-to-one online classes", "Qualified teacher assigned to you", "Flexible class timings", "Free trial class before you enrol"],
  },
  {
    name: "Standard Plan",
    description: "Our most popular plan for consistent progress.",
    price: 40,
    schedule: "5 classes per week",
    duration: "30 minutes per class",
    features: ["One-to-one online classes", "Qualified teacher assigned to you", "Flexible class timings", "Regular progress updates", "Free trial class before you enrol"],
    popular: true,
  },
  {
    name: "Intensive Plan",
    description: "For students who want a more intensive schedule, including Hifz students.",
    price: 50,
    schedule: "5–6 classes per week",
    duration: "30–45 minutes per class",
    features: ["One-to-one online classes", "Longer, more frequent lessons", "Ideal for Hifz-ul-Quran", "Regular assessment and parent updates", "Free trial class before you enrol"],
  },
];

const inclusions = [
  { title: "One-to-one teaching", description: "Never a shared class. Your teacher focuses on one student." },
  { title: "Flexible timings", description: "Morning, afternoon, evening or night — in your time zone." },
  { title: "Progress updates", description: "Regular assessment, with updates shared with parents." },
  { title: "Qualified teachers", description: "Experienced male and female teachers." },
];

const faqs: FAQ[] = [
  { id: "free-trial", question: "Do you offer a free trial?", answer: "Yes. Every plan starts with a free trial class, with no cost or obligation." },
  { id: "payment", question: "How can I pay the monthly fee?", answer: "The available payment methods are shared with you during enrolment." },
  { id: "certificate", question: "Will I receive a certificate?", answer: "Certificate availability has not been confirmed. Please ask Al Badar Quran Institute when you enquire." },
];

export default function PricingPage() {
  return <>
    <HeroSection variant="course" eyebrow="AFFORDABLE & REASONABLE FEES" title="Monthly Plans" description="We aim to provide quality Quran education at a fee that works for your family. Every plan starts with a free trial class." backgroundImage={{ src: "/assets/home/images/hero-quran-learning.png", alt: "" }} primaryCTA={{ label: "View monthly plans", href: "#plans" }} secondaryCTA={{ label: "Book a free trial", href: "/contact#enquiry" }} />

    <section id="plans" className={styles.plans} aria-label="Monthly pricing plans">
      <Container>
        <div className={styles.planGrid}>
          {plans.map(plan => <article className={`${styles.planCard} ${plan.popular ? styles.popular : ""}`} key={plan.name}>
            <div className={styles.planHeading}>
              <h2>{plan.name}</h2>
              {plan.popular && <span className={styles.badge}>Most popular</span>}
            </div>
            <p className={styles.planDescription}>{plan.description}</p>
            <p className={styles.price}><span className={styles.amount}>${plan.price}</span><span className={styles.currency}>USD</span></p>
            <p className={styles.pricePeriod}>per student, per month</p>
            <dl className={styles.schedule}>
              <div><dt>Schedule</dt><dd>{plan.schedule}</dd></div>
              <div><dt>Duration</dt><dd>{plan.duration}</dd></div>
            </dl>
            <ul className={styles.features}>{plan.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
            <Button href="/contact#enquiry" className={styles.planButton}>Start Free Trial</Button>
          </article>)}
        </div>
        <p className={styles.feeNote}>Fees are shown in US dollars, per student, per month. The available payment methods are shared with you during enrolment.</p>
      </Container>
    </section>

    <section className={styles.discount} aria-labelledby="discount-title"><Container>
      <div className={styles.discountPanel}>
        <div><h2 id="discount-title">Family &amp; Sibling Discount</h2><p>Families with two or more students enrolled at Al Badar Quran Institute may receive a special family or sibling discount. Contact us for more details.</p></div>
        <Button href="/contact#enquiry" variant="secondary">Ask about the discount</Button>
      </div>
    </Container></section>

    <section className={styles.included} aria-labelledby="included-title"><Container>
      <h2 id="included-title">What You Always Get</h2>
      <div className={styles.inclusionGrid}>{inclusions.map(item => <div className={styles.inclusion} key={item.title}><h3>{item.title}</h3><p>{item.description}</p></div>)}</div>
    </Container></section>

    <FooterFAQ items={faqs} title="Fees & Enrolment FAQs" description="Answers about the free trial, monthly fees and enrolment." />
  </>;
}
