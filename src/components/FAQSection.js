"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(1);

const faqs = [
  {
    id: 1,
    question: 'What is Hustle 90?',
    answer: 'Hustle 90 is a fixed-fee startup execution service that takes your idea from concept to investor-ready MVP in just 90 days. We combine technical expertise, startup experience, and a proven roadmap to help founders launch faster without the equity dilution of hiring a full team.'
  },
  {
    id: 2,
    question: 'Can I integrate custom AI/ML features?',
    answer: 'Yes! We specialize in AI integration and can build custom machine learning features into your MVP. Whether you need natural language processing, computer vision, or predictive analytics, our team can implement these as part of your Pro package or as an add-on to other plans.'
  },
  {
    id: 3,
    question: 'Whats the actual 90-day roadmap?',
    answer: 'Our 90-day roadmap consists of three phases: Discovery (Days 1-15), where we refine requirements and create technical specs; Build (Days 16-75), where we develop the core MVP and iterate based on feedback; and Launch Prep (Days 76-90), where we finalize the product, prepare pitch materials, and set up analytics for investor meetings.'
  },
  {
    id: 4,
    question: 'How do I know if Hustle 90 is right for me?',
    answer: 'Hustle 90 is ideal for founders who have a clear vision but need technical execution help, are preparing for fundraising, or want to validate their concept quickly without hiring a full team. We offer free consultation calls to discuss your specific needs and determine if our approach aligns with your goals.'
  },
  {
    id: 5,
    question: 'Can my team scale with Hustle 90 post-launch?',
    answer: 'Absolutely. Many founders continue with our post-launch support packages after the initial 90 days. We can provide ongoing development, maintenance, feature expansion, and technical advisory services to help you scale until youre ready to build your in-house team.'
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
              <img src="/assets/2.jpg" alt="Team member" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="w-12 h-12 rounded-full border-2 border-white overflow-hidden" 
            >
              <img src="/assets/91.jpg" alt="Team member" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
            >
              <img src="/assets/71.jpg" alt="Team member" className="w-full h-full object-cover" />
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