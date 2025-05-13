// "use client"

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const TestimonialsSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
  
//   const testimonials = [
//     {
//       id: 1,
//       quote: "Fluence AI has revolutionized the way we process data. The seamless integration and advanced analytics tools have saved us countless hours and improved our decision-making",
//       name: "Sarah J.",
//       title: "Data Analyst, TechCorp",
//       avatar: "/api/placeholder/48/48"
//     },
//     {
//       id: 2,
//       quote: "The AI capabilities have transformed our workflow. We're now able to complete in days what used to take weeks, and with much greater accuracy",
//       name: "Michael R.",
//       title: "CTO, StartupVision",
//       avatar: "/api/placeholder/48/48"
//     },
//     {
//       id: 3,
//       quote: "As a small business owner, Fluence AI has been a game-changer. It's like having an entire data science team at a fraction of the cost",
//       name: "Jessica L.",
//       title: "Founder, GrowthMetrics",
//       avatar: "/api/placeholder/48/48"
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
//   };

//   // Auto-rotate slides every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       nextSlide();
//     }, 5000);
    
//     return () => clearInterval(timer);
//   }, [currentSlide]);

//   return (
//     <div className="py-20 px-4 md:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #FFF0C8 0%, #FFE0B1 100%)' }}>
//       <div className="max-w-6xl mx-auto">
//         {/* Header section */}
//         <div className="text-center mb-16">
//           <motion.div 
//             initial={{ y: -20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="inline-block bg-white text-black rounded-full px-6 py-2 mb-6 shadow-md"
//           >
//             WALL OF LOVE
//           </motion.div>
//           <motion.h2 
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-4xl sm:text-5xl font-bold text-gray-900"
//           >
//             What they're Saying
//           </motion.h2>
//         </div>
        
//         {/* Testimonial carousel */}
//         <div className="relative max-w-3xl mx-auto mb-20">
//           <AnimatePresence mode="wait">
//             <motion.div 
//               key={currentSlide}
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -20 }}
//               transition={{ duration: 0.5 }}
//               className="bg-white rounded-xl shadow-md p-8"
//             >
//               <blockquote className="text-xl text-gray-800 mb-6">
//                 "{testimonials[currentSlide].quote}"
//               </blockquote>
//               <div className="flex items-center">
//                 <img
//                   src={testimonials[currentSlide].avatar}
//                   alt={testimonials[currentSlide].name}
//                   className="w-12 h-12 rounded-full mr-4"
//                 />
//                 <div>
//                   <p className="font-semibold text-gray-900">{testimonials[currentSlide].name}</p>
//                   <p className="text-gray-600">{testimonials[currentSlide].title}</p>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
          
//           {/* Navigation buttons */}
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={prevSlide}
//             className="absolute top-1/2 -left-6 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center transform -translate-y-1/2"
//             aria-label="Previous testimonial"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={nextSlide}
//             className="absolute top-1/2 -right-6 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center transform -translate-y-1/2"
//             aria-label="Next testimonial"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </motion.button>
//         </div>
        
//         {/* Stats section */}
//         <motion.div 
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ 
//             duration: 0.7, 
//             delay: 0.4,
//             staggerChildren: 0.1
//           }}
//           className="grid grid-cols-3 gap-8 text-center"
//         >
//           <motion.div
//             whileHover={{ y: -5 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <p className="text-4xl sm:text-5xl font-bold mb-2">92+</p>
//             <p className="text-gray-700">Projects</p>
//           </motion.div>
//           <motion.div
//             whileHover={{ y: -5 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <p className="text-4xl sm:text-5xl font-bold mb-2">4092+</p>
//             <p className="text-gray-700">Investor Leads</p>
//           </motion.div>
//           <motion.div
//             whileHover={{ y: -5 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <p className="text-4xl sm:text-5xl font-bold mb-2">92%</p>
//             <p className="text-gray-700">Customer Satisfied</p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialsSection;

// "use client"

// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const TestimonialsSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(1); // Start with middle card active
  
//   const testimonials = [
//     {
//       id: 1,
//       name: "Virag",
//       handle: "@virag_ky",
//       text: "This is so cool - animated components collection 🤩🔥",
//       avatar: "/api/placeholder/48/48"
//     },
//     {
//       id: 2,
//       name: "Rui",
//       handle: "@Logreg_n_coffee",
//       text: "Literally the coolest react library in React",
//       avatar: "/api/placeholder/48/48"
//     },
//     {
//       id: 3,
//       name: "Vollhard",
//       handle: "@0xVollhard",
//       text: "This website is reactbits.dev. Thank me later devs",
//       avatar: "/api/placeholder/48/48"
//     },
//     {
//       id: 4,
//       name: "Deepam Makwana",
//       handle: "@DM",
//       text: "Really impressed by reactbits.dev. Check it out.",
//       avatar: "/api/placeholder/48/48"
//     }
//   ];

//   // Auto-rotate testimonials every 3 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 3000);
    
//     return () => clearInterval(timer);
//   }, [testimonials.length]);

//   // Calculate position and styling for each card based on its position relative to the active card
//   const getCardStyle = (index) => {
//     const activeIndex = currentIndex;
//     const diff = (index - activeIndex + testimonials.length) % testimonials.length;
    
//     // Calculate positioning based on difference from active card
//     if (diff === 0) { // Active card
//       return {
//         zIndex: 30,
//         scale: 1,
//         opacity: 1,
//         x: 0,
//         rotate: 0
//       };
//     } else if (diff === 1 || diff === testimonials.length - 1) { // Cards to the left and right
//       const direction = diff === 1 ? 1 : -1;
//       return {
//         zIndex: 20,
//         scale: 0.9,
//         opacity: 0.7,
//         x: direction * 200,
//         rotate: direction * 5
//       };
//     } else { // Cards further away
//       const direction = diff <= testimonials.length / 2 ? 1 : -1;
//       return {
//         zIndex: 10,
//         scale: 0.8,
//         opacity: 0.4,
//         x: direction * 350,
//         rotate: direction * 10
//       };
//     }
//   };

//   return (
//     <section className="relative py-24 overflow-hidden">
//       {/* Video Background */}
//       <div className="absolute inset-0 w-full h-full z-0">
//         <video
//           className="absolute inset-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src="/assets/testbg.mp4" type="video/mp4" />
//         </video>
//         {/* Semi-transparent overlay for better text readability */}
//         <div className="absolute inset-0 bg-black/20 z-0"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
//             Here's what others are saying
//           </h2>
//           <p className="text-xl text-white/80">
//             They think React Bits is cool, maybe you will too!
//           </p>
//         </div>

//         {/* Testimonial Cards Carousel */}
//         <div className="relative h-[300px] w-full max-w-4xl mx-auto">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.id}
//               className="absolute top-0 left-0 right-0 mx-auto w-full max-w-md bg-black/80 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl shadow-xl"
//               style={{
//                 originX: 0.5,
//                 originY: 0.5,
//                 width: "100%",
//                 maxWidth: "380px",
//                 margin: "0 auto",
//                 transformOrigin: "center center",
//               }}
//               initial={getCardStyle(index)}
//               animate={getCardStyle(index)}
//               transition={{
//                 type: "spring",
//                 stiffness: 300,
//                 damping: 30,
//                 mass: 1.5
//               }}
//               onClick={() => setCurrentIndex(index)}
//             >
//               <div className="flex items-start mb-4">
//                 <div className="mr-4">
//                   <img 
//                     src={testimonial.avatar} 
//                     alt={testimonial.name} 
//                     className="w-12 h-12 rounded-full"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
//                   <p className="text-gray-400">{testimonial.handle}</p>
//                 </div>
//               </div>
//               <p className="text-white/90 text-lg">
//                 {testimonial.text}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;


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
      avatar: "/api/placeholder/48/48"
    },
    {
      id: 2,
      name: "Virag",
      handle: "@virag_ky",
      text: "This is so cool - animated components collection 🤩🔥",
      avatar: "/api/placeholder/48/48"
    },
    {
      id: 3,
      name: "Rui",
      handle: "@Logreg_n_coffee",
      text: "Literally the coolest react library in React",
      avatar: "/api/placeholder/48/48"
    },
    {
      id: 4,
      name: "Vollhard",
      handle: "@0xVollhard",
      text: "This website is reactbits.dev. Thank me later devs",
      avatar: "/api/placeholder/48/48"
    },
    {
      id: 5,
      name: "Deepam Makwana",
      handle: "@DM",
      text: "Really impressed by reactbits.dev. Check it out.",
      avatar: "/api/placeholder/48/48"
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