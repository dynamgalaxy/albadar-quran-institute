import type { NavigationItem, NavigationLink } from "@/types/navigation";
import { featuredCourses } from "@/data/courses";

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", triggerOnly: true, children: [
    ...featuredCourses.map(course => ({ label: course.title, href: course.href!, description: course.description })),
  ] },
  { label: "Fee & Schedule", href: "/pricing" },
  { label: "About", triggerOnly: true, children: [
    { label: "About Al Badar", href: "/about", description: "Explore our Quran learning approach." },
    { label: "Our Teachers", href: "/about#teachers", description: "Explore how teachers guide learners." },
    { label: "Blogs", href: "/blog", description: "Browse Quran learning articles as they appear." },
    { label: "Career", href: "/about/career", description: "Explore career information and enquiries." },
    { label: "FAQ's", href: "/faqs", description: "Find answers to common questions." },
  ] },
  { label: "Contact", href: "/contact" },
];

export const policyLinks: NavigationLink[] = [
  { label: "Privacy Policy", href: "/policies/privacy-policy" },
  { label: "Terms of Use", href: "/policies/terms-of-use" },
];
