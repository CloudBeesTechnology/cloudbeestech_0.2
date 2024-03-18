import { useEffect, useState } from "react";
import { CommonHome } from "../../Components/CommonHome";
import { JobPosition } from "./JobPosition";
import { useLocation } from "react-router-dom";

export const Career = () => {
  const [title,setTitle]=useState(true)
  const path = useLocation();
    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [path]);
  return (
    <section>
      <CommonHome
      // FTfirstLetter="J"
      //   firstTitle="oin"
      //   STsecondLetter=" O"
      //   secondTitle="ur"
      //   TTthirdLetter="T"
      //   thirdTitle="ech"
      //   TTfourLetter=" C"
      //   fourTitle="ommunity"
      firstTitle="Join our tech community"
        // secondTitle="experiences for over 30+ projects" 
        desc="Make yourself a member of our team and strive ahead in your career. Where Careers Align Perfectly"
        btn="Stay with us"
        // topic={title}
      />
      <JobPosition />
    </section>
  );
};
