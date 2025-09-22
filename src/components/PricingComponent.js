

// "use client";
// import React, { useState } from 'react';

// const PricingComponent = () => {
//   const [billingCycle, setBillingCycle] = useState('monthly');

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       {/* Header section */}
//       <div className="text-center mb-12">
//         <div className="inline-block bg-white text-black rounded-full px-6 py-2 mb-6 shadow-md border border-blue-200 bg-gradient-to-r from-orange-100 to-blue-100">
//           PRICING
//         </div>
//         <h1 className="text-4xl sm:text-5xl font-bold">
//           Simple, Transparent Pricing
//         </h1>
//         <p className="mt-4 text-xl text-gray-600">No surprise invoices. No "consulting hours." Just fixed-fee execution.</p>
//       </div>

//       {/* Billing toggle */}
//       <div className="flex justify-center mb-12">
//         <div className="inline-flex rounded-md">
//           <button
//             className={`px-6 py-2 ${billingCycle === 'monthly' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
//             onClick={() => setBillingCycle('monthly')}
//           >
//             Monthly
//           </button>
//           <button
//             className={`px-6 py-2 ${billingCycle === 'yearly' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
//             onClick={() => setBillingCycle('yearly')}
//           >
//             Yearly
//           </button>
//         </div>
//       </div>

//       {/* Pricing cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Starter Plan */}
//         <div className="flex flex-col">
//           <div className="flex items-center mb-2">
//             <span className="text-blue-400 mr-2">★</span>
//             <h2 className="text-2xl font-bold">Starter</h2>
//           </div>
//           <p className="text-gray-700 mb-6">Self-serve template kit + roadmap</p>
//           <h3 className="text-5xl font-bold mb-6">Free</h3>
//           <button className="w-full border border-gray-300 rounded-md py-3 mb-8 hover:bg-gray-50">
//             Get Started
//           </button>
//           <div className="mb-4">
//             <p className="font-semibold mb-4">What's Included</p>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
//                 <span>Basic template kit</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
//                 <span>Startup roadmap guide</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
//                 <span>Self-service resources</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
//                 <span>Community support</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Plus Plan */}
//         <div className="flex flex-col bg-gray-50 rounded-lg p-6">
//           <div className="flex items-center mb-2">
//             <span className="text-purple-400 mr-2">★</span>
//             <h2 className="text-2xl font-bold">Plus</h2>
//             <span className="ml-2 px-3 py-1 bg-black text-white text-xs rounded-full">Popular</span>
//           </div>
//           <p className="text-gray-700 mb-6">Full MVP sprint, pitch ready in 90 days</p>
//           <h3 className="text-5xl font-bold mb-1">$22K</h3>
//           <p className="text-gray-600 mb-6">one-time fee</p>
//           <button className="w-full bg-black text-white rounded-md py-3 mb-8 hover:bg-gray-800">
//             Get Started
//           </button>
//           <div className="mb-4">
//             <p className="font-semibold mb-4">What's Included</p>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
//                 <span>Complete MVP development</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
//                 <span>90-day execution timeline</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
//                 <span>Investor-ready pitch materials</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
//                 <span>Technical documentation</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Pro Plan */}
//         <div className="flex flex-col">
//           <div className="flex items-center mb-2">
//             <span className="text-pink-400 mr-2">★</span>
//             <h2 className="text-2xl font-bold">Pro</h2>
//           </div>
//           <p className="text-gray-700 mb-6">MVP + GTM site + deck + launch coaching</p>
//           <h3 className="text-5xl font-bold mb-1">$35K+</h3>
//           <p className="text-gray-600 mb-6">starting price</p>
//           <button className="w-full border border-gray-300 rounded-md py-3 mb-8 hover:bg-gray-50">
//             Get Started
//           </button>
//           <div className="mb-4">
//             <p className="font-semibold mb-4">What's Included</p>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
//                 <span>Everything in Plus</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
//                 <span>Go-to-market website</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
//                 <span>Professional pitch deck</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
//                 <span>Launch strategy coaching</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Add-ons section */}
//       <div className="mt-12 text-center">
//         <h3 className="text-xl font-bold mb-4">Optional Add-ons</h3>
//         <p className="text-gray-700">
//           Post-launch support ($2–5K/month) | Extended pitch coaching | Custom AI integrations
//         </p>
//       </div>
//     </div>
//   );
// };

// export default PricingComponent;

"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion";

const PricingComponent = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header section */}
      <div className="text-center mb-12">
        <div className="mb-6">
          <motion.div
            className="relative inline-block w-60"
            animate={{
              background: [
                "linear-gradient(90deg, #E6651F, #2954d1, #000000)",
                "linear-gradient(180deg, #2954d1, #000000, #E6651F)",
                "linear-gradient(270deg, #000000, #E6651F, #2954d1)",
                "linear-gradient(360deg, #E6651F, #2954d1, #000000)",
                "linear-gradient(90deg, #E6651F, #2954d1, #000000)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              padding: "2px",
              borderRadius: "9999px"
            }}
          >
            <div className="bg-white text-black rounded-full px-6 py-2 shadow-md relative z-10">
              PRICING
            </div>
          </motion.div>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: 'clamp(48px, 8vw, 80px)', lineHeight: 'clamp(50px, 8vw, 80px)', letterSpacing: '-2px' }}>
          Simple, Flexible, Pricing
        </h1>
        <p className="text-xl sm:text-2xl max-w-4xl mx-auto" style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 'clamp(24px, 4vw, 36px)', lineHeight: 'clamp(36px, 6vw, 60px)', letterSpacing: '-2px', textTransform: 'capitalize' }}>
          We're the crew you call when the idea is real,
          the clock is ticking, and you're out of patience..
        </p>
      </div>

      {/* Billing toggle */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-md">
          <button
            className={`px-6 py-2 ${billingCycle === 'monthly' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setBillingCycle('monthly')}
            style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '20px' }}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 ${billingCycle === 'yearly' ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setBillingCycle('yearly')}
            style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '20px' }}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Starter Plan */}
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <span className="text-blue-400 mr-2">★</span>
            <h2 className="font-bold" style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: 'clamp(28px, 3vw, 34px)', lineHeight: 'clamp(40px, 4vw, 50px)', letterSpacing: '-2px' }}>Starter</h2>
          </div>
          <p className="text-gray-700 mb-6" style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '20px', lineHeight: '30px', letterSpacing: '0px', textTransform: 'capitalize' }}>Self-serve template kit + roadmap</p>
          <h3 className="font-bold mb-6" style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: 'clamp(40px, 5vw, 60px)', lineHeight: 'clamp(45px, 5vw, 65px)', letterSpacing: '-2px' }}>Free</h3>
          <button className="w-full border border-gray-300 rounded-md py-3 mb-8 hover:bg-gray-50" style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px' }}>
            Get Started
          </button>
          <div className="mb-4">
            <p className="font-semibold mb-4" style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: '22px', lineHeight: '32px', letterSpacing: '-1px' }}>What's Included</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
                <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', lineHeight: '28px', letterSpacing: '0px' }}>Basic template kit</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
                <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', lineHeight: '28px', letterSpacing: '0px' }}>Startup roadmap guide</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
                <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', lineHeight: '28px', letterSpacing: '0px' }}>Self-service resources</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
                <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', lineHeight: '28px', letterSpacing: '0px' }}>Community support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Plus Plan */}
        <div className="flex flex-col bg-gray-50 rounded-lg p-6">
          <div className="flex items-center mb-2">
            <span className="text-purple-400 mr-2">★</span>
            <h2 className="font-bold" style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: 'clamp(28px, 3vw, 34px)', lineHeight: 'clamp(40px, 4vw, 50px)', letterSpacing: '-2px' }}>Plus</h2>
            <span className="ml-2 px-3 py-1 bg-black text-white text-xs rounded-full" style={{ fontFamily: 'Poppins', fontWeight: 400 }}>Popular</span>
          </div>
          <p className="text-gray-700 mb-6" style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '20px', lineHeight: '30px', letterSpacing: '0px', textTransform: 'capitalize' }}>Full MVP sprint, pitch ready in 90 days</p>
          <h3 className="font-bold mb-1" style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: 'clamp(40px, 5vw, 60px)', lineHeight: 'clamp(45px, 5vw, 65px)', letterSpacing: '-2px' }}>$22K</h3>
          <p className="text-gray-600 mb-6" style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', lineHeight: '28px', letterSpacing: '0px' }}>one-time fee</p>
          <button className="w-full bg-black text-white rounded-md py-3 mb-8 hover:bg-gray-800" style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px' }}>
            Get Started
          </button>
          <div className="mb-4">
            <p className="font-semibold mb-4" style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: '22px', lineHeight: '32px', letterSpacing: '-1px' }}>What's Included</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
                <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', lineHeight: '28px', letterSpacing: '0px' }}>Complete MVP development</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
                <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', lineHeight: '28px', letterSpacing: '0px' }}>90-day execution timeline</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
                <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', lineHeight: '28px', letterSpacing: '0px' }}>Investor-ready pitch materials</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
                <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', lineHeight: '28px', letterSpacing: '0px' }}>Technical documentation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <span className="text-pink-400 mr-2">★</span>
            <h2 className="font-bold" style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: 'clamp(28px, 3vw, 34px)', lineHeight: 'clamp(40px, 4vw, 50px)', letterSpacing: '-2px' }}>Pro</h2>
          </div>
          <p className="text-gray-700 mb-6" style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '20px', lineHeight: '30px', letterSpacing: '0px', textTransform: 'capitalize' }}>MVP + GTM site + deck + launch coaching</p>
          <h3 className="font-bold mb-1" style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: 'clamp(40px, 5vw, 60px)', lineHeight: 'clamp(45px, 5vw, 65px)', letterSpacing: '-2px' }}>$35K+</h3>
          <p className="text-gray-600 mb-6" style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', lineHeight: '28px', letterSpacing: '0px' }}>starting price</p>
          <button className="w-full border border-gray-300 rounded-md py-3 mb-8 hover:bg-gray-50" style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px' }}>
            Get Started
          </button>
          <div className="mb-4">
            <p className="font-semibold mb-4" style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: '22px', lineHeight: '32px', letterSpacing: '-1px' }}>What's Included</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
                <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', lineHeight: '28px', letterSpacing: '0px' }}>Everything in Plus</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
                <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', lineHeight: '28px', letterSpacing: '0px' }}>Go-to-market website</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
                <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', lineHeight: '28px', letterSpacing: '0px' }}>Professional pitch deck</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 mr-3 text-purple-900">✦</span>
                <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '18px', lineHeight: '28px', letterSpacing: '0px' }}>Launch strategy coaching</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Add-ons section */}
      <div className="mt-12 text-center">
        <h3 className="font-bold mb-4" style={{ fontFamily: 'DM Sans', fontWeight: 500, fontSize: 'clamp(22px, 2.5vw, 28px)', lineHeight: 'clamp(30px, 3vw, 36px)', letterSpacing: '-1px' }}>Optional Add-ons</h3>
        <p className="text-gray-700" style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: '20px', lineHeight: '30px', letterSpacing: '0px', textTransform: 'capitalize' }}>
          Post-launch support ($2–5K/month) | Extended pitch coaching | Custom AI integrations
        </p>
      </div>
    </div>
  );
};

export default PricingComponent;