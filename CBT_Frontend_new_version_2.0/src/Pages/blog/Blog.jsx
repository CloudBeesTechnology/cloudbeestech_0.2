import { Outlet } from "react-router-dom";
import { CommonHome } from "../../Components/CommonHome";

export const Blog = () => {
  return (
    <>
      <CommonHome
        firstTitle="How to  choose your"
        secondTitle="Programming Language / Tech Stack"
        desc="Welcome to our blog, where every post is a journey into the realms of inspiration, knowledge, and discovery. Delve into captivating narratives, thought-provoking insights, and expertly curated content that ignites curiosity and fosters meaningful conversations."
      />
      <Outlet />
    </>
  );
};
