"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import dotsAnimation from "../../public/dot-animtion.json";

// Dynamically import Lottie
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function AboutSection() {
  return (
    <motion.section
      className="relative bg-white text-black lg:py-30 px-4 sm:px-6 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Lottie Animation - Centered Above Title */}
      <div className="w-full flex justify-center mb-4">
        <div className="w-32 md:w-40 opacity-50">
          <Lottie animationData={dotsAnimation} loop autoplay />
        </div>
      </div>

      <div className="w-[95%] sm:w-[90%] max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          About Us
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg leading-relaxed text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          At <span className="font-semibold text-blue-600">CodeBuck</span>, we
          specialize in building robust and scalable digital solutions tailored
          to modern businesses. As a full-stack IT company, we provide
          cutting-edge services in <strong>web development</strong>,{" "}
          <strong>mobile app development</strong>, <strong>UI/UX design</strong>
          , and <strong>SEO strategy</strong>. Our expert team works
          passionately to transform ideas into high-performing digital products.
        </motion.p>

        <motion.p
          className="text-base sm:text-lg leading-relaxed text-gray-800 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Whether you&apos;re a startup or an established enterprise, we are
          committed to delivering solutions that are fast, secure, visually
          impactful, and optimized for growth across all platforms.
        </motion.p>

        <motion.p
          className="text-base sm:text-lg leading-relaxed text-gray-800 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <span className="font-semibold">Mission:</span> To empower businesses
          with reliable and innovative digital solutions that drive measurable
          success.
          <br />
          <span className="font-semibold">Vision:</span> To become a globally
          recognized IT partner that pioneers smart technologies and delivers
          exceptional digital experiences.
        </motion.p>

        {/* Founder Info */}
        <motion.div
          className="mt-10 text-left sm:text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-base sm:text-lg text-gray-800">
            <span className="font-semibold text-black">Founder:</span>{" "}
            <a
              href="https://www.linkedin.com/in/jenil-kakadiya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Jenil Kakadiya
            </a>
          </p>
          <p className="text-base sm:text-lg text-gray-800 mt-2">
            <span className="font-semibold text-black">Co-Founder:</span>{" "}
            <a
              href="https://www.linkedin.com/in/daksh-goswami-b4384b24b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Daksh Goswami
            </a>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
