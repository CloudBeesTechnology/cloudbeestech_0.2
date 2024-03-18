import { TeamDetail } from "./TeamDetail";
import { TeamCardDesign } from "../../Components/TeamCardDesign";

export const UsaTeam = () => {
  return (
    <section className="mt-16">
      <div className="h-2 w-full bg-secondary relative">
        <h1 className="absolute left-[20%] max-[500px]:left-2/4 max-[500px]:-translate-x-1/2 top-2/4 -translate-y-1/2 bg-white px-4 text-2xl text-primary font-bold max-sm:text-lg">
          USA Frontiers
        </h1>
      </div>
      <section className="screen-size mx-auto">
      <div className="grid items-center justify-evenly grid-cols-[repeat(1,minmax(270px,350px))] max-w-full md:grid-cols-[repeat(2,minmax(300px,350px))] justify-items-center  gap-14 my-20">
            {TeamDetail.slice(0, 2).map((value, index) => {
              return (
               <TeamCardDesign name={value.name} designation={value.designation} skill={value.skill} link={value.link} img={value.img} />
              );
            })}
          </div>

      </section>
      
    </section>
  );
};
