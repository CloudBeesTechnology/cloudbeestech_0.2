import { useState } from "react";
import { PopupForm } from "./PopupForm";
import { JPDetails } from "./JPDetails";
import { Link } from "react-router-dom";

export const JobPosition = () => {
  const [showForm, setShowForm] = useState(false);
  function applyForm() {
    setShowForm(!showForm);
  }
  return (
    <section className="screen-size my-10 md:my-20 center flex-col">
      <h2 className="title text-darkgrey mb-8">
        <span className="text-primary">Job</span> Openings
      </h2>
      <p className="text-[transparent] text-center">CloudBees</p>
      <p className="sub-title font-light text-darkgrey my-5"><em>Stay tuned for more updates <span className="text-primary">Coming your way soon</span></em></p>
      <Link to="/contact" className="text-[#2200CC] underline italic">Connect with US</Link>
      <p className="text-[transparent] text-center">CloudBees</p>
      {/* <section className="center justify-evenly gap-10 flex-wrap w-full">
        {JPDetails.map((val, i) => {
          return (
            <div
              key={i}
              className="center flex-col max-w-xs border-grey border my-10 rounded-lg overflow-hidden"
            >
              <div className="sm:my-16 my-5 px-10">
                <img
                  className="object-cover w-full max-w-[200px]"
                  src={val.img}
                  alt={`${val.title} image not found`}
                />
              </div>
              <div className="bg-gradient-1 w-full  px-3 py-5 center flex-col gap-2 text-white text-lg items-center font-light">
                <article className="sm:h-40 ">
                  <h3 className="text-center text-xl font-semibold mb-2">
                    {val.title}
                  </h3>
                  <h4>
                    <strong className="text-primary">Experience :</strong>{" "}
                    {val.exp}{" "}
                  </h4>
                  <p>
                    <strong className="text-primary">Skills :</strong>{" "}
                    {val.skills}
                  </p>
                  <p>
                    <strong className="text-primary">Location :</strong>{" "}
                    {val.location}{" "}
                  </p>
                </article>
                <div>
                  <button className="btn-1 mt-5" onClick={applyForm}>
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section> */}

      {showForm && <PopupForm onclose={applyForm} />}
    </section>
  );
};
