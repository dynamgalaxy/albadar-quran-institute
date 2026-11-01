import type { Course, CourseCategory } from "@/types/course";
export const courseCategories: CourseCategory[] = ["Quran", "Arabic", "Islamic Studies", "Kids / Youth"];
const entries: [string, CourseCategory, string][] = [
  ["Noorani Qaida", "Quran", "Learn the basics of Quran reading from the very beginning."],
  ["Quran Reading / Nazra Quran", "Quran", "Learn to read the Holy Quran correctly and fluently."],
  ["Quran with Tajweed", "Quran", "Learn how to recite the Holy Quran according to the rules of Tajweed."],
  ["Hifz-ul-Quran", "Quran", "A structured Quran memorization programme for students who want to memorize the Holy Quran."],
  ["Quran Translation", "Quran", "Learn the meaning of selected Quranic verses and Surahs through simple, understandable translation."],
  ["Quran Tafseer", "Quran", "Learn the basic meaning and explanation of selected Surahs and Quranic passages in an easy-to-understand way."],
  ["Basic Islamic Studies", "Islamic Studies", "Learn essential Islamic knowledge for everyday life."],
  ["Islamic Studies for Kids", "Kids / Youth", "An age-appropriate Islamic education programme designed especially for children."],
  ["Arabic Language Basics", "Arabic", "Build familiarity with Arabic vocabulary and simple phrases, starting with the basics."],
];
const courseRoutes: Record<string, string> = {
  "Noorani Qaida": "/courses/noorani-qaida",
  "Quran Reading / Nazra Quran": "/courses/quran-reading",
  "Quran with Tajweed": "/courses/quran-with-tajweed",
  "Hifz-ul-Quran": "/courses/hifz-ul-quran",
  "Quran Translation": "/courses/quran-translation",
  "Quran Tafseer": "/courses/quran-tafseer",
  "Basic Islamic Studies": "/courses/basic-islamic-studies",
  "Islamic Studies for Kids": "/courses/islamic-studies-for-kids",
  "Arabic Language Basics": "/courses/arabic-language-basics",
};
export const courses: Course[] = entries.map(([title, category, description], index) => ({ id: `course-${index}`, title, category, description, href: courseRoutes[title] }));

export const featuredCourses: Course[] = [
  { ...courses[0], description: "Learn Arabic letters and pronunciation." },
  { ...courses[1], title: "Quran Reading", description: "Read Quran fluently with pronunciation." },
  { ...courses[3], title: "Quran Memorization", description: "Memorize Quran with regular revision." },
  { ...courses[4], description: "Understand verses through simple translation." },
  { ...courses[2], title: "Qirat & Tajweed", description: "Improve recitation through Tajweed rules." },
  { ...courses[5], title: "Tafsir", description: "Explore meanings of Quranic passages." },
  { ...courses[8], title: "Arabic Language", description: "Learn Arabic vocabulary and phrases." },
  { id: "women-guidance", title: "Women Guidance", category: "Islamic Studies", description: "Islamic learning designed for women.", href: "/courses/women-guidance" },
  { id: "nasheed-reciting", title: "Nasheed Reciting", category: "Islamic Studies", description: "Practise voice, rhythm and nasheeds.", href: "/courses/nasheed-reciting" },
  { ...courses[6], title: "Islamic Studies", description: "Explore Islamic beliefs, manners, and everyday guidance." },
];
