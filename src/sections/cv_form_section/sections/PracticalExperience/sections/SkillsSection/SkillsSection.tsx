import { AiOutlinePlus } from "react-icons/ai";
import {
  H3Title,
  StyledButton,
} from "../../../../../../components/styledComponents";
import { SkillCard } from "./skillCard";

export function SkillsSection() {
  const hendleAddSkill = () => {};
  return (
    <div className="flex flex-col gap-3">
      <H3Title> Skills & Technologies</H3Title>
      <SkillCard />
      <StyledButton type="button" onClick={hendleAddSkill}>
        <AiOutlinePlus />
      </StyledButton>
    </div>
  );
}
