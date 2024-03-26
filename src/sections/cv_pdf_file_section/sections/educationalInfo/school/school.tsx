import { useContext } from "react";
import { Context } from "../../../../../context";

export function School() {
  const { schoolData } = useContext(Context);
  return (
    <div className="flex flex-col font-[600] text-[12px]">
      <div className="flex justify-between">
        <p className=" flex items-center ">
          <span className="text-[#a6a6a6]">
            school :{" "}
            <span className="text-[black]">{schoolData.school}</span>
          </span>
        </p>
        <p>
          {schoolData.schoolStart} / {schoolData.schoolEnd}
        </p>
      </div>
      <p>
        {schoolData.schoolDegree && (
          <span className="text-[#a6a6a6]">
            Degree :{" "}
            <span className="text-[black]">{schoolData.schoolDegree}</span>
          </span>
        )}
      </p>
    </div>
  );
}
