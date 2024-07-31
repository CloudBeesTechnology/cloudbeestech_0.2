import about from "../../assets/about/cloudbeestech_about.png";

export const AboutUs = () => {
  return (
 
      <section className="screen-size my-10 md:my-20">
        <h3 className="title text-darkgrey mb-8">
          <span className="text-primary"> About</span> Us
        </h3>
        <section className="flex items-center max-[1100px]:flex-col sm:gap-10">
          <div className="flex-1 center">
            <img src={about} alt="aboput image not found" />
          </div>
          <div className="flex-1 center flex-col gap-5">
            <p className="sub-desc max-[1100px]:desc font-light text-secondary my-5 px-2">
              CloudBees Tech is a bridge that connects businesses. Clients bring
              their projects to us, and we deliver the solutions. We offer a
              multitude of benefits, making your success our priority. They're
              forging a partnership with a team that's dedicated to their
              growth. Our reputation is built on the bedrock of trust,
              excellence, and reliability. CloudBees Tech clients have witnessed
              the impact of our collaborative efforts, and we're proud to have
              played a role in their success stories. We understand the
              intricacies of your industry, and we're constantly evolving to
              stay ahead of the curve.
            </p>
            {/* <button className="btn-1">Know more</button> */}
          <p className="text-[transparent] text-center">CloudBees</p>
          </div>
        </section>
      </section>
  
  );
};
