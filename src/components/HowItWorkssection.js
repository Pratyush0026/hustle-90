import React from 'react';
import Image from 'next/image';

const HowItWorksSection = () => {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
      
      {/* Top Section - Left Content + Right Card */}
      <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
        
        {/* Left Content */}
        <div className="flex-1 w-full">
          {/* How It Works Tag */}
          <div className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2 lg:px-[20px] lg:py-[8px] bg-white border border-[#E6651F] rounded-full shadow-[0_2.26px_5.65px_0_rgba(0,0,0,0.07),0_9.041px_9.041px_0_rgba(0,0,0,0.06),0_21.471px_12.431px_0_rgba(0,0,0,0.04),0_37.293px_14.691px_0_rgba(0,0,0,0.01)] mb-4 sm:mb-6 lg:mb-8">
            <span className="text-[#000000] font-medium text-xs sm:text-sm tracking-wide uppercase">
              HOW IT WORKS
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-[#1B0C25] font-dm-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] font-normal leading-tight sm:leading-[1.1] lg:leading-[60px] mb-4 sm:mb-6">
            A Simple 3-Step <br className="hidden sm:block" /> Process
          </h2>

          {/* Description */}
          <p className="text-[#1B0C25] font-poppins text-sm sm:text-base lg:text-[18px] font-normal leading-relaxed sm:leading-[1.6] lg:leading-[28px] mb-6 sm:mb-8 lg:mb-12">
            Get started quickly and effortlessly with our streamlined <br className="hidden lg:block" /> 3-step process designed to optimize your data <br className="hidden lg:block" /> workflow.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8 lg:mb-12">
            {/* Get Started Button */}
            <button className="flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3 lg:px-[68px] lg:py-[12px] bg-[#1B0C25] text-white font-medium text-sm sm:text-base rounded-[9px] shadow-[0_1.13px_2.26px_0_rgba(255,255,255,0.40)_inset,0_1.13px_2.26px_0_rgba(0,0,0,0.10)] hover:bg-[#2a1538] transition-colors">
              Get Started
            </button>

            {/* Book a Demo Button */}
            <button className="flex items-center justify-center w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3 lg:w-[226px] lg:h-[57px] lg:px-[46px] lg:py-[12px] bg-white/26 text-[#1B0C25] font-medium text-sm sm:text-base rounded-[9px] shadow-[0_1.13px_2.26px_0_rgba(0,0,0,0.06)] hover:bg-white/40 transition-colors">
              Book a Demo
            </button>
          </div>
        </div>

        {/* Right Card - Let AI Work */}
        <div className="w-full lg:flex-1 lg:max-w-[380px]">
          <div className="w-full max-w-md mx-auto lg:max-w-none p-2 lg:p-[8px] pb-0 bg-white rounded-xl lg:rounded-2xl shadow-[0_1px_2px_0_#DA5208]">
            {/* Image */}
            <div className="w-full aspect-[445/278] rounded-lg lg:rounded-xl overflow-hidden mb-4 sm:mb-6 lg:mb-[30px]">
              <Image 
                src="/assets/ai-work.jpg" 
                alt="Let AI Work"
                width={445}
                height={278}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="px-2 pb-4 sm:pb-6">
              <h3 className="text-[#1B0C25] font-inter text-lg sm:text-xl lg:text-2xl xl:text-[28px] font-medium leading-tight lg:leading-[28.8px] mb-2 sm:mb-3 lg:mb-4">
                Let AI Work
              </h3>
              <p className="text-[#1B0C25] font-poppins text-sm sm:text-base lg:text-lg xl:text-[20px] font-normal leading-relaxed lg:leading-[26px]">
                Streamline tasks and enhance productivity with AI.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - 3 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        
        {/* Card 1 - Connect Your Data */}
        <div className="w-full max-w-md mx-auto sm:max-w-none">
          <div className="w-full p-2 lg:p-[8px] pb-0 bg-white rounded-xl lg:rounded-2xl shadow-[0_1px_2px_0_#DA5208]">
            <div className="w-full aspect-[445/278] rounded-lg lg:rounded-xl overflow-hidden mb-4 sm:mb-6 lg:mb-[30px]">
              <Image 
                src="/assets/connect-data.jpg" 
                alt="Connect Your Data"
                width={445}
                height={278}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-2 pb-4 sm:pb-6">
              <h3 className="text-[#1B0C25] font-inter text-lg sm:text-xl lg:text-2xl xl:text-[28px] font-medium leading-tight lg:leading-[28.8px] mb-2 sm:mb-3 lg:mb-4">
                Connect Your Data
              </h3>
              <p className="text-[#1B0C25] font-poppins text-sm sm:text-base lg:text-lg xl:text-[20px] font-normal leading-relaxed lg:leading-[26px]">
                Effortlessly integrate data from various sources into a unified system.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 - Analyze and Optimize */}
        <div className="w-full max-w-md mx-auto sm:max-w-none">
          <div className="w-full p-2 lg:p-[8px] pb-0 bg-white rounded-xl lg:rounded-2xl shadow-[0_1px_2px_0_#DA5208]">
            <div className="w-full aspect-[445/278] rounded-lg lg:rounded-xl overflow-hidden mb-4 sm:mb-6 lg:mb-[30px]">
              <Image 
                src="/assets/analyze-optimize.jpg" 
                alt="Analyze and Optimize"
                width={445}
                height={278}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-2 pb-4 sm:pb-6">
              <h3 className="text-[#1B0C25] font-inter text-lg sm:text-xl lg:text-2xl xl:text-[28px] font-medium leading-tight lg:leading-[28.8px] mb-2 sm:mb-3 lg:mb-4">
                Analyze and Optimize
              </h3>
              <p className="text-[#1B0C25] font-poppins text-sm sm:text-base lg:text-lg xl:text-[20px] font-normal leading-relaxed lg:leading-[26px]">
                Use AI to uncover valuable insights and improve performance.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 - Let AI Work */}
        <div className="w-full max-w-md mx-auto sm:max-w-none sm:col-span-2 lg:col-span-1">
          <div className="w-full p-2 lg:p-[8px] pb-0 bg-white rounded-xl lg:rounded-2xl shadow-[0_1px_2px_0_#DA5208]">
            <div className="w-full aspect-[445/278] rounded-lg lg:rounded-xl overflow-hidden mb-4 sm:mb-6 lg:mb-[30px]">
              <Image 
                src="/assets/ai-work-2.jpg" 
                alt="Let AI Work"
                width={445}
                height={278}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-2 pb-4 sm:pb-6">
              <h3 className="text-[#1B0C25] font-inter text-lg sm:text-xl lg:text-2xl xl:text-[28px] font-medium leading-tight lg:leading-[28.8px] mb-2 sm:mb-3 lg:mb-4">
                Let AI Work
              </h3>
              <p className="text-[#1B0C25] font-poppins text-sm sm:text-base lg:text-lg xl:text-[20px] font-normal leading-relaxed lg:leading-[26px]">
                Streamline tasks and enhance productivity with AI.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;