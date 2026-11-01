"use client";

import { useState } from "react";
import AnimatedArrow from "@/components/common/AnimatedArrow";
import ImageWrapper from "@/components/common/ImageWrapper";
import Modal from "@/components/ui/Modal";
import type { BlogArticle } from "@/types/blog";

export default function BlogCard({ article }: { article: BlogArticle }) {
  const [open, setOpen] = useState(false);
  return <>
    <article className="card blog-card">
      <ImageWrapper image={article.image} />
      <p className="eyebrow">{article.category}</p>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <button className="blog-read-button" type="button" aria-haspopup="dialog" onClick={() => setOpen(true)}>Read article <AnimatedArrow /></button>
    </article>
    <Modal open={open} onClose={() => setOpen(false)} title={article.title} className="blog-reader-dialog">
      <div className="blog-reader-copy">
        <p className="eyebrow">{article.category} · Al Badar Quran Institute</p>
        <p className="blog-reader-lead">{article.description}</p>
        {article.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </div>
    </Modal>
  </>;
}
