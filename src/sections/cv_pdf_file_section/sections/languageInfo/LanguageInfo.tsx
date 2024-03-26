import { useContext } from "react";
import { GoDotFill } from "react-icons/go";
import { Context } from "../../../../context";
import { TLanguagesItem } from "../../../../types";

export function LanguagesInfo() {
  const { languageData } = useContext(Context);
  return (
    <div>
      <h3 className=" font-[500] text-[14px] tracking-[4px]">LANGUAGES :</h3>
      <ul>
        {languageData.map((lang: TLanguagesItem, index) => (
          <li
            className="flex items-center font-[600] text-[12px] text-[#f2f2f2]"
            key={index}
          >
            <GoDotFill size="8px" /> {lang.language.toUpperCase()} - {lang.category}
          </li>
        ))}
      </ul>
    </div>
  );
}
