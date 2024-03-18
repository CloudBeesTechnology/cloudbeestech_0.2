import group from "../../assets/group/cloudbeestech_Team_1.png";

export const LifeCBT = () => {
  return (
    <section className="screen-size my-10 md:my-20 center flex-col">
      <h4 className="title text-darkgrey">
        <span className="text-primary">Life</span> at CBT
      </h4>
      <p className="desc font-light text-secondary my-5 w-full lg:w-[55%] px-2">
        Experience a thriving community where expertise is recognized and
        innovation flourishes. Come along for a rewarding path of development
        and cooperation in the software industry.
      </p>
      <div className="my-10">
        <img
          className="w-full object-cover"
          src={group}
          alt="group-image not found"
        />
      </div>
    </section>
  );
};
