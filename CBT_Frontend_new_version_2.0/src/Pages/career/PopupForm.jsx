import { FaRegWindowClose } from "react-icons/fa";
import { PFDetails } from "./PFDetails";
import { useRef, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { ApplicationSchema } from "../../Components/Validation";
import { PUBLIC_KEY, SERVICE_ID, Job } from "../../SecretKey.jsx";
import emailjs from "@emailjs/browser";
import { ErrorMessage } from "@hookform/error-message";

export const PopupForm = (props) => {
  const [complete, setComplete] = useState(false);
  const fileInputRef = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
    watch,
  } = useForm({ resolver: yupResolver(ApplicationSchema) });
  const selectedResume = watch("resume");

  const onSubmit = handleSubmit(async (data, e) => {
    e.preventDefault();
    try {
      const ServiceID = SERVICE_ID;
      const TemplateID = Job;
      const PublicKey = PUBLIC_KEY;

      await emailjs.sendForm(
        ServiceID,
        TemplateID,
        fileInputRef.current,
        PublicKey
      );

      reset({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        choice: "",
      });

      setComplete(true);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <form
      ref={fileInputRef}
      className="fixed top-0 left-0 bg-black h-full w-full z-50 center"
    >
      <div className="screen-size bg-white max-w-[500px] flex flex-col py-5 px-5  rounded-lg">
        <div className="center justify-between mb-2">
          <h5 className="sm:title sub-desc font-semibold  text-darkgrey ">
            <span className="text-primary">Application</span> form
          </h5>
          <span className="sm:title text-xl text-grey" onClick={props.onclose}>
            {" "}
            <FaRegWindowClose />
          </span>
        </div>
        <section>
          {PFDetails.map((val, i) => {
            return (
              <div key={i} className="flex flex-col">
                <label htmlFor={val.label} className="my-2">
                  {val.label} <sup className="text-[red]">*</sup>
                </label>
                <div className="flex border border-darkgrey rounded-lg gap-5 items-center p-2 sm:w-[80%]">
                  <span className="text-primary sub-title">{val.icons}</span>
                  <input
                    className="outline-none w-full text-grey"
                    id={val.label}
                    name={val.name}
                    type={val.type}
                    placeholder={val.ph}
                    {...register(val.name)}
                  />
                </div>
                <p className="text-[red] text-sm">
                  {errors[val.name]?.message}
                </p>
              </div>
            );
          })}
        </section>

        <div className="flex flex-col">
          <label htmlFor="job" className="my-2">
            Job Designation <sup className="text-[red]">*</sup>
          </label>
          <select
            id="job"
            name="choice"
            className="border border-darkgrey rounded-lg p-2 text-grey outline-none sm:w-[80%]"
            {...register("choice")}
          >
            <option>Angular Developer</option>
            <option>Flutter Developer</option>
            <option>Python Developer</option>
          </select>
        </div>
        <div className="center mt-5">
          <button className="btn-1 rounded-lg" onClick={onSubmit}>
            Sumbit
          </button>
        </div>
      </div>
      {complete && (
        <div className="bg-liteblack center z-50 h-full absolute w-full ">
          <section className="bg-white shadow-2xl p-10 rounded-xl">
            <p>Your application is sumbited successfully.</p>
            <button
              className="bg-primary rounded-lg px-7 py-2 text-white font-bold mt-5"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Okay
            </button>
          </section>
        </div>
      )}
    </form>
  );
};

// import { FaRegWindowClose } from "react-icons/fa";
// import { PFDetails } from "./PFDetails";
// import { useRef, useState } from "react";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Controller, useForm } from "react-hook-form";
// import { ApplicationSchema } from "../../Components/Validation";
// import {
//   PUBLIC_KEY,
//   SERVICE_ID,
//   AngularTEMPLATE_ID,
// } from "../../SecretKey.jsx";
// import emailjs from "@emailjs/browser";
// import { ErrorMessage } from "@hookform/error-message";

// export const PopupForm = (props) => {
//   const [complete, setComplete] = useState(false);
//   const fileInputRef = useRef(null);
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//     reset,
//     control,
//     watch,
//   } = useForm({ resolver: yupResolver(ApplicationSchema) });
//   const selectedResume = watch("resume");
//   // const handleCustomButtonClick = () => {
//   //   fileInputRef.current.click();
//   // };

//   // const onSubmit = handleSubmit((data) => {
//   //   try {
//   //     const ServiceID = SERVICE_ID;
//   //     const TemplateID = AngularTEMPLATE_ID;
//   //     const PublicKey = PUBLIC_KEY;

//   //     emailjs
//   //       .sendForm(ServiceID, TemplateID, fileInputRef.current, PublicKey)
//   //       .then((data) => {
//   //         // if(data){
//   //         //   setSuccess(!success)
//   //         // }
//   //         console.log(data);
//   //         reset({
//   //           firstName: "",
//   //           lastName: "",
//   //           email: "",
//   //           phone: "",
//   //           resume: "",
//   //         });
//   //       });
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   //   // createApplicationForm(storeFormData);
//   //   // setComplete(true);
//   // });
//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   if (selectedFile) {
//   //     // Your file upload logic
//   //     console.log("Selected file:", selectedFile);
//   //   } else {
//   //     console.warn("No file selected");
//   //   }
//   // };

//   const onSubmit = handleSubmit(async (data,e) => {
//     e.preventDefault()
//     try {
//       const ServiceID = SERVICE_ID;
//       const TemplateID = AngularTEMPLATE_ID;
//       const PublicKey = PUBLIC_KEY;

//       await emailjs.sendForm(ServiceID, TemplateID, fileInputRef.current, PublicKey);

//       reset({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         choice: "",
//       });

//       setComplete(true);
//     } catch (error) {
//       console.log(error);
//     }
//   });

// //   const onSubmit = handleSubmit((data,e) => {
// //  e.preventDefault()
// //     reset({
// //       firstName: "",
// //       lastName: "",
// //       email: "",
// //       phone: "",
// //       choice:"",
// //       // resume: "",
// //     });
// //   });

//   return (
//     <form
//       ref={fileInputRef}
//       className="fixed top-0 left-0 bg-black h-full w-full z-50 center"
//     >
//       <div className="screen-size bg-white max-w-[500px] flex flex-col py-5 px-5  rounded-lg">
//         <div className="center justify-between mb-2">
//           <h5 className="sm:title sub-desc font-semibold  text-darkgrey ">
//             <span className="text-primary">Application</span> form
//           </h5>

//           <span className="sm:title text-xl text-grey" onClick={props.onclose}>
//             {" "}
//             <FaRegWindowClose />
//           </span>
//         </div>
//         <section>
//           {PFDetails.map((val, i) => {
//             return (
//               <div key={i} className="flex flex-col">
//                 <label htmlFor={val.label} className="my-2">
//                   {val.label} <sup className="text-[red]">*</sup>
//                 </label>
//                 <div className="flex border border-darkgrey rounded-lg gap-5 items-center p-2 sm:w-[80%]">
//                   <span className="text-primary sub-title">{val.icons}</span>
//                   <input
//                     className="outline-none w-full text-grey"
//                     id={val.label}
//                     name={val.name}
//                     type={val.type}
//                     placeholder={val.ph}
//                     {...register(val.name)}
//                   />
//                 </div>
//                 <p className="text-[red] text-sm">
//                   {errors[val.name]?.message}
//                 </p>
//               </div>
//             );
//           })}
//         </section>

//         <div className="flex flex-col">
//           <label htmlFor="job" className="my-2">
//             Job Designation <sup className="text-[red]">*</sup>
//           </label>
//           <select
//             id="job" name="choice"
//             className="border border-darkgrey rounded-lg p-2 text-grey outline-none sm:w-[80%]"
//             {...register("choice")}
//           >
//             <option>Angular Developer</option>
//             <option>Flutter Developer</option>
//             <option>Python Developer</option>
//           </select>
//         </div>

//         {/* resume attachment */}

//         {/* <div>
//           <label className="mt-2">
//             Resume <span className="text-[red]">*</span>
//           </label>
//           <Controller
//             type="file"
//             name="resume"
//             control={control}
//             defaultValue={null}
//             render={({ field }) => (
//               <>
//                 <input
//                   className="hidden"
//                   id="resume"
//                   type="file"
//                   accept=".pdf,.doc,.docx"
//                   onChange={(e) => {
//                     field.onChange(e.target.files);
//                   }}
//                 />
//               </>
//             )}
//           ></Controller>

//           <div className="flex flex-col ">
//             <div>
//               <button
//                 type="button"
//                 className="btn-2 text-sm font-light border text-secondary my-2"
//                 onClick={() =>
//                   document.querySelector('input[type="file"]').click()
//                 }
//               >
//                 Upload resume
//               </button>
//             </div>
//             {selectedResume && selectedResume.length > 0 && (
//               <p className="text-grey mb-2 text-sm ">
//                 {" "}
//                 {selectedResume[0].name}
//               </p>
//             )}
//             <span className="para text-xs ml-3">PDF,DOC,DOCX</span>

//             <p className="text-[red] text-sm ">{errors.resume?.message}</p>
//           </div>
//         </div> */}
//         <div className="center mt-5">
//           <button
//             className="btn-1 rounded-lg"
//              onClick={onSubmit}
//           >
//             Sumbit
//           </button>
//         </div>
//       </div>
//       {complete && (
//         <section className="bg-white shadow-2xl p-10 rounded-xl">
//           <p>Your application is sumbited successfully.</p>
//           <button
//             className="bg-primary rounded-lg px-7 py-2 text-white font-bold mt-5"
//             onClick={() => {
//               window.location.href = "/";
//             }}
//           >
//             Okay
//           </button>
//         </section>
//       )}
//     </form>
//   );
// };
