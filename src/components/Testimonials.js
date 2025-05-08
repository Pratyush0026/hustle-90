"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      quote: "Fluence AI has revolutionized the way we process data. The seamless integration and advanced analytics tools have saved us countless hours and improved our decision-making",
      name: "Sarah J.",
      title: "Data Analyst, TechCorp",
      avatar: "/api/placeholder/48/48"
    },
    {
      id: 2,
      quote: "The AI capabilities have transformed our workflow. We're now able to complete in days what used to take weeks, and with much greater accuracy",
      name: "Michael R.",
      title: "CTO, StartupVision",
      avatar: "/api/placeholder/48/48"
    },
    {
      id: 3,
      quote: "As a small business owner, Fluence AI has been a game-changer. It's like having an entire data science team at a fraction of the cost",
      name: "Jessica L.",
      title: "Founder, GrowthMetrics",
      avatar: "/api/placeholder/48/48"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="py-20 px-4 md:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #FFF0C8 0%, #FFE0B1 100%)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-white text-black rounded-full px-6 py-2 mb-6 shadow-md"
          >
            WALL OF LOVE
          </motion.div>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900"
          >
            What they're Saying
          </motion.h2>
        </div>
        
        {/* Testimonial carousel */}
        <div className="relative max-w-3xl mx-auto mb-20">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <blockquote className="text-xl text-gray-800 mb-6">
                "{testimonials[currentSlide].quote}"
              </blockquote>
              <div className="flex items-center">
                <img
                  src={testimonials[currentSlide].avatar}
                  alt={testimonials[currentSlide].name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[currentSlide].name}</p>
                  <p className="text-gray-600">{testimonials[currentSlide].title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="absolute top-1/2 -left-6 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center transform -translate-y-1/2"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="absolute top-1/2 -right-6 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center transform -translate-y-1/2"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
        
        {/* Stats section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.7, 
            delay: 0.4,
            staggerChildren: 0.1
          }}
          className="grid grid-cols-3 gap-8 text-center"
        >
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-4xl sm:text-5xl font-bold mb-2">92+</p>
            <p className="text-gray-700">Projects</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-4xl sm:text-5xl font-bold mb-2">4092+</p>
            <p className="text-gray-700">Investor Leads</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <p className="text-4xl sm:text-5xl font-bold mb-2">92%</p>
            <p className="text-gray-700">Customer Satisfied</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSection;