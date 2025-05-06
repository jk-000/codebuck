"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import webDevAnim from "../../public/webdevanimation.json";
import appDevAnim from "../../public/appdevanimation.json";
import uiuxAnim from "../../public/uiuxanimation.json";
import seoAnim from "../../public/seoanimation.json";
import redesignAnim from "../../public/redesignanimation.json";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ServiceSection() {
  const services = [
    {
      title: "Web Development",
      description: (
        <>
          Custom websites built using modern technologies like{" "}
          <span className="font-medium">MERN Stack</span>,{" "}
          <span className="font-medium">Next.js</span>,{" "}
          <span className="font-medium">PHP</span>, and{" "}
          <span className="font-medium">REST APIs</span>. We ensure{" "}
          <span className="italic">speed, responsiveness</span>, and{" "}
          <span className="italic">clean code architecture</span>.
        </>
      ),
      animation: webDevAnim,
    },
    {
      title: "App Development",
      description: (
        <>
          High-performance{" "}
          <span className="font-medium">cross-platform apps</span> using{" "}
          <span className="font-medium">React Native</span>,{" "}
          <span className="font-medium">Flutter</span>, and{" "}
          <span className="font-medium">PWA</span> technologies. Built for{" "}
          <span className="italic">speed, security</span>, and{" "}
          <span className="italic">smooth UX</span> across devices.
        </>
      ),
      animation: appDevAnim,
    },
    {
      title: "UI/UX & Graphics Design",
      description: (
        <>
          We craft <span className="font-medium">modern UI/UX</span> for
          websites & apps, along with{" "}
          <span className="font-medium">Logo Design</span>,{" "}
          <span className="font-medium">Web Design</span>,{" "}
          <span className="font-medium">Mobile App Design</span>, and more.
          <br />
          Tools: <span className="italic">Figma, Adobe XD, Photoshop</span>.
        </>
      ),
      animation: uiuxAnim,
    },
    {
      title: "SEO Optimization",
      description: (
        <>
          Boost visibility with <span className="font-medium">On-Page SEO</span>
          , <span className="font-medium">Technical SEO</span>, and{" "}
          <span className="font-medium">Backlink Strategy</span>. We use{" "}
          <span className="italic">data-driven techniques</span> for better{" "}
          <span className="font-medium">Google rankings</span>.
        </>
      ),
      animation: seoAnim,
    },
    {
      title: "Redesign Web/App",
      description: (
        <>
          Revamp outdated platforms with a{" "}
          <span className="font-medium">modern design</span> and{" "}
          <span className="font-medium">performance boost</span>. We redesign
          for <span className="italic">usability</span>,{" "}
          <span className="italic">branding</span>, and{" "}
          <span className="italic">conversion</span>.<br />
          Includes: <span className="font-medium">UI Redesign</span>,{" "}
          <span className="font-medium">Code Refactoring</span>, and{" "}
          <span className="font-medium">Speed Optimization</span>.
        </>
      ),
      animation: redesignAnim,
    },
  ];

  return (
    <motion.section
      className="relative bg-white text-black pt-30 py-24 px-4 sm:px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="w-[95%] sm:w-[90%] max-w-6xl mx-auto text-center relative z-10">
        <motion.div className="relative inline-block mb-14" variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
            Our Services
          </h2>
          <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-24 h-0.5 rounded-full bg-blue-600 shadow-md"></span>
          <span className="absolute left-1/2 transform -translate-x-1/2 mt-5 w-32 h-0.5 rounded-full bg-yellow-500 shadow-md"></span>
        </motion.div>

        <div className="flex flex-col gap-20">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-between gap-10 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={fadeInUp}
              >
                <div className="w-full md:w-1/2 h-[220px] sm:h-[270px] md:h-[300px] lg:h-[350px]">
                  <Lottie
                    animationData={service.animation}
                    loop={true}
                    className="w-full h-full"
                  />
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-medium text-blue-700 mb-3">
                    {service.title}
                  </h3>
                  <div className="text-gray-700 text-base leading-relaxed">
                    {service.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
