import { createContext } from "react";
import { TpersonalInfoContextValue } from "../types";

export const Context = createContext<TpersonalInfoContextValue>({
  personalData: {
    name: "",
    lastName: "",
    city: "",
    github: "",
    linkdin: "",
    mail: "",
    number: "",
    profile: "",
  },
  uniData: [
    {
      id: "",
      university: "",
      uniDegree: "",
      uniStart: "",
      uniEnd: "",
      index: "",
    },
  ],
  schoolData: { school: "", schoolDegree: "", schoolStart: "", schoolEnd: "" },
  experienceData: [
    {
      id: "",
      company: "",
      position: "",
      occupation: "",
      github: "",
      startDate: "",
      endDate: "",
      index: 0,
    },
  ],
  skillData: [{ id: "", skill: "" }],
  languageData: [{ id: "", language: "", category: "" }],
  setPersonalData: () => {},
  setSchoolData: () => {},
  setUniData: () => {},
  setExperienceData: () => {},
  setSkillData: () => {},
  setLanguageData: () => {},
});
