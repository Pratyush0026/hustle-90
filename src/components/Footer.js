// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const Footer = () => {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { 
//       opacity: 1, 
//       y: 0,
//       transition: { duration: 0.6 }
//     }
//   };

//   return (
//     <footer className="w-full bg-gradient-to-r from-[#834e3a] to-black text-white">
//       {/* CTA Section */}
//       <div className="max-w-7xl mx-auto px-8 pt-14 pb-24">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-8 max-w-4xl"
//         >
//           <div className="bg-white text-[#E84C24] py-2 px-4 font-bold rounded-full inline-block mb-6">
//             JOIN THE AI REVOLUTION
//           </div>
//           <h2 className="text-5xl sm:text-6xl font-semibold mb-12 leading-tight">
//             Ready to start your AI<br />journey with us?
//           </h2>
//           <div className="flex flex-wrap gap-4">
//             <Link href="/get-started">
//               <span className="bg-[#E84C24] hover:bg-[#d13d18] text-white px-10 py-4 rounded-md font-medium transition-colors duration-300">
//                 Get Started
//               </span>
//             </Link>
//             <Link href="/book-demo">
//               <span className="bg-white hover:bg-gray-100 text-[#E84C24] px-10 py-4 rounded-md font-medium transition-colors duration-300">
//                 Book a Demo
//               </span>
//             </Link>
//           </div>
//         </motion.div>
//       </div>

//       {/* Divider */}
//       <div className="w-full border-t border-gray-800"></div>
      
//       {/* Main Footer */}
//       <motion.div 
//         className="max-w-7xl mx-auto px-8 py-16"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={{
//           hidden: {},
//           visible: {
//             transition: {
//               staggerChildren: 0.1
//             }
//           }
//         }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
//           {/* Logo & Social Section */}
//           <motion.div variants={fadeInUp} className="md:col-span-4">
//             <div className="mb-6">
//               <Link href="/" className="flex items-baseline">
//                 <span className="text-5xl font-bold">H<span  className="uppercase text-6xl">U</span>stle<span className="text-white">90</span></span>
//               </Link>
//               <p className="text-gray-400 mt-1">Manage AI effortlessly</p>
//             </div>
            
//             <div className="flex space-x-4 mt-6">
//               <Link href="#" className="text-white hover:text-gray-300 transition">
//                 <div className="border border-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
//                   <FaFacebookF />
//                 </div>
//               </Link>
//               <Link href="#" className="text-white hover:text-gray-300 transition">
//                 <div className="border border-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
//                   <FaTwitter />
//                 </div>
//               </Link>
//               <Link href="#" className="text-white hover:text-gray-300 transition">
//                 <div className="border border-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
//                   <FaInstagram />
//                 </div>
//               </Link>
//               <Link href="#" className="text-white hover:text-gray-300 transition">
//                 <div className="border border-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
//                   <FaLinkedinIn />
//                 </div>
//               </Link>
//             </div>
//           </motion.div>

//           {/* Empty Column for Spacing */}
//           <div className="hidden md:block md:col-span-2"></div>

//           {/* Navigation Links */}
//           <div className="md:col-span-6 grid grid-cols-2 gap-x-8 gap-y-8">
//             {/* Use Links Column */}
//             <motion.div variants={fadeInUp}>
//               <h3 className="text-lg font-semibold mb-6">Use Link</h3>
//               <ul className="space-y-4">
//                 <li><Link href="/feature" className="text-gray-400 hover:text-white transition">Feature</Link></li>
//                 <li><Link href="/about" className="text-gray-400 hover:text-white transition">About</Link></li>
//                 <li><Link href="/testimonial" className="text-gray-400 hover:text-white transition">Testimonial</Link></li>
//                 <li><Link href="/pricing" className="text-gray-400 hover:text-white transition">Pricing</Link></li>
//                 <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
//                 <li><Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link></li>
//                 <li><Link href="/404" className="text-gray-400 hover:text-white transition">404</Link></li>
//               </ul>
//             </motion.div>

//             {/* Company Column */}
//             <motion.div variants={fadeInUp}>
//               <h3 className="text-lg font-semibold mb-6">Company</h3>
//               <div className="space-y-4">
//                 <p className="text-gray-400">105 North 1st Street, #28,</p>
//                 <p className="text-gray-400">San Jose, CA 94748</p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </motion.div>
      
//       {/* Bottom Bar with Copyright */}
//       <div className="border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col sm:flex-row justify-between items-center">
//           <motion.p 
//             variants={fadeInUp}
//             initial="hidden"
//             animate="visible"
//             className="text-gray-500 text-sm mb-4 sm:mb-0"
//           >
//             © 2025 Design & Developed by Hustle 90
//           </motion.p>
//           <motion.div
//             variants={fadeInUp}
//             initial="hidden" 
//             animate="visible"
//           >
//             <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition">
//               Privacy Policy
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Track mouse position for subtle gradient movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerChildren = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const socialIconHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };
  
  const buttonHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.03,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }
    }
  };

  return (
    <footer className="w-full relative overflow-hidden text-white">
      {/* Gradient Background with Ball Effects */}
      <div className="absolute inset-0 bg-black overflow-hidden">
        {/* Top Left Gradient Ball */}
        <div 
          className="absolute w-full h-full opacity-80"
          style={{
            background: `radial-gradient(circle at 20% 20%, rgba(131, 78, 58, 0.9) 0%, rgba(0, 0, 0, 0) 60%)`,
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
          }}
        />
        
        {/* Bottom Right Gradient Ball */}
        <div 
          className="absolute w-full h-full opacity-70"
          style={{
            background: `radial-gradient(circle at 80% 80%, rgba(131, 78, 58, 0.7) 0%, rgba(0, 0, 0, 0) 60%)`,
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        />
      </div>

      {/* CTA Section */}
      <div className="relative max-w-7xl mx-auto px-8 pt-14 pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="mb-8 max-w-4xl"
        >
          <motion.div 
            variants={fadeInUp}
            className="bg-white text-[#E84C24] py-2 px-4 font-bold rounded-full inline-block mb-6"
          >
            JOIN THE AI REVOLUTION
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-5xl sm:text-6xl font-semibold mb-12 leading-tight"
          >
            Ready to start your AI<br />journey with us?
          </motion.h2>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap gap-4"
          >
            <motion.div
              initial="rest"
              whileHover="hover"
              variants={buttonHover}
            >
              <Link href="/get-started">
                <span className="block bg-[#E84C24] hover:bg-[#d13d18] text-white px-10 py-4 rounded-md font-medium transition-colors duration-300">
                  Get Started
                </span>
              </Link>
            </motion.div>
            
            <motion.div
              initial="rest"
              whileHover="hover"
              variants={buttonHover}
            >
              <Link href="/book-demo">
                <span className="block bg-white hover:bg-gray-100 text-[#E84C24] px-10 py-4 rounded-md font-medium transition-colors duration-300">
                  Book a Demo
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Divider */}
      <motion.div 
        className="w-full border-t border-gray-800"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />
      
      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="grid grid-cols-1 md:grid-cols-12 gap-16"
        >
          {/* Logo & Social Section */}
          <motion.div 
            variants={fadeInUp}
            className="md:col-span-4"
          >
            <motion.div 
              variants={floatAnimation}
              initial="initial"
              animate="animate"
              className="mb-6"
            >
              <Link href="/" className="flex items-baseline">
                <span className="text-5xl font-bold">H<span className="uppercase text-6xl">U</span>stle<span className="text-white">90</span></span>
              </Link>
              <p className="text-gray-400 mt-1">Manage AI effortlessly</p>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="flex space-x-4 mt-6"
            >
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <motion.div
                  key={index}
                  initial="rest"
                  whileHover="hover"
                  variants={socialIconHover}
                >
                  <Link href="#" className="text-white hover:text-gray-300 transition">
                    <motion.div 
                      className="border border-gray-700 rounded-full w-10 h-10 flex items-center justify-center"
                      whileHover={{ 
                        borderColor: "#E84C24", 
                        backgroundColor: "rgba(232, 76, 36, 0.1)",
                        transition: { duration: 0.2 }
                      }}
                    >
                      <Icon />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Empty Column for Spacing */}
          <div className="hidden md:block md:col-span-2"></div>

          {/* Navigation Links */}
          <div className="md:col-span-6 grid grid-cols-2 gap-x-8 gap-y-8">
            {/* Use Links Column */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-semibold mb-6">Use Link</h3>
              <ul className="space-y-4">
                {['Feature', 'About', 'Testimonial', 'Pricing', 'Contact', 'Blog', '404'].map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition">
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company Column */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <motion.div 
                className="space-y-4"
                variants={floatAnimation}
                initial="initial"
                animate="animate"
              >
                <p className="text-gray-400">105 North 1st Street, #28,</p>
                <p className="text-gray-400">San Jose, CA 94748</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom Bar with Copyright */}
      <div className="relative border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col sm:flex-row justify-between items-center">
          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-500 text-sm mb-4 sm:mb-0"
          >
            © 2025 Design & Developed by Hustle 90
          </motion.p>
          <motion.div
            variants={fadeInUp}
            initial="hidden" 
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition">
              Privacy Policy
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;