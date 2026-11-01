"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/common/Container";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [scrollable, setScrollable] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const max = Math.max(0, track.scrollWidth - track.clientWidth);
      setScrollable(max > 1);
      setPosition(max ? track.scrollLeft / max : 0);
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(track);
    return () => { track.removeEventListener("scroll", update); observer.disconnect(); };
  }, []);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const max = Math.max(0, track.scrollWidth - track.clientWidth);
    if (max <= 1) return;
    if (direction === 1 && track.scrollLeft >= max - 1) {
      track.scrollTo({ left: 0, behavior: "instant" });
      return;
    }
    if (direction === -1 && track.scrollLeft <= 1) {
      track.scrollTo({ left: max, behavior: "instant" });
      return;
    }
    const card = track.firstElementChild as HTMLElement | null;
    track.scrollBy({ left: direction * ((card?.offsetWidth ?? 240) + 16), behavior: "smooth" });
  };

  return <section className="testimonials" aria-labelledby="testimonials-title">
    <Container>
      <p className="testimonial-sample-note">Illustrative sample reviews · Not verified</p>
      <h2 id="testimonials-title">Learning stories, in their own words.</h2>
      <div className="testimonials-track" ref={trackRef} aria-label="Student testimonials">
        {testimonials.map((item, index) => <article className="testimonial-card" key={item.id} aria-label={`Sample review ${index + 1}`}>
          <p className="testimonial-person">{item.name} <span>— {item.country}</span></p>
          <blockquote>“{item.review}”</blockquote>
          <time>{item.date}</time>
        </article>)}
        {testimonials.length === 0 && <article className="testimonial-card"><p>Sample testimonial content is awaiting client approval and verification.</p></article>}
      </div>
      <div className="testimonials-controls" aria-label="Testimonial carousel controls">
        <button type="button" aria-label="Previous testimonials" disabled={!scrollable} onClick={() => move(-1)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m0 0 7-7m-7 7 7 7" /></svg></button>
        <span className="testimonials-progress" aria-hidden="true"><span style={{ left: `${position * 60}%` }} /></span>
        <button type="button" aria-label="Next testimonials" disabled={!scrollable} onClick={() => move(1)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m0 0-7-7m7 7-7 7" /></svg></button>
      </div>
    </Container>
  </section>;
}
