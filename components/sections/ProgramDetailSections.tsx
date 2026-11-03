import Image from "next/image";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import AnimatedArrow from "@/components/common/AnimatedArrow";
import { programDetails } from "@/data/programDetails";
import { courseStories } from "@/data/courseStories";
import { courses } from "@/data/courses";
import CourseFocusTabs from "./CourseFocusTabs";
import styles from "./ProgramDetailSections.module.css";

export default function ProgramDetailSections({ slug, title }: { slug: string; title: string }) {
  const detail = programDetails[slug];
  if (!detail) return null;
  const story = courseStories[slug] ?? {
    message: detail.overview,
    note: `A focused path through ${title}.`,
    quote: detail.description,
    steps: detail.learningFocus.slice(0, 4).map(focus => ({ title: focus, description: "" })),
    benefits: [...detail.learningFocus.slice(0, 4)],
  };
  const focusImages = courses.find(course => course.href === `/courses/${slug}`)?.category === "Quran & Islamic Studies"
    ? ["/assets/page-imagery/blog-nazira-male.webp", "/assets/gallery/student-online-lesson.webp", "/assets/page-imagery/blog-revision.webp", "/assets/page-imagery/blog-meaning.webp", "/assets/page-imagery/blog-hifz.webp", "/assets/home/images/about-child-quran-laptop.png"]
    : ["/assets/home/images/about-child-quran-laptop.png", "/assets/page-imagery/blog-revision.webp", "/assets/gallery/student-online-lesson.webp", "/assets/gallery/student-reading-solo-boy.webp"];
  const focusItems = detail.learningFocus.map((focus, index) => ({
    label: story.benefits[index] ?? focus,
    description: `${story.steps[index]?.description || `${focus}.`} ${detail.overview}`,
    image: focusImages[index % focusImages.length],
  }));

  return <>
    <section className={styles.message} aria-labelledby="program-message-title"><Container className={styles.container}>
      <p className={styles.eyebrow}>OUR MESSAGE</p>
      <h2 id="program-message-title">Learning for every learner</h2>
      <p className={styles.messageText}>{story.message}</p>
      <div className={styles.stats} aria-label="Al Badar Quran Institute learning highlights">
        <div><span>One-to-one lessons</span><strong>1:1</strong></div>
        <div><span>Course pathways</span><strong>{String(courses.length).padStart(2, "0")}</strong></div>
        <div><span>Trial class</span><strong>Free</strong></div>
      </div>
    </Container></section>

    <section className={styles.about} data-header-surface="dark" aria-labelledby="program-about-title"><Container className={styles.container}>
      <div className={styles.aboutIntro}><p className={styles.eyebrow}>ABOUT THE COURSE</p><h2 id="program-about-title">About {title}</h2><p>{detail.description}</p></div>
      <div className={styles.art}>
        <p className={styles.note}>{story.note}</p>
        <div className={styles.ribbon} aria-hidden="true">LEARN · PRACTISE · PROGRESS | LEARN · PRACTISE · PROGRESS | LEARN · PRACTISE · PROGRESS</div>
        <div className={styles.portrait}><Image src="/assets/home/images/about-child-quran-laptop.png" alt="Child reading the Quran beside a laptop" fill sizes="(max-width: 600px) 220px, 240px" /></div>
        <div className={styles.quote}><span aria-hidden="true">✦</span><p>{story.quote}</p></div>
      </div>
      <ol className={styles.timeline}>{story.steps.map((step, index) => <li key={`${step.title}-${index}`}><span className={styles.index}>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3>{step.description && <p>{step.description}</p>}</li>)}</ol>
      <div className={styles.action}><Button href="/contact#enquiry">Ask about this course <AnimatedArrow /></Button></div>
    </Container></section>

    <section className={styles.explore} aria-labelledby="program-explore-title"><Container className={styles.container}>
      <p className={styles.eyebrow}>WHAT YOU CAN WORK ON</p>
      <h2 id="program-explore-title">Why choose {title}?</h2>
      <CourseFocusTabs courseTitle={title} items={focusItems} />
    </Container></section>
  </>;
}
