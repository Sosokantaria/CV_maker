import { HiOutlineTrash } from "react-icons/hi2";
import {
  StyledButton,
  StyledInput,
} from "../../../../../../components/styledComponents";

export function SkillCard() {
  const hendleDeleteSkill = () => {};
  return (
    <div className="flex justify-between items-center gap-3">
      <StyledInput placeholder={`skill {index + 1}`} />
      <StyledButton type="button" onClick={hendleDeleteSkill}>
        <HiOutlineTrash />
      </StyledButton>
    </div>
  );
}
