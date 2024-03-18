import { ServiceDetails } from "./ServiceDetails";

export const OurServices = () => {
  return (
    <section className="screen-size my-10 md:my-20 center flex-col">
      <div className="center flex-col">
        <h2 className="title text-darkgrey">
          <span className="text-primary">Helping </span> you grow at every step
        </h2>
        <p className="desc font-light text-secondary my-5 md:w-[70%] px-2">
          Unlock the full potential of your business with CloudBees Tech. Our
          expert team evaluates your business, processes, and technology to
          provide tailored recommendations that enhance your competitive edge.
          Whether you need Business Specific Application Development, CMS &
          e-commerce Applications, Mobile Applications, Business Intelligence
          Applications, or Blockchain Applications, our niche experts deliver
          unparalleled customer satisfaction to drive your business forward.
        </p>
      </div>
      <h3 className="title text-darkgrey mt-10">
        <span className="text-primary">Our</span> Services
      </h3>

      <section className="center flex-wrap my-10">
        {ServiceDetails.map((val, index) => {
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
              <h4 className="sub-title text-secondary">{val.title}</h4>
              <p className=" desc font-light text-secondary">{val.content}</p>
              <div
                className={
                  index % 2 === 0 && index !== ServiceDetails.length - 2
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
