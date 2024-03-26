import { PropsWithChildren, useState } from "react";
import { Context } from "../context";
import {
  TPersonalData,
  TExperienceData,
  TLanguages,
  TSchoolData,
  TSkillData,
  TUniData,
} from "../types";
import uniqid from "uniqid";


export function ContentProvider({ children }: PropsWithChildren) {
  const expId = uniqid();
  const skillId = uniqid();
  const uniId = uniqid();
  const languageId = uniqid();
  const [personalData, setPersonalData] = useState<TPersonalData>({
    name: "",
    lastName: "",
    city: "",
    github: "",
    linkdin: "",
    mail: "",
    number: "",
  });
  const [uniData, setUniData] = useState<TUniData>([
    {
      id: uniId,
      university: "",
      uniDegree: "",
      uniStart: "",
      uniEnd: "",
      index: "",
    },
  ]);
  const [schoolData, setSchoolData] = useState<TSchoolData>({
    school: "",
    schoolDegree: "",
    schoolStart: "",
    schoolEnd: "",
  });
  const [experienceData, setExperienceData] = useState<TExperienceData>([
    {
      id: expId,
      company: "",
      position: "",
      occupation: "",
      github: "",
      startDate: "",
      endDate: "",
    },
  ]);
  const [skillData, setSkillData] = useState<TSkillData>([
    { id: skillId, skill: "" },
  ]);
  const [languageData, setLanguageData] = useState<TLanguages>([
    { id: languageId, language: "", category: "" },
  ]);
  return (
    <Context.Provider
      value={{
        personalData,
        schoolData,
        uniData,
        experienceData,
        skillData,
        languageData,
        setPersonalData,
        setSchoolData,
        setUniData,
        setExperienceData,
        setSkillData,
        setLanguageData,
      }}
    >
      {children}
    </Context.Provider>
  );
}
