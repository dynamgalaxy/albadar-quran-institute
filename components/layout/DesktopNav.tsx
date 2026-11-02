"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import type { NavigationItem } from "@/types/navigation";

function Chevron() {
  return <svg className="nav-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="m2.5 4.25 3.5 3.5 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function isMegaMenu(item: NavigationItem | undefined) {
  return Boolean(item?.triggerOnly && item.intro);
}

export default function DesktopNav({ items }: { items: NavigationItem[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [popupBox, setPopupBox] = useState({ top: 0, left: 0, width: 0 });
  const navRef = useRef<HTMLElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = items.find(item => item.label === open);

  function cancelClose() { if (closeTimer.current) clearTimeout(closeTimer.current); }
  function show(label: string) {
    cancelClose();
    const rect = navRef.current?.getBoundingClientRect();
    if (rect) {
      const isMega = isMegaMenu(items.find(item => item.label === label));
      const width = isMega ? Math.min(1100, window.innerWidth - 32) : rect.width;
      const headerBottom = navRef.current?.closest("header")?.getBoundingClientRect().bottom ?? rect.bottom;
      setPopupBox({
        top: isMega ? Math.max(rect.bottom, headerBottom) + window.scrollY : rect.bottom,
        left: isMega ? window.scrollX + (window.innerWidth - width) / 2 : rect.left,
        width,
      });
    }
    setOpen(label);
  }
  function scheduleClose() { cancelClose(); closeTimer.current = setTimeout(() => setOpen(null), 140); }

  useEffect(() => {
    const close = () => setOpen(null);
    const closeOnScroll = () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
      setOpen(current => isMegaMenu(items.find(item => item.label === current)) ? current : null);
    };
    const outside = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!navRef.current?.contains(target) && !popupRef.current?.contains(target)) close();
    };
    window.addEventListener("scroll", closeOnScroll, { passive: true });
    window.addEventListener("resize", close);
    document.addEventListener("pointerdown", outside);
    return () => { window.removeEventListener("scroll", closeOnScroll); window.removeEventListener("resize", close); document.removeEventListener("pointerdown", outside); };
  }, [items]);

  return <>
    <nav ref={navRef} className={`desktop-nav${open ? " desktop-nav--open" : ""}`} aria-label="Main navigation" onKeyDown={event => { if (event.key === "Escape") setOpen(null); }}><ul className="nav-list">
      {items.map(item => <li className="nav-item" key={item.label} onMouseEnter={() => item.children ? show(item.label) : setOpen(null)} onMouseLeave={scheduleClose}>
        <div className="nav-item-trigger">{item.triggerOnly ? <button type="button" className="nav-parent-trigger" aria-controls="nav-dropdown" aria-expanded={open === item.label} onClick={() => show(item.label)} onKeyDown={event => { if (event.key === "ArrowDown") { event.preventDefault(); show(item.label); requestAnimationFrame(() => popupRef.current?.querySelector("a")?.focus()); } }}>{item.label}<Chevron /></button> : <><Link href={item.href} onClick={() => setOpen(null)} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>{item.children && <button type="button" className="nav-caret" aria-label={`${item.label} menu`} aria-controls="nav-dropdown" aria-expanded={open === item.label} onClick={() => show(item.label)} onKeyDown={event => { if (event.key === "ArrowDown") { event.preventDefault(); show(item.label); requestAnimationFrame(() => popupRef.current?.querySelector("a")?.focus()); } }}><Chevron /></button>}</>}</div>
      </li>)}
    </ul></nav>
    {active?.children && createPortal(<div key={active.label} id="nav-dropdown" ref={popupRef} className={`nav-dropdown${isMegaMenu(active) ? " nav-dropdown--category" : ""}`} style={popupBox} onMouseEnter={cancelClose} onMouseLeave={scheduleClose} onKeyDown={event => { if (event.key === "Escape") setOpen(null); }}>
      {active.triggerOnly && active.intro && <div className="nav-dropdown-intro">
        <Image src="/assets/albadar-logo.png" alt="" width={882} height={307} className="nav-dropdown-brand-logo" />
        <div><h2>{active.introTitle ?? active.label}</h2><p>{active.intro}</p></div>
        <span className="nav-dropdown-brand-line">Read · Recite · Understand</span>
      </div>}
      <ul>{active.children.map(child => <li key={child.href}><Link href={child.href} onClick={() => setOpen(null)}><strong>{child.label}</strong>{child.description && <span>{child.description}</span>}</Link></li>)}</ul>
    </div>, document.body)}
  </>;
}
