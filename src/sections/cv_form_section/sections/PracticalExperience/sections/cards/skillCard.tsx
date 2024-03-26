import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { TSkillDataItem } from "../../../../../../types";
import { HiOutlineTrash } from "react-icons/hi2";
import {
  StyledButton,
  StyledInput,
} from "../../../../../../components/styledComponents";

export function SkillCard({ skill, skills, setSkills, index, id }: any) {
  const filteredSkills = skills.filter((exp: any) => exp.id !== skill.id);
  const { register, watch } = useFormContext();
  const data = watch([`skill ${id}`]);

  useEffect(() => {
    // update each skill in skillData array
    const updateSkillData = skills.map((skill: TSkillDataItem) => {
      if (skill.id === id) {
        return { id: id, skill: data[0] };
      }
      return skill; //return unchanged item if ID doesn't match
    });
    setSkills(updateSkillData);
  }, [...data]);

  return (
    <div className="flex justify-between items-center gap-3">
      <StyledInput
        placeholder={`skill ${index + 1}`}
        {...register(`skill ${id}`, { required: true })}
      />
      {skills.length > 1 && (
        <StyledButton type="button" onClick={() => setSkills(filteredSkills)}>
          <HiOutlineTrash />
        </StyledButton>
      )}
    </div>
  );
}
