import { useLocation } from "react-router-dom";
import { CommonHome } from "../../Components/CommonHome";
import { Touch } from "../../Components/Touch";
import { OurServices } from "./ourServices/OurServices";
import { useEffect } from "react";
import { OurClient } from "../../Components/client/OurClient";

export const Services = () => {
  const path = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [path]);
  return (
    <div>
      <CommonHome
        firstTitle="Comprehensive modernization of an Application"
        desc="Our end-to-end approach enhances operations, accelerates effectiveness, eliminates of technical issues, reduction in cost and updates apps for the future"
        btn="View all services"
      />
      <OurServices/>
      {/* <OurClient/> */}
      <Touch/>
    </div>
  );
};
