import { GalleryImage } from "./ImgGallery";
import { FaYoutube } from "react-icons/fa6";
import youtube from '../../assets/gallery/youtube.svg'
import { Link } from "react-router-dom";

export const MemoriesOfCBT = () => {
  return (
    <section className="screen-size my-10 md:my-20">
      <h2 className="title text-darkgrey mb-8">
        <span className="text-primary"> Life</span> at CBT
      </h2>
      <p className="text-[transparent] text-center">CloudBees</p>
      <div className="grid grid-cols-3 gap-5 md:px-5 max-md:grid-cols-1 max-w-screen-2xl w-full">
        {GalleryImage.map((url, i) => {
          const isImage = url.match(/\.(jpeg|jpg|gif|png)$/);
          const isVideo = url.match(/\.(mp4|webm|ogg)$/);
          return (
            <section key={i} className="relative">
              <div className=" overflow-hidden hover:duration-100 hover:transition-all rounded-sm shadow-md shadow-black h-96">
                {isImage ? (
                  <img
                    className="object-cover hover:scale-110 h-full w-full"
                    src={url}
                    alt="Media not found"
                  />
                ) : isVideo ? (
                  <video className="object-cover h-full w-full" controls>
                    <source src={url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="h-full w-full flex items-center justify-center">
                    <p>Invalid media type</p>
                  </div>
                )}
              </div>
            </section>
          );
        })} 
        <div className="text-white gallery-bgImage  relative z-20 center h-96 ">
          <div className="absolute top-0 bg-black w-full h-full -z-10 rounded-sm" ></div>
          <Link to="https://www.youtube.com/channel/UC_KJFoDIPN75NRHZs3xalKg" target="_blank" className=""><img className="" src={youtube} alt="youtube image not found" /></Link>
        {/* <button>view more</button> */}

        </div>
      </div>
      <p className="text-[transparent] text-center">CloudBees</p>
    </section>
  );
};

