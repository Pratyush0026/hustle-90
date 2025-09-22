// "use client";
// import { useState } from 'react';
// import Link from 'next/link';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // Inline shiny text styling without Tailwind animations
//   const shinyTextStyle = {
//     backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
//     backgroundSize: '200% 100%',
//     WebkitBackgroundClip: 'text',
//     backgroundClip: 'text',
//     color: 'white',
//     animation: 'shine 3s linear infinite',
//   };

//   // Add this to your globals.css
//   const keyframesStyle = `
//     @keyframes shine {
//       0% { background-position: 200% 0; }
//       100% { background-position: -200% 0; }
//     }
//   `;

//   return (
//     <header className="absolute top-0 left-0 right-0 z-50 flex justify-center pt-6">
//       <style jsx global>{keyframesStyle}</style>
//       <div className="w-[90%] sm:w-[550px] md:w-[680px] lg:w-[750px] bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center justify-between">
//         <div className="flex items-center">
//           <Link href="/" className="flex items-center">
//             <span className="text-2xl font-bold">H<span className="text-orange-500">U</span>STLE<span className="text-orange-500">90</span></span>
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-6">
//           <Link href="/features" className="text-gray-700 hover:text-gray-900">
//             Why Us?
//           </Link>
//           <Link href="/about" className="text-gray-700 hover:text-gray-900">
//             About
//           </Link>
//           <Link href="/testimonial" className="text-gray-700 hover:text-gray-900">
//             Case Studies
//           </Link>
//           <Link href="/pricing" className="text-gray-700 hover:text-gray-900">
//             Pricing
//           </Link>
//           <Link href="/faq" className="text-gray-700 hover:text-gray-900">
//           Resources
//           </Link>
//           <Link href="/contact" className="bg-gray-900 hover:bg-gray-800 px-6 py-2 rounded-lg font-medium">
//             <span style={shinyTextStyle}>Contact</span>
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
//                 className="bg-gray-900 px-6 py-2 rounded-lg text-center"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <span style={shinyTextStyle}>Contact</span>
//               </Link>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;





// "use client";
// import { useState } from 'react';
// import Link from 'next/link';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const shinyTextStyle = {
//     backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
//     backgroundSize: '200% 100%',
//     WebkitBackgroundClip: 'text',
//     backgroundClip: 'text',
//     color: 'white',
//     animation: 'shine 3s linear infinite',
//   };

//   const keyframesStyle = `
//     @keyframes shine {
//       0% { background-position: 200% 0; }
//       100% { background-position: -200% 0; }
//     }
//   `;

//   // Smooth scroll function
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//     setIsMenuOpen(false); // Close mobile menu after clicking
//   };

//   return (
//     <header className="absolute top-0 left-0 right-0 z-50 px-4 pt-6">
//       <style jsx global>{keyframesStyle}</style>
//       <div className="w-full max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
//         <div className="flex items-center">
//           <Link href="/" className="flex items-center">
//             <span className="text-2xl font-bold">H<span className="text-orange-500">U</span>STLE<span className="text-orange-500">90</span></span>
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
//           <button
//             onClick={() => scrollToSection('mvp')}
//             className="text-gray-700 hover:text-gray-900"
//           >
//             MVP
//           </button>
//           <button
//             onClick={() => scrollToSection('features')}
//             className="text-gray-700 hover:text-gray-900"
//           >
//             Features
//           </button>
//           <button
//             onClick={() => scrollToSection('benefits')}
//             className="text-gray-700 hover:text-gray-900"
//           >
//             Benefits
//           </button>
//           <button
//             onClick={() => scrollToSection('about')}
//             className="text-gray-700 hover:text-gray-900"
//           >
//             About
//           </button>
//           <button
//             onClick={() => scrollToSection('blog')}
//             className="text-gray-700 hover:text-gray-900"
//           >
//             Blog
//           </button>
//           <button
//             onClick={() => scrollToSection('pricing')}
//             className="text-gray-700 hover:text-gray-900"
//           >
//             Pricing
//           </button>
//           <button
//             onClick={() => scrollToSection('testimonials')}
//             className="text-gray-700 hover:text-gray-900"
//           >
//             Testimonials
//           </button>
//           <button
//             onClick={() => scrollToSection('faq')}
//             className="text-gray-700 hover:text-gray-900"
//           >
//             FAQ
//           </button>
//           <Link href="/contact" className="bg-gray-900 hover:bg-gray-800 px-6 py-2 rounded-lg font-medium">
//             <span style={shinyTextStyle}>Contact</span>
//           </Link>
//         </nav>

//         {/* Contact Button + Hamburger for Medium devices */}
//         <div className="hidden md:flex lg:hidden items-center space-x-3">
//           <Link href="/contact" className="bg-gray-900 hover:bg-gray-800 px-6 py-2 rounded-lg font-medium">
//             <span style={shinyTextStyle}>Contact</span>
//           </Link>
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

//         {/* Mobile/Medium Menu */}
//         {isMenuOpen && (
//           <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg mt-2 p-4 lg:hidden">
//             <nav className="flex flex-col space-y-3">
//               <button
//                 onClick={() => scrollToSection('mvp')}
//                 className="text-gray-700 hover:text-gray-900 py-2 text-left"
//               >
//                 MVP
//               </button>
//               <button
//                 onClick={() => scrollToSection('features')}
//                 className="text-gray-700 hover:text-gray-900 py-2 text-left"
//               >
//                 Features
//               </button>
//               <button
//                 onClick={() => scrollToSection('benefits')}
//                 className="text-gray-700 hover:text-gray-900 py-2 text-left"
//               >
//                 Benefits
//               </button>
//               <button
//                 onClick={() => scrollToSection('about')}
//                 className="text-gray-700 hover:text-gray-900 py-2 text-left"
//               >
//                 About
//               </button>
//               <button
//                 onClick={() => scrollToSection('blog')}
//                 className="text-gray-700 hover:text-gray-900 py-2 text-left"
//               >
//                 Blog
//               </button>
//               <button
//                 onClick={() => scrollToSection('pricing')}
//                 className="text-gray-700 hover:text-gray-900 py-2 text-left"
//               >
//                 Pricing
//               </button>
//               <button
//                 onClick={() => scrollToSection('testimonials')}
//                 className="text-gray-700 hover:text-gray-900 py-2 text-left"
//               >
//                 Testimonials
//               </button>
//               <button
//                 onClick={() => scrollToSection('faq')}
//                 className="text-gray-700 hover:text-gray-900 py-2 text-left"
//               >
//                 FAQ
//               </button>
//               <Link
//                 href="/contact"
//                 className="bg-gray-900 px-6 py-2 rounded-lg text-center"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <span style={shinyTextStyle}>Contact</span>
//               </Link>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;



"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { DM_Sans, Poppins } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ModernContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [focusedField, setFocusedField] = useState("");

  // Replace this with your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycby5UmbMAszrt0tPuKrmVwTxzMz3r3MHPCI7oXdZonsec8ofgvxpz8tGd6W4_oSPmoVm/exec";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, phone } = formData;

    // Check if all fields are filled
    if (!name.trim() || !email.trim() || !phone.trim()) {
      return { isValid: false, message: "Please fill in all fields" };
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { isValid: false, message: "Please enter a valid email address" };
    }

    // Basic phone validation (at least 10 digits)
    const phoneRegex = /\d{10,}/;
    if (!phoneRegex.test(phone.replace(/\D/g, ""))) {
      return { isValid: false, message: "Please enter a valid phone number" };
    }

    return { isValid: true };
  };

  const handleSubmit = async () => {
    const validation = validateForm();
    if (!validation.isValid) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // This fixes CORS
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          timestamp: new Date().toISOString(),
        }),
      });

      // With no-cors, we can't read response, so assume success
      setSubmitStatus("success");

      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "" });
        setSubmitStatus("");
        onClose();
      }, 2500);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isSubmitting) {
      handleSubmit();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Ultra Modern Backdrop */}
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)",
              backdropFilter: "blur(20px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modern Glass Modal */}
          <motion.div
            className="relative w-full max-w-lg mx-auto"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {/* Glassmorphism Container */}
            <div
              className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/20"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(40px)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 opacity-60"
                style={{
                  background:
                    "linear-gradient(45deg, #ff6b35, #f7931e, #ff6b35, #f7931e)",
                  backgroundSize: "400% 400%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Content Container */}
              <div className="relative z-10 p-8">
                {/* Close Button */}
                <motion.button
                  onClick={onClose}
                  className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>

                {/* Header */}
                <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </motion.div>
                  <h2
                    className={`text-3xl font-bold text-white mb-2 ${dmSans.className}`}
                  >
                    Launch Your MVP
                  </h2>
                  <p className={`text-white/80 text-lg ${poppins.className}`}>
                    From idea to investor-ready in 90 days
                  </p>
                </motion.div>

                {/* Form */}
                <div className="space-y-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField("")}
                        onKeyPress={handleKeyPress}
                        placeholder="Full Name"
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        disabled={isSubmitting}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-white/40 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: focusedField === "name" ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField("")}
                        onKeyPress={handleKeyPress}
                        placeholder="Email Address"
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        disabled={isSubmitting}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-white/40 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: focusedField === "email" ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  </motion.div>

                  {/* Phone Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField("")}
                        onKeyPress={handleKeyPress}
                        placeholder="Phone Number"
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                        disabled={isSubmitting}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-white/40 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: focusedField === "phone" ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 bg-white text-gray-900 font-semibold rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ borderRadius: "1rem" }}
                    />
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full mr-3"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          Processing...
                        </>
                      ) : (
                        "Start My 90-Day Journey"
                      )}
                    </span>
                  </motion.button>

                  {/* Status Messages */}
                  <AnimatePresence>
                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        className="text-center text-green-300 bg-green-900/30 py-3 px-4 rounded-xl border border-green-500/30"
                      >
                        🚀 Welcome aboard! We'll be in touch within 24 hours.
                      </motion.div>
                    )}

                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        className="text-center text-red-300 bg-red-900/30 py-3 px-4 rounded-xl border border-red-500/30"
                      >
                        ⚠️ Please check your information and try again.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Trust Indicators */}
                <motion.div
                  className="flex items-center justify-center mt-6 text-white/60 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Your information is secure and encrypted
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false); // Close mobile menu if it's open
  };
  const closeModal = () => setIsModalOpen(false);

  const shinyTextStyle = {
    backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
    backgroundSize: '200% 100%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'white',
    animation: 'shine 3s linear infinite',
  };

  const keyframesStyle = `
    @keyframes shine {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `;

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 px-4 pt-6">
        <style jsx global>{keyframesStyle}</style>
        <div className="w-full max-w-5xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">H<span className="text-orange-500">U</span>STLE<span className="text-orange-500">90</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <button
              onClick={() => scrollToSection('mvp')}
              className="text-gray-700 hover:text-gray-900"
            >
              MVP
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-gray-900"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-gray-700 hover:text-gray-900"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-gray-900"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-gray-700 hover:text-gray-900"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-gray-900"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-gray-900"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-gray-900"
            >
              FAQ
            </button>
            <button 
              onClick={openModal}
              className="bg-gray-900 hover:bg-gray-800 px-6 py-2 rounded-lg font-medium"
            >
              <span style={shinyTextStyle}>Contact</span>
            </button>
          </nav>

          {/* Contact Button + Hamburger for Medium devices */}
          <div className="hidden md:flex lg:hidden items-center space-x-3">
            <button 
              onClick={openModal}
              className="bg-gray-900 hover:bg-gray-800 px-6 py-2 rounded-lg font-medium"
            >
              <span style={shinyTextStyle}>Contact</span>
            </button>
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

          {/* Mobile/Medium Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg mt-2 p-4 lg:hidden">
              <nav className="flex flex-col space-y-3">
                <button
                  onClick={() => scrollToSection('mvp')}
                  className="text-gray-700 hover:text-gray-900 py-2 text-left"
                >
                  MVP
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-700 hover:text-gray-900 py-2 text-left"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('benefits')}
                  className="text-gray-700 hover:text-gray-900 py-2 text-left"
                >
                  Benefits
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 hover:text-gray-900 py-2 text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('blog')}
                  className="text-gray-700 hover:text-gray-900 py-2 text-left"
                >
                  Blog
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-700 hover:text-gray-900 py-2 text-left"
                >
                  Pricing
                </button>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-700 hover:text-gray-900 py-2 text-left"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-700 hover:text-gray-900 py-2 text-left"
                >
                  FAQ
                </button>
                <button
                  onClick={openModal}
                  className="bg-gray-900 px-6 py-2 rounded-lg text-center"
                >
                  <span style={shinyTextStyle}>Contact</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Contact Modal */}
      <ModernContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Header;