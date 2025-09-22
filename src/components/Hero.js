"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";

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

const buildKeyframes = (from, steps) => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);
  const keyframes = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

const BlurText = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, rootMargin]);
  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction]
  );
  const defaultTo = useMemo(
    () => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction]
  );
  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;
  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );
  return (
    <span ref={ref} className={`blur-text ${className} inline-flex flex-wrap`}>
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
        };
        spanTransition.ease = easing;
        return (
          <motion.span
            className="inline-block will-change-[transform,filter,opacity]"
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
          >
            {segment === " " ? "\u00A0" : segment}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </span>
  );
};

const ShinyText = ({ text, isLight = true }) => {
  return (
    <div className="relative inline-block">
      <span className={isLight ? "text-white" : "text-gray-900"}>{text}</span>

      <motion.span
        className="absolute top-0 left-0 whitespace-nowrap"
        style={{
          backgroundImage: isLight
            ? "linear-gradient(90deg, transparent, rgba(180, 180, 180, 0.9), transparent)"
            : "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)",
          backgroundSize: "200% 100%",
          backgroundRepeat: "no-repeat",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textFillColor: "transparent",
          color: isLight ? "white" : "#1a202c",
        }}
        initial={{ backgroundPosition: "-100%" }}
        animate={{
          backgroundPosition: ["200%", "-100%"],
          transition: {
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          },
        }}
      >
        {text}
      </motion.span>
    </div>
  );
};

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

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section
        className={`relative overflow-hidden ${dmSans.className}`}
        style={{ height: "640px" }}
      >
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            style={{
              filter: "brightness(1.1)",
              transform: "scale(1.02)",
            }}
            ref={(video) => {
              if (video) {
                video.playbackRate = 3.0;
              }
            }}
          >
            <source src="/assets/herobg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-200/70 to-orange-500/70 z-0"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 md:px-6 lg:px-8 text-center pt-20 sm:pt-24 lg:pt-10">
          <div className="max-w-full mx-auto w-full">
            {/* <h1 className="text-black text-center font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <BlurText
                text="Idea"
                delay={0}
                animateBy="words"
                direction="top"
                stepDuration={0.3}
              />
              <motion.img
                src="/assets/arrow.png"
                alt="arrow"
                className="inline-block mx-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
                style={{ verticalAlign: 'middle' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.2 }}
              />
              <BlurText
                text="Investor Ready"
                delay={0}
                animateBy="words"
                direction="top"
                stepDuration={0.3}
              /><br />
              <BlurText
                text="MVP in 90 Days"
                delay={0}
                animateBy="words"
                direction="top"
                stepDuration={0.3}
              />
            </h1>

            <p
              className={`mt-6 text-black text-center max-w-6xl mx-auto ${poppins.className}`}
              style={{
                fontSize: 'clamp(16px, 2vw, 24px)',
                fontWeight: 400,
                lineHeight: 'clamp(28px, 3.5vw, 42px)',
                letterSpacing: '0px'
              }}
            >
              Your Startup Doesn't Need More Chaos It Needs Outcomes. We Take You From Napkin Sketch{' '}
              <br className="hidden sm:block" />
              To Demo Day Ready MVP With Battle Tested Systems, AI-Driven Speed, And Full-Stack Execution.
            </p> */}

            <h1 className="text-black text-center font-medium leading-tight px-4 sm:px-6">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                <BlurText
                  text="Build. Launch. Validate."
                  delay={0}
                  animateBy="words"
                  direction="top"
                  stepDuration={0.3}
                />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mt-2 lg:mt-4">
                <BlurText
                  text="A revenue-ready MVP in 90 days."
                  delay={0}
                  animateBy="words"
                  direction="top"
                  stepDuration={0.3}
                />
              </div>
            </h1>

            <p
              className={`mt-6 text-black text-center max-w-6xl mx-auto ${poppins.className}`}
              style={{
                fontSize: "clamp(16px, 2vw, 24px)",
                fontWeight: 400,
                lineHeight: "clamp(28px, 3.5vw, 42px)",
                letterSpacing: "0px",
              }}
            >
              We Help Founders Turn Sharp Ideas Into Working Products Fast Using
              Senior Talent, <br className="hidden sm:block" />
              AI-Powered Coding, And Ruthless Focus On What Drives Adoption And
              Revenue.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <button
                onClick={openModal}
                className="bg-gray-900 hover:bg-gray-800 transition-all duration-300 flex items-center justify-center rounded-lg text-white font-medium"
                style={{
                  width: "250px",
                  height: "50px",
                }}
              >
                <ShinyText text="Book a Strategy Call" isLight={true} />
              </button>

              <Link
                href="/roadmap"
                className="bg-white/90 hover:bg-white transition-all duration-300 flex items-center justify-center rounded-lg border border-gray-300 font-medium"
                style={{
                  width: "250px",
                  height: "50px",
                }}
              >
                <ShinyText text="Get Free Founder Kit" isLight={false} />
              </Link>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 640px) {
            section {
              height: auto !important;
              min-height: 100vh;
              padding: 100px 0 60px 0;
            }
          }

          @media (max-width: 768px) {
            section {
              height: auto !important;
              min-height: 80vh;
              padding: 90px 0 40px 0;
            }
          }

          @media (min-width: 769px) and (max-width: 1199px) {
            section {
              height: auto !important;
              min-height: 70vh;
              padding: 80px 0 40px 0;
            }
          }

          @media (min-width: 1200px) {
            section {
              height: 688px;
              padding: 0;
            }
          }
        `}</style>
      </section>

      {/* Modern Professional Modal */}
      <ModernContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Hero;
