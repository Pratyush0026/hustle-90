

// "use client";

// import React, { useRef, useState, useEffect } from 'react';
// import { AnimatedBeam } from "@/components/magicui/animated-beam";
// import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
// import { AnimatedList } from "@/components/magicui/animated-list";
// import { Confetti } from "@/components/magicui/confetti";
// import { File, Settings, Search, Code, Database, Brain } from "lucide-react";
// import { cn } from "@/lib/utils";

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

// // Support notifications for AnimatedList
// let supportNotifications = [
//   {
//     name: "Weekly sync scheduled",
//     description: "MVP Progress Review",
//     time: "2m ago",
//     icon: "📅",
//     color: "#00C9A7",
//   },
//   {
//     name: "Slack message",
//     description: "Feature update available",
//     time: "5m ago",
//     icon: "💬",
//     color: "#FFB800",
//   },
//   {
//     name: "Milestone reached",
//     description: "Backend API complete",
//     time: "10m ago",
//     icon: "🎯",
//     color: "#FF3D71",
//   },
//   {
//     name: "Support ticket",
//     description: "Question resolved",
//     time: "15m ago",
//     icon: "🎧",
//     color: "#1E86FF",
//   },
//   {
//     name: "Code review",
//     description: "PR approved & merged",
//     time: "20m ago",
//     icon: "✅",
//     color: "#7C3AED",
//   },
// ];

// supportNotifications = Array.from({ length: 8 }, () => supportNotifications).flat();

// const SupportNotification = ({ name, description, icon, color, time }) => {
//   return (
//     <figure
//       className={cn(
//         "relative mx-auto min-h-fit w-full max-w-[320px] cursor-pointer overflow-hidden rounded-lg p-3",
//         "transition-all duration-200 ease-in-out hover:scale-[102%]",
//         "bg-white/90 backdrop-blur-sm [box-shadow:0_2px_8px_rgba(0,0,0,.1)]",
//       )}
//     >
//       <div className="flex flex-row items-center gap-3">
//         <div
//           className="flex size-8 items-center justify-center rounded-lg"
//           style={{
//             backgroundColor: color,
//           }}
//         >
//           <span className="text-sm">{icon}</span>
//         </div>
//         <div className="flex flex-col overflow-hidden">
//           <figcaption className="flex flex-row items-center whitespace-pre text-sm font-medium">
//             <span className="text-xs sm:text-sm">{name}</span>
//             <span className="mx-1 text-xs">·</span>
//             <span className="text-xs text-gray-500">{time}</span>
//           </figcaption>
//           <p className="text-xs font-normal text-gray-600">
//             {description}
//           </p>
//         </div>
//       </div>
//     </figure>
//   );
// };

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
  
//   // State to control animation restart
//   const [animationKey, setAnimationKey] = useState(0);
//   const sectionRef = useRef(null);

//   // Intersection Observer to restart animations when section comes into view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // Restart animations by changing the key
//             setAnimationKey(prev => prev + 1);
//           }
//         });
//       },
//       {
//         threshold: 0.3, // Trigger when 30% of the section is visible
//         rootMargin: '0px 0px -100px 0px' // Trigger a bit before fully visible
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       {/* Hero section with exact styling from images */}
//       <div className="text-center mb-16">
//         <div className="inline-block bg-white text-black rounded-full px-6 py-2 mb-6 shadow-md border border-orange-200">
//           AI-Powered. No Excuses. No Storytime.
//         </div>
//         {/* Main heading with DM Sans font, responsive sizing - much smaller on mobile */}
//         <h1 className="font-['DM_Sans'] font-medium text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] xl:text-[80px] leading-[36px] sm:leading-[44px] md:leading-[60px] lg:leading-[76px] xl:leading-[80px] tracking-[-1px] sm:tracking-[-1.2px] md:tracking-[-1.6px] lg:tracking-[-1.8px] xl:tracking-[-2px] text-center text-black mb-4 sm:mb-5 md:mb-6">
//           Everything You Need<br />
//           Nothing You Don't
//         </h1>
//         {/* Subheading with Poppins font, responsive sizing - much smaller on mobile */}
//         <p className="font-['Poppins'] font-normal text-[16px] sm:text-[18px] md:text-[24px] lg:text-[30px] xl:text-[33px] leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[48px] xl:leading-[60px] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2px] text-center text-black max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-6xl mx-auto px-4" style={{ textTransform: 'capitalize' }}>
//           We're not a dev shop. We're your co-pilot combining product strategy, <br /> AI enhanced development, and launch execution.
//         </p>
//       </div>
      
//       {/* First row - Asymmetric with animated beam network */}
//       <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
//         {/* First box with hub-and-spoke animated beam network */}
//         <div className="md:col-span-5 flex flex-col">
//           <div 
//             key={`beam-${animationKey}`}
//             ref={containerRef}
//             className="rounded-lg h-64 mb-4 transform transition-transform duration-300 hover:scale-[1.03] relative overflow-hidden p-6"
//             style={{
//               background: 'linear-gradient(135deg, #FD8D50 0%, #FFD99C  50%, #FE9D68 100%)'
//             }}
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
//                 pathColor="#ffffff"  
//                 pathOpacity={0.7}

//             />
//             <AnimatedBeam
//               containerRef={containerRef}
//               fromRef={node2Ref}
//               toRef={centerRef}
//               curvature={30}
//               gradientStartColor="#f97316"
//               gradientStopColor="#fb923c"
//                 pathColor="#ffffff"  
//                 pathOpacity={0.7}


//             />
//             <AnimatedBeam
//               containerRef={containerRef}
//               fromRef={node3Ref}
//               toRef={centerRef}
//               gradientStartColor="#f97316"
//               gradientStopColor="#fb923c"
//                 pathColor="#ffffff"  
//                 pathOpacity={0.7}


//             />
//             <AnimatedBeam
//               containerRef={containerRef}
//               fromRef={node4Ref}
//               toRef={centerRef}
//               gradientStartColor="#f97316"
//               gradientStopColor="#fb923c"
//                 pathColor="#ffffff"  
//                 pathOpacity={0.7}


//             />
//             <AnimatedBeam
//               containerRef={containerRef}
//               fromRef={node5Ref}
//               toRef={centerRef}
//               curvature={30}
//               gradientStartColor="#f97316"
//               gradientStopColor="#fb923c"
//                 pathColor="#ffffff"
//                 pathOpacity={0.7}


//             />
//             <AnimatedBeam
//               containerRef={containerRef}
//               fromRef={node6Ref}
//               toRef={centerRef}
//               curvature={-30}
//               gradientStartColor="#f97316"
//               gradientStopColor="#fb923c"
//                 pathColor="#ffffff"  
//                 pathOpacity={0.7}

//             />
//           </div>
//           <h2 className="font-['Poppins'] font-medium text-[24px] leading-[28.8px] tracking-[0%] text-black mb-2">MVP Built Fast</h2>
//           <p className="font-['Poppins'] font-normal text-[16px] leading-[26px] tracking-[0%] text-black">90 days. Working product. Not a prototype. Not a PowerPoint. Design + Dev + Demo Ready</p>
//         </div>
        
//         {/* Second box with enhanced orbiting circles */}
//         <div className="md:col-span-7 flex flex-col">
//           <div 
//             key={`orbit-${animationKey}`}
//             className="rounded-lg h-64 mb-4 transform transition-transform duration-300 hover:scale-[1.03] overflow-hidden"
//             style={{
//               background: 'linear-gradient(135deg, #FD8D50 0%, #FFD99C 50%, #FE9D68 100%)'
//             }}
//           >
//             {/* Enhanced Orbiting Circles Container */}
//             <div className="relative h-full w-full flex items-center justify-center">
//               {/* Inner orbit with larger, styled icons */}
//               <OrbitingCircles 
//                 className="size-[40px] border-2 border-white bg-white shadow-lg" 
//                 duration={20} 
//                 radius={60}
//               >
//                 <File className="text-orange-600" size={24} />
//                 <Settings className="text-blue-600" size={24} />
//                 <Search className="text-green-600" size={24} />
//               </OrbitingCircles>
              
//               {/* Outer orbit with larger, styled icons */}
//               <OrbitingCircles 
//                 className="size-[40px] border-2 border-white bg-white shadow-lg" 
//                 duration={25} 
//                 radius={110} 
//                 reverse
//               >
//                 <Code className="text-purple-600" size={22} />
//                 <Database className="text-red-600" size={22} />
//                 <Brain className="text-indigo-600" size={22} />
//               </OrbitingCircles>

//               {/* Central hub with AI icon */}
//               <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-orange-500 to-yellow-500 shadow-xl z-10">
//                 <Brain className="text-white" size={28} />
//               </div>
//             </div>
//           </div>
//           <h2 className="font-['Poppins'] font-medium text-[24px] leading-[28.8px] tracking-[0%] text-black mb-2">AI-Assisted Dev</h2>
//           <p className="font-['Poppins'] font-normal text-[16px] leading-[26px] tracking-[0%] text-black">We combine proven frameworks with AI tools to accelerate timelines and cut bloat. Smarter tools, not bloated builds</p>
//         </div>
//       </div>

//       {/* Second row with Full Support animated list */}
//       <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
//         {/* Full Support box with animated list */}
//         <div className="md:col-span-7 flex flex-col">
//           <div 
//             key={`list-${animationKey}`}
//             className="rounded-lg h-64 mb-4 relative transform transition-transform duration-300 hover:scale-[1.03] overflow-hidden"
//             style={{
//               background: 'linear-gradient(135deg, #FD8D50 0%, #FFD99C 50%, #FE9D68 100%)'
//             }}
//           >
//             {/* Animated List Container */}
//             <div className="relative h-full w-full p-4">
//               <AnimatedList className="h-full">
//                 {supportNotifications.map((item, idx) => (
//                   <SupportNotification {...item} key={idx} />
//                 ))}
//               </AnimatedList>
//               {/* Gradient fade at bottom */}
//               <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#FE9D68] to-transparent"></div>
//             </div>
//           </div>
//           <h2 className="font-['Poppins'] font-medium text-[24px] leading-[28.8px] tracking-[0%] text-black mb-2">Full Support</h2>
//           <p className="font-['Poppins'] font-normal text-[16px] leading-[26px] tracking-[0%] text-black">Slack. Weekly syncs. Clear milestones. We're your tech team, product coach, and launch partner all in one.</p>
//         </div>
        
//         {/* Pitch-Ready Delivery box with confetti */}
//         <div className="md:col-span-5 flex flex-col">
//           <div 
//             key={`confetti-${animationKey}`}
//             className="rounded-lg h-64 mb-4 transform transition-transform duration-300 hover:scale-[1.03] relative overflow-hidden"
//             style={{
//               background: 'linear-gradient(135deg, #FD8D50 0%, #FFD99C 50%, #FE9D68 100%)'
//             }}
//           >
//             {/* Confetti Animation */}
//             <Confetti className="absolute left-0 top-0 z-0 size-full" />
            
//             {/* Content overlay */}
//             <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
//               <div className="text-6xl mb-4">🚀</div>
//               <span className="text-center text-2xl font-bold bg-gradient-to-b from-orange-800 to-yellow-800 bg-clip-text text-transparent">
//                 Launch Ready!
//               </span>
//               <div className="text-center text-sm text-orange-700 mt-2 font-medium">
//                 Celebration Mode
//               </div>
//             </div>
//           </div>
//           <h2 className="font-['Poppins'] font-medium text-[24px] leading-[28.8px] tracking-[0%] text-black mb-2">Pitch-Ready Delivery</h2>
//           <p className="font-['Poppins'] font-normal text-[16px] leading-[26px] tracking-[0%] text-black">Get more than a product — get a deck, a demo, and confidence for your next investor call.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MVPComponent;


// "use client";

// import React, { useRef, useState, useEffect } from 'react';
// import { AnimatedBeam } from "@/components/magicui/animated-beam";
// import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
// import { AnimatedList } from "@/components/magicui/animated-list";
// import { Confetti } from "@/components/magicui/confetti";
// import { RainbowButton } from "@/components/magicui/rainbow-button";
// import { motion } from "framer-motion";
// import { File, Settings, Search, Code, Database, Brain } from "lucide-react";
// import { cn } from "@/lib/utils";

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

// // Support notifications for AnimatedList
// let supportNotifications = [
//   {
//     name: "Weekly sync scheduled",
//     description: "MVP Progress Review",
//     time: "2m ago",
//     icon: "📅",
//     color: "#00C9A7",
//   },
//   {
//     name: "Slack message",
//     description: "Feature update available",
//     time: "5m ago",
//     icon: "💬",
//     color: "#FFB800",
//   },
//   {
//     name: "Milestone reached",
//     description: "Backend API complete",
//     time: "10m ago",
//     icon: "🎯",
//     color: "#FF3D71",
//   },
//   {
//     name: "Support ticket",
//     description: "Question resolved",
//     time: "15m ago",
//     icon: "🎧",
//     color: "#1E86FF",
//   },
//   {
//     name: "Code review",
//     description: "PR approved & merged",
//     time: "20m ago",
//     icon: "✅",
//     color: "#7C3AED",
//   },
// ];

// supportNotifications = Array.from({ length: 8 }, () => supportNotifications).flat();

// const SupportNotification = ({ name, description, icon, color, time }) => {
//   return (
//     <figure
//       className={cn(
//         "relative mx-auto min-h-fit w-full max-w-[320px] cursor-pointer overflow-hidden rounded-lg p-3",
//         "transition-all duration-200 ease-in-out hover:scale-[102%]",
//         "bg-white/90 backdrop-blur-sm [box-shadow:0_2px_8px_rgba(0,0,0,.1)]",
//       )}
//     >
//       <div className="flex flex-row items-center gap-3">
//         <div
//           className="flex size-8 items-center justify-center rounded-lg"
//           style={{
//             backgroundColor: color,
//           }}
//         >
//           <span className="text-sm">{icon}</span>
//         </div>
//         <div className="flex flex-col overflow-hidden">
//           <figcaption className="flex flex-row items-center whitespace-pre text-sm font-medium">
//             <span className="text-xs sm:text-sm">{name}</span>
//             <span className="mx-1 text-xs">·</span>
//             <span className="text-xs text-gray-500">{time}</span>
//           </figcaption>
//           <p className="text-xs font-normal text-gray-600">
//             {description}
//           </p>
//         </div>
//       </div>
//     </figure>
//   );
// };

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
  
//   // State to control animation restart
//   const [animationKey, setAnimationKey] = useState(0);
//   const sectionRef = useRef(null);

//   // Intersection Observer to restart animations when section comes into view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             // Restart animations by changing the key
//             setAnimationKey(prev => prev + 1);
//           }
//         });
//       },
//       {
//         threshold: 0.3, // Trigger when 30% of the section is visible
//         rootMargin: '0px 0px -100px 0px' // Trigger a bit before fully visible
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       {/* Hero section with exact styling from images */}
//       <div className="text-center mb-16">
//         <div className="mb-6">
//           <motion.div
//             className="relative inline-block"
//             animate={{
//               background: [
//                 "linear-gradient(90deg, #ff0000, #ff8800, #ffff00, #88ff00, #00ff00, #00ff88, #00ffff, #0088ff, #0000ff, #8800ff, #ff00ff, #ff0088)",
//                 "linear-gradient(180deg, #ff8800, #ffff00, #88ff00, #00ff00, #00ff88, #00ffff, #0088ff, #0000ff, #8800ff, #ff00ff, #ff0088, #ff0000)",
//                 "linear-gradient(270deg, #ffff00, #88ff00, #00ff00, #00ff88, #00ffff, #0088ff, #0000ff, #8800ff, #ff00ff, #ff0088, #ff0000, #ff8800)",
//                 "linear-gradient(360deg, #88ff00, #00ff00, #00ff88, #00ffff, #0088ff, #0000ff, #8800ff, #ff00ff, #ff0088, #ff0000, #ff8800, #ffff00)",
//                 "linear-gradient(90deg, #ff0000, #ff8800, #ffff00, #88ff00, #00ff00, #00ff88, #00ffff, #0088ff, #0000ff, #8800ff, #ff00ff, #ff0088)"
//               ]
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: "linear"
//             }}
//             style={{
//               padding: "2px",
//               borderRadius: "9999px"
//             }}
//           >
//             <div className="bg-white text-black rounded-full px-6 py-2 shadow-md relative z-10">
//               AI-Powered. No Excuses. No Storytime.
//             </div>
//           </motion.div>
//         </div>
//         {/* Main heading with DM Sans font, responsive sizing - much smaller on mobile */}
//         <h1 className="font-['DM_Sans'] font-medium text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] xl:text-[80px] leading-[36px] sm:leading-[44px] md:leading-[60px] lg:leading-[76px] xl:leading-[80px] tracking-[-1px] sm:tracking-[-1.2px] md:tracking-[-1.6px] lg:tracking-[-1.8px] xl:tracking-[-2px] text-center text-black mb-4 sm:mb-5 md:mb-6">
//           Everything You Need<br />
//           Nothing You Don't
//         </h1>
//         {/* Subheading with Poppins font, responsive sizing - much smaller on mobile */}
//         <p className="font-['Poppins'] font-normal text-[16px] sm:text-[18px] md:text-[24px] lg:text-[30px] xl:text-[36px] leading-[24px] sm:leading-[28px] md:leading-[36px] lg:leading-[48px] xl:leading-[60px] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2px] text-center text-black max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-4" style={{ textTransform: 'capitalize' }}>
//           We're not a dev shop. We're your co-pilot combining product strategy, AI enhanced development, and launch execution.
//         </p>
//       </div>
      
//       {/* First row - Asymmetric with animated beam network */}
//       <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
//         {/* First box with hub-and-spoke animated beam network */}
//         <div className="md:col-span-5 flex flex-col">
//           <div 
//             key={`beam-${animationKey}`}
//             ref={containerRef}
//             className="rounded-lg h-64 mb-4 transform transition-transform duration-300 hover:scale-[1.03] relative overflow-hidden p-6"
//             style={{
//               background: 'linear-gradient(135deg, #FD8D50 0%, #FFD99C  50%, #FE9D68 100%)'
//             }}
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
//           <h2 className="font-['Poppins'] font-medium text-[24px] leading-[28.8px] tracking-[0%] text-black mb-2">MVP Built Fast</h2>
//           <p className="font-['Poppins'] font-normal text-[16px] leading-[26px] tracking-[0%] text-black">90 days. Working product. Not a prototype. Not a PowerPoint. Design + Dev + Demo Ready</p>
//         </div>
        
//         {/* Second box with enhanced orbiting circles */}
//         <div className="md:col-span-7 flex flex-col">
//           <div 
//             key={`orbit-${animationKey}`}
//             className="rounded-lg h-64 mb-4 transform transition-transform duration-300 hover:scale-[1.03] overflow-hidden"
//             style={{
//               background: 'linear-gradient(135deg, #FD8D50 0%, #FFD99C 50%, #FE9D68 100%)'
//             }}
//           >
//             {/* Enhanced Orbiting Circles Container */}
//             <div className="relative h-full w-full flex items-center justify-center">
//               {/* Inner orbit with larger, styled icons */}
//               <OrbitingCircles 
//                 className="size-[40px] border-2 border-white bg-white shadow-lg" 
//                 duration={20} 
//                 radius={60}
//               >
//                 <File className="text-orange-600" size={24} />
//                 <Settings className="text-blue-600" size={24} />
//                 <Search className="text-green-600" size={24} />
//               </OrbitingCircles>
              
//               {/* Outer orbit with larger, styled icons */}
//               <OrbitingCircles 
//                 className="size-[40px] border-2 border-white bg-white shadow-lg" 
//                 duration={25} 
//                 radius={110} 
//                 reverse
//               >
//                 <Code className="text-purple-600" size={22} />
//                 <Database className="text-red-600" size={22} />
//                 <Brain className="text-indigo-600" size={22} />
//               </OrbitingCircles>

//               {/* Central hub with AI icon */}
//               <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-orange-500 to-yellow-500 shadow-xl z-10">
//                 <Brain className="text-white" size={28} />
//               </div>
//             </div>
//           </div>
//           <h2 className="font-['Poppins'] font-medium text-[24px] leading-[28.8px] tracking-[0%] text-black mb-2">AI-Assisted Dev</h2>
//           <p className="font-['Poppins'] font-normal text-[16px] leading-[26px] tracking-[0%] text-black">We combine proven frameworks with AI tools to accelerate timelines and cut bloat. Smarter tools, not bloated builds</p>
//         </div>
//       </div>

//       {/* Second row with Full Support animated list */}
//       <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
//         {/* Full Support box with animated list */}
//         <div className="md:col-span-7 flex flex-col">
//           <div 
//             key={`list-${animationKey}`}
//             className="rounded-lg h-64 mb-4 relative transform transition-transform duration-300 hover:scale-[1.03] overflow-hidden"
//             style={{
//               background: 'linear-gradient(135deg, #FD8D50 0%, #FFD99C 50%, #FE9D68 100%)'
//             }}
//           >
//             {/* Animated List Container */}
//             <div className="relative h-full w-full p-4">
//               <AnimatedList className="h-full">
//                 {supportNotifications.map((item, idx) => (
//                   <SupportNotification {...item} key={idx} />
//                 ))}
//               </AnimatedList>
//               {/* Gradient fade at bottom */}
//               <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#FE9D68] to-transparent"></div>
//             </div>
//           </div>
//           <h2 className="font-['Poppins'] font-medium text-[24px] leading-[28.8px] tracking-[0%] text-black mb-2">Full Support</h2>
//           <p className="font-['Poppins'] font-normal text-[16px] leading-[26px] tracking-[0%] text-black">Slack. Weekly syncs. Clear milestones. We're your tech team, product coach, and launch partner all in one.</p>
//         </div>
        
//         {/* Pitch-Ready Delivery box with confetti */}
//         <div className="md:col-span-5 flex flex-col">
//           <div 
//             key={`confetti-${animationKey}`}
//             className="rounded-lg h-64 mb-4 transform transition-transform duration-300 hover:scale-[1.03] relative overflow-hidden"
//             style={{
//               background: 'linear-gradient(135deg, #FD8D50 0%, #FFD99C 50%, #FE9D68 100%)'
//             }}
//           >
//             {/* Confetti Animation */}
//             <Confetti className="absolute left-0 top-0 z-0 size-full" />
            
//             {/* Content overlay */}
//             <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
//               <div className="text-6xl mb-4">🚀</div>
//               <span className="text-center text-2xl font-bold bg-gradient-to-b from-orange-800 to-yellow-800 bg-clip-text text-transparent">
//                 Launch Ready!
//               </span>
//               <div className="text-center text-sm text-orange-700 mt-2 font-medium">
//                 Celebration Mode
//               </div>
//             </div>
//           </div>
//           <h2 className="font-['Poppins'] font-medium text-[24px] leading-[28.8px] tracking-[0%] text-black mb-2">Pitch-Ready Delivery</h2>
//           <p className="font-['Poppins'] font-normal text-[16px] leading-[26px] tracking-[0%] text-black">Get more than a product — get a deck, a demo, and confidence for your next investor call.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MVPComponent;




"use client";

import React, { useRef, useState, useEffect } from 'react';
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { AnimatedList } from "@/components/magicui/animated-list";
import { Confetti } from "@/components/magicui/confetti";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { motion } from "framer-motion";
import { File, Settings, Search, Code, Database, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

 

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

// Support notifications for AnimatedList
let supportNotifications = [
  {
    name: "Weekly sync scheduled",
    description: "MVP Progress Review",
    time: "2m ago",
    icon: "📅",
    color: "#00C9A7",
  },
  {
    name: "Slack message",
    description: "Feature update available",
    time: "5m ago",
    icon: "💬",
    color: "#FFB800",
  },
  {
    name: "Milestone reached",
    description: "Backend API complete",
    time: "10m ago",
    icon: "🎯",
    color: "#FF3D71",
  },
  {
    name: "Support ticket",
    description: "Question resolved",
    time: "15m ago",
    icon: "🎧",
    color: "#1E86FF",
  },
  {
    name: "Code review",
    description: "PR approved & merged",
    time: "20m ago",
    icon: "✅",
    color: "#7C3AED",
  },
];

supportNotifications = Array.from({ length: 8 }, () => supportNotifications).flat();

const SupportNotification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[320px] cursor-pointer overflow-hidden rounded-lg p-3",
        "transition-all duration-200 ease-in-out hover:scale-[102%]",
        "bg-white/90 backdrop-blur-sm [box-shadow:0_2px_8px_rgba(0,0,0,.1)]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-8 items-center justify-center rounded-lg"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-sm">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-sm font-medium">
            <span className="text-xs sm:text-sm">{name}</span>
            <span className="mx-1 text-xs">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-xs font-normal text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

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
  
  // State to control animation restart
  const [animationKey, setAnimationKey] = useState(0);
  const sectionRef = useRef(null);

  // Intersection Observer to restart animations when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Restart animations by changing the key
            setAnimationKey(prev => prev + 1);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -100px 0px' // Trigger a bit before fully visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const rocketFlyStyle = {
    animation: 'rocketFly 3s ease-in-out',
  };

  // Add the keyframes as a style tag (add this before your return statement)
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes rocketFly {
        0% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(-30px, -60px) rotate(-15deg); }
        50% { transform: translate(0, -120px) rotate(0deg); }
        75% { transform: translate(30px, -60px) rotate(15deg); }
        100% { transform: translate(0, 0) rotate(0deg); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero section with exact styling from images */}
      {/* <div className="text-center mb-16">
        <div className="mb-6">
          <motion.div
            className="relative inline-block"
            animate={{
              background: [
                "linear-gradient(90deg, #ff0000, #ff8800, #ffff00, #88ff00, #00ff00, #00ff88, #00ffff, #0088ff, #0000ff, #8800ff, #ff00ff, #ff0088)",
                "linear-gradient(180deg, #ff8800, #ffff00, #88ff00, #00ff00, #00ff88, #00ffff, #0088ff, #0000ff, #8800ff, #ff00ff, #ff0088, #ff0000)",
                "linear-gradient(270deg, #ffff00, #88ff00, #00ff00, #00ff88, #00ffff, #0088ff, #0000ff, #8800ff, #ff00ff, #ff0088, #ff0000, #ff8800)",
                "linear-gradient(360deg, #88ff00, #00ff00, #00ff88, #00ffff, #0088ff, #0000ff, #8800ff, #ff00ff, #ff0088, #ff0000, #ff8800, #ffff00)",
                "linear-gradient(90deg, #ff0000, #ff8800, #ffff00, #88ff00, #00ff00, #00ff88, #00ffff, #0088ff, #0000ff, #8800ff, #ff00ff, #ff0088)"
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
      
        <h1 className="font-['DM_Sans'] font-medium text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] xl:text-[80px] leading-[36px] sm:leading-[44px] md:leading-[60px] lg:leading-[76px] xl:leading-[80px] tracking-[-1px] sm:tracking-[-1.2px] md:tracking-[-1.6px] lg:tracking-[-1.8px] xl:tracking-[-2px] text-center text-black mb-4 sm:mb-5 md:mb-6">
          Everything You Need<br />
          Nothing You Don't
        </h1>
      
        <p className="font-['Poppins'] font-normal text-[16px] sm:text-[18px] md:text-[24px] lg:text-[30px] xl:text-[36px] leading-[24px] sm:leading-[28px] md:leading-[33px] lg:leading-[48px] xl:leading-[60px] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2px] text-center text-black max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4" style={{ textTransform: 'capitalize' }}>
          We're not a dev shop. We're your co-pilot combining product strategy, AI enhanced development, and launch execution.
        </p>
      </div> */}


      <div className="text-center mb-16">
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
  {/* Main heading with DM Sans font, responsive sizing - much smaller on mobile */}
  <h1 className="font-['DM_Sans'] font-medium text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] xl:text-[80px] leading-[36px] sm:leading-[44px] md:leading-[60px] lg:leading-[76px] xl:leading-[80px] tracking-[-1px] sm:tracking-[-1.2px] md:tracking-[-1.6px] lg:tracking-[-1.8px] xl:tracking-[-2px] text-center text-black mb-4 sm:mb-5 md:mb-6">
    Everything You Need<br />
    Nothing You Don't
  </h1>
  {/* Subheading with Poppins font, responsive sizing - much smaller on mobile */}
  <p className="font-['Poppins'] font-normal text-[16px] sm:text-[18px] md:text-[24px] lg:text-[30px] xl:text-[36px] leading-[24px] sm:leading-[28px] md:leading-[33px] lg:leading-[48px] xl:leading-[60px] tracking-[-0.5px] sm:tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.6px] xl:tracking-[-2px] text-center text-black max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4" style={{ textTransform: 'capitalize' }}>
    We're not a dev shop. We're your co-pilot combining product strategy, AI enhanced development, and launch execution.
  </p>
</div>
      
      {/* First row - Asymmetric with animated beam network */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
        {/* First box with hub-and-spoke animated beam network */}
        <div className="md:col-span-5 flex flex-col">
          <div 
            key={`beam-${animationKey}`}
            ref={containerRef}
            className="rounded-lg h-64 mb-4 transform transition-transform duration-300 hover:scale-[1.03] relative overflow-hidden p-6"
            style={{
              background: 'linear-gradient(135deg, #FD8D50 0%, #FFD99C  50%, #FE9D68 100%)'
            }}
          >
            {/* Central hub */}
            {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Circle ref={centerRef} size="size-25" className="bg-white shadow-lg">
                <img src="/assets/logo.png" alt="Hustle 90 Logo" className="w-20 h-6" />
              </Circle>
            </div> */}

            {/* Central hub */}
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
  <Circle ref={centerRef} size="size-25" className="bg-white shadow-lg">
    <img src="/assets/logo.png" alt="Hustle 90 Logo" className="w-20 h-6" />
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
              pathColor="#ffffff"  
              pathOpacity={0.4}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={node2Ref}
              toRef={centerRef}
              curvature={30}
              gradientStartColor="#f97316"
              gradientStopColor="#fb923c"
              pathColor="#ffffff"  
              pathOpacity={0.4}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={node3Ref}
              toRef={centerRef}
              gradientStartColor="#f97316"
              gradientStopColor="#fb923c"
              pathColor="#ffffff"  
              pathOpacity={0.4}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={node4Ref}
              toRef={centerRef}
              gradientStartColor="#f97316"
              gradientStopColor="#fb923c"
              pathColor="#ffffff"  
              pathOpacity={0.4}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={node5Ref}
              toRef={centerRef}
              curvature={30}
              gradientStartColor="#f97316"
              gradientStopColor="#fb923c"
              pathColor="#ffffff"
              pathOpacity={0.4}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={node6Ref}
              toRef={centerRef}
              curvature={-30}
              gradientStartColor="#f97316"
              gradientStopColor="#fb923c"
              pathColor="#ffffff"  
              pathOpacity={0.4}
            />
          </div>
          <h2 className="font-['Poppins'] font-medium text-[24px] leading-[28.8px] tracking-[0%] text-black mb-2">MVP Built Fast</h2>
          <p className="font-['Poppins'] font-normal text-[16px] leading-[26px] tracking-[0%] text-black">90 days. Working product. Not a prototype. Not a PowerPoint. Design + Dev + Demo Ready</p>
        </div>
        
        {/* Second box with enhanced orbiting circles */}
        <div className="md:col-span-7 flex flex-col">
          <div 
            key={`orbit-${animationKey}`}
            className="rounded-lg h-64 mb-4 transform transition-transform duration-300 hover:scale-[1.03] overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #FD8D50 0%, #FFD99C 50%, #FE9D68 100%)'
            }}
          >
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
          <h2 className="font-['Poppins'] font-medium text-[24px] leading-[28.8px] tracking-[0%] text-black mb-2">AI-Assisted Dev</h2>
          <p className="font-['Poppins'] font-normal text-[16px] leading-[26px] tracking-[0%] text-black">We combine proven frameworks with AI tools to accelerate timelines and cut bloat. Smarter tools, not bloated builds</p>
        </div>
      </div>

      {/* Second row with Full Support animated list */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
        {/* Full Support box with animated list */}
        <div className="md:col-span-7 flex flex-col">
          <div 
            key={`list-${animationKey}`}
            className="rounded-lg h-64 mb-4 relative transform transition-transform duration-300 hover:scale-[1.03] overflow-hidden"
            style={{
            background: 'linear-gradient(135deg, #FD8D50 0%, #FFAD9C 50%, #FE9D68 100%)'
            }}
          >
            {/* Animated List Container */}
            <div className="relative h-full w-full p-4">
              <AnimatedList className="h-full">
                {supportNotifications.map((item, idx) => (
                  <SupportNotification {...item} key={idx} />
                ))}
              </AnimatedList>
              {/* Gradient fade at bottom */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#FE9D68] to-transparent"></div>
            </div>
          </div>
          <h2 className="font-['Poppins'] font-medium text-[24px] leading-[28.8px] tracking-[0%] text-black mb-2">Full Support</h2>
          <p className="font-['Poppins'] font-normal text-[16px] leading-[26px] tracking-[0%] text-black">Slack. Weekly syncs. Clear milestones. We're your tech team, product coach, and launch partner all in one.</p>
        </div>
        
        {/* Pitch-Ready Delivery box with confetti */}
        <div className="md:col-span-5 flex flex-col">
          <div 
            key={`confetti-${animationKey}`}
            className="rounded-lg h-64 mb-4 transform transition-transform duration-300 hover:scale-[1.03] relative overflow-hidden"
            style={{
             background: 'linear-gradient(135deg, #FD8D50 0%, #FFAD9C 50%, #FE9D68 100%)'
            }}
          >
            {/* Confetti Animation */}
            <Confetti className="absolute left-0 top-0 z-0 size-full" />
            
            {/* Content overlay */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
              {/* <div className="text-6xl mb-4">🚀</div> */}
              <div className="text-6xl mb-4" style={rocketFlyStyle}>🚀</div>
              <span className="text-center text-2xl font-bold bg-gradient-to-b from-orange-800 to-yellow-800 bg-clip-text text-transparent">
                Launch Ready!
              </span>
              <div className="text-center text-sm text-orange-700 mt-2 font-medium">
                Celebration Mode
              </div>
            </div>
          </div>
          <h2 className="font-['Poppins'] font-medium text-[24px] leading-[28.8px] tracking-[0%] text-black mb-2">Pitch-Ready Delivery</h2>
          <p className="font-['Poppins'] font-normal text-[16px] leading-[26px] tracking-[0%] text-black">Get more than a product — get a deck, a demo, and confidence for your next investor call.</p>
        </div>
      </div>
    </div>
  );
};

export default MVPComponent;