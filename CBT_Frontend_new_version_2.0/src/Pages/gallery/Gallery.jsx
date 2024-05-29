import React, { useEffect } from "react";
import { CommonHome } from "../../Components/CommonHome";
import { useLocation } from "react-router-dom";
import { MemoriesOfCBT } from "./MemoriesOfCBT";

export const Gallery = () => {
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
        firstTitle="Capturing Moments, Creating Memories"
        desc="Each piece on display tells a unique story, inviting you to immerse yourself in the beauty of life's most precious encounters."
        btn="Stay with us"
      />
      <MemoriesOfCBT/>
    </>
  );
};
