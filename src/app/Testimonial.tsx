"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Timotie John Punzalan",
    role: "LSPU Los Baños Information Technology Student",
    image: "/tim.jpg",
    quote: "This service is amazing! It has completely transformed my business.",
  },
  {
    name: "Ivan Pelegrina",
    role: "Computer Science Graduate",
    image: "/ivan.jpg",
    quote: "I love the simplicity and efficiency of this platform. It helped me save hours every week!",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [height, setHeight] = useState<number | "auto">("auto");
  const cardRef = useRef<HTMLDivElement>(null);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [paused]);

  // Smoothly measure and animate height changes
  useEffect(() => {
    if (cardRef.current) {
      const newHeight = cardRef.current.scrollHeight;
      setHeight(newHeight);
    }
  }, [currentIndex]);

  const container = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delayChildren: 0.2, staggerChildren: 0.15, duration: 0.6 },
    },
    exit: { opacity: 0, y: -30, transition: { duration: 0.4 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="relative py-5 w-full flex flex-col items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Blurred background image */}
      <Image
        src={testimonials[currentIndex].image}
        alt={testimonials[currentIndex].name}
        fill
        className="absolute inset-0 object-cover object-center scale-150 blur-lg opacity-10 transition-all duration-700"
        priority
      />

      <motion.h1
        className="text-4xl sm:text-6xl font-extrabold font-mono uppercase tracking-[0.25em]
         text-green-300 drop-shadow-[0_0_12px_rgba(16,185,129,0.5)] mb-12 animate-glow z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        TESTIMONIALS
      </motion.h1>

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 blur-3xl opacity-20 rounded-3xl animate-pulse"></div>
      </div>

      {/* Animate height change */}
      <motion.div
        animate={{ height }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative bg-white/10 backdrop-blur-2xl border border-green-700/30 shadow-2xl rounded-3xl max-w-xl mx-auto w-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
      >
        <div ref={cardRef} className="p-8 sm:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={container}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.img
                variants={item}
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto border-4 border-white shadow-md"
              />

              <motion.h3
                variants={item}
                className="text-2xl font-bold mt-6 text-white drop-shadow-md"
              >
                {testimonials[currentIndex].name}
              </motion.h3>

              <motion.p
                variants={item}
                className="text-sm text-gray-300 mt-1 italic"
              >
                {testimonials[currentIndex].role}
              </motion.p>

              <motion.p
                variants={item}
                className="text-lg text-gray-100 mt-6 italic leading-relaxed max-w-xl mx-auto"
              >
                “{testimonials[currentIndex].quote}”
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/40 text-white p-3 rounded-full shadow-lg transition-all"
            >
              &#8592;
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/40 text-white p-3 rounded-full shadow-lg transition-all"
            >
              &#8594;
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-6" : "bg-white/40"
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}
