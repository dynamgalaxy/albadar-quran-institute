import type { NavigationItem, NavigationLink } from "@/types/navigation";
import type { CourseCategory } from "@/types/course";
import { courses, courseCategories, featuredCourses } from "@/data/courses";
import { policyPages } from "@/data/policies";

const courseMenuLabels: Record<CourseCategory, string> = {
  "Quran & Islamic Studies": "Islamic Courses",
  "Science & Mathematics": "Science Courses",
  Languages: "Languages",
};
const courseMenuIntroductions: Record<CourseCategory, string> = {
  "Quran & Islamic Studies": "Explore Quran learning, Islamic studies and practical guidance at a suitable starting point.",
  "Science & Mathematics": "Build understanding across mathematics and the natural sciences.",
  Languages: "Develop reading, writing and communication through language learning.",
};

const featuredHrefs = new Set(featuredCourses.map(course => course.href));
const courseMenuCourses = [...featuredCourses, ...courses.filter(course => !featuredHrefs.has(course.href))];
const courseMenu = courseCategories.map(category => ({
  label: courseMenuLabels[category],
  triggerOnly: true as const,
  intro: courseMenuIntroductions[category],
  children: courseMenuCourses
    .filter(course => course.category === category)
    .map(course => ({ label: course.title, href: course.href!, description: course.description, category })),
}));

export const navigation: NavigationItem[] = [
  ...courseMenu,
  { label: "Fee & Schedule", href: "/pricing" },
  { label: "Resources", triggerOnly: true, introTitle: "Learning Resources", intro: "Explore Quran, Salah and Islamic learning materials from Al Badar Quran Institute.", children: [
    { label: "Tajweede Quran", href: "/resources/tajweede-quran", description: "Quran resources prepared with Tajweed guidance." },
    { label: "Tajweede Qaida", href: "/resources/tajweede-qaida", description: "Learn Tajweed basics with an accessible Qaida guide." },
    { label: "Namaz Book", href: "/resources/namaz-book", description: "A step-by-step guide to performing Salah correctly." },
    { label: "Kalma Book", href: "/resources/kalma-book", description: "Learn and memorize the six Kalmas." },
    { label: "Other Downloads", href: "/resources/other-downloads", description: "Explore additional Islamic learning materials." },
  ] },
  { label: "About", triggerOnly: true, introTitle: "About Al Badar", intro: "Learn about our approach to one-to-one online learning and find a way to connect with the institute.", children: [
    { label: "About Us", href: "/about", description: "Explore our Quran learning approach." },
    { label: "Our Teachers", href: "/about#teachers", description: "Explore how teachers guide learners." },
    { label: "Blogs", href: "/blog", description: "Browse Quran learning articles as they appear." },
    { label: "Career", href: "/about/career", description: "Explore career information and enquiries." },
    { label: "FAQs", href: "/faqs", description: "Find answers to common questions." },
    { label: "Contact", href: "/contact", description: "Ask about courses and enrolment." },
  ] },
];

export const policyLinks: NavigationLink[] = policyPages.map(({ title, href }) => ({ label: title, href }));

export const preservedPageLinks: NavigationLink[] = [
  { label: "Free Trial", href: "/academics/admission" },
  { label: "Class Timings", href: "/academics/class-schedule" },
  { label: "Course information", href: "/programs/full-time-program" },
  { label: "Course information", href: "/programs/part-time-program" },
  { label: "Quran Reading / Nazra Quran", href: "/programs/nazra-quran" },
  { label: "Quran with Tajweed", href: "/programs/tajweed" },
  { label: "Hifz-ul-Quran", href: "/programs/hifz-ul-quran" },
  { label: "Islamic Studies", href: "/programs/islamic-studies" },
];
