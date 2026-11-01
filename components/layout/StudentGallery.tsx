"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/common/Container";
import { studentGallery, type StudentGalleryItem } from "@/data/studentGallery";

const pageCount = studentGallery.length;
const visibleItems = 6;
const slideStep = 5;

export default function StudentGallery() {
  const [page, setPage] = useState(0);
  const [previousPage, setPreviousPage] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [activeVideo, setActiveVideo] = useState<StudentGalleryItem | null>(null);
  const [videoError, setVideoError] = useState(false);
  const videoTrigger = useRef<HTMLButtonElement | null>(null);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (transitionTimer.current) clearTimeout(transitionTimer.current);
  }, []);

  useEffect(() => {
    if (!activeVideo) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
        videoTrigger.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeVideo]);

  const closeVideo = () => {
    setActiveVideo(null);
    videoTrigger.current?.focus();
  };
  const showPage = (direction: "next" | "prev") => {
    const nextPage = (page + (direction === "next" ? 1 : -1) + pageCount) % pageCount;
    if (transitionTimer.current) clearTimeout(transitionTimer.current);
    setDirection(direction);
    setPreviousPage(page);
    setPage(nextPage);
    transitionTimer.current = setTimeout(() => {
      setPreviousPage(null);
      transitionTimer.current = null;
    }, 520);
  };
  const renderGrid = (index: number, leaving = false) => <div
    className={`student-gallery-grid${previousPage !== null ? ` student-gallery-grid--${leaving ? "leave" : "enter"}-${direction}` : ""}`}
    key={`${index}-${leaving ? "old" : "current"}`}
    aria-hidden={leaving}
    inert={leaving}
  >
    {Array.from({ length: visibleItems }, (_, position) => studentGallery[(index * slideStep + position) % studentGallery.length]).map(item => <div className="student-gallery-tile" key={item.id}>
      {item.kind === "video" ? <button type="button" className="student-gallery-video" aria-label={`Play ${item.alt.toLowerCase()}`} onClick={event => { videoTrigger.current = event.currentTarget; setVideoError(false); setActiveVideo(item); }}>
        <Image src={item.poster} alt="" fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 50vw, 33vw" />
        <span className="student-gallery-play" aria-hidden="true">▶</span>
      </button> : <Image src={item.poster} alt={item.alt} fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 50vw, 33vw" />}
    </div>)}
  </div>;

  return <section id="student-gallery" className="student-gallery" aria-labelledby="student-gallery-title">
    <Container>
      <div className="student-gallery-heading">
        <h2 id="student-gallery-title">Our Students Gallery</h2>
        <p>Explore Quran learning through student and online lesson imagery.</p>
      </div>
      <div className="student-gallery-stage">
        {previousPage !== null && renderGrid(previousPage, true)}
        {renderGrid(page)}
      </div>
      <div className="student-gallery-controls" aria-label="Gallery navigation">
        <button type="button" className="student-gallery-arrow" aria-label="Previous gallery images" onClick={() => showPage("prev")}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-6 7 6 7" /></svg></button>
        <div className="student-gallery-progress" role="progressbar" aria-label="Gallery page" aria-valuemin={1} aria-valuemax={pageCount} aria-valuenow={page + 1}><span style={{ left: `${pageCount > 1 ? page / (pageCount - 1) * 60 : 0}%` }} /></div>
        <button type="button" className="student-gallery-arrow" aria-label="Next gallery images" onClick={() => showPage("next")}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 6 7-6 7" /></svg></button>
      </div>
    </Container>
    {activeVideo && <div className="student-gallery-modal" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) closeVideo(); }}>
      <div className="student-gallery-dialog" role="dialog" aria-modal="true" aria-label="Student gallery video">
        <button type="button" className="student-gallery-close" aria-label="Close video" onClick={closeVideo} autoFocus>×</button>
        {videoError ? <p className="student-gallery-video-error">This stock clip is unavailable right now. <a href={activeVideo.sourcePage} target="_blank" rel="noopener noreferrer">View it on Pexels</a>.</p> : <video src={activeVideo.videoSrc} poster={activeVideo.poster} controls autoPlay playsInline preload="none" onError={() => setVideoError(true)} />}
        <a className="student-gallery-source" href={activeVideo.sourcePage} target="_blank" rel="noopener noreferrer">Stock video source: Pexels ↗</a>
      </div>
    </div>}
  </section>;
}
