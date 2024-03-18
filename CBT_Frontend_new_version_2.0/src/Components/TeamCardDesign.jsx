import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

export const TeamCardDesign = (props) => {
const {img,name,designation,skill,link}=props
  return (
    <section
    className="border-2 border-primary bg-white w-full rounded-tr-[50px] rounded-tl-[50px]"
  >
    <div className="h-28 rounded-tr-[50px]  rounded-tl-[50px] bg-grey relative">
      <div className="absolute -bottom-10 left-2/4 -translate-x-1/2 border-4 border-primary max-w-[120px]  rounded-full">
        <img
          className="object-fit w-full rounded-full"
          src={img}
          alt="not found"
        />
      </div>
    </div>

    <article className="text-center mt-16">
      <h5 className="text-xl text-primary font-bold">{name}</h5>
      <h6 className="text-lg text-grey font-semibold py-2">
        {designation}
      </h6>
      <p className="text-sm text-litegrey mb-5 px-3 h-16">
        <span className="text-darkgrey font-semibold font-serif">
          Skills : &nbsp;
        </span>
        {skill}
      </p>
      <div className="flex justify-center mb-5 bg-darkgrey text-2xl text-white py-2">
      <Link to={link} target="_blank">
     <FaLinkedin />  </Link>   
      </div>
    </article>
  </section>
  )
}
