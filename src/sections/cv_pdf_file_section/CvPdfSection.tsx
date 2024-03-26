import { useContext } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { Context } from "../../context";
import { SkillsInfo } from "./sections/skillInfo";
import { WorkExperienceInfo } from "./sections/workExperience";
import { LanguagesInfo } from "./sections/languageInfo";
import { EducationInfo } from "./sections/educationalInfo";

export function CvPdfFileSection() {
  const { personalData } = useContext(Context);
  const { name, lastName, city, number, mail, github, linkdin } = personalData;
  return (
    <div className="bg-[#fefefe] w-[803px] h-[1132px] rounded-lg flex flex-col">
       <div className="flex flex-col h-[10vh] items-center w-full">
        <div className=" text-black h-[6vh] flex items-center gap-2 ">
          <h1 className="text-[#2e2e2e] font-[700] text-[21px] tracking-[8px]">
          {name ? name.toUpperCase() : ""}
          </h1>
          <h1 className="text-[#2e2e2e] font-[700] text-[21px] tracking-[8px]">
          {lastName ? lastName.toUpperCase() : ""}
          </h1>
        </div>
        <div className="flex gap-3">
          <div className="flex gap-1 items-center text-[black] cursor-pointer font-[400] text-[12px]">
            <SlLocationPin size="12px" />
            {city ? city.toUpperCase() : ""}
          </div>
          <div className="flex gap-1 items-center text-[black] cursor-pointer font-[400] text-[12px]">
            <FiPhone size="12px" />
            {number}
          </div>
          <div className="flex gap-1 items-center text-[black] cursor-pointer font-[400] text-[12px]">
            <MdAlternateEmail size="12px" />
            {mail}
          </div>
        </div>
      </div>
      <div className="h-[5vh] bg-[#e7e8ea] flex justify-around gap-4">
        <div className="flex gap-1 items-center text-[black] cursor-pointer font-[400] text-[12px]">
          <FaGithubSquare size="18px" />
          {github}
        </div>
        <div className="flex gap-1 items-center text-[black] cursor-pointer font-[400] text-[12px]">
          <FaLinkedin size="18px" />
          {linkdin}
        </div>
      </div>
      <div className="h-full  flex">
        <div className="bg-[#1c1c1c] h-full rounded-bl-lg w-[30%] flex flex-col justify-start items-start pt-[15px] px-[15px]">
          <div className="text-[#a6a6a6]   flex flex-col gap-[10px] justify-items-start ">
            <SkillsInfo />
            <LanguagesInfo/>
          </div>
        </div>
        <div className="bg-[#fff] text-black rounded-br-lg  h-full w-[70%] px-[15px]">
          <WorkExperienceInfo />
          <EducationInfo />
        </div>
      </div>
    </div>
  );
}
