import React, { useState } from 'react';
import img1 from '../assets/Images/carousel 1.png';
import img2 from '../assets/Images/carousel 2.png';
import img3 from '../assets/Images/carousel 3.png';

const images = [img1, img2, img3];

const WhyChoose = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="px-6 py-12">
      {/* Header Text */}
      <div className="text-center mb-7">
        <p className="text-xl md:text-3xl font-bold">
          Why choose <span className="text-[#6828B0]">Kraftaa</span>
        </p>
      </div>

      {/* Carousel Container */}
      <div className='m-[-30px] overflow-hidden'>
      <div className="relative flex justify-center max-w-[1000px] mx-auto">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 flex justify-center">
              <div className="w-[70%] mx-[90px] h-[70%]">
                <img src={image} alt={`carousel-item-${index}`} className="w-full object-cover" />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2"
        >
          Next
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default WhyChoose;
