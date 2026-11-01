"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Container from "@/components/common/Container";
import Logo from "@/components/common/Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { site } from "@/config/site";
import Button from "@/components/common/Button";
import AnimatedArrow from "@/components/common/AnimatedArrow";

export default function Header() {
  const pathname = usePathname();
  const coursePage = pathname.startsWith("/courses/");
  const [scrolled, setScrolled] = useState(false);
  const [surface, setSurface] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 60);
      const desktopNav = document.querySelector<HTMLElement>(".site-header .desktop-nav");
      const visibleNav = desktopNav?.getClientRects().length
        ? desktopNav
        : document.querySelector<HTMLElement>(".site-header .mobile-nav > button");
      const navRect = visibleNav?.getBoundingClientRect();
      const navMiddle = navRect ? navRect.top + navRect.height / 2 : 48;
      const overDark = Array.from(document.querySelectorAll<HTMLElement>('[data-header-surface="dark"]')).some(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= navMiddle && rect.bottom > navMiddle;
      });
      setSurface(overDark ? "dark" : "light");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);
  return <header className={`site-header site-header--home ${coursePage ? "site-header--course" : ""} ${scrolled ? "site-header--scrolled" : ""} site-header--on-${surface}`}><Container className="header-inner"><Logo header /><DesktopNav items={site.navigation} /><div className="header-actions"><Button href="/contact#enquiry">Book Free Trial <AnimatedArrow /></Button><MobileNav key={pathname} items={site.navigation} /></div></Container></header>;
}
