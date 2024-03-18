import { Route, Routes, useLocation } from "react-router-dom";
import { Touch } from "../../Components/Touch";
import { useEffect } from "react";
import { CommonHome } from "../../Components/CommonHome";
import { OurProject } from "./ourProject/OurProject";

export const Project = () => {
  const path = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [path]);
  return (
    <>
      <CommonHome
        firstTitle="We have design"
        secondTitle="experiences for over 30+ projects"
        desc="At CloudBees Tech, we take pride in our diverse portfolio of projects spanning various industries and sectors. Our team's expertise and dedication have led to successful outcomes and satisfied clients"
        btn="View all projects"
      />
      <OurProject />
      {/* <Touch /> */}
    </>
  );
};
