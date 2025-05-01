// // components/Hero.jsx
// import Link from 'next/link';

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen bg-gradient-to-r from-orange-200 to-orange-500 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-500 z-0"></div>
      
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-6 lg:px-8 text-center">
//         <div className="max-w-6xl mx-auto pt-20">
//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight mb-8">
//             MVP. <span className="block md:inline">Investor Ready.</span><br />
//             <span className="block">Targeted VCs.</span>
//             <span className="text-blue-600">90 Days.</span>
//           </h1>
          
//           <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
//             <Link href="/get-started" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium transition-colors duration-300 w-full sm:w-auto text-center">
//               Get Started
//             </Link>
//             <Link href="/demo" className="bg-transparent border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-full font-medium transition-colors duration-300 w-full sm:w-auto text-center">
//               Book a Demo
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// components/Hero.jsx
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-orange-200 to-orange-500 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-500 z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto pt-24">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
            MVP. Investor Ready.<br />
            Targeted VCs.<br />
            <span className="text-blue-600">90 Days.</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-12">
            <Link href="/get-started" className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-lg font-medium transition-colors duration-300 w-full sm:w-auto text-center">
              Get Started
            </Link>
            <Link href="/demo" className="bg-transparent border border-gray-900 text-gray-900 hover:bg-gray-900/10 px-10 py-4 rounded-lg font-medium transition-colors duration-300 w-full sm:w-auto text-center">
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;