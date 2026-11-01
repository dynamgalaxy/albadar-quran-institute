import { company } from "@/data/company";
import { navigation } from "@/data/navigation";
import { socialLinks } from "@/data/socialLinks";
import type { CTA } from "@/types/common";

function getSiteUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const url = new URL(value);
  if (!["https:", "http:"].includes(url.protocol)) throw new Error("NEXT_PUBLIC_SITE_URL must be an HTTP(S) URL.");
  return url.origin;
}

export const site = {
  name: company.name,
  shortName: company.shortName,
  defaultTitle: company.name,
  description: company.description,
  url: getSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? "https://al-badar-website.am1159107.workers.dev"),
  navigation,
  phone: company.phone,
  email: company.email,
  addresses: company.addresses,
  socialLinks,
  defaultCTA: { label: "Contact the Centre", href: "/contact" } satisfies CTA,
};
