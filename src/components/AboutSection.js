import React from 'react';

const AboutSection = () => {
  return (
    <section className="w-full max-w-[1233px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
      <div className="relative w-full min-h-[883px] flex flex-col items-start justify-start p-6 sm:p-12 md:p-12 lg:p-16 xl:p-[120px_140px] gap-2.5 rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] bg-gradient-to-b from-orange-500/45 to-orange-500/45 overflow-hidden">
        {/* Background overlay for better text contrast */}
        <div className="absolute inset-0 bg-orange-500/20 rounded-[25px] sm:rounded-[35px] lg:rounded-[50px]" />
        
        {/* Content wrapper */}
        <div className="relative z-10 w-full max-w-none flex flex-col items-start gap-6 sm:gap-8 lg:gap-10">
          {/* About Tag */}
          <div className="flex items-center justify-center w-[173px] px-4 py-3 sm:px-5 sm:py-4 lg:px-[22.602px] lg:py-[16.951px] bg-white border border-[#E6651F] rounded-full shadow-[0_2.26px_5.65px_0_rgba(0,0,0,0.07),0_9.041px_9.041px_0_rgba(0,0,0,0.06),0_21.471px_12.431px_0_rgba(0,0,0,0.04),0_37.293px_14.691px_0_rgba(0,0,0,0.01)]">
            <span className="text-[#000000] font-inter text-sm sm:text-base lg:text-[23px] font-bold tracking-wide uppercase">
              ABOUT
            </span>
          </div>

          {/* Main Text Content */}
          <div className="w-full max-w-6xl">
            <p className="text-white font-inter text-lg sm:text-2xl md:text-3xl lg:text-[40px] font-normal leading-relaxed sm:leading-[1.4] lg:leading-[50px] text-left">
              Hustle90 was built on one simple truth: outcomes speak louder than promises. We set out to fix the broken path from idea to MVP no more delays, misalignment, or wasted resources. Our mission is to give serious founders an unfair advantage by combining senior strategy with AI-powered execution. In under 90 days, we deliver investor-ready MVPs fast, focused, and equity-free. We don't sell services. We deliver outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;