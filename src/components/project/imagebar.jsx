import React from "react";
import { Carousel } from "react-bootstrap";

// Import images
import img1 from "../images/img1.png";
import img2 from "../images/img2.webp";
import img3 from "../images/img3.png";

const Imagebar = () => {
  const slides = [
    { image: img1, alt: "Onlineimage1" },
    { image: img2, alt: "Onlineimage2" },
    { image: img3, alt: "Onlineimage3" },
  ];

  return (
    <div className="w-full h-screen bg-[#d1d9e6] flex flex-col md:flex-row items-center justify-center">
      {/* Text Section */}
      <div className="flex flex-col justify-center gap-7 text-center md:text-left px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Learn from anywhere
        </h1>
        <p className="font-medium text-base md:text-lg lg:text-xl text-gray-600">
          On the couch, from the backyard, or on your commute. Our app lets you decide.
        </p>
      </div>

      {/* Image Carousel Section */}
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <Carousel className="rounded-lg overflow-hidden shadow-lg w-full max-w-[600px]">
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Imagebar;
