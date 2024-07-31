import { useLocation } from "react-router-dom";
import { HomeService } from "./HomeService";
import { LifeCBT } from "./LifeCBT";
import { Progress } from "./Progress";
import { useEffect, useState } from "react";
import { LatestProject } from "./LatestProject";
import { Testimonials } from "./testimonials/Testimonials";
import { Touch } from "../../Components/Touch";
import { OurClient } from "../../Components/client/OurClient";
import { CommonHome } from "../../Components/CommonHome";
import { HomeTechnologies } from "./HomeTechnologies";

export const Home = () => {
  const path = useLocation();
  const [title, setTitle] = useState(true);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [path]);
  return (
    <main>
      <CommonHome
        FTfirstLetter="E"
        firstTitle="mpowering"
        STsecondLetter="D"
        secondTitle="igital"
        TTthirdLetter="T"
        thirdTitle="ransformation"
        desc="CloudBees Tech providing smart digital solutions solving complex challenges and
    delivering innovative solutions that help our customers ahead"
        display="hidden"
        topic={title}
      />
      <HomeService />
      <Progress />
      {/* <LatestProject/> */}
      <LifeCBT />
      {/* <Testimonials/> */}
      <OurClient />
      <HomeTechnologies />
      <Touch />
      {/* {!cookies.cookiesConsent && <Cookies/>} */}
    </main>
  );
};
