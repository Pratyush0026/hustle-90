// components/Hero.jsx
"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

import { DM_Sans, Poppins } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const ShinyText = ({ text, isLight = true }) => {
  return (
    <div className="relative inline-block">
      <span className={isLight ? "text-white" : "text-gray-900"}>
        {text}
      </span>
      
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
          color: isLight ? 'white' : '#1a202c',
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
    <section className={`relative overflow-hidden ${dmSans.className}`} style={{ height: '640px' }}>
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          style={{ 
            filter: 'brightness(1.1)',
            transform: 'scale(1.02)' 
          }}
          ref={(video) => {
            if (video) {
              video.playbackRate = 3.0; 
            }
          }}
        >
          <source src="/assets/herobg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-200/70 to-orange-500/70 z-0"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-6 lg:px-8 text-center pt-20 sm:pt-24 lg:pt-0">
        <div className="max-w-6xl mx-auto w-full">
          <h1 className="text-black text-center font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Idea <span className="text-black inline-block" style={{ 
              fontSize: '1.4em', 
              fontWeight: 900,
              fontFamily: 'monospace'
            }}>→</span> Investor Ready<br />
            MVP in <span className="text-black">90 Days</span>
          </h1>

          <p 
            className={`mt-6 text-black text-center max-w-6xl mx-auto ${poppins.className}`}
            style={{
              fontSize: 'clamp(16px, 2vw, 24px)',
              fontWeight: 400,
              lineHeight: 'clamp(28px, 3.5vw, 42px)',
              letterSpacing: '0px'
            }}
          >
            Your Startup Doesn't Need More Chaos It Needs Outcomes. We Take You From Napkin Sketch{' '}
            <br className="hidden sm:block" />
            To Demo Day Ready MVP With Battle Tested Systems, AI-Driven Speed, And Full-Stack Execution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link 
              href="/get-started" 
              className="bg-gray-900 hover:bg-gray-800 transition-all duration-300 flex items-center justify-center rounded-lg text-white font-medium"
              style={{
                width: '200px',
                height: '50px'
              }}
            >
              <ShinyText text="Start Now" isLight={true} />
            </Link>
            
            <Link 
              href="/roadmap" 
              className="bg-white/90 hover:bg-white transition-all duration-300 flex items-center justify-center rounded-lg border border-gray-300 font-medium"
              style={{
                width: '200px',
                height: '50px'
              }}
            >
              <ShinyText text="View Roadmap" isLight={false} />
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          section {
            height: auto !important;
            min-height: 100vh;
            padding: 100px 0 60px 0;
          }
        }
        
        @media (max-width: 768px) {
          section {
            height: auto !important;
            min-height: 80vh;
            padding: 90px 0 40px 0;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1199px) {
          section {
            height: auto !important;
            min-height: 70vh;
            padding: 80px 0 40px 0;
          }
        }
        
        @media (min-width: 1200px) {
          section {
            height: 688px;
            padding: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;