"use client";

import { motion } from "framer-motion";
// Removed: import dynamic from "next/dynamic";
// Removed: import dotsAnimation from "../../public/dot-animtion.json";

// Removed: const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function AboutSection() {
  return (
    <motion.section
      className="relative bg-white text-black py-24 px-4 pt-30 sm:px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Lottie Animation removed */}

      <div className="w-[95%] sm:w-[90%] max-w-4xl mx-auto text-center relative z-10">
        <motion.div className="relative inline-block mb-14" variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
            About Us
          </h2>

          {/* Blue Line */}
          <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-24 h-0.5 rounded-full bg-blue-600 shadow-md"></span>

          {/* Violet Line */}
          <span className="absolute left-1/2 transform -translate-x-1/2 mt-5 w-32 h-0.5 rounded-full bg-violet-500 shadow-md"></span>
        </motion.div>

        {/* Paragraphs with staggered animation */}
        <motion.div className="space-y-10 mt-10" variants={containerVariants}>
          <motion.p
            className="text-base sm:text-lg text-gray-800 leading-relaxed"
            variants={fadeInUp}
          >
            At <span className="font-medium text-blue-600">CodeBuck</span>, we
            are a creative-driven IT company focused on crafting
            high-performance digital experiences. Whether it&apos;s a startup
            idea or an enterprise solution, we build products that are clean,
            scalable, and efficient.
          </motion.p>

          <hr className="border-gray-300 w-1/3 mx-auto" />

          <motion.p
            className="text-base sm:text-lg text-gray-800 leading-relaxed"
            variants={fadeInUp}
          >
            From{" "}
            <span className="font-medium text-black">responsive websites</span>{" "}
            to{" "}
            <span className="font-medium text-black">
              cross-platform mobile apps
            </span>
            , and from{" "}
            <span className="font-medium text-black">intuitive UI/UX</span> to
            smart <span className="font-medium text-black">SEO solutions</span>,
            our goal is to help businesses grow by leveraging cutting-edge
            technologies.
          </motion.p>

          <hr className="border-gray-300 w-1/3 mx-auto" />

          <motion.p
            className="text-base sm:text-lg text-gray-800 leading-relaxed"
            variants={fadeInUp}
          >
            We believe design and functionality should work hand-in-hand to
            offer seamless digital journeys. That’s why we approach each project
            with attention to detail, usability, and user-centric thinking.
          </motion.p>

          <hr className="border-gray-300 w-1/3 mx-auto" />

          <motion.p
            className="text-base sm:text-lg text-gray-800 leading-relaxed"
            variants={fadeInUp}
          >
            <span className="font-medium text-black">Vision:</span> To become a
            globally recognized tech partner known for innovation, creativity,
            and commitment. We aim to inspire businesses by delivering
            future-proof digital experiences, building trust, and creating
            meaningful impact through technology.
          </motion.p>

          <hr className="border-gray-300 w-1/3 mx-auto" />

          {/* Founder Info */}
          <motion.div className="text-left sm:text-center" variants={fadeInUp}>
            <p className="text-base sm:text-lg text-gray-800">
              <span className="font-medium text-black">Founder:</span>{" "}
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
              <span className="font-medium text-black">Co-Founder:</span>{" "}
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
        </motion.div>
      </div>
    </motion.section>
  );
}
