import type { Stat, Value } from "@/types/common";
export const company = {
  name: "Al Badar Quran Institute",
  shortName: "Al Badar",
  description: "One-to-one online Quran and Islamic studies for children and adults, guided at each learner’s own pace.",
  phone: "+923155044602" as string | null,
  phoneAlt: "+923199462830" as string | null,
  email: "am1159107@gmail.com" as string | null,
  addresses: ["Islamabad, Pakistan"],
};
export const values: Value[] = [
  { id: "access", title: "Accessible learning", description: "Online Quran learning for students at different stages, from the comfort of home." },
  { id: "individual", title: "Individual attention", description: "One-to-one lessons let teachers focus on each student's learning needs." },
  { id: "flexible", title: "Flexible schedules", description: "Class times are arranged according to student and teacher availability." },
];
export const impactStats: Stat[] = [];
