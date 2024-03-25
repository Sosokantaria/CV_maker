import { HiOutlineTrash, HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import {
  GridDiv,
  H3Title,
  StyledButton,
  StyledInput,
  StyledInputLarge,
} from "../../../../../../components/styledComponents";

export function WorkCard() {
  const hendleDeleteExp = () => {};
  return (
    <>
      <div className="flex justify-between items-center">
        <H3Title>
          <HiOutlineWrenchScrewdriver />
          Work Experience #index + 1
        </H3Title>
        <StyledButton type="button" onClick={hendleDeleteExp}>
          <HiOutlineTrash />
        </StyledButton>
      </div>
      <GridDiv>
        <StyledInputLarge placeholder="Company" />
        <StyledInputLarge placeholder="your position" />
        <StyledInputLarge placeholder="Your main occupation, daily tasks and workfield" />
        <StyledInputLarge placeholder="github" />
        <StyledInput type="date" placeholder="Start Date of employment" />
        <StyledInput type="date" placeholder="End Date of employment" />
      </GridDiv>
    </>
  );
}
