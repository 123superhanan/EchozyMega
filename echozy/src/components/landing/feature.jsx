import React, { useState, useEffect } from 'react';
import img1 from '../../assets/landing-page/wfo.png';
import img2 from '../../assets/landing-page/wfo1.png';
import img3 from '../../assets/landing-page/wfo2.png';

const slides = [
  { 
    id: 1, 
    src: img1, 
    alt: 'Slide 1',
    title: 'Fast Forward',
    description: 'Skip to your favorite parts instantly',
    features: ['10-second skip', 'Bookmark moments', 'Speed control']
  },
  { 
    id: 2, 
    src: img2, 
    alt: 'Slide 2',
    title: 'Timeline',
    description: 'Visualize your entire playlist',
    features: ['Drag-and-drop editing', 'Color-coded tracks', 'Duration markers']
  },
  { 
    id: 3, 
    src: img3, 
    alt: 'Slide 3',
    title: 'Track Preview',
    description: 'Sample before adding to playlist',
    features: ['30-second previews', 'Waveform visualization', 'Quick add']
  }
];

const Feature = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    let timer;
    if (isAutoPlay) {
      timer = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const toggleAutoPlay = () => setIsAutoPlay(!isAutoPlay);

  return (
    <div className="relative w-full max-w-5xl mx-auto my-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Navigation Arrows (Left) */}
        <button
          onClick={prevSlide}
          className="hidden md:block text-gray-500 hover:text-gray-800 p-3 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Slide Content */}
        <div className="flex-1">
          <div className="relative overflow-hidden rounded-xl bg-background shadow-sm border border-gray-100">
            {/* Image */}
            <div className="h-64 w-full bg-primary overflow-hidden">
              <img
                src={slides[current].src}
                alt={slides[current].alt}
                className="w-full h-full object-contain transition-opacity duration-500"
              />
            </div>
            
            {/* Slide Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-1">
                {slides[current].title}
              </h3>
              <p className="text-secondary mb-4">{slides[current].description}</p>
              
              {/* Features List */}
              <ul className="space-y-2">
                {slides[current].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Arrows */}
          <div className="flex justify-between mt-4 md:hidden">
            <button
              onClick={prevSlide}
              className="text-gray-500 hover:text-gray-800 p-2 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="text-gray-500 hover:text-gray-800 p-2 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Arrows (Right) */}
        <button
          onClick={nextSlide}
          className="hidden md:block text-gray-500 hover:text-gray-800 p-3 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center mt-6 gap-4">
        <button
          onClick={toggleAutoPlay}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          {isAutoPlay ? (
            <>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Pause
            </>
          ) : (
            <>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Play
            </>
          )}
        </button>

        {/* Dot Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === current ? 'bg-gray-800 w-4' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <span className="text-xs text-gray-500">
          {current + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
};

export default Feature;