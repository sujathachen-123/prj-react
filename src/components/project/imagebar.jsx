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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[800px] ">
      {/* Text Section */}
      <div className="flex flex-col justify-center gap-7 text-center md:text-left pt-10 md:pt-0 pb-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Learn from anywhere
        </h1>
        <p className="font-medium text-base md:text-lg lg:text-xl text-gray-600">
          On the couch, from the backyard, or on your commute. Our app lets you decide.
        </p>
        {/* <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start mt-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition duration-200">
            Get Started
          </button>
          <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 hover:scale-105 transition duration-200">
            Learn More
          </button>
        </div> */}
      </div>

      {/* Image Carousel Section */}
      <div className="flex flex-col justify-center">
        <Carousel className="rounded-lg overflow-hidden shadow-lg">
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
