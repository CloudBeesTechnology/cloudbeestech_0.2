import mission from "../../assets/about/cloudbeestech_mission.jpg";

export const Mission = () => {
  return (

      <section className="screen-size my-10">
        <h5 className="title text-darkgrey mb-10">
          <span className="text-primary"> Our</span> Mission
        </h5>
        
        <section className="flex max-[1100px]:flex-col sm:gap-10 lg:my-20">
          <div  className="flex-1 flex flex-col gap-5 px-2">
            <h2 className="text-2xl max-[1100px]:text-center font-semibold text-secondary" >CloudBees Tech bring you ideas to life.</h2>
            <p className="text-lg max-[1100px]:desc font-light text-secondary max-[1100px]:w-full w-[90%] ">
              "The way to success is a winding path, often marked by
              determination, innovation, and resilience. It's about setting
              clear goals, forging a relentless commitment, and adapting to
              challenges as opportunities. Success thrives on learning from
              failures, seeking continuous improvement, and embracing change.
              It's a journey where passion fuels progress, and every step
              forward brings you closer to your definition of triumph."
            </p>
           {/* <div className="max-[1100px]:center mb-10"> <button className="btn-1">Know more</button></div> */}
          </div>
          <div className="flex-1 center max-sm:mt-7">
            <img className="object-cover w-full max-w-[500px]" src={mission} alt="mission image not found" />
          </div>
        </section>
        <p className="text-[transparent] text-center">CloudBees</p>
      </section>
  
  );
};

