import { useContext, useEffect } from "react";
import { Context } from "../../../../context";
import { useFormContext } from "react-hook-form";
import { TSchoolData, TUniDataItem } from "../../../../types";
import { RiBookOpenLine } from "react-icons/ri";
import {
  GridDiv,
  H2Title,
  SectionDiv,
  StyledInput,
  H3Title,
  StyledInputLarge,
} from "../../../../components/styledComponents";
import { UniCard } from "./uniCard";

export function EducationalInfo() {
  const { register, watch } = useFormContext();
  let data = watch(["school", "schoolDegree", "schoolStart", "schoolEnd"]);
  const { uniData, setSchoolData } = useContext(Context);
  useEffect(() => {
    const mappedData: TSchoolData = {
      school: data[0] || "",
      schoolDegree: data[1] || "",
      schoolStart: data[2] || "",
      schoolEnd: data[3] || "",
    };
    setSchoolData(mappedData);
  }, [...data]);

  return (
    <SectionDiv>
      <H2Title>Education</H2Title>
      {uniData.map((uni: TUniDataItem, index) => (
        <UniCard
          key={uni.id}
          id={uni.id}
          index={index.toString()}
          uniDegree={uni.uniDegree}
          university={uni.university}
          uniStart={uni.uniStart}
          uniEnd={uni.uniEnd}
        />
      ))}
      <div className="flex flex-col gap-3">
        <H3Title>
          <RiBookOpenLine />
          School
        </H3Title>
        <GridDiv>
          <StyledInputLarge
            placeholder="Your school"
            {...register("school", { required: true })}
          />
          <StyledInputLarge
            placeholder="Your Degree"
            {...register("schoolDegree", { required: true })}
          />
          <StyledInput
            type="date"
            placeholder="start"
            {...register("schoolStart", { required: true })}
          />
          <StyledInput
            type="date"
            placeholder="end"
            {...register("schoolEnd", { required: true })}
          />
        </GridDiv>
      </div>
    </SectionDiv>
  );
}
