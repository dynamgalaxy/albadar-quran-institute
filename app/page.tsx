import HeroSection from "@/components/sections/HeroSection";
import HomeHighlightsSection from "@/components/sections/HomeHighlightsSection";
import HomeProgramsSection from "@/components/sections/HomeProgramsSection";
import HomeJourneySection from "@/components/sections/HomeJourneySection";
import { pages, sectionContent } from "@/data/pages";
import { startSteps } from "@/data/programs";
import { featuredCourses } from "@/data/courses";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(pages.home.seo);

export default function HomePage() {
  return (
    <>
      <HeroSection {...pages.home.hero} />
      <HomeHighlightsSection items={startSteps} />
      <HomeProgramsSection {...sectionContent.homePrograms} programs={featuredCourses.filter(course => course.id !== "nasheed-reciting")} />
      <HomeJourneySection />
    </>
  );
}
