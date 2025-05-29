import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroAnimation = ({ onFinish }) => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      if (onFinish) onFinish();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="text-white text-3xl md:text-6xl font-semibold tracking-wide"
          >
            Echozy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 1.2, duration: 1.4, ease: "easeOut" }}
            className="text-sm text-gray-400 mt-4"
          >
            music. identity. rebellion. by Hanan
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
