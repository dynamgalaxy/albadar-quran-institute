import { courses } from "@/data/courses";

export const journeyMilestones = [
  { year: "01", title: "First letters", description: "Begin with Arabic letters, sounds and the foundations of reading in Noorani Qaida." },
  { year: "02", title: "Quran reading", description: "Build fluency through guided reading and regular practice." },
  { year: "03", title: "Recite with care", description: "Study pronunciation and Tajweed rules to refine recitation." },
  { year: "04", title: "Explore meaning", description: "Continue into Quran Translation & Tafsir or Arabic according to your goals." },
] as const;

export const journeyFacts = [
  { value: "1:1", label: "Online lessons" },
  { value: String(courses.length).padStart(2, "0"), label: "Course pathways" },
  { value: "Online", label: "Learn from home" },
  { value: "Free", label: "Trial class" },
] as const;
