import { useEffect, useState } from "react";
import logo from "../../assets/logo/logo_1.png";
import nameLogo from "../../assets/logo/nameLogo.png";
import "./loadingScreen.css";

export const LoadingScreen = () => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowLogo((prevShowLogo) => !prevShowLogo);
    }, 800);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="loading">
        {showLogo ? (
          <img
            className="object-cover w-full max-w-32"
            src={logo}
            alt="Logo not found"
          />
        ) : (
          <img
            className="object-cover w-full max-w-56"
            src={nameLogo}
            alt="Name Logo not found"
          />
        )}
      </div>
    </section>
  );
};
