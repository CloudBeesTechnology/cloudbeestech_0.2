import { Outlet } from "react-router-dom";
import { CommonHome } from "../../Components/CommonHome";

export const Blog = () => {
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
