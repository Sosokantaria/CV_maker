import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

export function CvPdfFileSection(){
    return   <div className="bg-[#fefefe] w-full h-full rounded-lg flex flex-col">
    <div className="flex flex-col h-[10vh] items-center">
      <div className=" text-black h-[6vh] flex items-center gap-2 ">
        <h1 className="text-[#2e2e2e] font-[700] text-[21px] tracking-[8px]">
        <span>name</span> 
        </h1>
        <h1 className="text-[#2e2e2e] font-[700] text-[21px] tracking-[8px]">
        <span>lastname</span> 
        </h1>
      </div>
      <div className="flex gap-3">
        <div className="flex gap-1 items-center text-[black] cursor-pointer font-[400] text-[12px]">
          <SlLocationPin size="12px" />
          <span>city</span> 
        </div>
        <div className="flex gap-1 items-center text-[black] cursor-pointer font-[400] text-[12px]">
          <FiPhone size="12px" />
          <span>number</span> 
        </div>
        <div className="flex gap-1 items-center text-[black] cursor-pointer font-[400] text-[12px]">
          <MdAlternateEmail size="12px" />
          <span>mail</span>  
        </div>
      </div>
    </div>
    <div className="h-[5vh] bg-[#e7e8ea] flex justify-around gap-4">
      <div className="flex gap-1 items-center text-[black] cursor-pointer font-[400] text-[12px]">
        <FaGithubSquare size="18px" />
        <span> github link</span>
      </div>
      <div className="flex gap-1 items-center text-[black] cursor-pointer font-[400] text-[12px]">
        <FaLinkedin size="18px" />
        <span> linkdin link</span> 
      </div>
    </div>
    <div className="h-full  flex">
      <div className="bg-[#1c1c1c] h-full rounded-bl-lg w-[30%] flex flex-col justify-start items-start pt-[15px] px-[15px]">
        <div className="text-[#a6a6a6]   flex flex-col gap-[10px] justify-items-start ">
        <span>skills section</span>
        <span>  languages section</span> 
        </div>
      </div>
      <div className="bg-[#fff] text-black rounded-br-lg flex flex-col  h-full w-[70%] px-[15px]">
      <span>work experiences section</span> 
      <span>education section</span>
      </div>
    </div>
  </div>
}