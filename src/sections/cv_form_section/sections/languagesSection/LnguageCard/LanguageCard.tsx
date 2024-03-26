import { useContext, useEffect } from "react";
import { Context } from "../../../../../context";
import { useFormContext } from "react-hook-form";
import { HiOutlineTrash } from "react-icons/hi";
import {
  StyledButton,
  StyledInput,
} from "../../../../../components/styledComponents";
import { TLanguagesItem } from "../../../../../types";

export function LanguageCard({ id }: TLanguagesItem) {
  const { register, watch } = useFormContext();
  const data = watch([`language${id}`, `category${id}`]);

  const { languageData, setLanguageData } = useContext(Context);

  // delete current language from languageData arrey
  const handleDeleteLanguage = (id: string) => {
    const cencelLangData = (idToRemove: string) => {
      const newLanguagesArr = languageData.filter(
        (lang) => lang.id !== idToRemove
      );
      setLanguageData(newLanguagesArr);
    };
    cencelLangData(id);
  };

  useEffect(() => {
    //update language data by ID
    const updateLanguages = languageData.map((lang: TLanguagesItem) => {
      if (lang.id === id) {
        return { id: id, language: data[0] || "", category: data[1] || "" };
      }
      return lang; // return lang if id doesn't match
    });
    setLanguageData(updateLanguages);
  }, [...data]);
  return (
    <div className="flex justify-between gap-2 items-center">
      <StyledInput
        placeholder="language"
        {...register(`language${id}`, { required: true })}
      />
      <select
        className="bg-[#292929] text-[#a6a6a6] text-[14px] text-center font-[600] rounded-[10px] py-[6px] w-[80px] border-none"
        {...register(`category${id}`, { required: true })}
      >
        <option value="A1">A1</option>
        <option value="A2">A2</option>
        <option value="B1">B1</option>
        <option value="B2">B2</option>
        <option value="C1">C1</option>
        <option value="C2">C2</option>
        <option value="native">native</option>
      </select>
      {languageData.length > 1 && (
        <StyledButton type="button" onClick={() => handleDeleteLanguage(id)}>
          <HiOutlineTrash />
        </StyledButton>
      )}
    </div>
  );
}
