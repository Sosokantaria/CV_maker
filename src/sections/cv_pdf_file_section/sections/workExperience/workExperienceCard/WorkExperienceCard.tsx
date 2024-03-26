import { TExperienceDataItem } from "../../../../../types";

export function WorkExperienceCard({
  index,
  company,
  occupation,
  github,
  position,
  startDate,
  endDate,
}: TExperienceDataItem) {
  return (
    <div className=" flex flex-col  ">
      <div className="flex w-full justify-between">
        <h2 className="font-[500] text-[14px]  flex tracking-[4px] ">
          WORK EXPERIENCE {index + 1}
        </h2>
        <p className="text-black  text-[12px] font-[600]">
          {startDate} / {endDate}
        </p>
      </div>

      <div className="bg-[gray] h-[2px] w-[50px] rounded-lg" />
      <div className="flex justify-between">
        <h3 className="text-black  w-full font-[600] text-[12px]">
          {company && (
            <p className="text-[grey]">
              Company : <span className="text-black ">{company}</span>{" "}
            </p>
          )}
        </h3>
        <h3 className="text-black w-full text-[12px] font-[600] ">
          {position && (
            <p className="text-[grey]">
              Position : <span className="text-black ">{position}</span>
            </p>
          )}
        </h3>
      </div>
      <h3 className="text-black w-full text-[12px] font-[600]">
        {occupation && (
          <p className="text-[grey]">
            Occupation : <span className="text-black ">{occupation}</span>
          </p>
        )}
      </h3>
      <h3 className="text-black w-full text-[12px] font-[600]">
        {github && (
          <p className="text-[grey]">
            Github link : <span className="text-black ">{github}</span>
          </p>
        )}
      </h3>
    </div>
  );
}
