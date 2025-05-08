"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    {
      id: 1,
      question: 'What is Fluence AI?',
      answer: 'Fluence AI is an advanced artificial intelligence platform designed to streamline data processing, automate tasks, and provide powerful analytics capabilities for businesses of all sizes.'
    },
    {
      id: 2,
      question: 'Can I integrate Fluence AI with my existing tools?',
      answer: 'Yes! Fluence AI supports integration with a wide range of tools and platforms. Our flexible APIs allow you to connect with your data sources effortlessly, enabling a smooth workflow.'
    },
    {
      id: 3,
      question: 'How does Fluence AI automate tasks?',
      answer: 'Fluence AI uses machine learning algorithms to understand, learn, and automate repetitive tasks. It analyzes patterns in your workflow and suggests automations that can save time and reduce errors.'
    },
    {
      id: 4,
      question: 'Is my data secure with Fluence AI?',
      answer: 'Absolutely. We employ enterprise-grade encryption, regular security audits, and strict access controls to ensure your data remains protected. We comply with major security standards including GDPR, SOC 2, and more.'
    },
    {
      id: 5,
      question: 'What kind of support do you offer?',
      answer: 'We provide 24/7 technical support, comprehensive documentation, video tutorials, and a dedicated customer success manager for enterprise plans. Our team is always ready to help you get the most out of Fluence AI.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
        {/* Left Column */}
        <div className="md:w-1/3">
          <div className="inline-block bg-white text-black rounded-full px-5 py-1.5 border border-gray-200 shadow-sm mb-4">
            FAQ
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl font-medium mb-2">Still have a question?</p>
          <p className="mb-6">Contact us! We'll be happy to help you.</p>
          
          <div className="flex -space-x-3">
            <motion.div 
              whileHover={{ y: -5 }}
              className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
            >
              <img src="/api/placeholder/48/48" alt="Team member" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="w-12 h-12 rounded-full border-2 border-white overflow-hidden" 
            >
              <img src="/api/placeholder/48/48" alt="Team member" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
            >
              <img src="/api/placeholder/48/48" alt="Team member" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
        
        {/* Right Column - FAQ Accordion */}
        <div className="md:w-2/3">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <motion.div 
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: faq.id * 0.1 }}
                className="bg-gray-50 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <span className="text-2xl">
                    {openIndex === faq.id ? '×' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;