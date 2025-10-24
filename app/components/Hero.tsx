'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const words = ['Strategic.', 'Innovative.', 'Unforgettable.'];

const AnimatedWords = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2500); // Change word every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-16 md:h-20 lg:h-24 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ 
            transform: 'translate3d(0px, -15.506%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d',
            willChange: 'transform'
          }}
          animate={{ 
            transform: 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d',
            willChange: 'transform'
          }}
          exit={{ 
            transform: 'translate3d(0px, 15.506%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d',
            willChange: 'transform'
          }}
          transition={{ 
            duration: 0.6, 
            ease: [0.4, 0.0, 0.2, 1]
          }}
          className="absolute text-3xl md:text-4xl lg:text-5xl font-bold text-white"
        >
          {words[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Top Section - Large Brand Name with Light Background */}
      <div className="relative bg-[#f8f7f3]">
        <div className="relative z-10 px-4 md:px-12 lg:px-16 pt-20 pb-8 flex items-start justify-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-[4rem] sm:text-[6rem] md:text-[10rem] lg:text-[14rem] xl:text-[16rem] font-bold text-black leading-none tracking-tight">
              Quntaniks<sup className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl align-super">®</sup>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Bottom Section with Video Background */}
      <div className="relative flex-1 flex flex-col items-end justify-between bg-black overflow-hidden mx-2 md:mx-4 lg:mx-6 rounded-3xl mb-4">
        {/* Services Strip at Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-10 w-full bg-transparent border-b border-gray-800 py-5 px-8 md:px-12 lg:px-16"
        >
          <div className="flex flex-wrap justify-between items-center gap-6 text-white text-base md:text-lg">
            <div className="flex items-center gap-4">
              <div className="text-white">Static Websites</div>
              <div className="w-px h-6 bg-gray-700 home-header_service-line"></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-white">Business Websites</div>
              <div className="w-px h-6 bg-gray-700 home-header_service-line"></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-white">E-Commerce</div>
              <div className="w-px h-6 bg-gray-700 home-header_service-line"></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-white home-header_service-text">Custom Web Apps</div>
            </div>
          </div>
        </motion.div>

        {/* Content Area */}
        <div className="relative flex-1 w-full flex items-end justify-between px-8 md:px-12 lg:px-16 pb-20 pt-32">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          suppressHydrationWarning
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          style={{
            backgroundImage: 'url("https://cdn.prod.website-files.com/6840876d4d1ed0e8e2a330b9%2F684095d127c9ea85d4851940_new-12149178_1920_1080_24fps-poster-00001.jpg")'
          }}
        >
          <source src="https://cdn.prod.website-files.com/6840876d4d1ed0e8e2a330b9%2F684095d127c9ea85d4851940_new-12149178_1920_1080_24fps-transcode.mp4" type="video/mp4" />
          <source src="https://cdn.prod.website-files.com/6840876d4d1ed0e8e2a330b9%2F684095d127c9ea85d4851940_new-12149178_1920_1080_24fps-transcode.webm" type="video/webm" />
        </video>

        {/* Scrolling Marquee at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden bg-black bg-opacity-40 py-3 note-marquee_component">
          <div className="note-marquee_in">
            <motion.div
              style={{
                transform: 'translate3d(-66.133%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
                willChange: 'transform'
              }}
              animate={{
                transform: [
                  'translate3d(-66.133%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                  'translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
                ]
              }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex whitespace-nowrap text-white text-xs tracking-[0.2em] uppercase note-marquee_text"
            >
              Scroll to reveal —&nbsp;&nbsp;&nbsp;
              Scroll to reveal —&nbsp;&nbsp;&nbsp;
              Scroll to reveal —&nbsp;&nbsp;&nbsp;
              Scroll to reveal —&nbsp;&nbsp;&nbsp;
              Scroll to reveal —&nbsp;&nbsp;&nbsp;
              Scroll to reveal —&nbsp;&nbsp;&nbsp;
            </motion.div>
          </div>
        </div>
        {/* Left Side - Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-xl self-end z-20"
        >
          <p className="text-xs text-gray-300 uppercase tracking-[0.3em] mb-4 font-light">
            WE ARE QUNTANIKS®
          </p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
            Not just a studio, we are
          </h3>
          <AnimatedWords />
        </motion.div>

        {/* Right Side - Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="hidden lg:block group"
        >
          <div className="bg-white bg-opacity-10 backdrop-blur-2xl rounded-2xl p-5 w-64 group-hover:w-96 hover:bg-opacity-15 transition-all duration-500 ease-in-out overflow-hidden border border-white border-opacity-10">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-white bg-opacity-15 backdrop-blur-md flex-shrink-0 flex items-center justify-center overflow-hidden">
                <span className="text-white text-xl font-bold">Q</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-base mb-0.5">Contact Us</p>
                <p className="text-gray-400 text-xs mb-2 opacity-100 group-hover:opacity-100 transition-opacity">Ready to start your project?</p>
                
                {/* Expanded Content - Only visible on hover */}
                <div className="max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 overflow-hidden space-y-2">
                  <div>
                    <p className="text-gray-500 text-xs mb-1">Email</p>
                    <a href="mailto:contact@quntaniks.com" className="text-white text-sm hover:text-gray-300 transition-colors block">
                      contact@quntaniks.com
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs mb-1">Phone</p>
                    <a href="tel:+1-202-555-0102" className="text-white text-sm hover:text-gray-300 transition-colors block">
                      +1-202-555-0102
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
