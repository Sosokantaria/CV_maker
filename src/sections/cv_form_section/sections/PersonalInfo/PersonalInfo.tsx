import { useContext, useEffect } from "react";
import { Context } from "../../../../context";
import { useFormContext } from "react-hook-form";
import {
  GridDiv,
  H2Title,
  SectionDiv,
  StyledInput,
} from "../../../../components/styledComponents";
import { StyledInputLarge } from "../../../../components/styledComponents/StyledComponents";
import { TPersonalData } from "../../../../types";

export function PersonalInfo() {
  const { register, watch } = useFormContext();
  let data = watch([
    "name",
    "lastname",
    "country,city",
    "github",
    "linkdin",
    "mail",
    "number",
  ]);

  useEffect(() => {
    const mappedData: TPersonalData = {
      name: data[0] ,
      lastName: data[1] ,
      city: data[2] ,
      github: data[3] ,
      linkdin: data[4] ,
      mail: data[5] ,
      number: data[6] ,
    };
    return setPersonalData(mappedData);
  }, [...data]);

  const { setPersonalData } = useContext(Context);
  return (
    <SectionDiv>
      <div className="flex flex-col gap-3">
        <H2Title>Personal Info</H2Title>
        <GridDiv>
          <StyledInput
            placeholder="Soso"
            {...register(`name`, { required: true })}
          />
          <StyledInput
            placeholder="Kantaria"
            {...register("lastname", { required: true })}
          />
          <StyledInputLarge
            placeholder="Tbilisi, Georgia"
            {...register("country,city", { required: true })}
          />
          <StyledInputLarge
            placeholder="Github"
            {...register("github", { required: true })}
          />
          <StyledInputLarge
            placeholder="Linkdin"
            {...register("linkdin", { required: true })}
          />
          <StyledInput
            placeholder="Mail"
            {...register("mail", { required: true })}
          />
          <StyledInput
            placeholder="Phone"
            {...register("number", { required: true })}
          />
        </GridDiv>
      </div>
    </SectionDiv>
  );
}
