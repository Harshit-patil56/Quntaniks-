'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    number: '01',
    title: 'Static Website',
    description: 'Fast, secure, and SEO-optimized websites built with modern technologies for optimal performance.',
    features: ['Landing Pages', 'Portfolio Sites', 'Business Cards', 'Documentation'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80'
  },
  {
    number: '02',
    title: 'Business Website',
    description: 'Professional business websites that showcase your brand and convert visitors into customers.',
    features: ['Corporate Sites', 'Company Profiles', 'Service Pages', 'Contact Forms'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
  },
  {
    number: '03',
    title: 'E-Commerce Website',
    description: 'Complete online stores with payment integration, inventory management, and customer analytics.',
    features: ['Product Catalog', 'Payment Gateway', 'Order Management', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80'
  },
  {
    number: '04',
    title: 'Premium Brand Website',
    description: 'High-end, custom-designed websites that elevate your brand with stunning visuals and interactions.',
    features: ['Custom Design', 'Animations', 'Brand Identity', 'Luxury Feel'],
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80'
  },
  {
    number: '05',
    title: 'Custom Fullstack Web App',
    description: 'Powerful web applications tailored to your specific business needs with full backend integration.',
    features: ['Custom Features', 'Database Design', 'API Development', 'User Authentication'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80'
  }
];

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  return (
    <section id="services" ref={containerRef} className="py-20 md:py-32 bg-[#f8f7f3] overflow-hidden">
      <div className="mx-2 md:mx-4 lg:mx-6 bg-black rounded-3xl p-8 md:p-12 lg:p-16">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.22, 0.68, 0.58, 1] }}
          >
            <h2 className="text-white text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight">
              Services
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 0.68, 0.58, 1] }}
            className="flex items-center justify-end"
          >
            <div className="text-white text-4xl md:text-6xl font-bold">
              ({services.length.toString().padStart(2, '0')})
            </div>
          </motion.div>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <ServiceItem
              key={service.number}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 0.68, 0.58, 1] }}
          className="mt-16 md:mt-20"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-gray-200"
          >
            <span>Get in touch</span>
            <div className="w-2 h-2 rounded-full bg-black"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceItem({ service, index }: { service: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const lineRef = useRef(null);
  const cardRef = useRef(null);

  // Scroll-based line animation
  const { scrollYProgress: lineProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start center"]
  });

  const lineWidth = useTransform(lineProgress, [0, 1], ["0%", "100%"]);

  // Scroll-based scale/transform for curtain effect
  const { scrollYProgress: cardProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start 100px"]
  });

  const scale = useTransform(cardProgress, [0, 1], [0.85, 1]);
  const y = useTransform(cardProgress, [0, 1], [60, 0]);
  const opacity = useTransform(cardProgress, [0, 0.3, 1], [0, 1, 1]);

  // Calculate if this should be sticky
  const isLastItem = index === 4; // Last item (index 4) shouldn't be sticky

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        position: isLastItem ? 'relative' : 'sticky',
        top: isLastItem ? 'auto' : '80px',
        zIndex: 10 - index, // Reverse z-index so later items appear on top
        marginBottom: isLastItem ? '0' : '20px',
      }}
    >
      <motion.div
        ref={cardRef}
        style={{
          scale,
          y,
          opacity,
          transformOrigin: 'top center',
        }}
        className="bg-transparent overflow-hidden"
      >
        {/* Animated line */}
        <div className="relative h-[1px] bg-white/10 overflow-hidden">
          <motion.div
            style={{ width: lineWidth }}
            className="absolute left-0 top-0 h-full bg-white/40"
          />
        </div>

        <div className="py-8 md:py-10 grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-6 lg:gap-8 items-start bg-transparent">
          {/* Left: Number and Title */}
          <div className="flex items-start gap-6 lg:gap-8">
            <div className="text-white/20 text-5xl md:text-6xl lg:text-7xl font-bold">
              {service.number}
            </div>
            <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight pt-2">
              {service.title}
            </h3>
          </div>

          {/* Middle: Features Pills */}
          <div className="flex flex-wrap gap-3">
            {service.features.map((feature: string) => (
              <span
                key={feature}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Right: Image and Description */}
          <div className="space-y-4 lg:max-w-md">
            {/* Image */}
            <div className="relative w-full max-w-[200px] aspect-[4/3] rounded-xl overflow-hidden bg-white/5">
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
    </motion.div>
    </div>
  );
}
