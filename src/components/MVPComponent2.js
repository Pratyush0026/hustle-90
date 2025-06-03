// import React from 'react';

// const MVPComponent2 = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       {/* Hero section */}
//       <div className="text-center mb-24">
//         <div className="inline-block bg-white text-black rounded-full px-6 py-2 mb-6 shadow-md border border-orange-200">
//           AI-Powered. No Excuses. No Storytime.
//         </div>
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
//           Everything You Need<br />
//           Nothing You Don't
//         </h1>
//         <p className="text-xl sm:text-2xl max-w-4xl mx-auto">
//           Streamline Your MVP Journey With AI-Driven<br />
//           Speed, Strategy, And Support.
//         </p>
//       </div>

//       {/* First content section */}
//       <div className="bg-orange-50 rounded-xl p-8 mb-8 flex flex-col md:flex-row">
//         <div className="md:w-1/2 pr-8">
//           <h2 className="text-3xl font-bold mb-3">We're not the Dev Team you want.</h2>
//           <h2 className="text-3xl font-bold mb-6">We're the equity-free partner you neeeed!</h2>

//           <p className="text-lg mb-8">
//             We're The Crew You Call When The Idea Is Real,<br />
//             The Clock Is Ticking, And You're Out Of Patience.
//           </p>

//           <ul className="space-y-6">
//             <li className="flex items-start">
//               <span className="flex-shrink-0 mr-3 text-orange-400">•</span>
//               <span>No Interns</span>
//             </li>
//             <li className="flex items-start">
//               <span className="flex-shrink-0 mr-3 text-orange-400">•</span>
//               <span>No Mood Boards</span>
//             </li>
//             <li className="flex items-start">
//               <span className="flex-shrink-0 mr-3 text-orange-400">•</span>
//               <span>No Roadmap Therapy. Just Cold Execution<br />By People Who've Done It Before.</span>
//             </li>
//           </ul>
//         </div>
//         <div className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
//           <div className="w-full max-w-md h-80 rounded-xl overflow-hidden">
//             <img
//               src="/assets/equity.jpg"
//               alt="Equity-free partnership"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Second content section */}
//       <div className="bg-orange-50 rounded-xl p-8 mb-8 flex flex-col md:flex-row">
//         <div className="md:w-1/2 pr-8">
//           <h2 className="text-3xl font-bold mb-3">Not Services.</h2>
//           <h2 className="text-3xl font-bold mb-6">Systems.</h2>

//           <p className="text-lg mb-8">
//             We Bundle The Entire MVP Journey Into One Violent<br />
//             Sprint Of Productivity. You Don't Get Options. You Get<br />
//             Outcomes.
//           </p>

//           <ul className="space-y-6">
//             <li className="flex items-start">
//               <span className="flex-shrink-0 mr-3 text-orange-400">•</span>
//               <span>MVP Development</span>
//             </li>
//             <li className="flex items-start">
//               <span className="flex-shrink-0 mr-3 text-orange-400">•</span>
//               <span>Sales Funnel Creation</span>
//             </li>
//             <li className="flex items-start">
//               <span className="flex-shrink-0 mr-3 text-orange-400">•</span>
//               <span>VC/Angel Target List</span>
//             </li>
//           </ul>
//         </div>
//        <div className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
//           <div className="w-full max-w-md h-96 rounded-xl overflow-hidden">
//             <img
//               src="/assets/system.jpg"
//               alt="Equity-free partnership"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MVPComponent2;

"use client";

import React from 'react';
import { motion } from "framer-motion";

const MVPComponent2 = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero section */}
      <div className="text-center mb-24">
        <div className="mb-6">
          <motion.div
            className="relative inline-block"
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
              AI-Powered. No Excuses. No Storytime.
            </div>
          </motion.div>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" style={{fontFamily: 'DM Sans', fontWeight: 500, fontSize: '60px', lineHeight: '80px', letterSpacing: '-2px'}}>
          Everything You Need<br />
          Nothing You Don't
        </h1>
        <p className="text-xl sm:text-2xl max-w-4xl mx-auto" style={{fontFamily: 'Poppins', fontWeight: 400, fontSize: '36px', lineHeight: '60px', letterSpacing: '-2px', textTransform: 'capitalize'}}>
          Streamline Your MVP Journey With AI-Driven<br />
          Speed, Strategy, And Support.
        </p>
      </div>

      {/* First content section */}
      <div className="rounded-xl p-8 mb-8 flex flex-col md:flex-row" style={{ backgroundColor: 'rgba(255, 209, 183, 0.15)' }}>
        <div className="md:w-1/2 pr-8">
          <h2 className="text-3xl font-bold mb-3" style={{fontFamily: 'DM Sans', fontWeight: 500, fontSize: '34px', lineHeight: '50px', letterSpacing: '-2px'}}>We're not the Dev Team you want.</h2>
          <h2 className="text-3xl font-bold mb-6" style={{fontFamily: 'DM Sans', fontWeight: 500, fontSize: '34px', lineHeight: '50px', letterSpacing: '-2px'}}>We're the equity-free partner you neeeed!</h2>

          <p className="text-lg mb-8" style={{fontFamily: 'Poppins', fontWeight: 400, fontSize: '20px', lineHeight: '30px', letterSpacing: '0px', textTransform: 'capitalize'}}>
            We're The Crew You Call When The Idea Is Real,<br />
            The Clock Is Ticking, And You're Out Of Patience.
          </p>

          <ul className="space-y-6" style={{fontFamily: 'Poppins', fontWeight: 400, fontSize: '20px', lineHeight: '30px', letterSpacing: '0px', textTransform: 'capitalize'}}>
            <li className="flex items-start">
              <span className="flex-shrink-0 mr-3 text-orange-400">•</span>
              <span>Validate their product</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 mr-3 text-orange-400">•</span>
              <span>Raise early funding</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 mr-3 text-orange-400">•</span>
              <span>Launch in less than 90 days</span>
            </li>
          </ul>

          <p className="mt-8" style={{fontFamily: 'Poppins', fontWeight: 400, fontSize: '20px', lineHeight: '30px', letterSpacing: '0px', textTransform: 'capitalize'}}>
            No hourly rates. No code spaghetti. No freelancers ghosting you halfway through.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
          <div className="w-full max-w-md h-80 rounded-xl overflow-hidden">
            <img
              src="/assets/equity.jpg"
              alt="Equity-free partnership"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Second content section */}
       <div className="rounded-xl p-8 mb-8 flex flex-col md:flex-row" style={{ backgroundColor: 'rgba(255, 209, 183, 0.15)' }}>
        <div className="md:w-1/2 pr-8">
          <h2 className="text-3xl font-bold mb-3" style={{fontFamily: 'DM Sans', fontWeight: 500, fontSize: '34px', lineHeight: '50px', letterSpacing: '-2px'}}>Not Services.</h2>
          <h2 className="text-3xl font-bold mb-6" style={{fontFamily: 'DM Sans', fontWeight: 500, fontSize: '34px', lineHeight: '50px', letterSpacing: '-2px'}}>Systems.</h2>

          <p className="text-lg mb-8" style={{fontFamily: 'Poppins', fontWeight: 400, fontSize: '20px', lineHeight: '30px', letterSpacing: '0px', textTransform: 'capitalize'}}>
            We Bundle The Entire MVP Journey Into One Violent<br />
            Sprint Of Productivity. You Don't Get Options. You Get<br />
            Outcomes.
          </p>

          <ul className="space-y-6" style={{fontFamily: 'Poppins', fontWeight: 400, fontSize: '20px', lineHeight: '30px', letterSpacing: '0px', textTransform: 'capitalize'}}>
            <li className="flex items-start">
              <span className="flex-shrink-0 mr-3 text-orange-400">•</span>
              <span>MVP Development</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 mr-3 text-orange-400">•</span>
              <span>Sales Funnel Creation</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 mr-3 text-orange-400">•</span>
              <span>VC/Angel Target List</span>
            </li>
          </ul>
        </div>
       <div className="md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
          <div className="w-full max-w-md h-96 rounded-xl overflow-hidden">
            <img
              src="/assets/system.jpg"
              alt="Systems approach"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MVPComponent2;