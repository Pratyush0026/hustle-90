// import React from 'react';
// import Image from 'next/image';

// const FeaturesSection = () => {
//   const features = [
//     {
//       id: 1,
//       title: "Outcomes beat promises.",
//       subtitle: "We compress the MVP journey with",
//       highlightedText: "AI‑driven speed, senior product leadership, and funding readiness.",
//       normalText: "No hourly rates. No code spaghetti. No ghosting.",
//       whatYouGet: "What you get:",
//       points: [
//         "Product Validation",
//         "MVP Development", 
//         "Launch In Less Than 90 Days"
//       ],
//       image: "/assets/validate-product.png",
//       imageAlt: "Validate their product"
//     },
//     {
//       id: 2,
//       title: "System, Not Services",
//       subtitle: "We Don't Just Ship An MVP — We Install The",
//       highlightedText: "Machine",
//       normalText: "For Growth",
//       whatYouGet: "What you get:",
//       points: [
//         "UX + Dev + Strategy (Weekly Sprints; Demo-Driven)",
//         "GTM + Pitch Support (Deck Story, Financial Narrative, Q&A)",
//         "Analytics + Data Room (Investor-Grade Clarity)"
//       ],
//       image: "/assets/pitch-deck-data.png",
//       imageAlt: "Pitch Deck Data Room"
//     },
//     {
//       id: 3,
//       title: "Investment Tracker",
//       subtitle: "Get Our Proprietary Investment Tracker And Beta Access To Our AI First Dashboard For MVP Development And Grant Access.",
//       highlightedText: "",
//       normalText: "",
//       whatYouGet: "What you get:",
//       points: [
//         "AI Tools For Data Room",
//         "All Access Pass To Our Investor Contact Library",
//         "Refund Guarantee If 5 Customers Not Achieved"
//       ],
//       image: "/assets/investment-tracker.png",
//       imageAlt: "Investment Tracker"
//     }
//   ];

//   return (
//     <section className="w-full bg-white py-12 lg:py-20">
//       <div className="container mx-auto px-4 lg:px-6">
//         {/* Header Badge */}
//         <div className="flex justify-center mb-8 lg:mb-12">
//           <div className="inline-flex items-center justify-center px-6 py-4 rounded-full border border-[#E6651F] bg-white">
//             <span className="text-[#1B0C25] font-dmSans text-sm font-semibold leading-4 capitalize">
//               AI-powered. No excuses. No storytime.
//             </span>
//           </div>
//         </div>

//         {/* Main Title */}
//         <div className="text-center mb-6 lg:mb-8">
//           <h1 className="text-black font-inter text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-normal leading-tight lg:leading-[80px] tracking-[-2px] mb-4">
//             Why Hustle90? Because Outcomes Speak Louder Than Promises.
//           </h1>
//         </div>

//         {/* Subtitle */}
//         <div className="text-center mb-12 lg:mb-20">
//           <p className="text-black font-poppins text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-normal leading-tight lg:leading-[60px] tracking-[-2px] capitalize max-w-4xl mx-auto">
//             Streamline your MVP journey with AI-driven speed, strategy, and support.
//           </p>
//         </div>

//         {/* Feature Cards */}
//         <div className="space-y-8 lg:space-y-12 max-w-7xl mx-auto">
//           {features.map((feature, index) => (
//             <div 
//               key={feature.id}
//               className="w-full rounded-2xl border border-white bg-[rgba(255,209,183,0.15)] p-6 lg:p-12"
//             >
//               <div className={`flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 ${
//                 index % 2 === 1 ? 'lg:flex-row-reverse' : ''
//               }`}>
//                 {/* Content Section */}
//                 <div className="flex-1 space-y-6 lg:space-y-8">
//                   {/* Title */}
//                   <h2 className="text-black font-dmSans text-2xl sm:text-3xl lg:text-[34px] font-medium leading-tight lg:leading-[50px] tracking-[-2px]">
//                     {feature.title}
//                   </h2>

//                   {/* Description */}
//                   <div className="space-y-2">
//                     <p className="text-black font-poppins text-base leading-[26px] capitalize">
//                       {feature.subtitle}{' '}
//                       {feature.highlightedText && (
//                         <span className="text-[#DA5208]">{feature.highlightedText}</span>
//                       )}{' '}
//                       {feature.normalText}
//                     </p>
//                   </div>

//                   {/* What you get section */}
//                   <div className="space-y-4 lg:space-y-6">
//                     <h3 className="text-black font-dmSans text-2xl sm:text-3xl lg:text-[34px] font-medium leading-tight lg:leading-[50px] tracking-[-2px]">
//                       {feature.whatYouGet}
//                     </h3>
                    
//                     {/* Feature Points */}
//                     <ul className="space-y-3 lg:space-y-4">
//                       {feature.points.map((point, pointIndex) => (
//                         <li key={pointIndex} className="flex items-start gap-3">
//                           <div className="flex-shrink-0 mt-2">
//                             <Image
//                               src="/assets/bullet-icon.png"
//                               alt="Bullet point"
//                               width={12}
//                               height={12}
//                               className="flex-shrink-0"
//                             />
//                           </div>
//                           <span className="text-black font-poppins text-lg sm:text-xl leading-[30px] capitalize">
//                             {point}
//                           </span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>

//                 {/* Image Section */}
//                 <div className="w-full lg:w-auto lg:flex-shrink-0">
//                   <div className="relative w-full lg:w-[447px] h-64 sm:h-80 lg:h-[416px] rounded-2xl overflow-hidden">
//                     <Image
//                       src={feature.image}
//                       alt={feature.imageAlt}
//                       fill
//                       className="object-contain"
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 447px"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;



"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const FeaturesSection = () => {
  const containerRef = useRef(null);

  const features = [
    {
      id: 1,
      title: "Outcomes beat promises.",
      subtitle: "We compress the MVP journey with",
      highlightedText: "AI‑driven speed, senior product leadership, and funding readiness.",
      normalText: "No hourly rates. No code spaghetti. No ghosting.",
      whatYouGet: "What you get:",
      points: [
        "Product Validation",
        "MVP Development", 
        "Launch In Less Than 90 Days"
      ],
      image: "/assets/validate-product.png",
      imageAlt: "Validate their product"
    },
    {
      id: 2,
      title: "System, Not Services",
      subtitle: "We Don't Just Ship An MVP — We Install The",
      highlightedText: "Machine",
      normalText: "For Growth",
      whatYouGet: "What you get:",
      points: [
        "UX + Dev + Strategy (Weekly Sprints; Demo-Driven)",
        "GTM + Pitch Support (Deck Story, Financial Narrative, Q&A)",
        "Analytics + Data Room (Investor-Grade Clarity)"
      ],
      image: "/assets/pitch-deck-data.png",
      imageAlt: "Pitch Deck Data Room"
    },
    {
      id: 3,
      title: "Investment Tracker",
      subtitle: "Get Our Proprietary Investment Tracker And Beta Access To Our AI First Dashboard For MVP Development And Grant Access.",
      highlightedText: "",
      normalText: "",
      whatYouGet: "What you get:",
      points: [
        "AI Tools For Data Room",
        "All Access Pass To Our Investor Contact Library",
        "Refund Guarantee If 5 Customers Not Achieved"
      ],
      image: "/assets/investment-tracker.png",
      imageAlt: "Investment Tracker"
    }
  ];

  return (
    <section ref={containerRef} className="w-full bg-white py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header Badge */}
        <div className="flex justify-center mb-8 lg:mb-12">
          <div className="inline-flex items-center justify-center px-6 py-4 rounded-full border border-[#E6651F] bg-white">
            <span className="text-[#1B0C25] font-dmSans text-sm font-semibold leading-4 capitalize">
              AI-powered. No excuses. No storytime.
            </span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-6 lg:mb-8">
          <h1 className="text-black font-inter text-3xl sm:text-4xl md:text-5xl lg:text-[70px] font-normal leading-tight lg:leading-[80px] tracking-[-2px] mb-4">
            Why Hustle90? Because Outcomes Speak Louder Than Promises.
          </h1>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-12 lg:mb-20">
          <p className="text-black font-poppins text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-normal leading-tight lg:leading-[60px] tracking-[-2px] capitalize max-w-4xl mx-auto">
            Streamline your MVP journey with AI-driven speed, strategy, and support.
          </p>
        </div>

        {/* Feature Cards - Simple Stacking */}
        <div className="max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className="w-full rounded-2xl border border-white bg-[#fdf3ec] p-6 lg:p-12 sticky mb-8 lg:mb-12"
              style={{
                top: `80px`,
                zIndex: index + 1
              }}
            >
              <div className={`flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content Section */}
                <div className="flex-1 space-y-6 lg:space-y-8">
                  {/* Title */}
                  <h2 className="text-black font-dmSans text-2xl sm:text-3xl lg:text-[34px] font-medium leading-tight lg:leading-[50px] tracking-[-2px]">
                    {feature.title}
                  </h2>

                  {/* Description */}
                  <div className="space-y-2">
                    <p className="text-black font-poppins text-base leading-[26px] capitalize">
                      {feature.subtitle}{' '}
                      {feature.highlightedText && (
                        <span className="text-[#DA5208]">{feature.highlightedText}</span>
                      )}{' '}
                      {feature.normalText}
                    </p>
                  </div>

                  {/* What you get section */}
                  <div className="space-y-4 lg:space-y-6">
                    <h3 className="text-black font-dmSans text-2xl sm:text-3xl lg:text-[34px] font-medium leading-tight lg:leading-[50px] tracking-[-2px]">
                      {feature.whatYouGet}
                    </h3>
                    
                    {/* Feature Points */}
                    <ul className="space-y-3 lg:space-y-4">
                      {feature.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-2">
                            <Image
                              src="/assets/bullet-icon.png"
                              alt="Bullet point"
                              width={12}
                              height={12}
                              className="flex-shrink-0"
                            />
                          </div>
                          <span className="text-black font-poppins text-lg sm:text-xl leading-[30px] capitalize">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-auto lg:flex-shrink-0">
                  <div className="relative w-full lg:w-[447px] h-64 sm:h-80 lg:h-[416px] rounded-2xl overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.imageAlt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 447px"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;