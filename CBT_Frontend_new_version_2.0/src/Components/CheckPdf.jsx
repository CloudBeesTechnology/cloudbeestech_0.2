import React, { useState } from 'react';
import { Viewer,Worker  } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';

export const CheckPdf = ({pdfPath}) => {
  const [loading, setLoading] = useState(true);

  return (
    <section className='my-10'>
      <div style={{height:"100%"}} className='max-sm:w-[350px]  w-[56rem] ' >
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <Viewer
        fileUrl={pdfPath || ''}
        onLoading={() => setLoading(true)}
        onLoaded={() => setLoading(false)}
      />
      </Worker>
      </div>
    </section>
  );
};