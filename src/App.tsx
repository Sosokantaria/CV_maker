import { FormProvider, useForm } from "react-hook-form";
import { CvFormSection } from "./sections/cv_form_section";
import { CvPdfFileSection } from "./sections/cv_pdf_file_section";
import { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Context } from "./context";

function App() {
  const methods = useForm();
  const componentRef = useRef(null); // Ref for CV_file component
  const{personalData}=useContext(Context)
  const {name,lastName}=personalData

  // Call useReactToPrint hook directly inside the component
  const handlePrint = useReactToPrint({
    documentTitle: `${name} ${lastName}'s resume`,
    removeAfterPrint: true,
  });

  // Define onSubmit function
  const onSubmit = () => {
    handlePrint(null, () => componentRef.current);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="bg-[#000] w-full  flex justify-around py-[20px]  ">
          <div className="w-[35%] h-[1132px] flex">
            <CvFormSection />
          </div>
          <div ref={componentRef} className=" w-[803px] h-[1132px]  rounded-lg ">
            <CvPdfFileSection />
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default App;
