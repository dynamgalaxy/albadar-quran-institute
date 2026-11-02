export type CourseStory = {
  message: string;
  note: string;
  quote: string;
  steps: { title: string; description: string }[];
  benefits: string[];
};

export const courseStories: Record<string, CourseStory> = {
  "noorani-qaida": {
    message: "Begin with Arabic letters, sounds and the foundations of Quran reading.",
    note: "A focused path through Noorani Qaida.",
    quote: "Arabic letters, sounds and the foundations of Quran reading.",
    steps: [
      { title: "Arabic letters", description: "Recognise letters and sounds." },
      { title: "Harakaat", description: "Practise vowel marks." },
      { title: "Joined forms", description: "Join letters to read." },
      { title: "Reading rules", description: "Prepare for Quran reading." },
    ],
    benefits: ["Recognise Arabic letters and sounds", "Practise harakaat and joined letters", "Build familiarity with basic reading rules", "Prepare for a transition into Quran reading"],
  },
  "quran-reading": {
    message: "Build fluency through guided Quran reading and careful pronunciation.",
    note: "A focused path through Quran reading.",
    quote: "Guided reading, pronunciation and regular revision.",
    steps: [
      { title: "Guided reading", description: "Read with individual attention." },
      { title: "Pronunciation", description: "Practise Makharij." },
      { title: "Basic Tajweed", description: "Apply rules while reading." },
      { title: "Revision", description: "Build reading fluency." },
    ],
    benefits: ["Read with individual attention", "Practise pronunciation and Makharij", "Apply basic Tajweed while reading", "Build fluency through revision"],
  },
  "quran-with-tajweed": {
    message: "Learn the rules that guide careful Quran recitation.",
    note: "A focused path through Tajweed.",
    quote: "Letter sounds, recitation rules and thoughtful practice.",
    steps: [
      { title: "Letter sounds", description: "Study Makharij and Sifaat." },
      { title: "Madd & Ghunnah", description: "Practise length and nasal sound." },
      { title: "Key rules", description: "Explore Ikhfa, Idgham and more." },
      { title: "Recitation", description: "Apply rules with care." },
    ],
    benefits: ["Study letter articulation and qualities", "Practise Madd and Ghunnah", "Learn essential Tajweed rules", "Apply Waqf and Ibtida while reciting"],
  },
  "hifz-ul-quran": {
    message: "Build memorization through new lessons and steady revision.",
    note: "A focused path through Hifz-ul-Quran.",
    quote: "New memorization, previous lessons and regular revision.",
    steps: [
      { title: "Sabaq", description: "Work on a new lesson." },
      { title: "Sabqi", description: "Review previous lessons." },
      { title: "Manzil", description: "Revise memorized portions." },
      { title: "Assessment", description: "Monitor progress regularly." },
    ],
    benefits: ["Work on daily new lessons", "Revise previous lessons", "Return to memorized portions", "Discuss progress with parents"],
  },
  "quran-translation-and-tafsir": {
    message: "Explore selected verses through Quran translation and Tafsir.",
    note: "A focused path through Quran Translation & Tafsir.",
    quote: "Vocabulary, meaning, context and lessons from selected verses.",
    steps: [
      { title: "Vocabulary", description: "Learn important Quranic words." },
      { title: "Translation", description: "Explore meanings of selected verses." },
      { title: "Tafsir", description: "Study explanation and context." },
      { title: "Lessons", description: "Consider Quranic messages and themes." },
    ],
    benefits: ["Learn important Quranic vocabulary", "Study meanings of selected verses", "Explore explanations and context of selected Surahs", "Consider lessons from Quranic passages"],
  },
  "islamic-studies": {
    message: "Learn essential Islamic knowledge for everyday life.",
    note: "A focused path through Islamic studies.",
    quote: "Worship, daily duas, beliefs, manners and Seerah.",
    steps: [
      { title: "Worship", description: "Study Kalimas, Salah and Wudu." },
      { title: "Daily duas", description: "Learn useful supplications." },
      { title: "Beliefs & manners", description: "Explore foundations and etiquette." },
      { title: "Seerah", description: "Learn through age-appropriate stories." },
    ],
    benefits: ["Study Salah and Wudu", "Learn daily duas", "Explore Islamic manners and beliefs", "Learn from the Seerah at a suitable level"],
  },
  "arabic-language-basics": {
    message: "Begin with Arabic sounds, everyday words and simple phrases.",
    note: "A focused path through Arabic basics.",
    quote: "Letters, vocabulary and simple Arabic phrases.",
    steps: [
      { title: "Letters", description: "Recognise Arabic characters." },
      { title: "Sounds", description: "Practise pronunciation." },
      { title: "Vocabulary", description: "Learn everyday words." },
      { title: "Phrases", description: "Build simple expressions." },
    ],
    benefits: ["Recognise Arabic letters", "Practise their sounds", "Build everyday vocabulary", "Use simple words and phrases"],
  },
};
