import { ContactForm } from "./ContactForm";

export const ContactUs = () => {
  return (
   
    <section className="screen-size my-10">
    <h1 className="title text-darkgrey">
      <span className="text-primary">Get</span> in touch
    </h1>
    <section className="sm:my-10 my-4 flex flex-wrap justify-center gap-5">
      <div className="">
        <h2 className="text-[50px] max-md:text-center font-semibold lg:heading text-darkgrey">
          level <br />
          <span className="text-primary">up</span>
          <br /> your <br /> brand <span className="text-primary">!</span>
        </h2>
      </div>

  
     
     <ContactForm />
   

    </section>
  </section>
  )
}
