"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import Logo from "@/components/common/Logo";
import type { NavigationItem } from "@/types/navigation";

const subscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

export default function MobileNav({ items }: { items: NavigationItem[] }) {
  const [open, setOpen] = useState(false);
  const mounted = useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot);
  const pathname = usePathname();
  const id = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      } else if (event.key === "Tab") {
        const focusable = Array.from(panelRef.current?.querySelectorAll<HTMLElement>('a, button, summary') ?? []).filter(element => element.getClientRects().length > 0);
        const first = focusable[0];
        const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", onKeyDown); };
  }, [open]);

  const close = () => { setOpen(false); triggerRef.current?.focus(); };

  return <div className="mobile-nav">
    <button ref={triggerRef} type="button" className="mobile-menu-trigger" aria-expanded={open} aria-controls={id} onClick={() => setOpen(true)}>
      Menu <span className="mobile-menu-lines" aria-hidden="true"><i /><i /></span>
    </button>
    {mounted && createPortal(<div className={`mobile-menu-layer${open ? " mobile-menu-layer--open" : ""}`} aria-hidden={!open} inert={!open}>
      <button type="button" className="mobile-menu-backdrop" aria-label="Close menu" onClick={close} />
      <aside ref={panelRef} id={id} className="mobile-menu-panel" role="dialog" aria-modal="true" aria-label="Site menu">
        <div className="mobile-menu-top"><Logo header /><button ref={closeRef} type="button" className="mobile-menu-close" aria-label="Close menu" onClick={close}>×</button></div>
        <nav aria-label="Mobile navigation"><ul className="mobile-menu-list">
          {items.map(item => <li key={item.label}>{item.children ? <details><summary>{item.label}<span className="mobile-menu-chevron" aria-hidden="true" /></summary><ul className="mobile-subnav">{item.children.map(child => <li key={child.href}><Link href={child.href} onClick={close}>{child.label}</Link></li>)}</ul></details> : item.href ? <Link href={item.href} onClick={close} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link> : null}</li>)}
        </ul></nav>
        <Link className="mobile-menu-cta" href="/academics/admission" onClick={close}>Book Free Trial <span aria-hidden="true">↗</span></Link>
      </aside>
    </div>, document.body)}
  </div>;
}
