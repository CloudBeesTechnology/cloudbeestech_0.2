import React, { useState } from "react";
import { BCDetails } from "./BCDetails";
import { Link } from "react-router-dom";
import { CheckPdf } from "../../Components/CheckPdf";
import { FaWindowClose } from "react-icons/fa";
import { pdfjs } from "react-pdf";
import { ViewPdf } from "./ViewPdf";

import '@react-pdf-viewer/core/lib/styles/index.css';

pdfjs.GlobalWorkerOptions.workerSrc = "pdfjs-dist/build/pdf.worker.min.js"


export const BlogCards = () => {
  const [viewpdf, setViewPdf] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
 
  const handlePdfClick = (pdf) => {
  
    setSelectedPdf(pdf);
    setViewPdf(true);
  };

  return (
    <section className="screen-size center flex-col my-10 md:my-20">
      <h2 className="title text-darkgrey">
        <span className="text-primary"> Our </span> Blog
      </h2>
      <p className="desc font-light text-secondary my-5 md:w-[70%] px-2">
        How to choose your Programming Language / Tech Stack
      </p>
      <div className="grid grid-cols-1 justify-items-center gap-x-5 my-5 gap-y-16 md:grid-cols-2 lg:grid-cols-3 px-2">
        {BCDetails.map((value, i) =>{
           return(
            <div
            key={i}
            className="max-w-sm flex flex-col shadow-md rounded-lg overflow-hidden"
          >
            <div className="overflow-hidden">
              <img
                className="object-cover w-full max-h-[300px] h-full hover:scale-105"
                src={value.img}
                alt={`${value.title} image not found`}
              />
            </div>
            <h3 className="sub-title text-secondary h-16 center">
              {value.title}
            </h3>
            <p className="desc font-light text-secondary px-2 my-2">
              {value.desc}
            </p>
            <div className="center py-5">
              <button
                onClick={() => handlePdfClick(value.pdf)}
                className="btn-2 border-primary rounded-lg border-2 mb-2 text-grey hover:bg-primary transition-all duration-700 hover:text-white"
              >
                Read More
              </button>
            </div>
          </div>
           )
        })}
      </div>
      {viewpdf &&  (
        <ViewPdf
          pdfPath={selectedPdf}
          onClose={() => setViewPdf(false)}
        />
      )}
      
    </section>
  );
};
