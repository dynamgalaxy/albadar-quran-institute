"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/common/Container";
import { testimonials } from "@/data/testimonials";

function GoogleReviewIcon() {
  return <span className="testimonial-google-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false">
    <path fill="#4285f4" d="M23.5151 12.2611c0 -0.9661 -0.0784 -1.6711 -0.24805 -2.4022H12.2351v4.3605h6.4755c-0.1305 1.08365 -0.8355 2.7156 -2.4022 3.8122l-0.02195 0.146 3.4881 2.702175 0.24165 0.024125c2.2194 -2.04975 3.4989 -5.0656 3.4989 -8.6428Z" strokeWidth="0.25" />
    <path fill="#34a853" d="M12.234975 23.75c3.17245 0 5.83575 -1.0445 7.7811 -2.8461L16.308275 18.031625c-0.9922 0.69195 -2.3239 1.175 -4.0733 1.175 -3.1072 0 -5.7444 -2.049675 -6.6845 -4.882725l-0.137775 0.0117L1.7857125 17.14255l-0.0474325 0.13185C3.670475 21.112725 7.639375 23.75 12.234975 23.75Z" strokeWidth="0.25" />
    <path fill="#fbbc05" d="M5.550625 14.3239c-0.248075 -0.7311 -0.391625 -1.5145 -0.391625 -2.3239 0 -0.8095 0.143575 -1.5928 0.378575 -2.3239l-0.006575 -0.1557L1.858565 6.66835l-0.120155 0.05715C0.9420575 8.3183 0.4851075 10.10695 0.4851075 12c0 1.89305 0.45695 3.6816 1.2533025 5.2744l3.812215 -2.9505Z" strokeWidth="0.25" />
    <path fill="#eb4335" d="M12.234975 4.7933c2.20635 0 3.69465 0.95305 4.5433 1.7495L20.094375 3.305C18.057775 1.41195 15.407425 0.25 12.234975 0.25 7.639375 0.25 3.670475 2.8872 1.73828 6.7255L5.537425 9.6761c0.95315 -2.83305 3.59035 -4.8828 6.69755 -4.8828Z" strokeWidth="0.25" />
  </svg></span>;
}

function reviewDate(date: string, today: Date) {
  const [day, month, year] = date.split(".").map(Number);
  const now = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const then = Date.UTC(year, month - 1, day);
  const days = Math.max(0, Math.floor((now - then) / 86_400_000));
  return `${days} ${days === 1 ? "day" : "days"} ago`;
}

const illustrativeStars = (index: number) => index % 4 === 2 ? 4 : 5;
const illustrativeAverage = testimonials.length
  ? (testimonials.reduce((total, _, index) => total + illustrativeStars(index), 0) / testimonials.length).toFixed(1)
  : "0.0";

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollable, setScrollable] = useState(false);
  const [today] = useState(() => new Date());

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const max = Math.max(0, track.scrollWidth - track.clientWidth);
      setScrollable(max > 1);
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
      <p className="testimonial-sample-note">Testimonials From Our Students</p>
      <h2 id="testimonials-title">Learning stories, in their own words.</h2>
      <div className="testimonials-carousel">
        <button className="testimonials-arrow" type="button" aria-label="Previous review previews" disabled={!scrollable} onClick={() => move(-1)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m0 0 7-7m-7 7 7 7" /></svg></button>
        <div className="testimonials-track" ref={trackRef} aria-label="Illustrative review previews">
          {testimonials.map((item, index) => {
            const rating = illustrativeStars(index);
            const initials = item.name.split(" ").slice(0, 2).map(part => part[0]).join("");
            const [day, month, year] = item.date.split(".");
            return <article className="testimonial-card" key={item.id} aria-label={`Illustrative review preview ${index + 1}`}>
              <div className="testimonial-stars" role="img" aria-label={`Illustrative ${rating}-star rating`}>{Array.from({ length: 5 }, (_, star) => <span key={star} className={star < rating ? "" : "testimonial-star-muted"}>★</span>)}</div>
              <blockquote>“{item.review}”</blockquote>
              <div className="testimonial-card-footer">
                <span className="testimonial-avatar" aria-hidden="true">{initials}</span>
                <div className="testimonial-person"><strong>{item.name}</strong><time dateTime={`${year}-${month}-${day}`} suppressHydrationWarning>{reviewDate(item.date, today)}</time></div>
                <span className="testimonial-preview-mark"><GoogleReviewIcon /></span>
              </div>
            </article>;
          })}
        </div>
        <button className="testimonials-arrow" type="button" aria-label="Next review previews" disabled={!scrollable} onClick={() => move(1)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m0 0-7-7m7 7-7 7" /></svg></button>
      </div>
      <p className="testimonials-summary"><GoogleReviewIcon /> {illustrativeAverage} From over <strong>20 Reviews</strong></p>
    </Container>
  </section>;
}
