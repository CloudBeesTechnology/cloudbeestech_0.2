import { Link } from "react-router-dom";
import { ProjectDetails } from "./ProjectDetails";

export const OurProject = () => {
  return (
    <section className="screen-size my-10 md:my-20 center flex-col">
      <h2 className="title text-darkgrey">
        <span className="text-primary">Our</span> Projects
      </h2>
      <p className="text-[transparent] text-center">CloudBees</p>
      <div className="grid grid-cols-2 max-md:grid-cols-1 md:mt-14 mt-5 last:col-span-5">
        {ProjectDetails.map((val, i) => {
          return (
            <div
              key={i}
              className={
                i % 2 === 0
                  ? "flex flex-col gap-5 p-5 sm:p-10 border-litegrey md:border-r md:custom-border-none border-b odd:relative"
                  : "flex flex-col gap-5 p-5 sm:p-10 border-litegrey custom-border odd:relative  border-b "
              }
            >
              <div className="center md:h-72">
                <Link to={val.link} target="_blank">
                  <img
                    className="w-full object-cover max-w-[350px]"
                    src={val.img}
                    alt={`${val.title} not found`}
                  />
                </Link>
              </div>
              <h3 className="sub-title text-secondary">{val.title}</h3>
              <p className="desc font-light text-secondary ]">{val.desc}</p>
              <p className="text-[transparent] text-center">CloudBees</p>
              <div
                className={
                  i % 2 === 0 && i !== ProjectDetails.length - 1
                    ? "block absolute -right-10 -bottom-8 max-md:hidden z-10"
                    : "hidden"
                }
              >
                <img src={val.honeycomb} alt="not found" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

// import { useState } from "react";
// import { NavLink, Outlet } from "react-router-dom";

// export const OurProject = () => {
//   const [activeNavLink, setActiveNavLink] = useState("All");

//   const handleNavLinkClick = (navLinkName) => {
//     setActiveNavLink(navLinkName === activeNavLink ? null : navLinkName);
//   };
//   return (
//     <section className="center">
//       <div className="screen-size my-10 md:my-20 center flex-col">
//         <h1 className="title text-darkgrey">
//           <span className="text-primary">Our</span> projects
//         </h1>
//         <div className="center gap-3 my-7 text-secondary flex-wrap">
//           <NavLink
//             to=""
//             onClick={() => handleNavLinkClick("All")}
//             className={activeNavLink === "All" ? "text-primary" : ""}
//           >
//             All
//           </NavLink>
//           <p>|</p>
//           <NavLink
//             to="/project/brand"
//             onClick={() => handleNavLinkClick("Branding")}
//             className={activeNavLink === "Branding" ? "text-primary" : ""}
//           >
//             Branding
//           </NavLink>
//           <p>|</p>
//           <NavLink
//             to="/project/design"
//             onClick={() => handleNavLinkClick("Design")}
//             className={activeNavLink === "Design" ? "text-primary" : ""}
//           >
//             Design
//           </NavLink>
//           <p>|</p>
//           <NavLink
//             to="/project/dev"
//             onClick={() => handleNavLinkClick("Dev")}
//             className={activeNavLink === "Dev" ? "text-primary" : ""}
//           >
//             Development
//           </NavLink>
//           <p>|</p>
//           <NavLink
//             to="/project/digital"
//             onClick={() => handleNavLinkClick("Digital")}
//             className={activeNavLink === "Digital" ? "text-primary" : ""}
//           >
//             Digital marketing
//           </NavLink>
//           <p>|</p>
//           <NavLink
//             to="/project/mobile"
//             onClick={() => handleNavLinkClick("native")}
//             className={activeNavLink === "native" ? "text-primary" : ""}
//           >
//             Mobile native & Hybrid
//           </NavLink>
//           <p>|</p>
//           <NavLink
//             to="/project/cloud"
//             onClick={() => handleNavLinkClick("Cloud")}
//             className={activeNavLink === "Cloud" ? "text-primary" : ""}
//           >
//             AWS/Azure Cloud
//           </NavLink>
//           <p>|</p>
//           <NavLink
//             to="/project/devops"
//             onClick={() => handleNavLinkClick("DevOps")}
//             className={activeNavLink === "DevOps" ? "text-primary" : ""}
//           >
//             CI/CD DevOps
//           </NavLink>
//         </div>
//         <Outlet />
//       </div>
//     </section>
//   );
// };
