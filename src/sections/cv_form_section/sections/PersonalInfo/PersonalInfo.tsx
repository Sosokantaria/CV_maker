import {
  GridDiv,
  H2Title,
  SectionDiv,
  StyledInput,
} from "../../../../components/styledComponents";
import { StyledInputLarge } from "../../../../components/styledComponents/StyledComponents";

export function PersonalInfo() {
  return (
    <SectionDiv>
      <div className="flex flex-col gap-3">
        <H2Title>Personal Info</H2Title>
        <GridDiv>
          <StyledInput placeholder="Soso" />
          <StyledInput placeholder="Kantaria" />
          <StyledInputLarge placeholder="Tbilisi, Georgia" />
          <StyledInputLarge placeholder="Github" />
          <StyledInputLarge placeholder="Linkdin" />
          <StyledInput placeholder="Mail" />
          <StyledInput placeholder="Phone" />
        </GridDiv>
      </div>
    </SectionDiv>
  );
}
