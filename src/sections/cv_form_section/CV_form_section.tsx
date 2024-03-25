import { EducationalInfo } from "./sections/educationalInfo";
import { HeadLineSection } from "./sections/HeadLineSection";
import { LanguagesSection } from "./sections/languagesSection";
import { PersonalInfo } from "./sections/PersonalInfo";
import { PracticalExperience } from "./sections/PracticalExperience";

export function CvFormSection() {
  return (
    <div className="flex flex-col  w-full justify-start items-start overflow-y-scroll no-scrollbar gap-[35px] p-5 pt-0">
      <HeadLineSection />
      <PersonalInfo />
      <EducationalInfo />
      <PracticalExperience />
      <LanguagesSection />
    </div>
  );
}
