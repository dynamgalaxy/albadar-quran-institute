import type { PageHeroProps } from "@/components/common/PageHero";
import type { ContentItem, CTA, SectionIntroProps, Value } from "@/types/common";
import type { PageSEO } from "@/lib/seo";
interface PageContent { seo: PageSEO; hero: PageHeroProps }
const updatedHeroImages = new Set(["career", "contact", "courses", "events", "faqs", "nazra-quran", "part-time-program", "services"]);
export function pageHeroImage(image: string) {
  if (["courses", "services", "contact"].includes(image)) return "/assets/home/images/hero-quran-learning.png";
  return `/assets/page-imagery/${image}-hero${updatedHeroImages.has(image) ? "-male" : ""}.webp`;
}
function page(title: string, path: string, description: string, image: string): PageContent {
  return { seo: { title, path, description }, hero: { eyebrow: "Al Badar Quran Institute", title, description, backgroundImage: { src: pageHeroImage(image), alt: "" }, backButton: true, secondaryCTA: { label: "Contact Us", href: path === "/contact" ? "/contact#enquiry" : "/contact" } } };
}
export const pages = {
  home: {
    seo: { title: "Al Badar Quran Institute", path: "/", description: "One-to-one online Quran and Islamic studies for children and adults, guided at each learner’s own pace." },
    hero: { eyebrow: "Al Badar Quran Institute", title: "Build a lasting connection with the Quran.", description: "One-to-one online Quran and Islamic studies for children and adults, guided at each learner’s own pace.", backgroundImage: { src: "/assets/home/images/hero-quran-learning.png", alt: "" }, primaryCTA: { label: "Explore learning", href: "/courses" }, secondaryCTA: { label: "Book a free trial", href: "/contact#enquiry" }, variant: "home" as const },
  },
  about: page("About Us", "/about", "Al Badar teaches Quran and Islamic studies through one-to-one online lessons for children, teenagers and adults.", "about"),
  services: page("Services", "/services", "Explore online Quran and Islamic studies offered by Al Badar Quran Institute.", "services"),
  courses: {
    seo: { title: "Quran and Islamic Studies Courses", path: "/courses", description: "Explore nine Quran and Islamic studies courses and discuss a suitable starting point during a free trial." },
    hero: { eyebrow: "Al Badar Quran Institute", title: "Quran and Islamic studies courses", backgroundImage: { src: pageHeroImage("courses"), alt: "Online Quran learning" }, backButton: true, secondaryCTA: { label: "Book a free trial", href: "/contact#enquiry" } },
  },
  blog: page("Blog", "/blog", "Articles from Al Badar Quran Institute will be published here when available.", "blog"),
  media: page("Media", "/media", "Approved Al Badar Quran Institute media will appear here when available.", "media"),
  contact: page("Contact Us", "/contact", "Contact Al Badar Quran Institute by WhatsApp, phone or email to ask about courses and free trial classes.", "contact"),
  faqs: page("Frequently Asked Questions", "/faqs", "Answers about online Quran classes, courses, scheduling and contact options.", "faqs"),
} satisfies Record<string, PageContent>;

export const sectionContent = {
  homePrograms: { eyebrow: "Learning pathways", title: "Our courses", description: "From the first Arabic letters to deeper study of the Quran, explore a course that meets the learner where they are." },
  about: { eyebrow: "Al Badar Quran Institute", title: "Quran learning for every stage", description: "Al Badar teaches Quran and Islamic studies through one-to-one online lessons for children, teenagers and adults. A free trial gives each learner space to share their experience and discuss where to begin; from there, reading, recitation and understanding can develop at a suitable pace." },
  story: { title: "Our Approach", description: "Begin with what you know. Keep building with care." },
  services: { title: "Our Services", description: "Online Quran and Islamic studies with individual attention and flexible scheduling." },
  servicesIntro: { title: "Online Learning", description: "Choose a course and contact the institute to discuss a suitable schedule." },
  courses: { eyebrow: "Learning pathways", title: "All nine courses" },
  coursesIntro: { title: "Find a starting point", description: "Begin with the student’s current level and choose a focused path. The course list describes what students can work on; a trial helps discuss the right starting point." },
  learning: { title: "One-to-One Learning", description: "Individual lessons let the teacher focus on one student at a time." },
  why: { title: "Why Learn with Al Badar", description: "One-to-one online lessons, flexible timings and a free trial class." },
  programs: { title: "Courses", description: "Ask about course suitability, schedules and the free trial class." },
  upcoming: { title: "Upcoming Courses", description: "Course dates have not been provided." },
  blog: { title: "Articles", description: "Articles have not been provided yet." },
  popular: { title: "Articles", description: "Articles have not been provided yet." },
  search: { title: "Find an Article", description: "Search published articles." },
  featuredArticle: { title: "Featured Article" },
  media: { title: "Media Preview", description: "Approved institute media has not been provided yet." },
  featuredVideo: { title: "Featured Video" }, gallery: { title: "Media Gallery", description: "Approved institute media has not been provided yet." },
  audio: { title: "Audio Lectures" }, photos: { title: "Photo Gallery" }, resources: { title: "Resources", description: "Learning resources have not been provided yet." },
  mission: { title: "Our Approach" }, values: { title: "Our Values", description: "Accessible learning, individual attention and flexible scheduling." },
  leadership: { title: "Our Learning Approach", description: "One-to-one Quran and Islamic studies classes with flexible timings and a free trial for new students." },
  teachers: { title: "Our Teachers", description: "Teacher names and profiles have not been provided." },
  campus: { title: "Online Classes", description: "Al Badar Quran Institute offers online learning to students in different countries." },
  impact: { title: "Learning Online", description: "One-to-one lessons are available for students at different learning stages." },
  process: { title: "Getting Started", description: "Contact the institute, book a free trial class and discuss a suitable course." },
  faq: { eyebrow: "Questions & answers", title: "Clear answers for Quran learning", description: "Helpful details about courses, online lessons and taking your first step with Al Badar." },
  contact: { title: "Contact Al Badar", description: "Reach the institute by WhatsApp, phone or email." },
  form: { title: "Send an Enquiry" }, hours: { title: "Class Timings" }, location: { title: "Location" }, social: { title: "Social Media" },
} satisfies Record<string, SectionIntroProps>;

export const callsToAction = {
  startLearning: { title: "Start learning", description: "Ask about courses and book a free trial class.", primaryCTA: { label: "Contact Us", href: "/contact#enquiry" }, secondaryCTA: { label: "Explore courses", href: "/courses" } },
  exploreCourses: { title: "Explore Courses", description: "Find a course for your learning stage.", primaryCTA: { label: "Explore Courses", href: "/courses" } },
  join: { title: "Begin your Quran learning", description: "Contact the institute to get started.", primaryCTA: { label: "Send an enquiry", href: "/contact#enquiry" } },
  question: { title: "Have a question?", description: "Ask us about courses or class times.", primaryCTA: { label: "Ask a question", href: "/contact#enquiry" } },
  contact: { title: "Contact Us", description: "Reach Al Badar Quran Institute.", primaryCTA: { label: "Contact Us", href: "/contact" } },
  involved: { title: "Connect with Al Badar", description: "Ask about online classes and courses.", primaryCTA: { label: "Send an enquiry", href: "/contact#enquiry" } },
  newsletter: { title: "Stay Updated", description: "Updates have not been provided." },
} satisfies Record<string, SectionIntroProps & { primaryCTA?: CTA; secondaryCTA?: CTA }>;

export const missionVision: ContentItem[] = [
  { id: "mission", title: "Our Aim", description: "Make Quran learning accessible for students at different stages through online classes, flexible scheduling and individual attention." },
  { id: "vision", title: "Our Approach", description: "Offer a peaceful, respectful and enjoyable learning experience in Quran reading, Tajweed, memorization and Islamic studies." },
];
export const reasons: Value[] = [
  { id: "one-to-one", title: "One-to-One Lessons", description: "Teachers focus on one student at a time." },
  { id: "flexible", title: "Flexible Timings", description: "Class times are arranged according to student and teacher availability." },
  { id: "trial", title: "Free Trial Class", description: "New students can try a class before enrolling." },
];
export const learningSteps: ContentItem[] = [
  { id: "enquire", title: "01 — Enquire", description: "Contact the institute by WhatsApp, phone or email." },
  { id: "trial", title: "02 — Free Trial", description: "Attend a free trial class and discuss the student's current level." },
  { id: "course", title: "03 — Choose a Course", description: "Select a suitable course and learning plan." },
  { id: "schedule", title: "04 — Set a Schedule", description: "Arrange class times according to availability." },
];
