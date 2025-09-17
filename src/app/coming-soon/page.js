"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
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

// Animated text component matching the Hero component style
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

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => setInView(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
    <span className={`blur-text ${className} inline-flex flex-wrap`}>
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

// Shiny text component
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

// Countdown timer component
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date (e.g., 30 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center items-center space-x-4 md:space-x-8">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          className="text-center"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
        >
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
              key={unit.value}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {unit.value.toString().padStart(2, "0")}
            </motion.div>
            <div className="text-white/80 text-sm md:text-base font-medium mt-2">
              {unit.label}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

// Email subscription component
const EmailSubscription = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // 'loading', 'success', 'error'
  const [focusedField, setFocusedField] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus(""), 3000);
    }, 1500);
  };

  return (
    <motion.div
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setFocusedField(true)}
            onBlur={() => setFocusedField(false)}
            placeholder="Enter your email"
            className="w-full px-6 py-4 bg-white/10 border border-black/20 rounded-2xl text-white placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
            disabled={status === "loading"}
          />
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-white/40 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: focusedField ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </div>

        <motion.button
          type="submit"
          disabled={status === "loading" || !email}
          className="w-full py-4 px-8 bg-gray-900 text-white font-semibold rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
          whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
          whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ borderRadius: "1rem" }}
          />
          <span className="relative z-10 flex items-center justify-center">
            {status === "loading" ? (
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
                Subscribing...
              </>
            ) : (
              "Get Notified When We Launch"
            )}
          </span>
        </motion.button>

        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              className="text-center text-green-300 bg-green-900/30 py-3 px-4 rounded-xl border border-green-500/30"
            >
              🚀 You're on the list! We'll notify you first.
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              className="text-center text-red-300 bg-red-900/30 py-3 px-4 rounded-xl border border-red-500/30"
            >
              ⚠️ Please enter a valid email address.
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
};

// Main Coming Soon Page Component
const ComingSoonPage = () => {
  return (
    <div className={`min-h-screen relative overflow-hidden ${dmSans.className}`}>
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

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 flex justify-center pt-6">
        <div className="w-[90%] sm:w-[550px] md:w-[680px] lg:w-[750px] bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">
              H<span className="text-orange-500">U</span>STLE<span className="text-orange-500">90</span>
            </span>
          </Link>
          
          <Link
            href="/"
            className="bg-gray-900 hover:bg-gray-800 px-6 py-2 rounded-lg font-medium"
          >
            <ShinyText text="Back to Home" isLight={true} />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto w-full">
          {/* Icon */}
       

          {/* Main Heading */}
          <h1 className="text-black text-center font-medium leading-tight px-4 sm:px-0 mb-6 pt-32">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <BlurText
                text="Something Epic"
                delay={100}
                animateBy="words"
                direction="top"
                stepDuration={0.4}
              />
            </div>
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2 lg:mt-4">
              <BlurText
                text="Is Coming Soon"
                delay={150}
                animateBy="words"
                direction="top"
                stepDuration={0.4}
              />
            </div>
          </h1>

          {/* Description */}
          <motion.p
            className={`text-black text-center max-w-3xl mx-auto mb-12 ${poppins.className}`}
            style={{
              fontSize: "clamp(18px, 2.5vw, 28px)",
              fontWeight: 400,
              lineHeight: "clamp(32px, 4vw, 48px)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            We're crafting the ultimate MVP building experience. Get ready to turn your startup ideas into reality faster than ever before.
          </motion.p>

          {/* Countdown Timer */}
          <div className="mb-12">
            <motion.h3
              className="text-white text-xl md:text-2xl font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              Launching In:
            </motion.h3>
            <CountdownTimer />
          </div>

          {/* Email Subscription */}
          <EmailSubscription />

          {/* Features Preview */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {[
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "MVP in 90 days guaranteed"
              },
              {
                icon: "🚀",
                title: "Investor Ready",
                description: "Built for demo day success"
              },
              {
                icon: "🎯",
                title: "Market Validated",
                description: "Proven strategies and frameworks"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1.4 + index * 0.1, 
                  duration: 0.6,
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-white text-lg font-semibold mb-2">
                  {feature.title}
                </h4>
                <p className="text-white/80 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            {[
              { name: "Twitter", icon: "twitter" },
              { name: "LinkedIn", icon: "linkedin" },
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={`#${social.name.toLowerCase()}`}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">
                  {social.icon === "twitter" && "𝕏"}
                  {social.icon === "linkedin" && "in"}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Footer Text */}
          <motion.p
            className="text-black/60 text-center mt-8 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            © 2025 Hustle90. Built with passion for ambitious founders.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
