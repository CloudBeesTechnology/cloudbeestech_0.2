import { Link } from "react-router-dom";
import { ClientLogo } from "./ClientLogo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";

export const OurClient = () => {
  return (
    <section>
      <h2 className="title text-darkgrey mb-10">
        <span className="text-primary">Our </span> Clients
      </h2>
      <section className="center bg-gradient-1 my-10">
        <div className="screen-size my-10 center">
          <Swiper
            className="w-full center mx-auto"
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={1500}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              800: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1000: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {ClientLogo.map((logo, i) => {
              return (
                <SwiperSlide key={i}>
                  <Link to="/project" className="h-52 center">
                    <img
                      className="object-cover w-ful max-w-[200px]"
                      src={logo.img}
                      alt={`${logo.clientName} not found`}
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </section>
  );
};

