import styles from "./AboutTeachersSection.module.css";

const strengths = [
  { title: "One-to-One Classes", description: "The teacher focuses on one student at a time." },
  { title: "Male & Female Teachers", description: "Female teachers may be available for female students and children, subject to availability." },
  { title: "Patient & Encouraging", description: "Lessons are designed to provide a peaceful, respectful and enjoyable learning experience." },
] as const;

export default function AboutTeachersSection() {
  return <section id="teachers" className={`section ${styles.section}`} aria-labelledby="about-teachers-title">
    <div className="container">
      <div className={styles.heading}>
        <div><span className="eyebrow">Guided learning</span><h2 id="about-teachers-title">Our Teachers</h2></div>
        <p>Teacher names and credentials are not listed. Ask the institute about current teacher availability when you enquire.</p>
      </div>
      <div className={styles.grid}>
        {strengths.map((strength, index) => <div className={styles.item} key={strength.title}>
          <div className={styles.portrait} role="img" aria-label="Teacher portrait placeholder">
            <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" focusable="false"><circle cx="60" cy="43" r="17"/><path d="M25 99c2-21 15-32 35-32s33 11 35 32"/></svg>
            <span>Portrait to be added</span>
          </div>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{strength.title}</h3>
          <p>{strength.description}</p>
        </div>)}
      </div>
      <p className={styles.note}>Teacher names and profiles have not been provided.</p>
    </div>
  </section>;
}
