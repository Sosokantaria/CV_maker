import { FormProvider, useForm } from "react-hook-form";
import { CvFormSection } from "./sections/cv_form_section";
import { CvPdfFileSection } from "./sections/cv_pdf_file_section";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function App() {
  const methods = useForm();
  const componentRef = useRef(null); // Ref for CV_file component

  // Call useReactToPrint hook directly inside the component
  const handlePrint = useReactToPrint({
    documentTitle: "Print This Document",
    removeAfterPrint: true,
  });

  // Define onSubmit function
  const onSubmit = () => {
    handlePrint(null, () => componentRef.current);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="bg-[#000] w-full h-[1152px] flex justify-around  ">
          <div className="w-[35%] h-full mt-[10px] flex">
            <CvFormSection />
          </div>
          <div ref={componentRef} className=" w-[803px] h-[1132px] my-[10px] rounded-lg ">
            <CvPdfFileSection />
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default App;
