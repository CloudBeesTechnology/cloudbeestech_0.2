import { useEffect, useState } from "react";
import { CommonHome } from "../../Components/CommonHome";
import { AboutUs } from "./AboutUs";
import { IndiaTeam } from "./IndiaTeam";
import { Mission } from "./Mission";
import { UsaTeam } from "./UsaTeam";
import { useLocation } from "react-router-dom";
import { CEO } from "./ceoQuotes/CEO";

export const About = () => {

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
        firstTitle="Unveiling CBT a Narrative in Progress"
        desc="Weaving Words, Bridging Worlds"
        btn="Know us"
      />
      <AboutUs/>
      <Mission/>
      <CEO/>
      {/* <UsaTeam/> */}
      <IndiaTeam/>

    </section>
  );
};
