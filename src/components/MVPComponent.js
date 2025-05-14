// import React from 'react';

// const MVPComponent = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       {/* Hero section - now first */}
//       <div className="text-center mb-16">
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
      
//       {/* First row */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//         {/* Investor-Grade Data Room */}
//         <div className="flex flex-col">
//           <div className="rounded-lg bg-gradient-to-br from-orange-300 to-orange-400 aspect-video mb-4"></div>
//           <h2 className="text-2xl font-bold mb-2">Investor-Grade Data Room</h2>
//           <p className="text-gray-700">Decks, cap tables, projections used by teams who actually raised.</p>
//         </div>
        
//         {/* Sales Funnel Page */}
//         <div className="flex flex-col">
//           <div className="rounded-lg bg-gradient-to-br from-orange-300 to-orange-400 aspect-video mb-4"></div>
//           <h2 className="text-2xl font-bold mb-2">Sales Funnel Page</h2>
//           <p className="text-gray-700">1 page that converts. Not 6 that confuse.</p>
//         </div>
//       </div>

//       {/* Second row */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//         {/* MVP Built Fast */}
//         <div className="flex flex-col">
//           <div className="rounded-lg bg-gradient-to-br from-orange-300 to-yellow-300 aspect-video mb-4"></div>
//           <h2 className="text-2xl font-bold mb-2">MVP Built Fast</h2>
//           <p className="text-gray-700">90 days. Working product. Not a prototype. Not a PowerPoint.</p>
//         </div>
        
//         {/* AI-Assisted Dev */}
//         <div className="flex flex-col">
//           <div className="rounded-lg bg-gradient-to-br from-orange-300 to-yellow-300 aspect-video mb-4 relative">
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="bg-white/80 rounded-lg w-2/3 h-2/3"></div>
//             </div>
//           </div>
//           <h2 className="text-2xl font-bold mb-2">AI-Assisted Dev</h2>
//           <p className="text-gray-700">Faster build. Smarter logic. Less crying</p>
//         </div>
//       </div>

//       {/* Bottom row - placeholders */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div className="rounded-lg bg-gradient-to-br from-orange-300 to-yellow-300 aspect-video"></div>
//         <div className="rounded-lg bg-gradient-to-br from-orange-300 to-yellow-300 aspect-video relative">
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="bg-white/80 rounded-lg w-2/3 h-2/3"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MVPComponent;

import React from 'react';

const MVPComponent = () => {
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
      
      {/* First row - Asymmetric (now matches image) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
        {/* Narrower box (4/12) */}
        <div className="md:col-span-5 flex flex-col">
          <div className="rounded-lg bg-gradient-to-br from-orange-300 to-orange-400 h-64 mb-4 transform transition-transform duration-300 hover:scale-[1.03]"></div>
          <h2 className="text-2xl font-bold mb-2">MVP Built Fast</h2>
          <p className="text-gray-700">90 days. Working product. Not a prototype. Not a PowerPoint. Design + Dev + Demo Ready</p>
        </div>
        
        {/* Wider box (8/12) */}
        <div className="md:col-span-7 flex flex-col">
          <div className="rounded-lg bg-gradient-to-br from-orange-300 to-yellow-300 h-64 mb-4 relative transform transition-transform duration-300 hover:scale-[1.03]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 rounded-lg w-2/3 h-2/3"></div>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">AI-Assisted Dev</h2>
          <p className="text-gray-700">We combine proven frameworks with AI tools to accelerate timelines and cut bloat. Smarter tools, not bloated builds</p>
        </div>
      </div>

      {/* Second row - Inverse asymmetric layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
        {/* Wider box (8/12) */}
        <div className="md:col-span-7 flex flex-col">
          <div className="rounded-lg bg-gradient-to-br from-orange-300 to-orange-400 h-64 mb-4 relative transform transition-transform duration-300 hover:scale-[1.03]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 rounded-lg w-2/3 h-2/3"></div>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">Full Support</h2>
          <p className="text-gray-700">Slack. Weekly syncs. Clear milestones. We're your tech team, product coach, and launch partner all in one.</p>
        </div>
        
        {/* Narrower box (4/12) */}
        <div className="md:col-span-5 flex flex-col">
          <div className="rounded-lg bg-gradient-to-br from-orange-300 to-yellow-300 h-64 mb-4 transform transition-transform duration-300 hover:scale-[1.03]"></div>
          <h2 className="text-2xl font-bold mb-2">Pitch-Ready Delivery</h2>
          <p className="text-gray-700">Get more than a product — get a deck, a demo, and confidence for your next investor call.</p>
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="text-center mt-16">
        <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
          Get Started Today
        </button>
        <p className="mt-4 text-gray-600">90 days to your working MVP. No excuses.</p>
      </div> */}
    </div>
  );
};

export default MVPComponent;