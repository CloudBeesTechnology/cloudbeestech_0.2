import { AiOutlineCloseCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export const Sidebar = (props) => {
  const { onclose, sidebar } = props;
  return (
    <section
      className={`fixed top-0 bg-gradient-1 h-screen z-50 p-10 block min-[1000px]:hidden ${
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
      <div className="center flex-col gap-7 text-white desc my-10">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "under-border" : "")} onClick={onclose}
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "under-border" : "")} onClick={onclose}
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
          className={({ isActive }) => (isActive ? "under-border" : "")} onClick={onclose}
        >
          Projects
        </NavLink>
        <NavLink
          to="/career"
          className={({ isActive }) => (isActive ? "under-border" : "")} onClick={onclose}
        >
          Careers
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "under-border" : "")} onClick={onclose}
        >
          Who we are
        </NavLink>
        {/* <NavLink
          to="/blog"
          className={({ isActive }) => (isActive ? "under-border" : "")} onClick={onclose}
        >
          Blog
        </NavLink> */}
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "under-border" : "")} onClick={onclose}
        >
          Contact
        </NavLink>
      </div>
    </section>
  );
};
