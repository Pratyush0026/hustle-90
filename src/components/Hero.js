

// // components/Hero.jsx
// import Link from 'next/link';

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen bg-gradient-to-r from-orange-200 to-orange-500 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-500 z-0"></div>
      
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-6 lg:px-8 text-center">
//         <div className="max-w-6xl mx-auto pt-24">
//           <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
//             MVP. Investor Ready.<br />
//             Targeted VCs.<br />
//             <span className="text-blue-600">90 Days.</span>
//           </h1>
          
//           <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-12">
//             <Link href="/get-started" className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-lg font-medium transition-colors duration-300 w-full sm:w-auto text-center">
//               Get Started
//             </Link>
//             <Link href="/demo" className="bg-transparent border border-gray-900 text-gray-900 hover:bg-gray-900/10 px-10 py-4 rounded-lg font-medium transition-colors duration-300 w-full sm:w-auto text-center">
//               Book a Demo
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// components/Hero.jsx
"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

// ShinyText component that applies shine only to text
const ShinyText = ({ text, isLight = true }) => {
  // Returning to the original working version
  return (
    <div className="relative inline-block">
      {/* Base text - this is what's actually visible/clickable */}
      <span className={isLight ? "text-white" : "text-gray-900"}>
        {text}
      </span>
      
      {/* Overlay text with shine effect - position absolute on top */}
      <motion.span
        className="absolute top-0 left-0 whitespace-nowrap"
        style={{
          backgroundImage: isLight 
            ? 'linear-gradient(90deg, transparent, rgba(180, 180, 180, 0.9), transparent)'  // Gray shine for white text
            : 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)', // White shine for dark text
          backgroundSize: '200% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textFillColor: 'transparent',
          color: isLight ? 'white' : '#1a202c', // text color for fallback
        }}
        initial={{ backgroundPosition: '-100%' }}
        animate={{ 
          backgroundPosition: ['200%', '-100%'],
          transition: {
            repeat: Infinity,
            duration: 2,
            ease: "linear"
          }
        }}
      >
        {text}
      </motion.span>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/assets/herobg.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-200/70 to-orange-500/70 z-0"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto pt-24">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
            MVP. Investor Ready.<br />
            Targeted VCs.<br />
            <span className="text-blue-600">90 Days.</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-12">
            <Link href="/get-started" className="bg-gray-900 hover:bg-gray-800 px-10 py-4 rounded-lg font-medium transition-colors duration-300 w-full sm:w-auto text-center">
              <ShinyText text="Get Started" isLight={true} />
            </Link>
            <Link href="/demo" className="bg-transparent border border-gray-900 hover:bg-gray-900/10 px-10 py-4 rounded-lg font-medium transition-colors duration-300 w-full sm:w-auto text-center">
              <ShinyText text="Book a Demo" isLight={false} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;