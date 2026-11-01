import type { Metadata } from "next";
import { site } from "@/config/site";

export interface PageSEO { title: string; description: string; path: string }
export function createMetadata({ title, description, path }: PageSEO): Metadata {
  // A public canonical must never use a made-up production domain.
  const canonical = site.url ? new URL(path, site.url).href : undefined;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title: `${title} | ${site.name}`, description, url: canonical, siteName: site.name, type: "website", images: site.url ? [{ url: new URL("/assets/albadar-logo.png", site.url).href, width: 882, height: 307, alt: site.name }] : undefined },
    twitter: { card: "summary", title: `${title} | ${site.name}`, description },
  };
}

export interface OrganizationStructuredData {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
}
// Opt in after the real public URL and organization details are verified.
export function createOrganizationStructuredData(): OrganizationStructuredData | null {
  return site.url ? { "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url } : null;
}
export function serializeStructuredData(data: OrganizationStructuredData): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
