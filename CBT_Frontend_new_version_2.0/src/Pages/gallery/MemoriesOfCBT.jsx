import { GalleryImage } from "./ImgGallery";

export const MemoriesOfCBT = () => {
  return (
    <section className="screen-size my-10 md:my-20">
      <h2 className="title text-darkgrey mb-8">
        <span className="text-primary"> Life</span> at CBT
      </h2>
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
      </div>
    </section>
  );
};
