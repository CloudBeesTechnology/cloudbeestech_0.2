import { useLocation } from "react-router-dom";

import { useEffect } from "react";
import { ContactUs } from "./ContactUs";

export const Contact = () => {
  const path = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [path]);
  return (
    <>
      <ContactUs />
    </>
  );
};
