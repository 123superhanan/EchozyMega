import React, { useState, useEffect } from 'react';
import img1 from '../../assets/landing-page/ff.png';
import img2 from '../../assets/landing-page/tl.png';
import img3 from '../../assets/landing-page/tp.png';
import img4 from '../../assets/landing-page/wfo1.png'

const images = [
  { id: 1, src: img1, alt: 'Slide 1' },
  { id: 2, src: img2, alt: 'Slide 2' },
  { id: 3, src: img3, alt: 'Slide 3' },
  { id: 4, src: img4, alt: 'Slide 4' }
];


const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // Optional auto-slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
       
      <div className="flex items-center justify-between px-4">
        
        <button
          onClick={prevSlide}
          className="text-white bg-black/30 hover:bg-black/60 p-2 rounded-full z-10"
        >
          ◀
        </button>

        <div className="flex gap-6 overflow-hidden px-4 py-4 w-full justify-center">
          {images.map((img, index) => (
            <div
              key={img.id}
              className={`transition-all duration-500 border-4 ${
                index === current
                  ? 'scale-110 border-purple-500'
                  : 'scale-90 border-transparent opacity-50'
              } rounded-xl overflow-hidden`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-48 h-48 object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="text-white bg-black/30 hover:bg-black/60 p-2 rounded-full z-10"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Slider;
