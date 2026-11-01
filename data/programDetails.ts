export type ProgramDetail = {
  number: string;
  level: string;
  description: string;
  overview: string;
  suitableFor: string;
  progression: string;
  learningFocus: readonly string[];
};

export const programDetails: Record<string, ProgramDetail> = {
  "noorani-qaida": {
    number: "01",
    level: "Beginner",
    description: "Learn the basics of Quran reading from the very beginning.",
    overview: "This course introduces Arabic letters and the foundations needed to begin reading Quranic text.",
    suitableFor: "May suit a learner who is beginning Quran reading or wants to build familiarity with Arabic letters and sounds.",
    progression: "Learning can move from recognizing and pronouncing letters to joining them, reading with Harakaat, and applying basic reading rules.",
    learningFocus: ["Arabic letters and their correct sounds", "Harakaat and joining letters", "Basic reading rules", "Correct pronunciation", "Introduction to Tajweed"],
  },
  "quran-reading": {
    number: "02",
    level: "Beginner to Intermediate",
    description: "Learn to read the Holy Quran correctly and fluently.",
    overview: "This course focuses on guided Quran reading, with attention to pronunciation and reading fluency.",
    suitableFor: "May suit learners who are beginning to read Quranic text or want to strengthen their reading fluency.",
    progression: "Learning can develop from guided reading and pronunciation practice to applying basic Tajweed while reading and reviewing regularly.",
    learningFocus: ["Individual attention in every class", "Pronunciation and Makharij", "Basic Tajweed applied while reading", "Fluency building", "Daily revision"],
  },
  "quran-with-tajweed": {
    number: "03",
    level: "Intermediate",
    description: "Learn how to recite the Holy Quran according to the rules of Tajweed.",
    overview: "This course studies recitation rules and how they apply when reading the Holy Quran.",
    suitableFor: "May suit a learner ready to study Tajweed rules and apply them during Quran recitation.",
    progression: "Learning can move through letter articulation and qualities, selected rules, and applying these rules during recitation.",
    learningFocus: ["Makharij-ul-Huroof and Sifaat-ul-Huroof", "Madd and Ghunnah", "Ikhfa, Idgham, Iqlab and Izhar", "Waqf and Ibtida", "Other essential Tajweed rules"],
  },
  "hifz-ul-quran": {
    number: "04",
    level: "All levels",
    description: "A structured Quran memorization programme for students who want to memorize the Holy Quran.",
    overview: "This course is organized around new memorization, review of previous lessons, and revision of memorized portions.",
    suitableFor: "May suit students who want to work toward memorizing the Holy Quran. A suitable starting point can be discussed during a free trial.",
    progression: "The learning plan includes a new lesson, previous lesson revision, and Manzil revision. Progress and parent updates are part of the supplied course outline; no memorization timeline or outcome is promised.",
    learningFocus: ["Daily new lesson (Sabaq)", "Previous lesson revision (Sabqi)", "Manzil revision", "Regular assessment", "Progress monitoring and parent updates"],
  },
  "quran-translation": {
    number: "05",
    level: "Intermediate",
    description: "Learn the meaning of selected Quranic verses and Surahs through simple, understandable translation.",
    overview: "This course explores meanings of selected Quranic verses and Surahs through translation and important vocabulary.",
    suitableFor: "May suit a learner who wants to study the meaning of selected Quranic passages through simple translation.",
    progression: "Learning can begin with important Quranic vocabulary, then explore meanings of selected verses and basic Quranic messages.",
    learningFocus: ["Important Quranic vocabulary", "Meanings of selected verses", "Basic understanding of Quranic messages"],
  },
  "quran-tafseer": {
    number: "06",
    level: "Advanced",
    description: "Learn the basic meaning and explanation of selected Surahs and Quranic passages in an easy-to-understand way.",
    overview: "This course looks at explanations of selected Surahs and Quranic passages, along with context and lessons from the verses.",
    suitableFor: "The supplied course level is advanced. A learner's starting point and suitability can be discussed during a free trial.",
    progression: "Learning can focus on selected passages, their explanation, and the context and lessons described in the course outline.",
    learningFocus: ["Explanation of selected Surahs", "Context and lessons of the verses", "Simple, accessible language"],
  },
  "basic-islamic-studies": {
    number: "07",
    level: "All levels",
    description: "Learn essential Islamic knowledge for everyday life.",
    overview: "This course covers foundational topics in worship, daily supplications, manners, beliefs, and Seerah.",
    suitableFor: "May suit learners who want to study essential Islamic knowledge for everyday life.",
    progression: "Learning can cover the listed topics, including Kalimas, Salah, Wudu, daily Duas, manners, basic beliefs, and Seerah.",
    learningFocus: ["Kalimas, Salah and Wudu", "Daily Duas", "Islamic manners and etiquette", "Basic Islamic beliefs", "Seerah of Prophet Muhammad ﷺ"],
  },
  "islamic-studies-for-kids": {
    number: "08",
    level: "Children",
    description: "An age-appropriate Islamic education programme designed especially for children.",
    overview: "This course presents Islamic studies topics for children using simple explanations and an encouraging approach.",
    suitableFor: "Designed for children, with content that parents can review when discussing a suitable starting point.",
    progression: "Learning can introduce beliefs, manners, duas, and prayer, then explore stories from the Seerah in an age-appropriate way.",
    learningFocus: ["Islamic beliefs explained simply", "Manners, duas and prayer", "Stories from the Seerah", "Fun, gentle and encouraging lessons"],
  },
  "arabic-language-basics": {
    number: "09",
    level: "Beginner",
    description: "Build familiarity with Arabic vocabulary and simple phrases, starting with the basics.",
    overview: "This beginner course introduces Arabic letters and sounds, then builds familiarity with everyday vocabulary and simple phrases.",
    suitableFor: "May suit a learner who wants to begin learning Arabic from the basics.",
    progression: "Learning can move from letters and sounds to everyday vocabulary, then simple words and phrases.",
    learningFocus: ["Arabic letters and sounds", "Everyday vocabulary", "Simple words and phrases"],
  },
  "women-guidance": {
    number: "08",
    level: "Discuss in a trial",
    description: "Islamic learning sessions designed for women.",
    overview: "This learning path is for women interested in Islamic guidance. Specific topics can be discussed with the institute.",
    suitableFor: "Women can discuss their learning goals and a suitable starting point during a free trial.",
    progression: "The course outline and learning sequence have not been supplied. Ask about the current topics before enrolling.",
    learningFocus: ["Islamic learning", "Topics to discuss with the institute"],
  },
  "nasheed-reciting": {
    number: "09",
    level: "Discuss in a trial",
    description: "Explore voice, rhythm and confidence for Islamic nasheeds.",
    overview: "This learning path focuses on reciting Islamic nasheeds. Further course details can be discussed with the institute.",
    suitableFor: "Learners interested in nasheed reciting can discuss their starting point during a free trial.",
    progression: "The course outline and learning sequence have not been supplied. Ask about the current topics before enrolling.",
    learningFocus: ["Voice", "Rhythm", "Confidence in reciting Islamic nasheeds"],
  },
};
