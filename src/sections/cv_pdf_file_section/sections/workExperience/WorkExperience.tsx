import { useContext } from "react";
import { WorkExperienceCard } from "./workExperienceCard";
import { Context } from "../../../../context";
import { TExperienceDataItem } from "../../../../types";

export function WorkExperienceInfo() {
  const { experienceData } = useContext(Context);


  return (
    <>
      {experienceData?.map((exp: TExperienceDataItem, index) => (
        <div key={index} className="flex flex-col mt-[10px]">
          <WorkExperienceCard
            id={exp.id}
            index={index}
            company={exp?.company}
            occupation={exp?.occupation}
            github={exp?.github}
            position={exp?.position}
            startDate={exp?.startDate}
            endDate={exp?.endDate}
          />
        </div>
      ))}
    </>
  );
}
