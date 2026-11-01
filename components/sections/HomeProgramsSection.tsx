import Container from "@/components/common/Container";
import SectionIntro from "@/components/common/SectionIntro";
import Button from "@/components/common/Button";
import ProgramCard from "@/components/cards/ProgramCard";
import type { SectionIntroProps } from "@/types/common";
import type { Program } from "@/types/program";
import AnimatedArrow from "@/components/common/AnimatedArrow";

export default function HomeProgramsSection({ programs, ...intro }: SectionIntroProps & { programs: Program[] }) {
  return <section id="programs" className="home-programs">
    <Container>
      <div className="home-programs-heading">
        <SectionIntro {...intro} />
        <Button href="/courses">Explore all courses <AnimatedArrow /></Button>
      </div>
      <div className="home-program-grid">
        {programs.map((program, index) => <ProgramCard key={program.id} program={program} editorial index={index} />)}
      </div>
    </Container>
  </section>;
}
