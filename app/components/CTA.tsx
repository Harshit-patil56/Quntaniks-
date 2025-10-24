'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section id="contact" ref={ref} className="py-32 px-6 bg-[#f8f7f3]">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Ready to build<br />something amazing?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Let's discuss your project and create a digital solution that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@quntaniks.com"
              className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#services"
              className="inline-block border-2 border-black text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-black hover:text-white transition-all"
            >
              View Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
