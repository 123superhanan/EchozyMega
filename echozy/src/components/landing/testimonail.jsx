import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "This app revolutionized how I discover music. The mood filters are incredibly accurate!",
    author: "Sarah K.",
    role: "Music Blogger",
    avatar: "🎤"
  },
  {
    id: 2,
    quote: "I've never been able to create playlists so effortlessly. The interface is perfect.",
    author: "James L.",
    role: "DJ",
    avatar: "🎧"
  },
  {
    id: 3,
    quote: "The offline listening feature saved me during flights. Such a smooth experience!",
    author: "Lara M.",
    role: "Frequent Traveler",
    avatar: "✈️"
  },
  {
    id: 4,
    quote: "Sharing playlists with friends has never been easier. Love the social vibe.",
    author: "Alex P.",
    role: "College Student",
    avatar: "👥"
  },
  {
    id: 5,
    quote: "The audio quality is exceptional, even on the free tier. Amazing value!",
    author: "Miguel T.",
    role: "Audiophile",
    avatar: "🔊"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 1;
    return window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex >= testimonials.length - visibleCount + 1 ? 0 : nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentIndex - 1;
    setCurrentIndex(prevIndex < 0 ? testimonials.length - visibleCount : prevIndex);
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  // Wrap-around if we're at the end
  if (visibleTestimonials.length < visibleCount) {
    visibleTestimonials.push(...testimonials.slice(0, visibleCount - visibleTestimonials.length));
  }

  return (
    <section className="mt-10 rounded-xl py-16 px-4 sm:px-6 bg-gray-900 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10 text-textPrimary">
          What Users Say
        </h2>

        <div className="relative">
          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-800 border border-black rounded-xl p-6 shadow-md h-full"
              >
                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                <p className="text-lg mb-4 italic text-gray-300">"{testimonial.quote}"</p>
                <div className="font-semibold text-lg text-white">{testimonial.author}</div>
                <div className="text-sm text-pink-400">{testimonial.role}</div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-full font-bold transition"
            >
              ‹ Prev
            </button>
            <button
              onClick={nextSlide}
              className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-full font-bold transition"
            >
              Next ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
