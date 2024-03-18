import { TestimonialDetails } from "./TestimonialDetails";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "./Testimonials.css";
import { useState } from "react";

export const Testimonials = () => {
  const [showMore, setShowMore] = useState(false);
  return (

      <section className="screen-size my-10 center flex-col">
        <h3 className="title text-darkgrey">
          <span className="text-primary">Our</span> Testimonials
        </h3>
        <p className="desc font-light text-secondary my-5 md:w-[70%] px-2">
          In today's fast-paced business landscape, technology is the driving
          force behind innovation, efficiency, and growth. From cloud computing
          and data analytics to artificial intelligence and automation,
          businesses are increasingly relying on technology to streamline
          operations.
        </p>
        <Swiper
          className="w-full"
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          speed={1500}
        >
          {TestimonialDetails.map((val, i) => {
            return (
              <SwiperSlide key={i}>
                {" "}
                <div className="w-full bg-ashgrey p-5 sm:px-16 sm:py-8 rounded-xl mb-10 ">
                  <p
                    className={`sm:para text-[13px]  xl:my-8  ${
                      showMore ? "line-clamp-none" : "max-xl:line-clamp-3"
                    }`}
                  >
                    {val.content}
                  </p>
                  {val.content.length > 3 && (
                    <button
                      onClick={() => setShowMore(!showMore)}
                      className="text-primary mb-5 xl:hidden "
                    >
                      {showMore ? "Less" : "More"}
                    </button>
                  )}
                  <div className="flex items-center gap-5">
                    <div className="">
                      <img
                        className="w-full object-cover max-w-12 h-12 sm:max-w-[100px] sm:h-[100px] rounded-full"
                        src={val.img}
                        alt="not found"
                      />
                    </div>
                    <article>
                      <h4 className="sm:text-lg para font-semibold">
                        {val.names}
                      </h4>
                      <p className="sm:para text-[12px]">{val.designation}</p>
                    </article>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
 
  );
};
