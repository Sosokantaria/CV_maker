import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { HiOutlineTrash, HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { TExperienceDataItem } from "../../../../../../types";
import {
  GridDiv,
  H3Title,
  StyledButton,
  StyledInput,
  StyledInputLarge,
} from "../../../../../../components/styledComponents";

export function WorkCard({
  experienceData,
  setExperienceData,
  id,
  index,
}: any) {
  const { register, watch } = useFormContext();

  let data = watch([
    `company${id}`,
    `position${id}`,
    `occupation${id}`,
    `github${id}`,
    `startDate${id}`,
    `endDate${id}`,
  ]);

  const HendelDeleteExp = (id: string) => {
    const cancelExperienceData = (idToRemove: string) => {
      const newArray = experienceData.filter(
        (exp: TExperienceDataItem) => exp.id !== idToRemove
      );
      setExperienceData(newArray);
    };
    cancelExperienceData(id);
  };

  useEffect(() => {
    // update each experience in experienceData array
    const updatedExperienceData = experienceData.map(
      (exp: TExperienceDataItem) => {
        if (exp.id == id) {
          return {
            id:id,
            company: data[0] ,
            position: data[1] ,
            occupation: data[2] ,
            github: data[3] ,
            startDate: data[4] ,
            endDate: data[5] ,
          };
        }
        return exp; // return unchanged item if ID doesn't match
      }
    );
    setExperienceData(updatedExperienceData);
  }, [...data,]);

  return (
    <>
      <div className="flex justify-between items-center">
        <H3Title>
          <HiOutlineWrenchScrewdriver />
          Work Experience {index + 1}
        </H3Title>
        {experienceData.length > 1 && (
          <StyledButton type="button" onClick={() => HendelDeleteExp(id)}>
            <HiOutlineTrash />
          </StyledButton>
        )}
      </div>
      <GridDiv>
        <StyledInputLarge
          placeholder="Company"
          {...register(`company${id}`, { required: true })}
        />
        <StyledInputLarge
          placeholder="your position"
          {...register(`position${id}`, { required: true })}
        />
        <StyledInputLarge
          placeholder="Your main occupation, daily tasks and workfield"
          {...register(`occupation${id}`, { required: true })}
        />
        <StyledInputLarge
          placeholder="github"
          {...register(`github${id}`, { required: true })}
        />
        <StyledInput
          type="date"
          placeholder="Start Date of employment"
          {...register(`startDate${id}`, { required: true })}
        />
        <StyledInput
          type="date"
          placeholder="End Date of employment"
          {...register(`endDate${id}`)}
        />
      </GridDiv>
    </>
  );
}
