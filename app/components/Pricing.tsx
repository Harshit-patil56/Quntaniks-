'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$1,500',
    description: 'Perfect for small businesses and personal websites',
    features: [
      'Static or Business Website',
      'Responsive Design',
      'SEO Optimized',
      'Contact Form Integration',
      '3 Revisions',
      '30-Day Support'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$4,500',
    description: 'Ideal for growing businesses and e-commerce',
    features: [
      'E-Commerce Website',
      'Payment Gateway Integration',
      'Product Management System',
      'Customer Analytics',
      '5 Revisions',
      '90-Day Support',
      'Training Session'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$12,000+',
    description: 'Custom solutions for complex requirements',
    features: [
      'Custom Fullstack Web App',
      'Advanced Features',
      'Database Architecture',
      'API Development',
      'Unlimited Revisions',
      '1-Year Support',
      'Dedicated Project Manager'
    ],
    popular: false
  }
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="pricing" ref={ref} className="py-32 px-6 bg-[#f8f7f3]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Pricing</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Choose Your Plan</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transparent pricing for every budget. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative p-8 rounded-lg border ${
                plan.popular
                  ? 'bg-black text-white border-black'
                  : 'bg-white border-gray-200 hover:border-gray-300'
              } transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium border border-gray-200">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-black'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-gray-200' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-black'}`}>
                  {plan.price}
                </span>
                {!plan.price.includes('+') && (
                  <span className={`text-lg ${plan.popular ? 'text-gray-200' : 'text-gray-600'}`}>
                    /project
                  </span>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                        plan.popular ? 'text-white' : 'text-black'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={plan.popular ? 'text-gray-200' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block w-full text-center py-4 rounded-full font-medium transition-all ${
                  plan.popular
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            Need something custom? Let's discuss your specific requirements.
          </p>
          <a
            href="#contact"
            className="inline-block text-white hover:text-gray-300 transition-colors underline"
          >
            Contact us for a custom quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
