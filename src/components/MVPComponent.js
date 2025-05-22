

// "use client";

// import React, { useRef } from 'react';
// import { AnimatedBeam } from "@/components/magicui/animated-beam";

// // Circle component for beam endpoints
// const Circle = React.forwardRef(({ className, children, size = "size-12" }, ref) => {
//   return (
//     <div
//       ref={ref}
//       className={`z-10 flex ${size} items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] ${className}`}
//     >
//       {children}
//     </div>
//   );
// });
// Circle.displayName = "Circle";

// // Random icons for the demo (you can replace these later)
// const Icons = {
//   // Central hub icon
//   hub: () => (
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
//       <path d="M2 17l10 5 10-5"></path>
//       <path d="M2 12l10 5 10-5"></path>
//     </svg>
//   ),
//   // Surrounding icons
//   code: () => (
//     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <polyline points="16,18 22,12 16,6"></polyline>
//       <polyline points="8,6 2,12 8,18"></polyline>
//     </svg>
//   ),
//   database: () => (
//     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
//       <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
//       <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
//     </svg>
//   ),
//   cloud: () => (
//     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
//     </svg>
//   ),
//   mobile: () => (
//     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
//       <line x1="12" y1="18" x2="12.01" y2="18"></line>
//     </svg>
//   ),
//   globe: () => (
//     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <circle cx="12" cy="12" r="10"></circle>
//       <line x1="2" y1="12" x2="22" y2="12"></line>
//       <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
//     </svg>
//   ),
//   shield: () => (
//     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
//     </svg>
//   ),
//   rocket: () => (
//     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//       <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
//       <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
//       <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
//       <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
//     </svg>
//   ),
// };

// const MVPComponent = () => {
//   // Refs for the animated beam network
//   const containerRef = useRef(null);
//   const centerRef = useRef(null);
//   const node1Ref = useRef(null);
//   const node2Ref = useRef(null);
//   const node3Ref = useRef(null);
//   const node4Ref = useRef(null);
//   const node5Ref = useRef(null);
//   const node6Ref = useRef(null);

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       {/* Hero section */}
//       <div className="text-center mb-16">
//         <div className="inline-block bg-white text-black rounded-full px-6 py-2 mb-6 shadow-md border border-orange-200">
//           AI-Powered. No Excuses. No Storytime.
//         </div>
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
//           Everything You Need<br />
//           Nothing You Don't
//         </h1>
//         <p className="text-xl sm:text-2xl max-w-4xl mx-auto">
//           Streamline Your MVP Journey With AI-Driven<br className="hidden md:block" />
//           Speed, Strategy, And Support.
//         </p>
//       </div>
      
//       {/* First row - Asymmetric with animated beam network */}
//       <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
//         {/* First box with hub-and-spoke animated beam network */}
//         <div className="md:col-span-5 flex flex-col">
//           <div 
//             ref={containerRef}
//             className="rounded-lg bg-gradient-to-br from-orange-300 to-orange-400 h-64 mb-4 transform transition-transform duration-300 hover:scale-[1.03] relative overflow-hidden p-6"
//           >
//             {/* Central hub */}
//             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
//               <Circle ref={centerRef} size="size-14" className="bg-white shadow-lg">
//                 <Icons.hub />
//               </Circle>
//             </div>

//             {/* Top nodes */}
//             <div className="absolute left-1/4 top-4">
//               <Circle ref={node1Ref} size="size-10">
//                 <Icons.code />
//               </Circle>
//             </div>
//             <div className="absolute right-1/4 top-4">
//               <Circle ref={node2Ref} size="size-10">
//                 <Icons.database />
//               </Circle>
//             </div>

//             {/* Side nodes */}
//             <div className="absolute left-4 top-1/2 -translate-y-1/2">
//               <Circle ref={node3Ref} size="size-10">
//                 <Icons.cloud />
//               </Circle>
//             </div>
//             <div className="absolute right-4 top-1/2 -translate-y-1/2">
//               <Circle ref={node4Ref} size="size-10">
//                 <Icons.mobile />
//               </Circle>
//             </div>

//             {/* Bottom nodes */}
//             <div className="absolute left-1/4 bottom-4">
//               <Circle ref={node5Ref} size="size-10">
//                 <Icons.shield />
//               </Circle>
//             </div>
//             <div className="absolute right-1/4 bottom-4">
//               <Circle ref={node6Ref} size="size-10">
//                 <Icons.rocket />
//               </Circle>
//             </div>

//             {/* Animated beams connecting all nodes to center */}
//             <AnimatedBeam
//               containerRef={containerRef}
//               fromRef={node1Ref}
//               toRef={centerRef}
//               curvature={-30}
//               gradientStartColor="#f97316"
//               gradientStopColor="#fb923c"
//             />
//             <AnimatedBeam
//               containerRef={containerRef}
//               fromRef={node2Ref}
//               toRef={centerRef}
//               curvature={30}
//               gradientStartColor="#f97316"
//               gradientStopColor="#fb923c"
//             />
//             <AnimatedBeam
//               containerRef={containerRef}
//               fromRef={node3Ref}
//               toRef={centerRef}
//               gradientStartColor="#f97316"
//               gradientStopColor="#fb923c"
//             />
//             <AnimatedBeam
//               containerRef={containerRef}
//               fromRef={node4Ref}
//               toRef={centerRef}
//               gradientStartColor="#f97316"
//               gradientStopColor="#fb923c"
//             />
//             <AnimatedBeam
//               containerRef={containerRef}
//               fromRef={node5Ref}
//               toRef={centerRef}
//               curvature={30}
//               gradientStartColor="#f97316"
//               gradientStopColor="#fb923c"
//             />
//             <AnimatedBeam
//               containerRef={containerRef}
//               fromRef={node6Ref}
//               toRef={centerRef}
//               curvature={-30}
//               gradientStartColor="#f97316"
//               gradientStopColor="#fb923c"
//             />
//           </div>
//           <h2 className="text-2xl font-bold mb-2">MVP Built Fast</h2>
//           <p className="text-gray-700">90 days. Working product. Not a prototype. Not a PowerPoint. Design + Dev + Demo Ready</p>
//         </div>
        
//         {/* Second box - unchanged */}
//         <div className="md:col-span-7 flex flex-col">
//           <div className="rounded-lg bg-gradient-to-br from-orange-300 to-yellow-300 h-64 mb-4 relative transform transition-transform duration-300 hover:scale-[1.03]">
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="bg-white/80 rounded-lg w-2/3 h-2/3"></div>
//             </div>
//           </div>
//           <h2 className="text-2xl font-bold mb-2">AI-Assisted Dev</h2>
//           <p className="text-gray-700">We combine proven frameworks with AI tools to accelerate timelines and cut bloat. Smarter tools, not bloated builds</p>
//         </div>
//       </div>

//       {/* Second row - unchanged */}
//       <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
//         <div className="md:col-span-7 flex flex-col">
//           <div className="rounded-lg bg-gradient-to-br from-orange-300 to-orange-400 h-64 mb-4 relative transform transition-transform duration-300 hover:scale-[1.03]">
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="bg-white/80 rounded-lg w-2/3 h-2/3"></div>
//             </div>
//           </div>
//           <h2 className="text-2xl font-bold mb-2">Full Support</h2>
//           <p className="text-gray-700">Slack. Weekly syncs. Clear milestones. We're your tech team, product coach, and launch partner all in one.</p>
//         </div>
        
//         <div className="md:col-span-5 flex flex-col">
//           <div className="rounded-lg bg-gradient-to-br from-orange-300 to-yellow-300 h-64 mb-4 transform transition-transform duration-300 hover:scale-[1.03]"></div>
//           <h2 className="text-2xl font-bold mb-2">Pitch-Ready Delivery</h2>
//           <p className="text-gray-700">Get more than a product — get a deck, a demo, and confidence for your next investor call.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MVPComponent;


"use client";

import React, { useRef } from 'react';
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { File, Settings, Search, Code, Database, Brain } from "lucide-react";

// Circle component for beam endpoints
const Circle = React.forwardRef(({ className, children, size = "size-12" }, ref) => {
  return (
    <div
      ref={ref}
      className={`z-10 flex ${size} items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] ${className}`}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

// Random icons for the demo (you can replace these later)
const Icons = {
  // Central hub icon
  hub: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
      <path d="M2 17l10 5 10-5"></path>
      <path d="M2 12l10 5 10-5"></path>
    </svg>
  ),
  // Surrounding icons
  code: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16,18 22,12 16,6"></polyline>
      <polyline points="8,6 2,12 8,18"></polyline>
    </svg>
  ),
  database: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
  ),
  cloud: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
    </svg>
  ),
  mobile: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>
  ),
  globe: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  ),
  shield: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  ),
  rocket: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </svg>
  ),
};

const MVPComponent = () => {
  // Refs for the animated beam network
  const containerRef = useRef(null);
  const centerRef = useRef(null);
  const node1Ref = useRef(null);
  const node2Ref = useRef(null);
  const node3Ref = useRef(null);
  const node4Ref = useRef(null);
  const node5Ref = useRef(null);
  const node6Ref = useRef(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero section */}
      <div className="text-center mb-16">
        <div className="inline-block bg-white text-black rounded-full px-6 py-2 mb-6 shadow-md border border-orange-200">
          AI-Powered. No Excuses. No Storytime.
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Everything You Need<br />
          Nothing You Don't
        </h1>
        <p className="text-xl sm:text-2xl max-w-4xl mx-auto">
          Streamline Your MVP Journey With AI-Driven<br className="hidden md:block" />
          Speed, Strategy, And Support.
        </p>
      </div>
      
      {/* First row - Asymmetric with animated beam network */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
        {/* First box with hub-and-spoke animated beam network */}
        <div className="md:col-span-5 flex flex-col">
          <div 
            ref={containerRef}
            className="rounded-lg bg-gradient-to-br from-orange-300 to-orange-400 h-64 mb-4 transform transition-transform duration-300 hover:scale-[1.03] relative overflow-hidden p-6"
          >
            {/* Central hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle ref={centerRef} size="size-14" className="bg-white shadow-lg">
                <Icons.hub />
              </Circle>
            </div>

            {/* Top nodes */}
            <div className="absolute left-1/4 top-4">
              <Circle ref={node1Ref} size="size-10">
                <Icons.code />
              </Circle>
            </div>
            <div className="absolute right-1/4 top-4">
              <Circle ref={node2Ref} size="size-10">
                <Icons.database />
              </Circle>
            </div>

            {/* Side nodes */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Circle ref={node3Ref} size="size-10">
                <Icons.cloud />
              </Circle>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <Circle ref={node4Ref} size="size-10">
                <Icons.mobile />
              </Circle>
            </div>

            {/* Bottom nodes */}
            <div className="absolute left-1/4 bottom-4">
              <Circle ref={node5Ref} size="size-10">
                <Icons.shield />
              </Circle>
            </div>
            <div className="absolute right-1/4 bottom-4">
              <Circle ref={node6Ref} size="size-10">
                <Icons.rocket />
              </Circle>
            </div>

            {/* Animated beams connecting all nodes to center */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={node1Ref}
              toRef={centerRef}
              curvature={-30}
              gradientStartColor="#f97316"
              gradientStopColor="#fb923c"
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={node2Ref}
              toRef={centerRef}
              curvature={30}
              gradientStartColor="#f97316"
              gradientStopColor="#fb923c"
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={node3Ref}
              toRef={centerRef}
              gradientStartColor="#f97316"
              gradientStopColor="#fb923c"
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={node4Ref}
              toRef={centerRef}
              gradientStartColor="#f97316"
              gradientStopColor="#fb923c"
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={node5Ref}
              toRef={centerRef}
              curvature={30}
              gradientStartColor="#f97316"
              gradientStopColor="#fb923c"
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={node6Ref}
              toRef={centerRef}
              curvature={-30}
              gradientStartColor="#f97316"
              gradientStopColor="#fb923c"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">MVP Built Fast</h2>
          <p className="text-gray-700">90 days. Working product. Not a prototype. Not a PowerPoint. Design + Dev + Demo Ready</p>
        </div>
        
        {/* Second box with enhanced orbiting circles */}
        <div className="md:col-span-7 flex flex-col">
          <div className="rounded-lg bg-gradient-to-br from-orange-300 to-yellow-300 h-64 mb-4 transform transition-transform duration-300 hover:scale-[1.03] overflow-hidden">
            {/* Enhanced Orbiting Circles Container */}
            <div className="relative h-full w-full flex items-center justify-center">
              {/* Inner orbit with larger, styled icons */}
              <OrbitingCircles 
                className="size-[40px] border-2 border-white bg-white shadow-lg" 
                duration={20} 
                radius={60}
              >
                <File className="text-orange-600" size={24} />
                <Settings className="text-blue-600" size={24} />
                <Search className="text-green-600" size={24} />
              </OrbitingCircles>
              
              {/* Outer orbit with larger, styled icons */}
              <OrbitingCircles 
                className="size-[40px] border-2 border-white bg-white shadow-lg" 
                duration={25} 
                radius={110} 
                reverse
              >
                <Code className="text-purple-600" size={22} />
                <Database className="text-red-600" size={22} />
                <Brain className="text-indigo-600" size={22} />
              </OrbitingCircles>

              {/* Central hub with AI icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-orange-500 to-yellow-500 shadow-xl z-10">
                <Brain className="text-white" size={28} />
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">AI-Assisted Dev</h2>
          <p className="text-gray-700">We combine proven frameworks with AI tools to accelerate timelines and cut bloat. Smarter tools, not bloated builds</p>
        </div>
      </div>

      {/* Second row - unchanged */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
        <div className="md:col-span-7 flex flex-col">
          <div className="rounded-lg bg-gradient-to-br from-orange-300 to-orange-400 h-64 mb-4 relative transform transition-transform duration-300 hover:scale-[1.03]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 rounded-lg w-2/3 h-2/3"></div>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">Full Support</h2>
          <p className="text-gray-700">Slack. Weekly syncs. Clear milestones. We're your tech team, product coach, and launch partner all in one.</p>
        </div>
        
        <div className="md:col-span-5 flex flex-col">
          <div className="rounded-lg bg-gradient-to-br from-orange-300 to-yellow-300 h-64 mb-4 transform transition-transform duration-300 hover:scale-[1.03]"></div>
          <h2 className="text-2xl font-bold mb-2">Pitch-Ready Delivery</h2>
          <p className="text-gray-700">Get more than a product — get a deck, a demo, and confidence for your next investor call.</p>
        </div>
      </div>
    </div>
  );
};

export default MVPComponent;