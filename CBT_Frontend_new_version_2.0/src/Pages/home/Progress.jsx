import { ProgressDetails } from "./ProgressDetails";
import honeycomb from "../../assets/home/progress/white_comb.svg"
export const Progress = () => {
  return (
   
      <section className="screen-size bg-gradient-2 center sm:justify-around flex-wrap gap-10 my-10 p-10 text-white rounded-lg">
        
        {ProgressDetails.map((value,i)=>{
          return(
            <div key={i}>
         {/* <div className="relative center">
          <img className="object-cover w-full max-w-[100px]" src={honeycomb} alt="honeycomb not found" />
          <h1 className="progress-title absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{value.count}</h1>
        </div> */}
        <h5 className="progress-title">{value.count}</h5>
          <p className="sub-title font-medium">{value.topic}</p>
        </div>
          )
        })}
      
      </section>
   
  );
};
