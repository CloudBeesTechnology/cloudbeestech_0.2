import { BCDetails } from "./BCDetails";
import { Link } from "react-router-dom";

export const BlogCards = () => {
  return (
    <section className="screen-size my-10 md:my-20">
      <h2 className="title text-darkgrey mb-8">
        <span className="text-primary"> Our </span> Blog
      </h2>

      <div className="grid grid-cols-1 justify-items-center gap-x-5  gap-y-16 md:grid-cols-2 lg:grid-cols-3 px-2">
        {BCDetails.map((value, i) => {
          return (
            <div
              key={i}
              className=" max-w-sm flex flex-col gap-3 shadow-md rounded-lg overflow-hidden "
            >
              <div className="overflow-hidden h-56">
                <img
                  className="object-cover w-full h-full hover:scale-105"
                  src={value.img}
                  alt={`${value.title} image not found`}
                />
              </div>
              <h3 className="sub-title text-secondary">{value.title}</h3>
              <p className="desc font-light text-secondary h-32 px-2 ">
                {value.desc}
              </p>
              <div className="center pb-5">
                <Link
                  to={`/blog/blogDetails/${value.id}`}
                  className="btn-2 border-primary rounded-lg border-2 text-grey hover:bg-primary transition-all duration-700 hover:text-white"
                >
                  Learn More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
