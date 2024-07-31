import { OTDetails } from "../technologies/OTDetails";

export const HomeTechnologies = () => {
  return (
    <section className="screen-size my-10 md:my-20 center flex-col">
      <h2 className="title max-[360px]:text-3xl text-darkgrey">
        <span className="text-primary">Our</span> Technologies
      </h2>
      <p className="text-[transparent] text-center">CloudBees</p>
      <div className="center sm:justify-evenly flex-wrap gap-10 sm:my-16 my-10">
        {OTDetails.map((val, i) => {
          return ( 
            <div key={i} className="flex flex-col border border-primary shadow-xl rounded-lg hover:shadow-primary hover:shadow-lg hover:scale-110 hover:transition-all hover:duration-500" >
              <div className="h-60 px-5 w-full center flex-wrap ">
                <img className={`object-cover w-full max-w-[200px] `} src={val.logo} alt={`${val.title} not found`} />
              </div>
              <h3 className="sub-title text-grey p-2">{val.title}</h3>
            </div>
          );
        })}
      </div>
      <p className="text-[transparent] text-center">CloudBees</p>
    </section>
  );
};