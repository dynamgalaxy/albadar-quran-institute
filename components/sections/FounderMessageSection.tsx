"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
import AnimatedArrow from "@/components/common/AnimatedArrow";
import styles from "./FounderMessageSection.module.css";

interface FounderMessageSectionProps {
  title: string;
  description?: string;
}

export default function FounderMessageSection({ title, description }: FounderMessageSectionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={`section ${styles.section}`} aria-labelledby="founder-heading">
      <div className="container">
        <div className={styles.headingRow}>
          <div>
            <span className="eyebrow">Al Badar Quran Institute</span>
            <h2 id="founder-heading" className={styles.heading}>{title}</h2>
          </div>
          <div className={styles.headingAside}>
            <Button
              className={styles.readButton}
              type="button"
              aria-expanded={expanded}
              aria-controls="founder-full-message"
              onClick={() => setExpanded(value => !value)}
            >
              {expanded ? "Close course details" : "Read course details"} <AnimatedArrow />
            </Button>
            {description && <p>{description}</p>}
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.portrait}>
            <Image
              src="/assets/home/images/hero-quran-learning.png"
              alt="Children studying the Quran at home"
              fill
              sizes="(max-width: 700px) 100vw, 32vw"
              className={styles.portraitImage}
            />
            <span className={styles.portraitLabel}>Quran learning</span>
          </div>
          <div className={styles.quotePanel}>
            <span className={styles.quoteMark} aria-hidden="true">“</span>
            <blockquote>
              <p>Our aim is to make Quran learning accessible for students at different stages.</p>
              <footer>Al Badar Quran Institute <span>Online Quran and Islamic studies</span></footer>
            </blockquote>
          </div>
        </div>

        <div id="founder-full-message" className={styles.fullMessage} hidden={!expanded}>
          <div className={styles.fullMessageHeading}>
            <span className="eyebrow">The full message</span>
            <h3>Courses and class format</h3>
          </div>
          <div className={styles.fullMessageBody}>
            <p>Al Badar Quran Institute offers Quran reading, Tajweed, memorization, translation, Tafseer, Islamic studies and Arabic basics.</p>
            <p>Classes are one-to-one and can be arranged at flexible times. New students can request a free trial class before enrolling.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
