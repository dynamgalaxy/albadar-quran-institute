import type { FAQ } from "@/types/faq";
export interface FAQGroup { id: string; title: string; items: FAQ[] }
const pairs: [string, string][] = [
  ["Which Quran courses can I study?", "Courses include Noorani Qaida, Quran Reading / Nazra Quran, Quran with Tajweed, Hifz-ul-Quran, and Quran Translation & Tafsir. Islamic studies and Arabic basics are also offered."],
  ["Are the classes online and one-to-one?", "Yes. Al Badar offers one-to-one online lessons."],
  ["Can children and adults join?", "One-to-one online Quran and Islamic studies are for children, teenagers and adults."],
  ["Can I begin if I cannot read Arabic yet?", "Noorani Qaida teaches the basics of Quran reading from the very beginning."],
  ["Is there a free trial before enrolling?", "A free trial class is available. Contact Al Badar to discuss getting started."],
  ["Can students living abroad join?", "The supplied information does not confirm availability by location. Please contact Al Badar to ask."],
];
const items = pairs.map(([question, answer], index) => ({ id: `general-${index + 1}`, question, answer }));
export const faqGroups: FAQGroup[] = [{ id: "general", title: "Online classes", items }];
export const faqs: FAQ[] = items;
