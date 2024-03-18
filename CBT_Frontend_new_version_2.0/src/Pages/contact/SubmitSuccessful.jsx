export const SubmitSuccessful = () => {
    return (
      <div
        className="fixed w-full min-h-screen top-0 left-0 flex flex-col justify-center items-center  bg-black bg-opacity-40"
      >
        <section className="bg-white p-4 pl-6 max-w-[450px] rounded-xl text-center">
          <h1 className="text-4xl py-3 text-secondary"> Submitted Successfully !</h1>
            <button
              className="hover:scale-105 px-10 py-3 bg-secondary text-center rounded-lg text-white text-xl font-semibold"
              onClick={()=> window.location.href = "/"}
            >
              Ok
            </button>
        </section>
      </div>
    );
  };