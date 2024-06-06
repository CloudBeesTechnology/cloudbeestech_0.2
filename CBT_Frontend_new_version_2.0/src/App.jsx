import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/home/Home";
import { Footer } from "./Components/Footer";
import { LoadingScreen } from "./Pages/loadingScreen/LoadingScreen";
import { useEffect, useState } from "react";
import { Contact } from "./Pages/contact/Contact";
import { About } from "./Pages/about/About";
import { Services } from "./Pages/service/Services";
// import { Technologies } from "./Pages/technologies/Technologies";
import { Career } from "./Pages/career/Career";
import { Project } from "./Pages/project/Project";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ReactGA from "react-ga4";
import { Blog } from "./Pages/blog/Blog";
import { MouseMove } from "./Components/MouseMove";
import { BlogCards } from "./Pages/blog/BlogCards";
import { BlogBrief } from "./Pages/blog/BlogBrief";
import { Gallery } from "./Pages/gallery/Gallery";

const Tracking_ID = "G-FQBD30BCCX";
ReactGA.initialize(Tracking_ID);

export const App = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
  }, []);

  const [loadScreen, setLoadScreen] = useState(false);

  useEffect(() => {
    // const handleLoad = () => {
    //   setLoadScreen(true);
    // };

    // window.addEventListener("load", handleLoad);

    // return () => {
    //   window.removeEventListener("load", handleLoad);
    // };
    const Load = setTimeout(() => {
      setLoadScreen(true);
    }, 3000);

    return () => clearTimeout(Load);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/services" Component={Services} />
        <Route path="/projects/*" Component={Project} />
        {/* <Route path="/techies" Component={Technologies} /> */}
        <Route path="/career" Component={Career} />
        <Route path="/blog" Component={Blog}>
          <Route index element={<BlogCards />} />
          <Route path="blogDetails/:id" element={<BlogBrief />} />
        </Route>
        <Route path="/gallery" Component={Gallery} />
        <Route path="/contact" Component={Contact} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
      {/* {loadScreen ? (
        <>
          <Navbar />
          <MouseMove/>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/services" Component={Services} />
            <Route path="/projects" Component={Project} />
            <Route path="/techies" Component={Technologies} />
            <Route path="/career" Component={Career} />
            <Route path="/blog" Component={Blog}>
              <Route index element={<BlogCards />} />
              <Route path="blogDetails/:id" element={<BlogBrief />} />
            </Route>
            <Route path="/contact" Component={Contact} />
          </Routes>
          <Footer />
        </>
      ) : (
        <LoadingScreen />
      )} */}
    </HelmetProvider>
  );
};
