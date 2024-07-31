import React from "react";
import { FaWindowClose } from "react-icons/fa";
import { CheckPdf } from "../../Components/CheckPdf";
import { BCDetails } from "./BCDetails";

export const ViewPdf = ({ pdfPath,onClose }) => {
  return (
    <section className="fixed top-0 left-0 w-full h-screen z-50 flex justify-center items-center bg-black bg-opacity-75">
      <div className="relative bg-white h-[700px] w-[90%] max-w-4xl overflow-y-scroll flex items-start justify-center p-4">
        <button
          className="absolute z-20 right-2 top-4 text-3xl text-black cursor-pointer"
          onClick={onClose}
        >
          <FaWindowClose />
        </button>
        {pdfPath !== undefined  ? (
        <div className="h-[700px] w-full pdf-scroll overflow-y-scroll flex items-start justify-center">
          <CheckPdf  pdfPath={pdfPath} />
        </div>
      ) : (
        <div className=" text-xl text-primary center h-full font-semibold bg-white rounded-lg">
          <p className="border shadow-lg p-10 rounded-lg">Coming soon.....</p>
        </div>
      )}
      </div>
    </section>
  );
};
