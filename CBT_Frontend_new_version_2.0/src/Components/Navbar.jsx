import { Link, NavLink } from "react-router-dom";
// import logo from "../assets/logo/logo.png";
import logo from "../assets/logo/cloudbeestech_logo.svg";
import { RiMenuAddFill } from "react-icons/ri";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { MdArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [dropDownIcon, setDropDownIcon] = useState(false);
  function aside() {
    return setSidebar(!sidebar);
  }

  return (
    <>
      <Sidebar sidebar={sidebar} onclose={aside} />
      <section className="bg-grey center py-5 px-2 sticky top-0 z-40 h-28 ">
        <div className="screen-size center justify-between gap-5 ">
          <Link to="/">
            <img
              className="w-full object-cover"
              src={logo}
              alt="logo not found"
            />
          </Link>
          <section className="center justify-between gap-10 max-">
            <div className="center gap-8 text-white desc max-xl:hidden">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "under-border " : "")}
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
              <NavLink
                to="/gallery"
                className={({ isActive }) => (isActive ? "under-border" : "")}
              >
                Gallery
              </NavLink>
              <NavLink
                to="https://b2vtech.com/"
                target="_blank"
                className={({ isActive }) => (isActive ? "under-border" : "")}
              >
                Courses
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "under-border" : "")}
              >
                Blog
              </NavLink>
              <NavLink
                to="/solutions"
                className={({ isActive }) =>
                  isActive
                    ? "under-border flex items-center relative"
                    : "flex items-center relative"
                }
                onClick={() => {
                  setDropDown(!dropDown);
                  setDropDownIcon(!dropDownIcon);
                }}
              >
                Solutions{" "}
                {dropDownIcon ? (
                  <span className="text-2xl">
                    <MdOutlineArrowDropUp />
                  </span>
                ) : (
                  <span className="text-2xl">
                    <MdArrowDropDown />
                  </span>
                )}
                {dropDown && (
                  <div className="absolute top-10 bg-white text-black rounded-md shadow-liteblack z-20 shadow-md  py-2 flex flex-col gap-2 px-2">
                    {" "}
                    <p className="border-b border-litegrey text-start pb-1">
                      Business
                    </p>
                    <p className="border-b border-litegrey text-start pb-1">
                      Cybersecurity
                    </p>
                    <p className="border-b border-litegrey text-start pb-1">
                      Cloud
                    </p>
                    <p className="border-b border-litegrey text-start pb-1">
                      Architech
                    </p>
                    <p className=" text-start pb-1">
                      Marketing
                    </p>
                  </div>
                )}
              </NavLink>
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
            <div className="title text-white block xl:hidden" onClick={aside}>
              <RiMenuAddFill />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
