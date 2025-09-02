// import React from 'react';

// const AboutSection = () => {
//   return (
//     <section className="w-full max-w-[1233px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
//       <div className="relative w-full lg:min-h-[783px] rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] bg-gradient-to-b from-orange-500/45 to-orange-500/45 overflow-hidden">
//         {/* Background image */}
//         <div
//           className="absolute inset-0 rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: 'url(/assets/bgabout.png)' }}
//         />

//         {/* Content */}
//         <div className="relative z-10 h-full w-full px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 xl:px-20 xl:py-24">
//           <div className="h-full flex flex-col justify-start gap-8 lg:gap-12">

//             {/* About Tag */}
//             <div className="flex items-center justify-center w-[173px] px-5 py-4 bg-white border border-[#E6651F] rounded-full shadow-[0_2.26px_5.65px_0_rgba(0,0,0,0.07),0_9.041px_9.041px_0_rgba(0,0,0,0.06),0_21.471px_12.431px_0_rgba(0,0,0,0.04),0_37.293px_14.691px_0_rgba(0,0,0,0.01)]">
//               <span className="text-black font-inter text-sm sm:text-base lg:text-[23px] font-bold tracking-wide uppercase">
//                 ABOUT
//               </span>
//             </div>

//             {/* Main Text Content - Full Width */}
//             <div className="w-full">
//               <p className="text-white font-inter text-lg sm:text-2xl md:text-3xl lg:text-[40px] font-normal leading-relaxed sm:leading-[1.4] lg:leading-[50px]">
//                 Hustle90 was built on one simple truth: outcomes speak louder than promises. We set out to fix the broken path from idea to MVP no more delays, misalignment, or wasted resources. Our mission is to give serious founders an unfair advantage by combining senior strategy with AI-powered execution. In under 90 days, we deliver investor-ready MVPs fast, focused, and equity-free. We don't sell services. We deliver outcomes.
//               </p>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;


"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const text = "Hustle90 was built on one simple truth: outcomes speak louder than promises. We set out to fix the broken path from idea to MVP no more delays, misalignment, or wasted resources. Our mission is to give serious founders an unfair advantage by combining senior strategy with AI-powered execution. In under 90 days, we deliver investor-ready MVPs fast, focused, and equity-free. We don't sell services. We deliver outcomes.";
  
  const words = text.split(' ');

  return (
    <section ref={sectionRef} className="w-full max-w-[1233px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
      <div className="relative w-full lg:min-h-[783px] rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] bg-gradient-to-b from-orange-500/45 to-orange-500/45 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/assets/bgabout.png)' }}
        />

        {/* Content */}
        <div className="relative z-10 h-full w-full px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 xl:px-20 xl:py-24">
          <div className="h-full flex flex-col justify-start gap-8 lg:gap-12">

            {/* About Tag */}
            <div className="flex items-center justify-center w-[173px] px-5 py-4 bg-white border border-[#E6651F] rounded-full shadow-[0_2.26px_5.65px_0_rgba(0,0,0,0.07),0_9.041px_9.041px_0_rgba(0,0,0,0.06),0_21.471px_12.431px_0_rgba(0,0,0,0.04),0_37.293px_14.691px_0_rgba(0,0,0,0.01)]">
              <span className="text-black font-inter text-sm sm:text-base lg:text-[23px] font-bold tracking-wide uppercase">
                ABOUT
              </span>
            </div>

            {/* Main Text Content with Word-by-Word Color Change */}
            <div className="w-full">
              <p className="font-inter text-lg sm:text-2xl md:text-3xl lg:text-[40px] font-normal leading-relaxed sm:leading-[1.4] lg:leading-[50px]">
                {words.map((word, index) => {
                  const wordProgress = useTransform(
                    scrollYProgress,
                    [
                      index / words.length,
                      (index + 1) / words.length
                    ],
                    [0, 1]
                  );

                  const wordColor = useTransform(
                    wordProgress,
                    [0, 1],
                    ["rgba(255, 255, 255, 1)", "rgba(27, 12, 37, 1)"]
                  );

                  return (
                    <motion.span
                      key={index}
                      style={{ color: wordColor }}
                      className="inline-block mr-[0.25em]"
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;