'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    number: '01',
    title: 'Static Website',
    description: 'Fast, secure, and SEO-optimized websites built with modern technologies for optimal performance.',
    features: ['Landing Pages', 'Portfolio Sites', 'Business Cards', 'Documentation']
  },
  {
    number: '02',
    title: 'Business Website',
    description: 'Professional business websites that showcase your brand and convert visitors into customers.',
    features: ['Corporate Sites', 'Company Profiles', 'Service Pages', 'Contact Forms']
  },
  {
    number: '03',
    title: 'E-Commerce Website',
    description: 'Complete online stores with payment integration, inventory management, and customer analytics.',
    features: ['Product Catalog', 'Payment Gateway', 'Order Management', 'Analytics']
  },
  {
    number: '04',
    title: 'Premium Brand Website',
    description: 'High-end, custom-designed websites that elevate your brand with stunning visuals and interactions.',
    features: ['Custom Design', 'Animations', 'Brand Identity', 'Luxury Feel']
  },
  {
    number: '05',
    title: 'Custom Fullstack Web App',
    description: 'Powerful web applications tailored to your specific business needs with full backend integration.',
    features: ['Custom Features', 'Database Design', 'API Development', 'User Authentication']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as any
    }
  }
};

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1, margin: "0px 0px -100px 0px" });

  return (
    <section id="services" ref={containerRef} className="py-32 px-6 bg-[#f8f7f3] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm uppercase tracking-[0.3em] mb-4"
          >
            Services
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            What We Offer
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            From simple websites to complex web applications, we deliver solutions that drive results.
          </motion.p>
        </motion.div>

        <div className="space-y-0">
          {services.map((service, index) => (
            <ServiceItem
              key={service.number}
              service={service}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all hover:scale-105 duration-300"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceItem({ service, index }: { service: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.6, margin: "0px 0px -80px 0px" });

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] as any
      }
    })
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="border-t border-gray-200 py-12 px-8 group relative overflow-hidden"
    >
      {/* Hover background - slides in from left */}
      <motion.div
        initial={{ x: '-100%' }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute inset-0 bg-white"
      />
      
      <div className="relative z-10 flex flex-col md:flex-row gap-8">
        {/* Number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/4"
        >
          <span className="text-6xl font-bold text-gray-200 group-hover:text-gray-900 transition-all duration-500">
            {service.number}
          </span>
        </motion.div>

        {/* Content */}
        <div className="md:w-3/4 space-y-6">
          {/* Title */}
          <motion.h3
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={contentVariants}
            className="text-3xl md:text-4xl font-bold"
          >
            {service.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={contentVariants}
            className="text-gray-500 text-lg leading-relaxed"
          >
            {service.description}
          </motion.p>

          {/* Features */}
          <motion.div
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={contentVariants}
            className="flex flex-wrap gap-3"
          >
            {service.features.map((feature: string, featureIndex: number) => (
              <motion.span
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.3 + (featureIndex * 0.08),
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-black text-white rounded-full text-sm transition-all duration-300"
              >
                {feature}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
