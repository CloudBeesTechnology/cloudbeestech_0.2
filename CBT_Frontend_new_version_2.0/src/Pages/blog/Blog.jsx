import { Outlet, useLocation } from "react-router-dom";
import { CommonHome } from "../../Components/CommonHome";
import { useEffect } from "react";

export const Blog = () => {
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
        firstTitle="Don't Just Scroll, Learn"
        secondTitle="Discover Valuable Content on Our Blog"
        desc="Delve into captivating narratives, thought-provoking insights, and expertly curated content that ignites curiosity and fosters meaningful conversations."
      />
      <Outlet />
    </>
  );
};
