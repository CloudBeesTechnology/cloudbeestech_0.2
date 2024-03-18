import { ServiceDetails } from "../service/ourServices/ServiceDetails";

export const HomeService = () => {
  return (
    
      <section className="screen-size my-10 md:my-20 center flex-col">
        <h2 className="title text-darkgrey">
          <span className="text-primary">Our</span> Services
        </h2>
        <p className="desc font-light text-secondary my-5 md:w-[70%] px-2">
          Delivering top-notch services and ensuring timely project completion,
          setting the standard for excellence in the industry.
        </p>
        <section className="center flex-wrap sm:my-10">
          {ServiceDetails.slice(0,6).map((val, index) => {
     
            return (
              <div
                key={index}
                className="center flex-col md:w-1/2 w-full min-[850px]:h-[300px] sm:p-10 p-5 gap-4 text-secondary border-litegrey max-md:custom-border odd:relative md:even:border-l border-b md:custom-border-none"
              >
                <img
                  className="text-primary"
                  src={val.icons}
                  alt={`${val.title} not found`}
                />
                <h3 className="sub-title text-secondary">{val.title}</h3>
                <p className=" desc font-light text-secondary">{val.content}</p>
                <div
                
                  className={
                  (  index % 2 === 0 && index < 4)
                      ? "block absolute -right-10 -bottom-8 max-md:hidden"
                      : "hidden"
                  }
                >
                  <img src={val.image} alt="not found" />
                </div>
              </div>
            );
          })}
        </section>
      </section>

  );
};
