export interface ResourceBook {
  title: string;
  description: string;
  file: string;
}

const book = (title: string, description: string, filename: string): ResourceBook => ({
  title,
  description,
  file: `/assets/resources/${filename}.pdf`,
});

export const resourceBooks: Record<string, ResourceBook[]> = {
  "tajweede-quran": [
    book("Color-Coded Tajweed Guide", "An introduction to common Tajweed color cues.", "color-coded-tajweed-guide"),
    book("Essential Tajweed Rules Reference", "A quick reference for key Tajweed rules.", "tajweed-rules-reference"),
    book("Makharij Practice Guide", "Focus on Arabic letter articulation and pronunciation.", "makharij-practice-guide"),
    book("Daily Recitation Workbook", "Organise short, consistent recitation practice.", "daily-recitation-workbook"),
    book("Quran Reading Progress Journal", "Record weekly reading goals and revision.", "quran-reading-progress-journal"),
  ],
  "tajweede-qaida": [
    book("Tajweede Qaida for Beginners", "Start with Arabic letters, vowels and joining.", "tajweede-qaida-beginner"),
    book("Qaida Lesson Workbook", "Review lessons and note areas for practice.", "qaida-lesson-workbook"),
    book("Parent's Qaida Support Guide", "Ideas for supporting Qaida practice at home.", "parent-qaida-support"),
  ],
  "namaz-book": [
    book("Complete Namaz Guide", "An outline of preparation, prayer movements and recitation.", "complete-namaz-guide"),
    book("Wudu and Salah Step by Step", "Review Wudu and the sequence of Salah.", "wudu-and-salah"),
    book("Salah Guide for Children", "An introductory Salah outline for young learners.", "salah-for-children"),
    book("Daily Prayer Tracker", "Keep a simple record of daily prayers.", "daily-prayer-tracker"),
  ],
  "kalma-book": [
    book("The Six Kalmas Guide", "An introductory outline for studying the six Kalmas.", "six-kalmas-guide"),
    book("Kalma Memorization Workbook", "Plan and review Kalma memorisation practice.", "kalma-memorization-workbook"),
    book("Kalmas for Young Learners", "Short learning portions for children.", "kalma-for-kids"),
    book("Kalma and Foundations of Faith", "Explore introductory themes of testimony and belief.", "faith-foundations"),
  ],
  "other-downloads": [
    book("Islamic Duas and Daily Guidance", "A brief outline of everyday duas.", "islamic-duas-guide"),
    book("A Concise Seerah Guide", "Study key stages and lessons from the Seerah.", "seerah-book"),
    book("Stories of the Prophets", "Reflect on lessons from prophetic stories.", "stories-of-prophets"),
    book("Stories of the Sahaba", "Explore themes from the lives of the Sahaba.", "stories-of-sahaba"),
  ],
};
