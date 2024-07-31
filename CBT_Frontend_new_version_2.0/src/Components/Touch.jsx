import { Link } from "react-router-dom";

export const Touch = () => {
  
  return (

      <section className="screen-size center flex-col gap-10 my-10 sm:my-28">
        <h2 className="text-darkgrey title leading-normal">
          <span className="text-primary ">Ready</span> to craft digital
          <br />
          experiences that excite & inspire
        </h2>
        <Link to="/contact" className="btn-1 text-secondary ">Let's Talk</Link>
        <p className="text-[transparent] text-center">CloudBees</p>
      </section>
   
  );
};
