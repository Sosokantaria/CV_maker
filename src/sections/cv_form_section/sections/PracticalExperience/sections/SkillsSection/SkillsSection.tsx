import { useContext } from "react";
import { Context } from "../../../../../../context";
import { AiOutlinePlus } from "react-icons/ai";
import {
  H3Title,
  StyledButton,
} from "../../../../../../components/styledComponents";
import { SkillCard } from "../cards/skillCard";
import uniqid from "uniqid";
import { TSkillDataItem } from "../../../../../../types";

export function SkillsSection() {
  const id = uniqid();
  const { skillData, setSkillData } = useContext(Context);
  const addSkill = () => {
    const newSkill = {
      id: id,
      skill: "",
    };
    setSkillData((prevSkills) => [...prevSkills, newSkill]);
  };
  return (
    <div className="flex flex-col gap-3">
      <H3Title> Skills & Technologies</H3Title>
      {skillData.map((skill: TSkillDataItem, index) => (
        <SkillCard
          key={skill.id}
          id={skill.id}
          index={index}
          skill={skill}
          skills={skillData}
          setSkills={setSkillData}
        />
      ))}
      {skillData.length < 50 && (
        <StyledButton type="button" onClick={()=>addSkill()}>
          <AiOutlinePlus />
        </StyledButton>
      )}
    </div>
  );
}
