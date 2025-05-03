"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import Player with SSR disabled
const LottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function HomeSection() {
  return (
    <motion.section
      className="flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left py-20 md:py-40 px-4 md:px-6 bg-white text-black gap-10 font-sans"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
    >
      {/* Left Text Content */}
      <div className="flex-1">
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We Build{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Web, App, UX-UI
          </span>{" "}
          That Perform
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-6 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Offering complete solutions in{" "}
          <span className="font-semibold">Web Development</span>,
          <span className="font-semibold">App Development</span>,{" "}
          <span className="font-semibold">UI/UX Design</span>, and{" "}
          <span className="font-semibold">SEO Optimization</span> to help your
          business grow online.
        </motion.p>

        <motion.a
          href="/portfolio"
          whileHover={{
            scale: 1.1,
            backgroundColor: "#2563eb",
            boxShadow: "0px 0px 12px #2563eb",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-block bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:cursor-pointer"
        >
          🚀 Explore Our Work
        </motion.a>
      </div>

      {/* Right Lottie Animation */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="p-2">
          <LottiePlayer
            autoplay
            loop
            src="/homeanimation.json"
            style={{
              height: "auto",
              width: "100%",
              maxWidth: "400px", // Set a max-width for the animation
              maxHeight: "400px", // Set a max-height for the animation
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
