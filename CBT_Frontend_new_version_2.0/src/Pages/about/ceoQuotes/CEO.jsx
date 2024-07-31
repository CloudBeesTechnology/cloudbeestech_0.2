import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import "./ceoQuotes.css";

export const CEO = () => {
  return (
    <section className="screen-size center flex-col my-10 md:my-20 ">
      <div className="border border-grey sm:p-10 p-5 rounded-lg relative center flex-col max-[900px]:w-full mx-5 w-[70%] shadow-lg flip-card">
        <h2 className="title text-darkgrey mb-8">
          <span className="text-primary">CEO</span> Quotes
        </h2>
        <h3 className="sm:text-2xl text-lg text-center flex text-secondary relative">
          <span className="">
            {" "}
            <sup className="text-primary sm:text-2xl text-lg ">
              <FaQuoteLeft />
            </sup>{" "}
          </span>
          <em>
            {" "}
            Business is a team sport. Learn, practice, and teach others. Then,
            restart and repeat the process, always striving for excellence and{" "}
            <span className="relative">
              growth.{" "}
              <sup className="text-primary sm:text-2xl text-lg absolute top-0 ml-4">
                <FaQuoteRight />
              </sup>
            </span>
          </em>
        </h3>
        <div className="flip-card-back bg-white absolute w-full h-full top-0 sm:p-10 p-5 rounded-lg">
          {" "}
          <h2 className="title text-darkgrey mb-8">
            <span className="text-primary">CEO</span> Quotes
          </h2>
          <h3 className="sm:text-2xl text-lg text-center flex text-secondary ">
            <sup className="text-primary sm:text-2xl text-lg ">
              <FaQuoteLeft />
            </sup>{" "}
            <em>
              {" "}
              Business is a team sport. Learn, practice, and teach others. Then,
              restart and repeat the process, always striving for excellence and{" "}
              <span className="relative">
                growth.{" "}
                <sup className="text-primary sm:text-2xl text-lg absolute top-0 ml-4">
                  <FaQuoteRight />
                </sup>
              </span>
            </em>
          </h3>
        </div>
      </div>
      <p className="text-[transparent] text-center">CloudBees</p>
    </section>
  );
};
