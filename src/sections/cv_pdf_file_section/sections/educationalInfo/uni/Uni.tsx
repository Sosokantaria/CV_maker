import { TUniDataItem } from "../../../../../types";

export function UniFile({
  university,
  uniDegree,
  uniStart,
  uniEnd,
}: TUniDataItem) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <h3 className="font-[600] text-[12px] text-[#a6a6a6] flex">
          university :{" "}
          <p className="text-[12px] text-[black] font-[600]">{university}</p>
        </h3>
        <div className="flex">
          <p className="text-black  text-[12px] font-[600] flex gap-1">
            {uniStart} /{uniEnd ? <span>{uniEnd}</span> : <span>present</span>}
          </p>
        </div>
      </div>
      <h3 className="font-[600] text-[12px] text-[#a6a6a6] flex">
        degree :{" "}
        <p className="text-[12px] text-[black] font-[600]">{uniDegree}</p>
      </h3>
    </div>
  );
}
