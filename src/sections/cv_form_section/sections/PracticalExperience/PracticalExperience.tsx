import { H2Title, SectionDiv } from "../../../../components/styledComponents";
import { SkillsSection } from "./sections/SkillsSection";
import { WorkExperiencesSection } from "./sections/WorkExperiencesSection";

export function PracticalExperience() {
  return (
    <SectionDiv>
      <H2Title>Practical Experience</H2Title>
      <WorkExperiencesSection />
      <SkillsSection />
    </SectionDiv>
  );
}
