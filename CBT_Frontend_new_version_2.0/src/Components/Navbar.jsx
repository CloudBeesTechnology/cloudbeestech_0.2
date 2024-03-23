import { Link, NavLink } from "react-router-dom";
// import logo from "../assets/logo/logo.png";
import logo from "../assets/logo/cloudbeestech_logo.svg";
import { RiMenuAddFill } from "react-icons/ri";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  function aside() {
    return setSidebar(!sidebar);
  }



  return (
    <>
      <Sidebar sidebar={sidebar} onclose={aside} />
      <section className="bg-grey center py-5 px-2 sticky top-0 z-40 h-28 overflow-hidden">
        <div className="screen-size center justify-between gap-5 ">
          <Link to="/"  >
            <img
              className="w-full object-cover"
              src={logo}
              alt="logo not found"
            />
          </Link>
          <section className="center justify-between gap-10 ">
            <div className="center gap-8 text-white desc max-[1000px]:hidden">
              <NavLink
                to="/" 
                className={({ isActive }) =>
                  isActive
                    ? "under-border "
                    : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/services" 
                className={({ isActive }) => (isActive ? "under-border" : "")}
              >
                Services
              </NavLink>
              {/* <NavLink
                to="/techies"
                className={({ isActive }) => (isActive ? "under-border" : "")}
              >
                Technologies
              </NavLink> */}
              <NavLink 
                to="/projects" 
                className={({ isActive }) => (isActive ? "under-border" : "")}
              >
                Projects
              </NavLink>
              <NavLink
                to="/career" 
                className={({ isActive }) => (isActive ? "under-border" : "")}
              >
                Careers
              </NavLink>
              <NavLink
                to="/about" 
                className={({ isActive }) => (isActive ? "under-border" : "")}
              >
                Who we are
              </NavLink>
              {/* <NavLink
                to="/blog" 
                className={({ isActive }) => (isActive ? "under-border" : "")}
              >
                Blog
              </NavLink> */}
              <NavLink
                to="/contact" 
                className={({ isActive }) => (isActive ? "under-border" : "")}
              >
                Contact Us
              </NavLink>
            </div>
            {/* <div className="desc btn-2 border-primary text-sm text-primary">
           <Link to="/touch"> Get in touch</Link>
          </div> */}
            <div
              className="title text-white block min-[1000px]:hidden"
              onClick={aside}
            >
              <RiMenuAddFill />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
