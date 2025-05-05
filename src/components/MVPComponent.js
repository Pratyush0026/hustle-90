import React from 'react';

const MVPComponent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero section - now first */}
      <div className="text-center mb-16">
        <div className="inline-block bg-white text-black rounded-full px-6 py-2 mb-6 shadow-md border border-orange-200">
          AI-Powered. No Excuses. No Storytime.
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Everything You Need<br />
          Nothing You Don't
        </h1>
        <p className="text-xl sm:text-2xl max-w-4xl mx-auto">
          Streamline Your MVP Journey With AI-Driven<br />
          Speed, Strategy, And Support.
        </p>
      </div>
      
      {/* First row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Investor-Grade Data Room */}
        <div className="flex flex-col">
          <div className="rounded-lg bg-gradient-to-br from-orange-300 to-orange-400 aspect-video mb-4"></div>
          <h2 className="text-2xl font-bold mb-2">Investor-Grade Data Room</h2>
          <p className="text-gray-700">Decks, cap tables, projections used by teams who actually raised.</p>
        </div>
        
        {/* Sales Funnel Page */}
        <div className="flex flex-col">
          <div className="rounded-lg bg-gradient-to-br from-orange-300 to-orange-400 aspect-video mb-4"></div>
          <h2 className="text-2xl font-bold mb-2">Sales Funnel Page</h2>
          <p className="text-gray-700">1 page that converts. Not 6 that confuse.</p>
        </div>
      </div>

      {/* Second row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* MVP Built Fast */}
        <div className="flex flex-col">
          <div className="rounded-lg bg-gradient-to-br from-orange-300 to-yellow-300 aspect-video mb-4"></div>
          <h2 className="text-2xl font-bold mb-2">MVP Built Fast</h2>
          <p className="text-gray-700">90 days. Working product. Not a prototype. Not a PowerPoint.</p>
        </div>
        
        {/* AI-Assisted Dev */}
        <div className="flex flex-col">
          <div className="rounded-lg bg-gradient-to-br from-orange-300 to-yellow-300 aspect-video mb-4 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 rounded-lg w-2/3 h-2/3"></div>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">AI-Assisted Dev</h2>
          <p className="text-gray-700">Faster build. Smarter logic. Less crying</p>
        </div>
      </div>

      {/* Bottom row - placeholders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg bg-gradient-to-br from-orange-300 to-yellow-300 aspect-video"></div>
        <div className="rounded-lg bg-gradient-to-br from-orange-300 to-yellow-300 aspect-video relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 rounded-lg w-2/3 h-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MVPComponent;