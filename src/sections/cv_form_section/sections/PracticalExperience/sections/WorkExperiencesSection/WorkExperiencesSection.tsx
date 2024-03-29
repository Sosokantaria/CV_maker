import { useContext } from "react";
import { Context } from "../../../../../../context";
import { AiOutlinePlus } from "react-icons/ai";
import { WorkCard } from "../cards/WorkCard";
import { StyledButton } from "../../../../../../components/styledComponents";
import uniqid from "uniqid";

export function WorkExperiencesSection() {
  const Id = uniqid();
  const { experienceData, setExperienceData } = useContext(Context);

  const handleAddExperience = () => {
    if (experienceData.length >= 1 && experienceData.length <= 3) {
      const newExperienceData = {
        id: Id,
        index: 0,
        company: "",
        occupation: "",
        github: "",
        startDate: "",
        endDate: "",
        position: "",
      }
      setExperienceData((prev) => [...prev, newExperienceData]);
    }
  };
  return (
    <div className="flex flex-col gap-3">
      {experienceData?.map((experience, index) => (
        <div key={experience.id} className="flex flex-col gap-3">
          <WorkCard
            experienceData={experienceData}
            setExperienceData={setExperienceData}
            index={index}
            id={experience.id}
          />
          {experienceData.length < 4 && (
            <StyledButton type="button" onClick={() => handleAddExperience()}>
              <AiOutlinePlus />
            </StyledButton>
          )}
        </div>
      ))}
    </div>
  );
}
