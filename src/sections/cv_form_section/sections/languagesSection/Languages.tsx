import { TbMessageLanguage } from "react-icons/tb";
import {
  H2Title,
  SectionDiv,
  StyledButton,
} from "../../../../components/styledComponents";
import { LanguageCard } from "./LnguageCard";
import { AiOutlinePlus } from "react-icons/ai";
import { useContext } from "react";
import { Context } from "../../../../context";
import uniqid from "uniqid";
import { TLanguagesItem } from "../../../../types";

export function LanguagesSection() {
  const newId = uniqid();
  const { languageData, setLanguageData } = useContext(Context);

  // add new languages to langueData arrey
  const handleAddLang = () => {
    const newLanguage: TLanguagesItem = {
      id: newId,
      language: "",
      category: "",
    };
    setLanguageData((prev) => [...prev, newLanguage]);
  };
  return (
    <SectionDiv>
      <div className="flex flex-col gap-3">
        <H2Title>
          <TbMessageLanguage />
          Languages
        </H2Title>
        {languageData.map((lang) => (
          <LanguageCard
            key={lang.id}
            id={lang.id}
            language={lang.language}
            category={lang.category}
          />
        ))}
        <StyledButton type="button" onClick={() => handleAddLang()}>
          <AiOutlinePlus />
        </StyledButton>
      </div>
    </SectionDiv>
  );
}
