import React from 'react';
import { motion } from 'framer-motion';


import image1 from '../../assets/landing-page/logo2.png';
import image2 from '../../assets/landing-page/info2.png';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Info = () => {
  return (
    <motion.div
      className="rounded-lg  relative min-h-screen bg-radial-fade  text-white px-8 py-16 max-w-6xl mx-auto grid grid-cols-1 gap-16 mt-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Smokey fading top border */}
      <div className=" rounded-2xl absolute top-0 left-0 w-full h-16 pointer-events-none bg-gradient-to-b from-black/70 via-black/30 to-transparent z-10" />

      {/* Block 1 */}
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start gap-8"
        variants={itemVariants}
      >
        {/* Text on left */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4 tracking-wide">Discover Echozy’s Power</h2>
          <p className="text-lg text-purple-300 mb-6 leading-relaxed">
            Experience music like never before. Create playlists, explore moods, and dive into endless tunes—all at your fingertips.
          </p>
          <button className="self-start px-6 py-2 border border-purple-500 rounded-md hover:bg-purple-600 hover:border-purple-400 transition duration-300">
            Learn More
          </button>
        </div>
        {/* Image on right */}
        <div className="md:w-1/2">
          <img
            src={image1}
            alt="Discover Echozy’s Power"
            className="rounded-lg shadow-lg object-cover w-full max-h-80 border border-white"
          />
        </div>
      </motion.div>

      {/* Block 2 */}
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8"
        variants={itemVariants}
      >
        {/* Text on right */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4 tracking-wide">Your Music, Your Way</h2>
          <p className="text-lg text-purple-300 mb-6 leading-relaxed">
            Automatically generate playlists from your favorite songs, browse categories like rock, pop, or chill beats, and enjoy smooth navigation.
          </p>
          <button className="self-start px-6 py-2 border border-purple-500 rounded-md hover:bg-purple-600 hover:border-purple-400 transition duration-300">
            Learn More
          </button>
        </div>
        {/* Image on left */}
        <div className="md:w-1/2">
          <img
            src={image2}
            alt="Your Music, Your Way"
            className="rounded-lg shadow-lg object-cover w-full max-h-80"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Info;

