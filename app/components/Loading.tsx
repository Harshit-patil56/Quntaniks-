'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loading() {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Start shutter opening animation after 3 seconds
    const timer = setTimeout(() => {
      setIsComplete(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Top Shutter - Slides Up */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isComplete ? '-100%' : 0 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.76, 0, 0.24, 1],
          delay: 0 
        }}
        className="fixed top-0 left-0 right-0 h-1/2 z-[9999] bg-black flex items-end justify-center pb-8"
      >
        <div className="text-center">
          {/* Logo Animation - Top Half */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: isComplete ? 0 : 1, 
              scale: 1,
              y: 0
            }}
            transition={{ 
              opacity: { duration: 0.4 },
              scale: { duration: 1, ease: 'easeOut' },
              y: { duration: 1, ease: 'easeOut' }
            }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
              Quntaniks<sup className="text-3xl align-super">®</sup>
            </h1>
          </motion.div>

          {/* Loading Bar */}
          <div className="w-64 md:w-96 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.8, ease: [0.65, 0, 0.35, 1] }}
              className="h-full bg-white rounded-full"
            />
          </div>
        </div>
      </motion.div>

      {/* Bottom Shutter - Slides Down */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isComplete ? '100%' : 0 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.76, 0, 0.24, 1],
          delay: 0 
        }}
        className="fixed bottom-0 left-0 right-0 h-1/2 z-[9999] bg-black flex items-start justify-center pt-8"
      >
        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: isComplete ? 0 : [0, 1, 1, 1],
            y: 0
          }}
          transition={{ 
            opacity: { duration: 2.8, times: [0, 0.15, 0.85, 1] },
            y: { duration: 0.8, ease: 'easeOut' }
          }}
          className="text-gray-400 text-sm tracking-widest uppercase"
        >
          Loading Experience...
        </motion.p>
      </motion.div>
    </>
  );
}
