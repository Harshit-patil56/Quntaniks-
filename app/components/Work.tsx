'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Animated Gaming Website',
    category: 'Immersive Gaming Platform',
    description: 'An epic metagame layer uniting players from countless games and platforms into a shared MMORPG adventure with stunning animations.',
    image: 'https://animated-webpage-sooty.vercel.app/img/about.webp',
    link: 'https://animated-webpage-sooty.vercel.app/'
  },
  {
    id: 2,
    title: 'Luxe Fashion',
    category: 'Premium Brand Website',
    description: 'High-end fashion brand website with stunning visuals and seamless shopping experience.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80'
  },
  {
    id: 3,
    title: 'StartupHub',
    category: 'Custom Fullstack Web App',
    description: 'All-in-one business management platform with CRM, analytics, and team collaboration tools.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
  }
];

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="work" ref={ref} className="relative bg-[#f8f7f3]">
      {/* Divider Line */}
      <div className="px-6">
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 0.68, 0.58, 1] }}
          className="h-[1px] bg-black/10 origin-left"
        />
      </div>

      <div className="py-12 md:py-16"></div>

      <div className="px-6">
        <div className="max-w-[90rem] mx-auto">
          {/* Header Section */}
          <div className="max-w-7xl mx-auto mb-20 md:mb-28">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-start">
              {/* Left: Title + Number */}
              <div className="flex items-start gap-6 lg:gap-8">
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: [0.22, 0.68, 0.58, 1] }}
                  className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black leading-[0.9] tracking-tight"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  Our<br />Work<span className="text-gray-300">.</span>
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-[2px] border-black text-black font-bold text-lg md:text-xl lg:text-2xl flex-shrink-0 mt-2"
                >
                  {projects.length}
                </motion.div>
              </div>

              {/* Middle: Projects Label + Description */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4 lg:col-start-3"
              >
                <h3 className="text-xs uppercase tracking-[0.3em] text-gray-500 font-medium hidden lg:block">
                  PROJECTS
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                  Showcasing our best work and the results we've delivered for our clients.
                </p>
              </motion.div>

              {/* Right: Copyright (Hidden on mobile/tablet) */}
              <motion.h2
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-black/10 hidden xl:block lg:col-start-3 justify-self-end"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                ©25
              </motion.h2>
            </div>
          </div>

          <div className="mb-16 md:mb-24"></div>

          {/* Floating "View work" cursor follower */}
          <motion.div
            className="fixed z-50 pointer-events-none hidden lg:flex"
            animate={{
              x: mousePosition.x - 60,
              y: mousePosition.y - 25,
              opacity: hoveredProject !== null ? 1 : 0,
            }}
            initial={{ opacity: 0 }}
            transition={{
              x: { type: "spring", damping: 20, stiffness: 300, mass: 0.5 },
              y: { type: "spring", damping: 20, stiffness: 300, mass: 0.5 },
              opacity: { duration: 0.2 }
            }}
          >
            <motion.div
              animate={{
                width: hoveredProject !== null ? 'auto' : 0,
              }}
              transition={{ duration: 0.3, ease: [0.22, 0.68, 0.58, 1] }}
              className="bg-white text-black px-4 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap overflow-hidden shadow-lg flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
              <span>View work</span>
            </motion.div>
          </motion.div>

          {/* Projects List */}
          <div className="space-y-32 md:space-y-40 lg:space-y-52">
            {projects.map((project, index) => {
              // Component to handle scroll animations per card
              const AnimatedCard = () => {
                const cardRef = useRef<HTMLDivElement>(null);
                
                // Track scroll progress of this specific card
                const { scrollYProgress } = useScroll({
                  target: cardRef,
                  offset: ["start end", "end start"]
                });

                // Dramatic 3D rotation - starts fully tilted (90deg), becomes flat as you scroll
                const rotateX = useTransform(
                  scrollYProgress,
                  [0, 0.3, 0.6, 1],
                  [90, 30, 5, 0]
                );

                // Add subtle scale bounce for dancing effect
                const scale = useTransform(
                  scrollYProgress,
                  [0, 0.2, 0.5, 0.8, 1],
                  [0.8, 0.95, 1.02, 0.99, 1]
                );

                // Add subtle y-movement for popup effect
                const y = useTransform(
                  scrollYProgress,
                  [0, 0.3, 0.6, 0.85, 1],
                  [100, 20, -5, 2, 0]
                );

                return (
                  <motion.div
                    ref={cardRef}
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.1,
                      ease: [0.22, 0.68, 0.58, 1],
                    }}
                    className="cursor-pointer flex justify-center"
                    style={{
                      perspective: '2000px',
                    }}
                  >
                    <motion.div
                      className="relative overflow-hidden bg-gray-200 rounded-[3rem] w-full max-w-4xl"
                      style={{
                        aspectRatio: '16 / 9',
                        rotateX,
                        scale,
                        y,
                        transformStyle: 'preserve-3d',
                      }}
                      transition={{ 
                        type: "spring",
                        stiffness: 100,
                        damping: 30,
                        mass: 1
                      }}
                      onClick={() => {
                        if (project.link) {
                          window.open(project.link, '_blank');
                        }
                      }}
                    >
                      {/* Image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      {/* Project Title Overlay - Always Visible */}
                      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 lg:bottom-10 lg:left-10">
                        <div className="flex items-center gap-2 bg-white px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-lg">
                          <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></div>
                          <h3 className="text-black text-sm md:text-base font-semibold tracking-tight">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              };

              return <AnimatedCard key={project.id} />;
            })}
          </div>

          <div className="mb-16 md:mb-20"></div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.4 + projects.length * 0.1,
              ease: [0.22, 0.68, 0.58, 1],
            }}
            className="flex justify-center"
          >
            <a
              href="#contact"
              className="group/btn relative inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-black bg-transparent text-black font-semibold text-base md:text-lg rounded-xl transition-all duration-300 hover:bg-black hover:text-white"
            >
              <span>View all projects</span>
              
              {/* Dot */}
              <div className="w-2 h-2 rounded-full bg-black group-hover/btn:bg-white transition-colors duration-300"></div>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="py-12 md:py-16"></div>
    </section>
  );
}
