import React from 'react';
import html from '../assets/img/HTML5.png';
import js from '../assets/img/JS.png';
import CSS from '../assets/img/CSS.png';
import rct from '../assets/img/React.png';
import rdx from '../assets/img/Redux.png';
import tailwind from '../assets/img/tailwind.png';

const images = [
  { src: html, alt: "html5" },
  { src: js, alt: "js" },
  { src: CSS, alt: "css" },
  { src: rct, alt: "react" },
  { src: rdx, alt: "redux" },
  {src: tailwind, alt:'tailwind'}
];

const ImageItem = ({ src, alt }) => (
  <img 
    src={src} 
    alt={alt} 
    className="marquee-item border-2 border-slate-700 rounded-3xl mx-28" />
);

function Marquee() {
  return (
    <section>
    <div id="skills" className="marquee-container mb-16">
      <div className="marquee mb-40 my-16 mx-0">
        <div className="marquee-content p-0">
          {images.map((image, index) => (
            <ImageItem 
              key={index} 
              src={image.src} 
              alt={image.alt} />
          ))}
        </div>
      </div>
      <div className="marquee-one my-10">
        <div className="marquee-content p-0">
          {images.map((image, index) => (
            <ImageItem 
              key={index} 
              src={image.src} 
              alt={image.alt} />
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}

export default Marquee;
