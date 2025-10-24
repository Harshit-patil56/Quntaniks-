'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    question: 'What type of websites do you build?',
    answer: 'We build all types of websites including static websites, business websites, e-commerce platforms, premium brand websites, and custom fullstack web applications tailored to your specific needs.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity. A static website typically takes 1-2 weeks, business websites 2-3 weeks, e-commerce sites 4-6 weeks, and custom web applications 8-12 weeks or more depending on features.'
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes! All our packages include post-launch support ranging from 30 days to 1 year depending on the plan. We also offer extended maintenance packages for ongoing updates and support.'
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern, industry-standard technologies including React, Next.js, Node.js, TypeScript, and various databases. We choose the best tech stack based on your project requirements.'
  },
  {
    question: 'Can you help with website redesigns?',
    answer: 'Absolutely! We offer complete website redesign services to modernize your existing site, improve user experience, and enhance performance while maintaining your brand identity.'
  },
  {
    question: 'What is your payment structure?',
    answer: 'We typically work with a 50% upfront payment to begin the project and 50% upon completion. For larger projects, we can arrange milestone-based payments to be discussed during consultation.'
  }
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" ref={ref} className="py-32 px-6 bg-[#f8f7f3]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">FAQ</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Common Questions</h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium pr-8">{faq.question}</span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
