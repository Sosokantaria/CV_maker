import { BsGithub } from "react-icons/bs";
import { H2Title, SectionDiv, StyledLargeP } from "../../../../components/styledComponents";
import { MdSaveAlt } from "react-icons/md";

export function HeadLineSection() {
  return (
    <SectionDiv>
      <div className="w-[100%] flex  justify-between">
        <H2Title>CV Creator</H2Title>
        <div className="flex justify-between gap-2">
          <button
            type="submit"
            className="max-w-[300px] min-w-[100px] bg-[#27b394] rounded-xl  text-xl flex justify-center gap-1 items-center font-sans"
          >
            <MdSaveAlt />
            <StyledLargeP>Save</StyledLargeP>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-start w-full text-white font-bold gap-4">
        <StyledLargeP>An application by :</StyledLargeP>
        <a
          href="https://github.com/Sosokantaria"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2c2c2c] font-sans"
        >
          <BsGithub />
          <StyledLargeP>Sosokantaria</StyledLargeP>
        </a>
      </div>
    </SectionDiv>
  );
}
