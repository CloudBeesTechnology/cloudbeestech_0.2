import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaChevronDown,
} from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

import logo from "../assets/logo/cloudbeestech_logo.svg";

export const Footer = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="center bg-gradient-1 relative">
      <div className="screen-size center text-white flex-col flex-wrap gap-14 mt-16 mb-5">
        <section className="flex justify-center lg:justify-between  flex-wrap">
          <div className="w-full lg:w-[30%] flex flex-col max-lg:items-center gap-5 font-light text-sm">
            <div>
              <img
                className="object-cover max-w-72 w-full"
                src={logo}
                alt="namelogo not found "
              />
              <p className="text-[transparent]">
                Best Software companies in Puducherry
              </p>
            </div>
            <div className="max-lg:center gap-3 max-lg:text-center flex-wrap max-[500px]:flex-col">
              <p className="para flex-1  max-sm:text-center">
                We are a team of young developers developing digital products
                and services that have a positive impact on people.
              </p>
              <article className="flex-1 my-5">
                <p className="para">
                  <b className="text-sm font-medium ">Email:</b>{" "}
                  hr@cloudbeestech.com
                </p>
                <div className="flex gap-1 my-1 max-lg:justify-center">
                  <p className="text-sm font-medium">Phone: </p>{" "}
                  <article className="para">
                    <p> India - +91 -7200533357 </p>
                    <p>USA - +1 (614) 632-9349</p>
                  </article>
                </div>
              </article>
            </div>
          </div>
          <div className="flex sm:justify-around justify-center max-md:text-center mt-3 sm:mt-10 flex-wrap gap-10">
            <article className="flex flex-col gap-5">
              <h6 className="text-sm font-medium flex flex-col gap-5">
                Pondicherry
              </h6>
              <p className="para sm:h-20">
                #1, III Main road, <br /> Chellam Papu Nagar,
                <br /> Reddiyarpalayam, <br />
                Puducherry - 605010
              </p>
              <div>
                <a
                  className="footer-direction"
                  href="http://tinyurl.com/bp6ptfb2"
                  target="_blank"
                >
                  Direction
                </a>
              </div>
            </article>
            <article className=" flex flex-col gap-5">
              <h6 className="text-sm font-medium flex flex-col gap-5">
                Chennai
              </h6>
              <p className="para sm:h-20">
                #68, R K shanmugam salai,
                <br />
                Opposite to double tank,
                <br />
                KK Nagar,
                <br />
                Chennai - 600078
              </p>
              <div>
                <a
                  className="footer-direction"
                  href="http://tinyurl.com/2z7huru4"
                  target="_blank"
                >
                  Direction
                </a>
              </div>
            </article>
            <article className=" flex flex-col gap-5">
              <h6 className="text-sm font-medium flex flex-col gap-5">USA</h6>
              <p className="para sm:h-20">
                #8999, Ellrod way,
                <br />
                Lewis center,
                <br />
                Ohio - 43035
              </p>
              <div>
                <a
                  className="footer-direction"
                  href="https://tinyurl.com/5a9c4sx4"
                  target="_blank"
                >
                  Direction
                </a>
              </div>
            </article>
          </div>
        </section>
        <section className=" flex flex-col max-sm:text-center gap-5 ">
          <p className="text-[transparent] text-center">CloudBees</p>
          <p className="para">
            © 2019 - 2024 CloudBees Tech Private Limited. All rights reserved.
          </p>
          <div className="center gap-5 sub-title">
            <Link
              to="https://www.facebook.com/people/CloudBees-Tech/61556253873919/?sk=friends_likes"
              target="_blank"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://www.instagram.com/cloudbeestechnology/?hl=en"
              target="_blank"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://www.linkedin.com/company/cloudbees-technology/"
              target="_blank"
            >
              <FaLinkedinIn />
            </Link>
            <Link to="https://twitter.com/CBeesTechnology" target="_blank">
              <FaTwitter />
            </Link>
          </div>
        </section>
      </div>
      <div
        className="group h-10 w-10 rounded-full bg-secondary center absolute sm:right-16 right-3 bottom-5 sm:bottom-8 animate-bounce "
        onClick={scrollUp}
      >
        <p className="text-yellow text-xl group-hover:hidden">
          <FaChevronDown />
        </p>
        <p className="text-yellow text-2xl font-extrabold group-hover:block hidden">
          <IoIosArrowUp />
        </p>
      </div>
    </section>
  );
};
