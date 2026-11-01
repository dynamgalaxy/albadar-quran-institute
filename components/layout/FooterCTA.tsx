"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import AnimatedArrow from "@/components/common/AnimatedArrow";
import { site } from "@/config/site";

export default function FooterCTA() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const email = String(new FormData(form).get("email") || "").trim();
    const subject = encodeURIComponent("Book a free trial – Al Badar Quran Institute");
    const body = encodeURIComponent(`I would like to ask about courses or a free trial class.\n\nMy email: ${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return <section className="footer-cta" data-header-surface="dark" aria-labelledby="footer-cta-title">
    <Image className="footer-cta-image" src="/assets/home/images/hero-quran-learning.png" alt="" fill sizes="100vw" />
    <div className="footer-cta-shade" />
    <div className="footer-cta-content">
      <p className="footer-cta-eyebrow">Stay connected</p>
      <h2 id="footer-cta-title">Begin your <span>learning journey.</span></h2>
      <p className="footer-cta-description">Meet a teacher, discuss your goals and discover a suitable starting point in a free trial class.</p>
      <form className="footer-cta-action" onSubmit={submit} aria-label="Request email updates">
        <label className="sr-only" htmlFor="footer-cta-email">Email address</label>
        <input id="footer-cta-email" type="email" name="email" placeholder="Enter your email address" autoComplete="email" maxLength={254} required />
        <button type="submit">Book a free trial <AnimatedArrow /></button>
      </form>
      <p className="footer-cta-feedback">Opens your email app to contact Al Badar Quran Institute.</p>
    </div>
  </section>;
}
