export type TPersonalData = {
    name: string;
    lastName: string;
    city: string;
    github: string;
    linkdin: string;
    mail: string;
    number: string;
  };
  export type TUniDataItem = {
    id: string;
    index:string;
    university: string;
    uniDegree: string;
    uniStart: string;
    uniEnd: string;
  };
  export type TUniData = TUniDataItem[];
  export type TSchoolData = {
    school: string;
    schoolDegree: string;
    schoolStart: string;
    schoolEnd: string;
  };
  export type TExperienceDataItem = {
    company: string;
    position: string;
    occupation: string;
    github: string;
    startDate: string;
    endDate: string;
    id: string;
  };
  export type TExperienceData = TExperienceDataItem[];
  export type TSkillDataItem = {
    id: string;
    skill: string;
  };
  export type TSkillData = TSkillDataItem[];
  export type TLanguagesItem = { id: string; language: string; category: string };
  export type TLanguages=TLanguagesItem[]
  export type TpersonalInfoContextValue = {
    personalData: TPersonalData;
    uniData: TUniData;
    experienceData: TExperienceData;
    skillData: TSkillData;
    schoolData: TSchoolData;
    languageData: TLanguages;
    setPersonalData: React.Dispatch<React.SetStateAction<TPersonalData>>;
    setUniData: React.Dispatch<React.SetStateAction<TUniData>>;
    setSchoolData: React.Dispatch<React.SetStateAction<TSchoolData>>;
    setExperienceData: React.Dispatch<React.SetStateAction<TExperienceData>>;
    setSkillData: React.Dispatch<React.SetStateAction<TSkillData>>;
    setLanguageData: React.Dispatch<React.SetStateAction<TLanguages>>;
  };
  