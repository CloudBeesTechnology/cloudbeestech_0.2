import comb1 from "../assets/home/home_bg/cloudbeestech_honeycombo_1.svg"
import comb2 from "../assets/home/home_bg/cloudbeestech_honeycombo_2.svg"
import comb3 from "../assets/home/home_bg/cloudbeestech_honeycombo_3.svg"
import comb4 from "../assets/home/home_bg/cloudbeestech_honeycombo_4.svg"

export const CommonHome = (props) => {
    const {firstTitle,secondTitle,desc,btn,display,topic,FTfirstLetter,STsecondLetter,thirdTitle,TTthirdLetter,TTfourLetter,fourTitle}=props
    
  return (
    <header className="bg-gradient-1 sm:py-28 relative center ">
      <div className="screen-size text-white max-sm:my-28 center flex-col gap-5">
       {topic ? ( <h1 className="sub-heading  max-sm:text-[25px] sm:leading-none">
          <span className="text-primary sm:text-[80px] ">{FTfirstLetter}</span>{firstTitle}{" "}
          <span className="text-primary sm:text-[80px]">{STsecondLetter}</span>{secondTitle}{" "}
          <span className="text-primary sm:text-[80px]">{TTthirdLetter}</span>{thirdTitle}{" "}
          <span className="text-primary sm:text-[80px]">{TTfourLetter}</span>{fourTitle}{" "}
        </h1>):( <h1 className="sub-heading max-sm:text-[25px]">{firstTitle}<br/>
        {secondTitle}
        </h1>)}
        <p className="desc text-[16px] font-light md:w-1/2 w-full px-3">
       <em>   {desc}</em>
        </p>
        {/* <button className={`${display} btn-1`}>{btn} </button> */}
      </div>
      <div className="max-sm:hidden">
        <img className="absolute bottom-0 left-28" src={comb1} alt="honeycombo_1 not found"/>
        <img className="absolute bottom-28 left-0"  src={comb2} alt="honeycombo_2 not found"/>
        <img className="absolute bottom-0 right-28"  src={comb3} alt="honeycombo_3 not found"/>
        <img className="absolute bottom-32 right-8"  src={comb4} alt="honeycombo_4 not found"/>
      </div>
    </header>
  );
};


{/* <main className="bgImage sm:h-screen center ">
<div className="screen-size text-white max-sm:my-28 center flex-col gap-5">
 {topic ? ( <h1 className="sub-heading  max-sm:text-[25px]">
    <span className="text-primary sm:text-[80px]">{FTfirstLetter}</span>{firstTitle}{" "}
    <span className="text-primary sm:text-[80px]">{STsecondLetter}</span>{secondTitle}{" "}
    <span className="text-primary sm:text-[80px]">{TTthirdLetter}</span>{thirdTitle}{" "}
    <span className="text-primary sm:text-[80px]">{TTfourLetter}</span>{fourTitle}{" "}
  </h1>):( <h1 className="sub-heading max-sm:text-[25px]">{firstTitle}<br/>
  {secondTitle}
  </h1>)}
  <p className="desc text-[16px] font-light md:w-1/2 w-full px-3">
 <em>   {desc}</em>
  </p>
  {/* <button className={`${display} btn-1`}>{btn} </button> */}
// </div>
// </main> */}