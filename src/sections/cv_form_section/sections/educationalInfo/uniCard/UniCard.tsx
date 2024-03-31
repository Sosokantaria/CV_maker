import { AiOutlinePlus } from "react-icons/ai";
import {
  GridDiv,
  H3Title,
  StyledButton,
  StyledInput,
  StyledInputLarge,
} from "../../../../../components/styledComponents";
import { IoSchoolOutline } from "react-icons/io5";
import { HiOutlineTrash } from "react-icons/hi";
import { TUniDataItem } from "../../../../../types";
import { useContext, useEffect } from "react";
import { Context } from "../../../../../context";
import uniqid from "uniqid";
import { useFormContext } from "react-hook-form";

export function UniCard({ id, index }: TUniDataItem) {
  const newId = uniqid();
  const { uniData, setUniData } = useContext(Context);
  const { watch, register } = useFormContext();
  const data = watch([
    `university${id}`,
    `uniDegree${id}`,
    `uniStart${id}`,
    `uniEnd${id}`,
  ]);

  const handleAddUni = () => {
    const newUni = {
      id: newId,
      index: index,
      university: data[0] ,
      uniDegree: data[1] ,
      uniStart: data[2] ,
      uniEnd: data[3] ,
    };
    setUniData((prev) => [...prev, newUni]);
  };

  // add new uni section

  const hendelDeleteUni = (id: string) => {
    const cencelUniData = (idToRemove: string) => {
      const newUniData = uniData.filter(
        (uni: TUniDataItem) => uni.id !== idToRemove
      );
      setUniData(newUniData);
    };
    cencelUniData(id);
  };

  useEffect(() => {
    // update each uni in uniData array
    const updateUniData = uniData.map((uni: TUniDataItem) => {
      if (uni.id === id) {
        return {
          id: uni.id,
          index: index,
          university: data[0] ,
          uniDegree: data[1] ,
          uniStart: data[2] ,
          uniEnd: data[3] ,
        };
      }
      return uni; // return unchanged uni if id doesn't match
    });
    setUniData(updateUniData);
  }, [...data]);
  return (
    <div className="flex flex-col gap-3 ">
      <div className="flex justify-between">
        <H3Title>
          <IoSchoolOutline />
          University
        </H3Title>
        {uniData.length > 1 && (
          <StyledButton type="button" onClick={() => hendelDeleteUni(id)}>
            <HiOutlineTrash />
          </StyledButton>
        )}
      </div>
      <GridDiv>
        <StyledInputLarge
          placeholder="Your University"
          {...register(`university${id}`, { required: true })}
        />
        <StyledInputLarge
          placeholder="Your Degree"
          {...register(`uniDegree${id}`, { required: true })}
        />
        <StyledInput
          type="date"
          placeholder="start"
          {...register(`uniStart${id}`, { required: true })}
        />
        <StyledInput
          type="date"
          placeholder="end"
          {...register(`uniEnd${id}`)}
        />
      </GridDiv>
      {uniData.length < 3 && (
        <StyledButton type="button" onClick={handleAddUni}>
          <AiOutlinePlus />
        </StyledButton>
      )}
    </div>
  );
}
