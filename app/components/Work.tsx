'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'TechCorp Solutions',
    category: 'E-Commerce Website',
    description: 'A complete e-commerce platform with custom payment integration and real-time inventory management.',
    image: '/project1.jpg'
  },
  {
    id: 2,
    title: 'Luxe Fashion',
    category: 'Premium Brand Website',
    description: 'High-end fashion brand website with stunning visuals and seamless shopping experience.',
    image: '/project2.jpg'
  },
  {
    id: 3,
    title: 'StartupHub',
    category: 'Custom Fullstack Web App',
    description: 'All-in-one business management platform with CRM, analytics, and team collaboration tools.',
    image: '/project3.jpg'
  }
];

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="work" ref={ref} className="py-32 px-6 bg-[#f8f7f3]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Selected Work</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h2>
          <p className="text-xl text-gray-400 max-w-3xl">
            Showcasing our best work and the results we've delivered for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg bg-[#1a1a1a] aspect-[4/3] mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-gray-700">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all"
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
