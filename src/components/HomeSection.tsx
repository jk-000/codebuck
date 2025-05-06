"use client";

import { motion, useAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// SSR-safe Lottie import
const LottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

// Animation Variants
const leftFade = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

const rightFade = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

const bottomFade = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

export default function HomeSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <section
      ref={ref}
      className="flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left md:pt-45 pt-30 pb-20 px-6 md:px-12 bg-white text-black gap-10 font-sans"
    >
      {/* Left Text Content */}
      <motion.div
        className="flex-1 space-y-6"
        variants={leftFade}
        initial="hidden"
        animate={controls}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900 tracking-tight"
          variants={leftFade}
        >
          We Build{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Web, App, UX-UI
          </span>{" "}
          That Perform
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-700 font-normal leading-relaxed"
          variants={leftFade}
        >
          Offering complete solutions in{" "}
          <span className="font-medium text-gray-900">Web Development</span>,
          <span className="font-medium text-gray-900">App Development</span>,{" "}
          <span className="font-medium text-gray-900">UI/UX Design</span>, and{" "}
          <span className="font-medium text-gray-900">SEO Optimization</span>{" "}
          to help your business grow online.
        </motion.p>

        <motion.a
          href="/portfolio"
          variants={bottomFade}
          className="relative inline-block px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium text-base rounded-full overflow-hidden group transition-colors duration-300"
          animate={{
            y: [0, -2, 0, 2, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            🚀 Explore Our Work
          </span>
          <span className="absolute inset-0 bg-blue-600 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-in-out z-0"></span>
        </motion.a>
      </motion.div>

      {/* Right Lottie Animation */}
      <motion.div
        className="flex-1 flex justify-center"
        variants={rightFade}
        initial="hidden"
        animate={controls}
      >
        <div className="p-2">
          <LottiePlayer
            autoplay
            loop
            src="/homeanimation.json"
            style={{
              height: "auto",
              width: "100%",
              maxWidth: "450px",
              maxHeight: "450px",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
