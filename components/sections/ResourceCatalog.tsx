"use client";

import { useState } from "react";
import Container from "@/components/common/Container";
import type { ResourceBook } from "@/data/resourceBooks";
import styles from "./ResourceCatalog.module.css";

function FileIcon() {
  return <svg viewBox="0 0 64 76" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3h27l16 17v48a5 5 0 0 1-5 5H12a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Z" />
    <path d="M39 3v17h16M18 33h12M18 44h27M18 55h27" />
  </svg>;
}

function DownloadIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3v12m-4-4 4 4 4-4M4 16v4h16v-4" />
  </svg>;
}

export default function ResourceCatalog({ title, books }: { title: string; books: ResourceBook[] }) {
  const [filter, setFilter] = useState<"all" | "free" | "paid">("all");
  const visibleBooks = filter === "paid" ? [] : books;

  return <section className={styles.section} aria-label={`${title} downloads`}><Container>
    <div className={styles.intro}>
      <p className={styles.eyebrow}>Al Badar learning resources</p>
      <h2>Books &amp; Downloads</h2>
      <div className={styles.filters} role="group" aria-label="Filter downloads by price">
        {(["all", "free", "paid"] as const).map(option => <button key={option} type="button" aria-pressed={filter === option} className={filter === option ? styles.active : ""} onClick={() => setFilter(option)}>{option[0].toUpperCase() + option.slice(1)}</button>)}
      </div>
    </div>
    {visibleBooks.length ? <div className={styles.grid}>{visibleBooks.map((book, index) => <article className={styles.card} key={book.file}>
      <div className={styles.preview}><span className={styles.format}>PDF</span><FileIcon /></div>
      <div className={styles.meta}><span>Resource {String(index + 1).padStart(2, "0")}</span><strong>Free</strong></div>
      <h3>{book.title}</h3>
      <p>{book.description}</p>
      <a className={styles.download} href={book.file} download aria-label={`Download ${book.title} PDF`}>
        <span>Download</span><DownloadIcon />
      </a>
    </article>)}</div> : <p className={styles.empty} role="status">No paid downloads are available.</p>}
  </Container></section>;
}
