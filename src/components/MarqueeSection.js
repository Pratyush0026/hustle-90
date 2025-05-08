"use client"

import React from 'react';
import { motion } from 'framer-motion';

const MarqueeSection = () => {
  // Create a duplicated array to ensure continuous animation
  const marqueeText = [
    "Already Behind.",
    "You're Not Early.",
    "You're Already Behind.",
    "You're Not Early.",
    "You're Already Behind.",
    "You're Not Early.",
    "You're Already Behind.",
    "You're Not Early."
  ];

  return (
    <div className="overflow-hidden py-8 bg-white">
      <motion.div 
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ 
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear"
        }}
        className="whitespace-nowrap flex items-center"
      >
        {marqueeText.map((text, index) => (
          <div key={index} className="inline-flex items-center mx-8">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold">{text}</span>
            <span className="mx-4 text-4xl md:text-5xl lg:text-6xl">♦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeSection;