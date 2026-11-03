"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import styles from "./CourseFocusTabs.module.css";

type FocusItem = { label: string; description: string; image: string };

export default function CourseFocusTabs({ courseTitle, items }: { courseTitle: string; items: FocusItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const active = items[activeIndex];
  if (!active) return null;

  const selectWithKeyboard = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % items.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + items.length) % items.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = items.length - 1;
    else return;
    event.preventDefault();
    setActiveIndex(next);
    buttons.current[next]?.focus();
  };

  return <div className={styles.layout}>
    <div className={styles.options} role="tablist" aria-label={`Learning focus for ${courseTitle}`} aria-orientation="vertical">
      {items.map((item, index) => <button
        key={`${item.label}-${index}`}
        ref={node => { buttons.current[index] = node; }}
        type="button"
        role="tab"
        id={`focus-tab-${index}`}
        aria-controls="focus-panel"
        aria-selected={activeIndex === index}
        tabIndex={activeIndex === index ? 0 : -1}
        className={`${styles.option} ${activeIndex === index ? styles.selected : ""}`}
        onClick={() => setActiveIndex(index)}
        onKeyDown={event => selectWithKeyboard(event, index)}
      >
        <span className={styles.icon} aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M5 7.5c4.5-1.5 8.2-.8 11 1.2 2.8-2 6.5-2.7 11-1.2v17c-4.4-1.4-8.1-.8-11 1.2-2.9-2-6.6-2.6-11-1.2v-17Z"/><path d="M16 8.7v18M8.5 12c1.7-.3 3.3-.2 4.6.2m5.8 0c1.3-.4 2.9-.5 4.6-.2M8.5 16c1.7-.3 3.3-.2 4.6.2m5.8 0c1.3-.4 2.9-.5 4.6-.2"/></svg></span>
        <span>{item.label}</span>
      </button>)}
    </div>
    <div className={styles.detail} id="focus-panel" role="tabpanel" aria-labelledby={`focus-tab-${activeIndex}`} tabIndex={0}>
      <div className={styles.image}>
        {items.map((item, index) => <Image
          key={`${item.image}-${index}`}
          src={item.image}
          alt={index === activeIndex ? "Learner studying in an educational setting" : ""}
          aria-hidden={index !== activeIndex}
          className={`${styles.photo} ${index === activeIndex ? styles.photoActive : ""}`}
          fill
          sizes="(max-width: 850px) 100vw, 60vw"
          loading={index === 0 ? "eager" : "lazy"}
        />)}
      </div>
      <p key={activeIndex}>{active.description}</p>
    </div>
  </div>;
}
