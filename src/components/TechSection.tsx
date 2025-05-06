"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaVuejs,
  FaAngular,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiSqlite,
  SiRedux,
  SiFlutter,
  SiExpress,
  SiFigma,
  SiAdobeillustrator,
} from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";

const techStack = [
  { icon: <FaReact size={40} color="#61dafb" /> },
  { icon: <SiNextdotjs size={40} color="#000000" /> },
  { icon: <FaHtml5 size={40} color="#e44d26" /> },
  { icon: <FaCss3Alt size={40} color="#1572B6" /> },
  { icon: <FaJs size={40} color="#f7df1e" /> },
  { icon: <SiTailwindcss size={40} color="#38bdf8" /> },
  { icon: <FaPhp size={40} color="#8892be" /> },
  { icon: <FaGithub size={40} color="black" /> },
  { icon: <SiMongodb size={40} color="#47A248" /> },
  { icon: <SiSqlite size={40} color="#003B57" /> },
  { icon: <DiPhotoshop size={40} color="#31A8FF" /> },
  { icon: <SiFlutter size={40} color="#02569B" /> },
  { icon: <FaVuejs size={40} color="#41b883" /> },
  { icon: <FaAngular size={40} color="#dd1b16" /> },
  { icon: <FaBootstrap size={40} color="#563d7c" /> },
  { icon: <FaNodeJs size={40} color="#3c873a" /> },
  { icon: <SiExpress size={40} color="#000000" /> },
  { icon: <SiRedux size={40} color="#764abc" /> },
  { icon: <SiFigma size={40} color="#F24E1E" /> },
  { icon: <SiAdobeillustrator size={40} color="#FF9A00" /> },
];

export default function TechSection() {
  return (
    <motion.section
      className="bg-white py-20 md:pt-10 px-6 text-center pt-30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div
        className="relative inline-block mb-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-medium text-black text-center">
          Technologies We Work With
        </h2>

        {/* First line - Indigo */}
        <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-24 h-0.5 rounded-full bg-indigo-600 shadow-md"></span>

        {/* Second line - Sky Blue */}
        <span className="absolute left-1/2 transform -translate-x-1/2 mt-5 w-32 h-0.5 rounded-full bg-sky-400 shadow-md"></span>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="w-20 h-20 flex items-center justify-center bg-white"
            initial={{ opacity: 0, x: 50, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.1,
            }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                delay: index * 0.1,
              }}
            >
              {tech.icon}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
