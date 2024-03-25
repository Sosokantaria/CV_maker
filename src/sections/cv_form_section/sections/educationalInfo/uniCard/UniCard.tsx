import { AiOutlinePlus } from "react-icons/ai";
import {
  GridDiv,
  H3Title,
  StyledButton,
  StyledInput,
  StyledInputLarge,
} from "../../../../../components/styledComponents";
import { IoSchoolOutline } from "react-icons/io5";
import { HiOutlineTrash } from "react-icons/hi";

export function UniCard() {
  const hendleDeleteUni=()=>{}
  const hendleAddUni=()=>{}
  return (
    <div className="flex flex-col gap-3 ">
      <div className="flex justify-between">
        <H3Title>
          <IoSchoolOutline />
          University
        </H3Title>
        <StyledButton type="button" onClick={hendleDeleteUni}>
          <HiOutlineTrash />
        </StyledButton>
      </div>
      <GridDiv>
        <StyledInputLarge placeholder="Your school" />
        <StyledInputLarge placeholder="Your Degree" />
        <StyledInput type="date" placeholder="start" />
        <StyledInput type="date" placeholder="end" />
      </GridDiv>
      <StyledButton type="button" onClick={hendleAddUni}>
        <AiOutlinePlus />
      </StyledButton>
    </div>
  );
}
