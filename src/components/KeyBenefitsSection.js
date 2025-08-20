// import React from 'react';
// import Image from 'next/image';

// const KeyBenefitsSection = () => {
//   const leftBenefits = [
//     {
//       id: 1,
//       icon: "/assets/SVG.png",
//       title: "AI-Accelerated Development",
//       description: "We leverage AI to compress your MVP development timeline from months to weeks. Gain a critical speed-to-market advantage."
//     },
//     {
//       id: 2,
//       icon: "/assets/SVG.png",
//       title: "Proven Growth Scalability",
//       description: "We build your MVP as a robust foundation that's designed for growth, ensuring you can evolve and capture more opportunities."
//     },
//     {
//       id: 3,
//       icon: "/assets/SVG.png",
//       title: "Data-Driven Validation",
//       description: "Stop guessing. Our data-driven approach gives you analytics integration from day one."
//     }
//   ];

//   const rightBenefits = [
//     {
//       id: 4,
//       icon: "/assets/SVG.png",
//       title: "An Integrated Partnership",
//       description: "Forget the traditional client-vendor role. We operate as your team to ensure success and help you scale from day one."
//     },
//     {
//       id: 5,
//       icon: "/assets/SVG.png",
//       title: "Go-To-Market Strategy Included",
//       description: "An MVP's success without a plan is just hope. We build your GTM strategy into our process, not alongside your product."
//     },
//     {
//       id: 6,
//       icon: "/assets/SVG.png",
//       title: "Launch with Investor Clarity",
//       description: "Whether you're raising a round or going for revenue, we ensure every data point that investors want to see is available from day one."
//     }
//   ];

//   return (
//     <section className="w-full bg-white py-12 lg:py-20">
//       <div className="container mx-auto px-4 lg:px-6">
//         {/* Header Badge */}
//         <div className="flex justify-center mb-8 lg:mb-12">
//           <div 
//             className="inline-flex items-center justify-center px-8 py-7 rounded-full border border-[#E6651F] bg-white"
//             style={{
//               boxShadow: '0 2.26px 5.65px 0 rgba(0, 0, 0, 0.07), 0 9.041px 9.041px 0 rgba(0, 0, 0, 0.06), 0 21.471px 12.431px 0 rgba(0, 0, 0, 0.04), 0 37.293px 14.691px 0 rgba(0, 0, 0, 0.01)'
//             }}
//           >
//             <span className="text-[#1B0C25] font-inter text-sm font-medium uppercase tracking-wider">
//               KEY BENEFITS
//             </span>
//           </div>
//         </div>

//         {/* Main Title */}
//         <div className="text-center mb-6 lg:mb-8">
//           <h1 className="text-black font-inter text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-normal leading-tight lg:leading-[90px] tracking-[-2.26px] mb-4">
//             Why Choose Hustle90
//           </h1>
//         </div>

//         {/* Subtitle */}
//         <div className="text-center mb-12 lg:mb-20">
//           <p className="text-black font-poppins text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-normal leading-tight lg:leading-[49px] capitalize max-w-4xl mx-auto">
//             Streamline your MVP journey with AI-driven speed, strategy, and support.
//           </p>
//         </div>

//         {/* Benefits Grid */}
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-8 lg:gap-12">
//             {/* Left Benefits */}
//             <div className="w-full lg:w-[280px] lg:h-[488px] lg:flex-shrink-0 flex flex-col justify-start">
//               <div className="space-y-4 lg:space-y-6 h-full flex flex-col justify-between">
//                 {leftBenefits.map((benefit) => (
//                   <div key={benefit.id} className="flex flex-col sm:flex-row lg:flex-col items-start gap-3">
//                     {/* Icon */}
//                     <div className="flex-shrink-0">
//                       <div className="flex w-8 h-8 p-1.5 justify-center items-center bg-[#F5F5F5] rounded-lg">
//                         <Image
//                           src={benefit.icon}
//                           alt={benefit.title}
//                           width={20}
//                           height={20}
//                           className="object-contain"
//                         />
//                       </div>
//                     </div>
                    
//                     {/* Content */}
//                     <div className="flex-1">
//                       <h3 className="text-[#1B0C25] font-inter text-sm lg:text-[16px] font-medium leading-6 mb-2">
//                         {benefit.title}
//                       </h3>
//                       <p className="text-[#1B0C25] font-poppins text-xs lg:text-sm leading-5">
//                         {benefit.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Center Image */}
//             <div className="flex justify-center order-first lg:order-none">
//               <div className="relative w-80 h-80 lg:w-[510px] lg:h-[510px] flex-shrink-0 rounded-[10px] overflow-hidden">
//                 <Image
//                   src="/assets/center-benefits-image.png"
//                   alt="Hustle90 Benefits Visualization"
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 320px, 510px"
//                 />
//               </div>
//             </div>

//             {/* Right Benefits */}
//              <div className="w-full lg:w-[280px] lg:h-[488px] lg:flex-shrink-0 flex flex-col justify-start">
//               <div className="space-y-4 lg:space-y-6 h-full flex flex-col justify-between">
//                 {leftBenefits.map((benefit) => (
//                   <div key={benefit.id} className="flex flex-col sm:flex-row lg:flex-col items-start gap-3">
//                     {/* Icon */}
//                     <div className="flex-shrink-0">
//                       <div className="flex w-8 h-8 p-1.5 justify-center items-center bg-[#F5F5F5] rounded-lg">
//                         <Image
//                           src={benefit.icon}
//                           alt={benefit.title}
//                           width={20}
//                           height={20}
//                           className="object-contain"
//                         />
//                       </div>
//                     </div>
                    
//                     {/* Content */}
//                     <div className="flex-1">
//                       <h3 className="text-[#1B0C25] font-inter text-sm lg:text-[16px] font-medium leading-6 mb-2">
//                         {benefit.title}
//                       </h3>
//                       <p className="text-[#1B0C25] font-poppins text-xs lg:text-sm leading-5">
//                         {benefit.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default KeyBenefitsSection;



import React from 'react';
import Image from 'next/image';

const KeyBenefitsSection = () => {
  const leftBenefits = [
    {
      id: 1,
      icon: "/assets/SVG.png",
      title: "AI-Accelerated Development",
      description: "We leverage AI to compress your MVP development timeline from months to weeks. Gain a critical speed-to-market advantage."
    },
    {
      id: 2,
      icon: "/assets/SVG.png",
      title: "Proven Growth Scalability",
      description: "We build your MVP as a robust foundation that's designed for growth, ensuring you can evolve and capture more opportunities."
    },
    {
      id: 3,
      icon: "/assets/SVG.png",
      title: "Data-Driven Validation",
      description: "Stop guessing. Our data-driven approach gives you analytics integration from day one."
    }
  ];

  const rightBenefits = [
    {
      id: 4,
      icon: "/assets/SVG.png",
      title: "An Integrated Partnership",
      description: "Forget the traditional client-vendor role. We operate as your team to ensure success and help you scale from day one."
    },
    {
      id: 5,
      icon: "/assets/SVG.png",
      title: "Go-To-Market Strategy Included",
      description: "An MVP's success without a plan is just hope. We build your GTM strategy into our process, not alongside your product."
    },
    {
      id: 6,
      icon: "/assets/SVG.png",
      title: "Launch with Investor Clarity",
      description: "Whether you're raising a round or going for revenue, we ensure every data point that investors want to see is available from day one."
    }
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header Badge */}
        <div className="flex justify-center mb-8 lg:mb-12">
          <div 
            className="inline-flex items-center justify-center px-8 py-7 rounded-full border border-[#E6651F] bg-white"
            style={{
              boxShadow: '0 2.26px 5.65px 0 rgba(0, 0, 0, 0.07), 0 9.041px 9.041px 0 rgba(0, 0, 0, 0.06), 0 21.471px 12.431px 0 rgba(0, 0, 0, 0.04), 0 37.293px 14.691px 0 rgba(0, 0, 0, 0.01)'
            }}
          >
            <span className="text-[#1B0C25] font-inter text-sm font-medium uppercase tracking-wider">
              KEY BENEFITS
            </span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-6 lg:mb-8">
          <h1 className="text-black font-inter text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-normal leading-tight lg:leading-[90px] tracking-[-2.26px] mb-4">
            Why Choose Hustle90
          </h1>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-12 lg:mb-14">
          <p className="text-black font-poppins text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-normal leading-tight lg:leading-[49px] capitalize max-w-4xl mx-auto">
            Streamline your MVP journey with AI-driven speed, strategy, and support.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-8 lg:gap-12">
            {/* Left Benefits */}
            <div className="w-full lg:w-[280px] lg:h-[488px] lg:flex-shrink-0 flex flex-col justify-start">
              <div className="space-y-4 lg:space-y-6 h-full flex flex-col justify-between">
                {leftBenefits.map((benefit) => (
                  <div key={benefit.id} className="flex flex-col sm:flex-row lg:flex-col items-start gap-3">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="flex w-8 h-8 p-1.5 justify-center items-center bg-[#F5F5F5] rounded-lg">
                        <Image
                          src={benefit.icon}
                          alt={benefit.title}
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-[#1B0C25] font-inter text-sm lg:text-[16px] font-medium leading-6 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-[#1B0C25] font-poppins text-xs lg:text-sm leading-5">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Center Image */}
            <div className="flex justify-center order-first lg:order-none">
              <div className="relative w-80 h-80 lg:w-[510px] lg:h-[510px] flex-shrink-0 rounded-[10px] overflow-hidden">
                <Image
                  src="/assets/center-benefits-image.png"
                  alt="Hustle90 Benefits Visualization"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 320px, 510px"
                />
              </div>
            </div>

            {/* Right Benefits */}
            <div className="w-full lg:w-[280px] lg:h-[488px] lg:flex-shrink-0 flex flex-col justify-start">
              <div className="space-y-4 lg:space-y-6 h-full flex flex-col justify-between">
                {rightBenefits.map((benefit) => (
                  <div key={benefit.id} className="flex flex-col sm:flex-row lg:flex-col items-start gap-3">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="flex w-8 h-8 p-1.5 justify-center items-center bg-[#F5F5F5] rounded-lg">
                        <Image
                          src={benefit.icon}
                          alt={benefit.title}
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-[#1B0C25] font-inter text-sm lg:text-[16px] font-medium leading-6 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-[#1B0C25] font-poppins text-xs lg:text-sm leading-5">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefitsSection;