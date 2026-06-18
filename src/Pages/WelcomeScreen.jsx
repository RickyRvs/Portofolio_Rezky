import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Github, Globe, User } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
 
const TypewriterEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, [text]);
  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-pulse ml-0.5">|</span>
    </span>
  );
};
 
const IconButton = ({ Icon, delay }) => (
  <div
    className="relative group hover:scale-110 transition-transform duration-300"
    data-aos="fade-down"
    data-aos-delay={delay}
  >
    <div className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-15 group-hover:opacity-35 transition duration-300" />
    <div className="relative p-3 sm:p-4 bg-white backdrop-blur-sm rounded-full border border-indigo-100 group-hover:border-indigo-300 shadow-sm transition-colors">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-500" />
    </div>
  </div>
);
 
export function WelcomeScreen({ onLoadingComplete }) {
  const [isVisible, setIsVisible] = useState(true);
 
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => { onLoadingComplete?.(); }, 900);
    }, 3600);
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);
 
  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.06,
      filter: "blur(8px)",
      transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.08, when: "beforeChildren" },
    },
  };
  const childVariants = {
    exit: { y: -16, opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } },
  };
 
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4 bg-slate-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit="exit"
          variants={containerVariants}
        >
          {/* Background blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-pulse" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#64748b0d_1px,transparent_1px),linear-gradient(to_bottom,#64748b0d_1px,transparent_1px)] bg-[size:24px_24px]" />
          </div>
 
          <div className="relative z-10 w-full max-w-2xl mx-auto text-center">
            {/* Icons row */}
            <motion.div className="flex justify-center gap-4 sm:gap-6 mb-10" variants={childVariants}>
              <IconButton Icon={Code2} delay={0} />
              <IconButton Icon={User} delay={150} />
              <IconButton Icon={Github} delay={300} />
            </motion.div>
 
            {/* Welcome Text */}
            <motion.div className="mb-8" variants={childVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                <div>
                  {["Welcome", "To", "My"].map((word, i) => (
                    <span
                      key={word}
                      data-aos="fade-right"
                      data-aos-delay={200 + i * 150}
                      className="inline-block mx-1 text-slate-800"
                    >
                      {word}
                    </span>
                  ))}
                </div>
                <div className="mt-2">
                  {["Portfolio", "Website"].map((word, i) => (
                    <span
                      key={word}
                      data-aos="fade-up"
                      data-aos-delay={700 + i * 150}
                      className="inline-block mx-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </h1>
              <p
                className="mt-4 text-base sm:text-lg text-slate-400 tracking-widest"
                data-aos="fade-up"
                data-aos-delay={1000}
              >
                Rezky Fadhillah Ramadhan
              </p>
            </motion.div>
 
            {/* Typewriter Link */}
            <motion.div variants={childVariants} data-aos="fade-up" data-aos-delay={1200}>
              <a
                href="/#Home"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full relative group hover:scale-105 transition-transform duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full group-hover:opacity-80 transition-opacity duration-300" />
                <div className="relative flex items-center gap-2 border border-indigo-200 group-hover:border-indigo-300 rounded-full px-5 py-2.5 transition-colors">
                  <Globe className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span className="text-sm sm:text-base bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent font-medium">
                    <TypewriterEffect text="rezkyfr.com" />
                  </span>
                </div>
              </a>
            </motion.div>
 
            {/* Loading bar */}
            <motion.div
              className="mt-12 mx-auto h-0.5 w-40 rounded-full overflow-hidden bg-slate-200"
              variants={childVariants}
            >
              <div
                className="h-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full"
                style={{ animation: "grow 3.4s ease-in-out forwards" }}
              />
            </motion.div>
          </div>
 
          <style>{`
            @keyframes grow { from { width: 0% } to { width: 100% } }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
 
export default WelcomeScreen;