// import React from "react";
// import { Carousel } from "react-bootstrap";
// import img1 from "../images/img11.webp";
// import img2 from "../images/img2.webp";
// import img3 from "../images/img6.jpg";

// const BootstrapTailwindCarousel = () => {
//   const slides = [
//     {
//       image: img1, // Use the imported variable here
//       text: "Image 1 Description",
//     },
//     {
//       image: img2, // Use the imported variable here
//       text: "Image 2 Description",
//     },
//     {
//       image: img3, // Use the imported variable here
//       text: "Image 3 Description",
//     },
//   ];

//   return (
//     <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
//       <Carousel className="rounded-lg overflow-hidden">
//         {slides.map((slide, index) => (
//           <Carousel.Item key={index}>
//             <img
//               className="d-block w-100"
//               src={slide.image} // Access the correct image
//               alt={`Slide ${index + 1}`}
//             />
//             <Carousel.Caption className="bg-opacity-75 bg-gray-800 text-white p-4 rounded-lg">
//               <h3 className="text-lg font-bold">{`Slide ${index + 1}`}</h3>
//               <p className="text-sm">{slide.text}</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default BootstrapTailwindCarousel;
import React from "react";
import { Carousel } from "react-bootstrap";

// Import images
// 
import img1 from "../images/img11.webp";
 import img2 from "../images/img2.webp";
 import img3 from "../images/img6.jpg";

const FoodCarousel = () => {
  const slides = [
    { image: img1, alt: "Delicious Sandwich" },
    { image: img2, alt: "Cheesy Pizza" },
    { image: img3, alt: "Tasty Hero Sub" },
    //{ image: image1, alt: "Savory Dish" },
  ];

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]">
      {/* Text Section */}
      <div className="flex flex-col justify-center gap-7 text-center md:text-left pt-24 md:pt-0 pb-10">
        <h1 className="text-4xl lg:text-6xl font-semibold">
          Delicious Food Is Waiting For You
        </h1>
        <p className="font-semibold text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laborum
          beatae exercitationem soluta suscipit neque dolor, expedita earum
          dolore similique!
        </p>
        <div className="flex gap-4 items-center justify-center md:justify-start">
          <button className="primary-btn hover:scale-110 duration-200">
            Food Menu
          </button>
          <button className="secondary-btn text-black hover:scale-110 duration-200">
            Book Table
          </button>
        </div>
      </div>

      {/* Image Carousel Section */}
      <div className="flex flex-col justify-center">
        <Carousel className="rounded-lg overflow-hidden">
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FoodCarousel;

