import type { ContentItem } from "./common";
export type CourseCategory = "Quran & Islamic Studies" | "Science & Mathematics" | "Languages";
export interface Course extends ContentItem { category: CourseCategory; duration?: string; audience?: string; schedule?: string }
