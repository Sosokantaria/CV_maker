import { HiOutlineTrash } from "react-icons/hi";
import {
  StyledButton,
  StyledInput,
} from "../../../../../components/styledComponents";

export function LanguageCard() {
  const hendleDeleteLang = () => {};
  return (
    <div className="flex justify-between gap-2 items-center">
      <StyledInput placeholder="language" />
      <select className="bg-[#292929] text-[#a6a6a6] text-[14px] text-center font-[600] rounded-[10px] py-[6px] w-[80px] border-none">
        <option value="A1">A1</option>
        <option value="A2">A2</option>
        <option value="B1">B1</option>
        <option value="B2">B2</option>
        <option value="C1">C1</option>
        <option value="C2">C2</option>
        <option value="native">native</option>
      </select>
      <StyledButton type="button" onClick={hendleDeleteLang}>
        <HiOutlineTrash />
      </StyledButton>
    </div>
  );
}
