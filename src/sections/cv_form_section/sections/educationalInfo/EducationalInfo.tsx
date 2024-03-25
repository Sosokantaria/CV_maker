import { RiBookOpenLine } from "react-icons/ri";
import {
  GridDiv,
  H2Title,
  SectionDiv,
  StyledInput,
  H3Title,
  StyledInputLarge,
} from "../../../../components/styledComponents";
import { UniCard } from "./uniCard";


export function EducationalInfo() {
  return (
    <SectionDiv>
      <H2Title>Education</H2Title>
      <UniCard/>
      <div className="flex flex-col gap-3">
        <H3Title>
          <RiBookOpenLine />
          School
        </H3Title>
        <GridDiv>
          <StyledInputLarge placeholder="Your school" />
          <StyledInputLarge placeholder="Your Degree" />
          <StyledInput type="date" placeholder="start" />
          <StyledInput type="date" placeholder="end" />
        </GridDiv>
      </div>
    </SectionDiv>
  );
}
