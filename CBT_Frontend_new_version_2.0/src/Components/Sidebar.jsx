import { AiOutlineCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { MdArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { useState } from "react";

export const Sidebar = (props) => {
  const { onclose, sidebar } = props;
  const [dropDown, setDropDown] = useState(false);
  const [dropDownIcon, setDropDownIcon] = useState(false);
  
  return (
    <section
      className={`fixed top-0 bg-gradient-1 h-screen z-50 p-10 block min-xl:hidden ${
        sidebar
          ? "right-0 transition-all duration-700 ease-out"
          : "-right-56 transition-all duration-700 ease-out"
      }`}
    >
      <p
        className="absolute top-5 text-3xl text-white left-3"
        onClick={onclose}
      >
        <AiOutlineCloseCircle />
      </p>
      <div className="center items-start flex-col gap-7 text-white desc my-10">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "under-border" : "")}
          onClick={onclose}
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "under-border" : "")}
          onClick={onclose}
        >
          Services
        </NavLink>
        {/* <NavLink
          to="/techies"
          className={({ isActive }) => (isActive ? "under-border" : "")} onClick={onclose}
        >
          Technologies
        </NavLink> */}
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "under-border" : "")}
          onClick={onclose}
        >
          Projects
        </NavLink>
        <NavLink
          to="/career"
          className={({ isActive }) => (isActive ? "under-border" : "")}
          onClick={onclose}
        >
          Careers
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "under-border" : "")}
          onClick={onclose}
        >
          Who we are
        </NavLink>
        <NavLink
          to="/gallery"
          className={({ isActive }) => (isActive ? "under-border" : "")}
          onClick={onclose}
        >
          Gallery
        </NavLink>
        <NavLink
          to="https://b2vtech.com/"
          target="_blank"
          className={({ isActive }) => (isActive ? "under-border" : "")}
          onClick={onclose}
        >
          Courses
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "under-border" : "")}
          onClick={onclose}
        >
          Blog
        </NavLink>
        
        <div>
          <NavLink
            to="/solutions"
            className={({ isActive }) =>
              isActive ? "under-border flex items-center" : "flex items-center"
            }
            onClick={(e) => {
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
          </NavLink>
          {dropDown && (
            <div
              className="shadow-sm flex flex-col gap-3 px-2  mt-5"
              onClick={() => {
                onclose();
                setDropDown(!dropDown);
                setDropDownIcon(false);
              }}
            >
              <NavLink className="border-b border-litegrey text-start pb-1">
                Business
              </NavLink>
              <NavLink className="border-b border-litegrey text-start pb-1">
                Cybersecurity
              </NavLink>
              <NavLink className="border-b border-litegrey text-start pb-1">
                Cloud
              </NavLink>
              <NavLink className="border-b border-litegrey text-start pb-1">
                Architech
              </NavLink>
              <NavLink className="border-b border-litegrey text-start pb-1">
                Marketing
              </NavLink>
            </div>
          )}
        </div>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "under-border" : "")}
          onClick={onclose}
        >
          Contact
        </NavLink>
      </div>
    </section>
  );
};
