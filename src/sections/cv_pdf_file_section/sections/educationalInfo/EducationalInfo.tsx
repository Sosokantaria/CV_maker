import { useContext } from "react";
import { School } from "./school";
import { UniFile } from "./uni";
import { Context } from "../../../../context";
import { TUniDataItem } from "../../../../types";

export function EducationInfo() {
  const { uniData } = useContext(Context);

  return (
    <div>
      <h3 className=" font-[600] text-[14px] tracking-[4px] mt-[10px] ">
        EDUCATION
      </h3>
      <div className="bg-[gray] h-[2px] w-[50px]  rounded-lg" />
      <div className="flex flex-col gap-1">
        {uniData.map((uni: TUniDataItem) => (
          <UniFile
            key={uni.id}
            uniDegree={uni.uniDegree}
            university={uni.university}
            uniStart={uni.uniStart}
            uniEnd={uni.uniEnd}
            id={uni.id}
            index={uni.id}
          />
        ))}
        <School />
      </div>
    </div>
  );
}
