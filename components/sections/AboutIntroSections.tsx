import Image from "next/image";
import type { SectionIntroProps } from "@/types/common";
import styles from "./AboutIntroSections.module.css";

export default function AboutIntroSections({ about, story }: { about: SectionIntroProps; story: SectionIntroProps }) {
  return <>
    <section className={`section ${styles.section}`} aria-labelledby="about-intro-title">
      <div className={`container ${styles.row}`}>
        <div className={`${styles.image} ${styles.imageFirst}`}>
          <Image src="/assets/home/images/about-child-quran-laptop.png" alt="Child learning Quran online with a laptop" fill sizes="(max-width: 760px) 100vw, 36vw" />
        </div>
        <div className={styles.copy}>
          <span className="eyebrow">About Al Badar</span>
          <h2 id="about-intro-title">Our Journey of Quranic Learning</h2>
          <p>{about.description}</p>
          <p>From a first encounter with Arabic letters to deeper understanding, each learner can find a path suited to their goals.</p>
        </div>
      </div>
    </section>
    <section className={`section ${styles.section} ${styles.second}`} aria-labelledby="about-story-title">
      <div className={`container ${styles.row} ${styles.rowReverse}`}>
        <div className={styles.copy}>
          <span className="eyebrow">Al Badar Quran Institute</span>
          <h2 id="about-story-title">{story.title}</h2>
          <p>{story.description}</p>
          <p>Learning grows through attentive teaching and steady practice.</p>
        </div>
        <div className={`${styles.image} ${styles.imageSecond}`}>
          <Image src="/assets/page-imagery/about-story-male.webp" alt="Illustrative male student reading the Quran in a learning space" fill sizes="(max-width: 760px) 100vw, 36vw" />
        </div>
      </div>
    </section>
  </>;
}
