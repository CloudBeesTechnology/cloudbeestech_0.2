import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactSchema } from "../../Components/Validation";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../SecretKey.jsx";
import { SubmitSuccessful } from "./SubmitSuccessful.jsx";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(ContactSchema) });
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const onSubmit = handleSubmit(() => {
    try {
      const ServiceID = SERVICE_ID;
      const TemplateID = TEMPLATE_ID;
      const PublicKey = PUBLIC_KEY;
      emailjs.sendForm(ServiceID, TemplateID, form.current, PublicKey);

      reset({
        name: "",
        email: "",
        phone: "",
        subject: "",
        msg: "",
      });
    } catch (error) {
      console.log(error);
    }
  });
  function DataSubmit(e) {
    e.preventDefault();
    onSubmit();
  }
  return (
    <form
      ref={form}
      className="border-secondary border rounded-lg py-5 px-4 mx-2 sm:px-8"
    >
      <section className="flex sm:justify-between gap-5 sm:gap-10 flex-wrap">
        <div className="w-full sm:flex-1">
          <label htmlFor="name" className="text-secondary text-lg font-medium">
            Name <sup className="text-[red]">*</sup>
          </label>
          <div className="form-input">
            <input
              className="outline-none py-2 w-full text-grey text-sm font-light"
              id="name"
              type="text"
              placeholder="Enter your name"
              {...register("name")}
            />
          </div>
          <p className="text-[red] mt-2 text-sm">{errors.name?.message}</p>
        </div>
        <div className="w-full sm:flex-1">
          <label htmlFor="email" className="text-secondary text-lg font-medium">
            Email address <sup className="text-[red]">*</sup>
          </label>
          <div className=" form-input">
            <input
              className="outline-none py-2 w-full text-grey text-sm font-light"
              id="email"
              type="email"
              placeholder="Enter your email address"
              {...register("email")}
            />
          </div>
          <p className="text-[red] mt-2 text-sm">{errors.email?.message}</p>
        </div>
      </section>
      <section className="flex flex-wrap gap-5 my-5 sm:justify-between sm:gap-10">
        <div className=" w-full  sm:flex-1">
          <label htmlFor="phone" className="text-secondary text-lg font-medium">
            {" "}
            Phone number <sup className="text-[red]">*</sup>
          </label>
          <div className="form-input">
            <input
              className="outline-none py-2 w-full text-grey text-sm font-light"
              id="phone"
              type="tel"
              placeholder="Enter your contact number"
              {...register("phone")}
            />
          </div>
          <p className="text-[red] mt-2 text-sm">{errors.phone?.message}</p>
        </div>
        <div className=" w-full  sm:flex-1">
          <label
            htmlFor="subject"
            className="text-secondary text-lg font-medium"
          >
            Subject <sup className="text-[red]" >*</sup>
          </label>
          <div className="form-input ">
            <input
              className="outline-none py-2 w-full text-grey text-sm font-light"
              id="subject"
              type="text"
              placeholder="Applying for"
              {...register("subject")}
            />
          </div>
          <p className="text-[red] mt-2 text-sm">{errors.subject?.message}</p>
        </div>
      </section>
      <section className="flex max-sm:justify-center my-5 w-full">
        <div className="w-full">
          <label htmlFor="msg" className=" text-secondary text-lg font-medium">
            Message
          </label>
          <div className="form-input">
            <textarea
              id="msg"
              className="outline-none py-2 resize-none w-full text-grey"
              rows="2"
              {...register("msg")}
            ></textarea>
          </div>
        </div>
      </section>
      <section className=" mt-7 flex-wrap gap-5 flex">
        <button className="btn-1  bg-primary font-medium" onClick={DataSubmit}>
          Send
        </button>
        {/* <button className="btn-2 border-secondary  text-secondary font-medium">Request for quotes</button> */}
      </section>
      {/* Adding Successful page */}
      {/* {success && <SubmitSuccessful />} */}
    </form>
  );
};
