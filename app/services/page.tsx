import PageHero from "@/components/common/PageHero";
import Container from "@/components/common/Container";
import SectionIntro from "@/components/common/SectionIntro";
import ServicesGridSection from "@/components/sections/ServicesGridSection";
import WhyAlBadarSection from "@/components/sections/WhyAlBadarSection";
import CommunityImpactSection from "@/components/sections/CommunityImpactSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import { pages, sectionContent, reasons } from "@/data/pages";
import { services } from "@/data/services";
import { programs } from "@/data/programs";
import { impactStats } from "@/data/company";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(pages.services.seo);

export default function ServicesPage() {
  return (
    <>
      <PageHero {...pages.services.hero} />
      <Container className="page-intro"><SectionIntro {...sectionContent.servicesIntro} /></Container>
      <ServicesGridSection {...sectionContent.services} services={services} />
      <WhyAlBadarSection {...sectionContent.why} items={reasons} />
      <CommunityImpactSection {...sectionContent.impact} stats={impactStats} />
      <ProgramsSection {...sectionContent.programs} programs={programs} />
    </>
  );
}
