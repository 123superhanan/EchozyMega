import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import hero1 from '../../assets/landing-page/mm.png';
import hero2 from '../../assets/landing-page/cd.png';
import hero3 from '../../assets/landing-page/bl.png';
import hero4 from '../../assets/landing-page/so.png';
import hero5 from '../../assets/landing-page/wfo.png';

const slides = [
  {
    img: hero1,
    title: "Stream Your Favorite Tracks",
    subtitle: "From indie beats to top charts — all in one place.",
  },
  {
    img: hero2,
    title: "Create Your Own Playlists",
    subtitle: "Organize your mood. Echo your vibe.",
  },
  {
    img: hero3,
    title: "Join the Echozy Movement",
    subtitle: "Music that understands you — not just plays for you.",
  }
  ,
  {
    img: hero4,
    title: "Create Your Account Now",
    subtitle: "your a real tough kid — you can pay this.",
  }
  ,
  {
    img: hero5,
    title: "Listen To Your Emotions",
    subtitle: "Whos afraid of little old me?.",
  }
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[80vh] w-full rounded-2xl overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].img})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-6">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-white"
            >
              {slides[index].title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-4 text-lg md:text-2xl text-gray-300 max-w-xl"
            >
              {slides[index].subtitle}
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Create Account
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Hero;
