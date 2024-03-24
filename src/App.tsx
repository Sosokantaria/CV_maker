import { CvFormSection } from "./sections/cv_form_section"
import { CvPdfFileSection } from "./sections/cv_pdf_file_section"


function App() {

  return (
    <form >
    <div className="bg-[#000] w-full h-[862px] flex justify-around  ">
      <div className="w-[35%] h-[852px] mt-[10px] flex">
        <CvFormSection />
      </div>
      <div className=" w-[595px] h-[842px] my-[10px] rounded-lg ">
        <CvPdfFileSection />
      </div>
    </div>
  </form>
  )
}

export default App
