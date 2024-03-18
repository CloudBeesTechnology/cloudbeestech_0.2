import * as yup from "yup";

export const ContactSchema = yup.object().shape({
  name: yup.string().required("Name is mandatory"),
  email: yup.string().email().required("Please enter valid email"),
  phone:yup
  .string()
  .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
  .required("Phonenumber is mandatory"),
  subject: yup.string().required("Subject is mandatory"),
  msg: yup.string(),
});


export const ApplicationSchema = yup.object().shape({
    firstName: yup.string().required("Firstname is mandatory"),
    lastName: yup.string().required("Lastname is mandatory"),
    email: yup.string().email().required("Please enter valid email"),
    phone: yup
      .string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phonenumber is mandatory"),
    // resume: yup
    // .mixed()
    // .test("fileType", "Invalid file type. Only PDF, DOC, or DOCX files are allowed.", (value) => {
    //   if (!value.length) return true; // No file selected
    //   const validFormats = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    //   return validFormats.includes(value[0].type);
    // })
    // .required("Resume is required"),
    choice:yup.string().required("Choose atleast one")
  });