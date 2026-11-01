"use client";

import { usePathname } from "next/navigation";
import Testimonials from "./Testimonials";
import FooterFAQ from "./FooterFAQ";
import FooterCTA from "./FooterCTA";

export default function SharedSections() {
  const pathname = usePathname();
  if (pathname === "/pricing") return <FooterCTA />;
  const career = pathname === "/about/career";
  const focused = pathname === "/contact" || pathname === "/faqs" || pathname === "/sitemap";
  return <>{!career && !focused && <Testimonials />}{!focused && <FooterFAQ />}<FooterCTA /></>;
}
