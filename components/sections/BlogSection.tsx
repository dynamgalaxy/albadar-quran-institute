"use client";

import { useId, useState } from "react";
import Section from "@/components/common/Section";
import BlogCard from "@/components/cards/BlogCard";
import Tabs from "@/components/ui/Tabs";
import type { BlogArticle, BlogCategory } from "@/types/blog";
import type { SectionIntroProps } from "@/types/common";

export interface BlogSectionProps extends SectionIntroProps { articles: BlogArticle[]; categories?: BlogCategory[]; searchable?: boolean }

const categoryLabels: Partial<Record<BlogCategory, string>> = {
  Quran: "Quran Learning",
  "Islamic Knowledge": "Islamic Studies",
  Family: "Kids & Parenting",
};

export default function BlogSection({ articles, categories, searchable = false, ...intro }: BlogSectionProps) {
  const [category, setCategory] = useState<BlogCategory | "all">("all");
  const [sort, setSort] = useState("latest");
  const [author, setAuthor] = useState("all");
  const sortId = useId();
  const authorId = useId();
  const authors = Array.from(new Set(articles.map(article => article.author ?? "Al Badar Quran Institute")));
  const filtered = articles
    .filter(article => (category === "all" || article.category === category) && (author === "all" || (article.author ?? "Al Badar Quran Institute") === author))
    .sort((a, b) => sort === "title-asc" ? a.title.localeCompare(b.title) : sort === "title-desc" ? b.title.localeCompare(a.title) : 0);
  const grid = (items: BlogArticle[]) => items.length ? <div className="card-grid">{items.map(article => <BlogCard key={article.id} article={article} />)}</div> : <p className="empty-state">No articles match this selection.</p>;

  if (searchable) return <section className="section blog-library" aria-labelledby="blog-library-title">
    <div className="container">
      <header className="blog-library-heading">
        <h2 id="blog-library-title">Explore Our <em>Library</em></h2>
        <p>Institute articles will appear here when available.</p>
      </header>
      <div className="blog-filter-panel" aria-label="Browse articles">
        <div className="blog-filter-title">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16"/><circle cx="9" cy="6" r="2" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="2" fill="currentColor" stroke="none"/><circle cx="11" cy="18" r="2" fill="currentColor" stroke="none"/></svg>
          <span>Browse articles</span>
        </div>
        <div className="blog-filter-categories" role="group" aria-label="Filter by topic">
          <button type="button" aria-pressed={category === "all"} onClick={() => setCategory("all")}>All Blogs</button>
          {categories?.map(item => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>{categoryLabels[item] ?? item}</button>)}
        </div>
        <div className="blog-filter-selects">
          <div className="blog-filter-field"><label htmlFor={sortId}>Sort</label><select id={sortId} value={sort} onChange={event => setSort(event.target.value)}><option value="latest">Latest</option><option value="title-asc">Title A–Z</option><option value="title-desc">Title Z–A</option></select></div>
          <div className="blog-filter-field"><label htmlFor={authorId}>Author</label><select id={authorId} value={author} onChange={event => setAuthor(event.target.value)}><option value="all">All Authors</option>{authors.map(item => <option key={item} value={item}>{item}</option>)}</select></div>
        </div>
      </div>
      <p className="sr-only" role="status">{filtered.length} {filtered.length === 1 ? "article" : "articles"} found</p>
      <div className="blog-library-results">{grid(filtered)}</div>
    </div>
  </section>;

  return <Section {...intro}>
    {categories?.length ? <Tabs label="Blog categories" items={[
      { id: "all", label: "All", content: grid(articles) },
      ...categories.map(item => ({ id: item, label: item, content: grid(articles.filter(article => article.category === item)) })),
    ]} /> : grid(articles)}
  </Section>;
}
