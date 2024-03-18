import health from "../../assets/home/latest_project/project_1.png";
import electric from "../../assets/home/latest_project/project_2.png";

export const LatestProject = () => {

  return (
  
      <section className="screen-size center flex-col my-10">
        <h2 className="title text-darkgrey">
          {" "}
          <span className="text-primary">Latest</span> Projects
        </h2>
        <p className="desc font-light text-secondary my-5 md:w-[70%] px-2">
          In today's fast-paced business landscape, technology is the driving
          force behind innovation, efficiency, and growth. From cloud computing
          and data analytics to artificial intelligence and automation,
          businesses are increasingly relying on technology to streamline
          operations.
        </p>
        <section className="center flex-col gap-20 my-14 md:px-10 px-3">
          <div className="center max-[1000px]:flex-col gap-10">
            <div className="w-full h-[400px] flex-1">
              <img className="w-full object-cover h-full rounded-xl" src={health} alt="health image not found" />
            </div>
            <article className="flex-1 text-secondary">
              <h3 className="text-[18px] md:text-xl font-semibold  my-3">HealthKart</h3>
              <p className="para md:w-[80%]">
                HealthKart is a trusted house of brands, being India’s no. 1
                sports nutrition and vitamin e-commerce platform. They offer a
                comprehensive range of products dedicated to a wide audience for
                their wellness, and fitness needs. We have redesigned their
                website and app with many new features that help users shop,
                consult as well as track their lifestyle from a health & fitness
                perspective.
              </p>
            </article>
          </div>
          <div className="center max-[1000px]:flex-col gap-5">
            <article className=" text-secondary flex flex-col gap-3">
              <h4 className="text-xl font-semibold  my-3">NeuGo</h4>
              <p className="para md:w-[80%]">
                Launched by GreenCell Mobility, NeuGo is India’s first intercity
                electric coach service.
              </p>
              <p className="para md:w-[80%]">
                NueGo aims to promote usage of sustainable public transportation
                with zero tailpipe emission on the inter-city routes. It is
                built for new-aged travellers to offer them an easy booking
                experience, exceptional ride comfort and in-cabin experience.
              </p>
            </article>
            <div  className="min-w-[250px] w-full md:h-[400px]">
              <img className="w-full object-cover h-full rounded-xl" src={electric} alt="electric image not found" />
            </div>
          </div>
        </section>
        <div className="md:mt-16">
            <button className="btn-1 text-secondary">View all projects</button>
        </div>
      </section>
   
  );
};
