import { AiOutlinePlus } from "react-icons/ai";
import { WorkCard } from "./WorkCard";
import {  StyledButton } from "../../../../../../components/styledComponents";

export function WorkExperiencesSection() {
    const hendleAddExp=()=>{}
  return (
    <div className="flex flex-col gap-3">
      <WorkCard />
      <StyledButton type="button" onClick={hendleAddExp}>
        <AiOutlinePlus />
      </StyledButton>
    </div>
  );
}
