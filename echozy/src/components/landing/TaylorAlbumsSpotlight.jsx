import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import hero1 from '../../assets/landing-page/1989.png';
import hero2 from '../../assets/landing-page/wfo.png';
import hero3 from '../../assets/landing-page/era.png';
import hero4 from '../../assets/landing-page/md.png';
import hero5 from '../../assets/landing-page/all.png';

const slides = [
  {
    img: hero1,
    title: '1989',
    subtitle: "Darling, I'm a nightmare dressed like a daydream",
    button: 'Explore Synth-pop'
  },
  {
    img: hero2,
    title: 'Reputation',
    subtitle: "I swear I don’t love the drama, it loves me",
    button: 'Dive into Electropop'
  },
  {
    img: hero3,
    title: 'Lover',
    subtitle: "I’m the one who makes you laugh",
    button: 'Feel the Pop'
  },
  {
    img: hero4,
    title: 'Midnights',
    subtitle: "It's me, hi, I'm the problem, it's me",
    button: 'Dream With Us'
  },
  {
    img: hero5,
    title: 'BEYONG IMAGINATION',
    subtitle: "XX",
    button: 'Dream With Us'
  }
];


const TaylorAlbumsSpotlight = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 5000); // 5s slide interval
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[60vh] w-full overflow-hidden rounded-3xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image Zoom */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[index].img})` }}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5 }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-6">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl"
            >
              {slides[index].title}
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-4 text-lg md:text-2xl text-gray-300 max-w-2xl"
            >
              {slides[index].subtitle}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 border border-white text-white text-lg rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              {slides[index].button}
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TaylorAlbumsSpotlight;



//TaylorAlbumsSpotlight

// const albums = [
//   {
//     title: '1989',
//     year: '2014',
//     genre: 'Synth-pop',
//     quote: "Darling, I'm a nightmare dressed like a daydream",
//     color: { start: '#1a1a40', end: '#7329b2' },
//     bgImage: '/bg/1989.jpg',
//   },
//   {
//     title: 'Reputation',
//     year: '2017',
//     genre: 'Electropop',
//     quote: "I swear I don’t love the drama, it loves me",
//     color: { start: '#0f0f0f', end: '#434343' },
//     bgImage: {Reputation},
//   },
//   {
//     title: 'Lover',
//     year: '2019',
//     genre: 'Pop',
//     quote: "I’m the one who makes you laugh",
//     color: { start: '#f78da7', end: '#a18cd1' },
//     bgImage: {lover},
//   },
//   {
//     title: 'Midnights',
//     year: '2022',
//     genre: 'Dream pop',
//     quote: "It's me, hi, I'm the problem, it's me",
//     color: { start: '#000428', end: '#004e92' },
//     bgImage: '/bg/midnights.jpg',
//   },
// ];