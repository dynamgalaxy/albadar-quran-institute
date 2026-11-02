"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Container from "@/components/common/Container";
import SectionIntro from "@/components/common/SectionIntro";
import ProgramCard from "@/components/cards/ProgramCard";
import type { SectionIntroProps } from "@/types/common";
import type { Course, CourseCategory } from "@/types/course";

const categoryLabels: Record<CourseCategory, string> = {
  "Quran & Islamic Studies": "Islamic Courses",
  "Science & Mathematics": "Science Courses",
  Languages: "Language Courses",
};

export default function HomeProgramsSection({ courses, categories, ...intro }: SectionIntroProps & { courses: Course[]; categories: CourseCategory[] }) {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | "all">("all");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const filters: { value: CourseCategory | "all"; label: string }[] = [
    { value: "all", label: "All Courses" },
    ...categories.map(category => ({ value: category, label: categoryLabels[category] })),
  ];
  const visibleCourses = selectedCategory === "all" ? courses : courses.filter(course => course.category === selectedCategory);

  function onFilterKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    if (event.key === "ArrowRight") next = (index + 1) % filters.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + filters.length) % filters.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = filters.length - 1;
    else return;
    event.preventDefault();
    setSelectedCategory(filters[next].value);
    tabRefs.current[next]?.focus();
  }

  return <section id="programs" className="home-programs">
    <Container>
      <div className="home-programs-heading">
        <SectionIntro {...intro} />
        <div className="home-program-category" role="tablist" aria-label="Course categories">
          {filters.map((filter, index) => <button
            key={filter.value} ref={element => { tabRefs.current[index] = element; }} type="button" role="tab"
            id={`home-course-tab-${index}`} aria-controls="home-course-panel" aria-selected={selectedCategory === filter.value}
            tabIndex={selectedCategory === filter.value ? 0 : -1}
            onClick={() => setSelectedCategory(filter.value)} onKeyDown={event => onFilterKeyDown(event, index)}
          >{filter.label}</button>)}
        </div>
      </div>
      <div id="home-course-panel" role="tabpanel" aria-labelledby={`home-course-tab-${filters.findIndex(filter => filter.value === selectedCategory)}`} tabIndex={0}>
        <div className="home-program-grid">
          {visibleCourses.map(course => <ProgramCard key={course.id} program={course} editorial />)}
        </div>
      </div>
    </Container>
  </section>;
}
