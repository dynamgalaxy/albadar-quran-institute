import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { navigation, policyLinks, preservedPageLinks } from "@/data/navigation";
import { courses } from "@/data/courses";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.url) return [];
  const paths = new Set(["/", "/services", "/courses", "/pricing", "/media", "/sitemap", ...courses.map(course => course.href).filter((href): href is string => Boolean(href)), ...navigation.flatMap(item => [item.href, ...(item.children ?? []).map(child => child.href)]).filter((href): href is string => Boolean(href)).map(href => href.split("#")[0]), ...policyLinks.map(item => item.href), ...preservedPageLinks.map(item => item.href)]);
  return Array.from(paths).map(href => ({ url: new URL(href, site.url).href, changeFrequency: "monthly", priority: href === "/" ? 1 : 0.7 }));
}
