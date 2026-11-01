"use client";

import { useState } from "react";
import Container from "@/components/common/Container";
import Accordion from "@/components/ui/Accordion";
import type { FAQGroup } from "@/data/faqs";

export default function FAQDirectory({ groups }: { groups: FAQGroup[] }) {
  const [topic, setTopic] = useState("all");
  const [query, setQuery] = useState("");
  const selected = topic === "all" ? groups : groups.filter(group => group.id === topic);
  const term = query.trim().toLowerCase();
  const items = selected.flatMap(group => group.items).filter(item => !term || `${item.question} ${item.answer}`.toLowerCase().includes(term));

  return <section className="footer-faq faq-directory" id="faqs" aria-labelledby="faq-directory-title"><Container>
    <div className="faq-directory-heading">
      <p className="footer-faq-eyebrow"><span aria-hidden="true">✦</span> Questions &amp; answers</p>
      <h2 id="faq-directory-title">Find a clear answer</h2>
      <p>Browse answers about Quran courses, online learning and class timings.</p>
    </div>
    <div className="faq-directory-controls">
      <label>Search questions<input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search a topic or question" /></label>
      <label>Topic<select value={topic} onChange={event => setTopic(event.target.value)}><option value="all">All topics</option>{groups.map(group => <option value={group.id} key={group.id}>{group.title}</option>)}</select></label>
    </div>
    <p className="faq-directory-count" role="status">{items.length} {items.length === 1 ? "answer" : "answers"} found</p>
    {items.length ? <Accordion key={`${topic}-${term}`} items={items} /> : <p className="empty-state">No answers match this search. Try another topic or question.</p>}
  </Container></section>;
}
