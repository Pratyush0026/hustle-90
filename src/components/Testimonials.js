


"use client"

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
const testimonials = [
  {
    id: 1,
    name: "Gibson",
    handle: "@gibsons_memory",
    text: "Reactbits.dev has got to be the most fantastic UI component lib I've seen in a while 🔥",
    avatar: "/assets/2.jpg"
  },
  {
    id: 2,
    name: "Virag",
    handle: "@virag_ky",
    text: "This is so cool - animated components collection 🤩🔥",
    avatar: "/assets/24.jpg"
  },
  {
    id: 3,
    name: "Rui",
    handle: "@Logreg_n_coffee",
    text: "Literally the coolest react library in React",
    avatar: "/assets/91.jpg"
  },
  {
    id: 4,
    name: "Vollhard",
    handle: "@0xVollhard",
    text: "This website is reactbits.dev. Thank me later devs",
    avatar: "/assets/26.jpg"
  },
  {
    id: 5,
    name: "Deepam Makwana",
    handle: "@DM",
    text: "Really impressed by reactbits.dev. Check it out.",
    avatar: "/assets/71.jpg"
  }
];


  // Duplicate testimonials to create a seamless loop
  const allTestimonials = [...testimonials, ...testimonials];
  
  // Alternate directions for odd and even cards
  const getCardRotation = (index) => {
    return index % 2 === 0 ? -3 : 3;
  };
  
  // Add a small vertical offset based on rotation to prevent cutting
  const getCardY = (index) => {
    return index % 2 === 0 ? 5 : -5;
  };

  const containerRef = useRef(null);
  const pauseRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    
    const handleMouseEnter = () => {
      pauseRef.current = true;
    };
    
    const handleMouseLeave = () => {
      pauseRef.current = false;
    };
    
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-black min-h-[600px] flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/testbg.mp4" type="video/mp4" />
        </video>
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black/25 z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Here's what others are saying
          </h2>
          <p className="text-xl text-white/80">
            They think React Bits is cool, maybe you will too!
          </p>
        </div>

        {/* Testimonial Cards Carousel */}
        <div 
          ref={containerRef}
          className="relative w-full overflow-hidden h-[250px] py-6"
        >
          <motion.div 
            className="flex gap-8 absolute top-1/2 -translate-y-1/2"
            initial={{ x: 0 }}
            animate={{ 
              x: [0, -1920],
            }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
                repeatDelay: 0,
              }
            }}
            style={{
              paused: pauseRef.current
            }}
          >
            {allTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="flex-shrink-0 w-[300px] bg-black/40 backdrop-blur-sm border border-gray-700/50 p-4 rounded-xl shadow-xl"
                initial={{ rotate: getCardRotation(index) }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0,
                  y: 0,
                  transition: { duration: 0.3 }
                }}
                style={{ 
                  rotate: getCardRotation(index),
                  y: getCardY(index)
                }}
              >
                <div className="flex items-start mb-2">
                  <div className="mr-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.handle}</p>
                  </div>
                </div>
                <p className="text-white/90 text-sm">
                  {testimonial.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;