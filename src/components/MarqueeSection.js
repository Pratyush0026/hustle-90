"use client"

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const MarqueeSection = () => {
  // Add the keyframes to the document for the gradient animation
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-gradient {
        animation: gradient 1.5s linear infinite;
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  // GradientText component defined inline - exactly as in your docs
  const GradientText = ({
    children,
    className = "",
    colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
    animationSpeed = 8,
    showBorder = false,
  }) => {
    const gradientStyle = {
      backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
      animationDuration: `${animationSpeed}s`,
    };
    
    return (
      <div
        className={`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`}
      >
        {showBorder && (
          <div
            className="absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
            style={{
              ...gradientStyle,
              backgroundSize: "300% 100%",
            }}
          >
            <div
              className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
              style={{
                width: "calc(100% - 2px)",
                height: "calc(100% - 2px)",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            ></div>
          </div>
        )}
        <div
          className="inline-block relative z-2 text-transparent bg-cover animate-gradient"
          style={{
            ...gradientStyle,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            backgroundSize: "300% 100%",
          }}
        >
          {children}
        </div>
      </div>
    );
  };

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

  // Use the provided colors
  const colors = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"];
  
  const animationSpeed = 3; // Much faster than 3

  return (
    <div className="overflow-hidden py-8 bg-black">
      <motion.div 
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ 
          repeat: Infinity,
          repeatType: "loop",
          duration: 15, // Faster horizontal scrolling
          ease: "linear"
        }}
        className="whitespace-nowrap flex items-center"
      >
        {marqueeText.map((text, index) => (
          <div key={index} className="inline-flex items-center mx-8">
            <GradientText 
              colors={colors} 
              animationSpeed={animationSpeed} // Faster color transition
              showBorder={false}
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
            >
              {text}
            </GradientText>
            <span className="mx-4 text-4xl md:text-5xl lg:text-6xl text-white">♦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeSection;