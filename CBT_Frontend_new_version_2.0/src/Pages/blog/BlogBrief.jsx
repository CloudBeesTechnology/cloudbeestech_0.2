import { Link, useParams } from "react-router-dom";
import { BCDetails } from "./BCDetails";
export const BlogBrief = () => {
  const { id } = useParams();
  const blogEntry = BCDetails.find((entry) => entry.id === parseInt(id));
  return (
    <section className="screen-size my-10 md:my-20 ">
      {blogEntry ? (
        <section className="flex flex-col items-center">
          <div className="w-full center">
            <img
              className="object-cover w-full max-w-[70%]"
              src={blogEntry.img}
              alt="not found"
            />
          </div>
         <div className="w-[70%] flex flex-col gap-5 text-grey text-sm">
         <h2 className="text-2xl font-semibold text-secondary mt-5">
            {blogEntry.title}
          </h2>
          <p>{blogEntry.briefContent.content}</p>
        {blogEntry.briefContent.topic1 &&   <h3 className="text-xl text-yellow font-bold" >{blogEntry?.briefContent?.topic1}</h3>}
          <article>
            <span className="text-lg font-semibold">
              {blogEntry.briefContent.point1_title}
            </span>{" "}
            <span className="">{blogEntry.briefContent.point1}</span>
          </article>
          <article>
            <span className="text-lg font-semibold">
              {blogEntry.briefContent.point2_title}
            </span>{" "}
            <span>{blogEntry.briefContent.point2}</span>
          </article>
          <article>
            <span className="text-lg font-semibold">
              {blogEntry.briefContent.point3_title}
            </span>{" "}
            <span>{blogEntry.briefContent.point3}</span>
          </article>
          <article>
            <span className="text-lg font-semibold">
              {blogEntry.briefContent.point4_title}
            </span>{" "}
            <span>{blogEntry.briefContent.point4}</span>
          </article>
          {blogEntry.briefContent.topic2 &&   <h3 className="text-xl text-yellow font-bold" >{blogEntry?.briefContent?.topic2}</h3>}
          <article>
            <span className="text-lg font-semibold">
              {blogEntry.briefContent.point5_title}
            </span>{" "}
            <span>{blogEntry.briefContent.point5}</span>
          </article>
          <article>
            <span className="text-lg font-semibold">
              {blogEntry.briefContent.point6_title}
            </span>{" "}
            <span>{blogEntry.briefContent.point6}</span>
          </article>
          <article>
            <span className="text-lg font-semibold">
              {blogEntry.briefContent.point7_title}
            </span>{" "}
            <span className="">{blogEntry.briefContent.point7}</span>
          </article>
          <article>
            <span className="text-lg font-semibold">
              {blogEntry.briefContent.point8_title}
            </span>{" "}
            <span>{blogEntry.briefContent.point8}</span>
          </article>
          <div className="mt-5">
            <Link to="/blog" className="btn-2 border-primary rounded-lg border-2 text-white bg-primary hover:bg-white transition-all duration-700 hover:text-grey">
                Go Back
            </Link>
          </div>
         </div>
        </section>
      ) : (
        "null"
      )}
    </section>
  );
};
