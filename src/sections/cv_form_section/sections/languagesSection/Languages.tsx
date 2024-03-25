import { TbMessageLanguage } from "react-icons/tb";
import {
  H2Title,
  SectionDiv,
  StyledButton,
} from "../../../../components/styledComponents";
import { LanguageCard } from "./LnguageCard";
import { AiOutlinePlus } from "react-icons/ai";

export function LanguagesSection() {
  const hendleAddLang = () => {};
  return (
    <SectionDiv>
      <div className="flex flex-col gap-3">
        <H2Title>
          <TbMessageLanguage />
          Languages
        </H2Title>
        <LanguageCard />
        <StyledButton type="button" onClick={hendleAddLang}>
          <AiOutlinePlus />
        </StyledButton>
      </div>
    </SectionDiv>
  );
}
