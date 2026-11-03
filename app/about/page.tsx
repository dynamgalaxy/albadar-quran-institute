import PageHero from "@/components/common/PageHero";
import AboutIntroSections from "@/components/sections/AboutIntroSections";
import AboutIdentitySection from "@/components/sections/AboutIdentitySection";
import FounderMessageSection from "@/components/sections/FounderMessageSection";
import AboutTeachersSection from "@/components/sections/AboutTeachersSection";
import AboutCommunityImpactSection from "@/components/sections/AboutCommunityImpactSection";
import { pages, sectionContent } from "@/data/pages";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(pages.about.seo);

export default function AboutPage() {
  return (
    <>
      <PageHero {...pages.about.hero} />
      <AboutIntroSections about={sectionContent.about} story={sectionContent.story} />
      <AboutIdentitySection />
      <FounderMessageSection {...sectionContent.leadership} />
      <AboutTeachersSection />
      <AboutCommunityImpactSection />
    </>
  );
}
