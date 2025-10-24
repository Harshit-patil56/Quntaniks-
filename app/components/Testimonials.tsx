'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Working with Quntaniks was a game-changer for our business. They delivered a stunning e-commerce platform that exceeded all expectations.",
    author: "Sarah Johnson",
    position: "CEO at TechCorp",
    company: "TechCorp Solutions"
  },
  {
    id: 2,
    quote: "The attention to detail and professionalism shown by Quntaniks was exceptional. Our new website has dramatically increased our online presence.",
    author: "Michael Chen",
    position: "Marketing Director",
    company: "Luxe Fashion"
  },
  {
    id: 3,
    quote: "From concept to launch, Quntaniks was with us every step of the way. The custom web app they built has streamlined our entire operation.",
    author: "Emma Williams",
    position: "Founder",
    company: "StartupHub"
  }
];

const stats = [
  { number: '98%', label: 'Client Satisfaction' },
  { number: '150+', label: 'Projects Completed' },
  { number: '24/7', label: 'Support Available' }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="testimonials" ref={ref} className="py-32 px-6 bg-[#f8f7f3]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">What Clients Say</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real feedback from real clients who trusted us with their digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold mb-4">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <div className="mb-6">
                <svg className="w-10 h-10 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
