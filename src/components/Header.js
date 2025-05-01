// // components/Header.jsx
// "use client";
// import { useState } from 'react';
// import Link from 'next/link';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="absolute top-0 left-0 right-0 z-50 px-4 py-4">
//       <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center justify-between">
//         <div className="flex items-center">
//           <Link href="/" className="flex items-center">
//             <span className="text-2xl font-bold">H<span className="text-orange-500">U</span>STLE<span className="text-orange-500">90</span></span>
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-6">
//           <Link href="/features" className="text-gray-700 hover:text-gray-900">
//             Features
//           </Link>
//           <Link href="/about" className="text-gray-700 hover:text-gray-900">
//             About
//           </Link>
//           <Link href="/testimonial" className="text-gray-700 hover:text-gray-900">
//             Testimonial
//           </Link>
//           <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
//             Pricing
//           </Link>
//           <Link href="/faq" className="text-gray-700 hover:text-gray-900">
//             Faq
//           </Link>
//           <Link href="/contact" className="bg-gray-900 text-white px-6 py-2 rounded-full">
//             Contact
//           </Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button 
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="p-2 focus:outline-none"
//           >
//             <svg 
//               className="w-6 h-6" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24" 
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {isMenuOpen ? (
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth={2} 
//                   d="M6 18L18 6M6 6l12 12" 
//                 />
//               ) : (
//                 <path 
//                   strokeLinecap="round" 
//                   strokeLinejoin="round" 
//                   strokeWidth={2} 
//                   d="M4 6h16M4 12h16M4 18h16" 
//                 />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg mt-2 p-4 md:hidden">
//             <nav className="flex flex-col space-y-3">
//               <Link 
//                 href="/features" 
//                 className="text-gray-700 hover:text-gray-900 py-2"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Features
//               </Link>
//               <Link 
//                 href="/about" 
//                 className="text-gray-700 hover:text-gray-900 py-2"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 About
//               </Link>
//               <Link 
//                 href="/testimonial" 
//                 className="text-gray-700 hover:text-gray-900 py-2"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Testimonial
//               </Link>
//               <Link 
//                 href="/pricing" 
//                 className="text-gray-700 hover:text-gray-900 py-2"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Pricing
//               </Link>
//               <Link 
//                 href="/faq" 
//                 className="text-gray-700 hover:text-gray-900 py-2"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Faq
//               </Link>
//               <Link 
//                 href="/contact" 
//                 className="bg-gray-900 text-white px-6 py-2 rounded-full text-center"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Contact
//               </Link>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

// components/Header.jsx
"use client";
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex justify-center pt-6">
       <div className="w-[90%] sm:w-[550px]  md:w-[650px] lg:w-[720px] bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">H<span className="text-orange-500">U</span>STLE<span className="text-orange-500">90</span></span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/features" className="text-gray-700 hover:text-gray-900">
            Features
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link href="/testimonial" className="text-gray-700 hover:text-gray-900">
            Testimonial
          </Link>
          <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="/faq" className="text-gray-700 hover:text-gray-900">
            Faq
          </Link>
          <Link href="/contact" className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-medium">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg mt-2 p-4 md:hidden">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/features" 
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/testimonial" 
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonial
              </Link>
              <Link 
                href="/pricing" 
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/faq" 
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Faq
              </Link>
              <Link 
                href="/contact" 
                className="bg-gray-900 text-white px-6 py-2 rounded-lg text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;