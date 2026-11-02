import type { Program } from "@/types/program";
export const programs: Program[] = [
  { id: "noorani-qaida", title: "Noorani Qaida", description: "Learn the basics of Quran reading from the very beginning.", href: "/courses/noorani-qaida", status: "ongoing" },
  { id: "quran-reading", title: "Quran Reading / Nazra Quran", description: "Learn to read the Holy Quran correctly and fluently.", href: "/courses/quran-reading", status: "ongoing" },
  { id: "tajweed", title: "Quran with Tajweed", description: "Learn how to recite the Holy Quran according to the rules of Tajweed.", href: "/courses/quran-with-tajweed", status: "ongoing" },
  { id: "hifz", title: "Hifz-ul-Quran", description: "A structured Quran memorization programme for students who want to memorize the Holy Quran.", href: "/courses/hifz-ul-quran", status: "ongoing" },
  { id: "islamic-studies", title: "Islamic Studies", description: "Learn essential Islamic knowledge for everyday life.", href: "/courses/islamic-studies", status: "ongoing" },
];
export const startSteps = [
  { id: "explore", title: "Explore", description: "Find a course for the learner’s level and goals." },
  { id: "enquire", title: "Enquire", description: "Ask about a suitable starting point and lessons." },
  { id: "begin", title: "Get started", description: "Book a free trial and meet a teacher." },
] as const;
