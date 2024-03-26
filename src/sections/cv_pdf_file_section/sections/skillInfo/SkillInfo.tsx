import { useContext } from "react";
import { GoDotFill } from "react-icons/go";
import { Context } from "../../../../context";
import { TSkillDataItem } from "../../../../types";


export function SkillsInfo() {
  const { skillData } = useContext(Context);
  return (
    <div>
      <h3 className=" font-[500] text-[14px] tracking-[4px]">
        SKILLS :
      </h3>
      <ul>
        {skillData.map((skill: TSkillDataItem, index) => (
          <li className="flex items-center font-[600] text-[12px] text-[#f2f2f2]" key={index}>
           <GoDotFill size="8px"/> {skill.skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
