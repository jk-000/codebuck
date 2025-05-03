'use client'

import { motion } from 'framer-motion'
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
  FaGithub
} from 'react-icons/fa'

import { SiNextdotjs, SiTailwindcss, SiMongodb, SiSqlite, SiRedux, SiFlutter, SiExpress } from 'react-icons/si'
import { DiPhotoshop } from 'react-icons/di'
import { SiFigma,SiAdobeillustrator  } from 'react-icons/si'

const techStack = [
  { icon: <FaReact size={40} color="#61dafb" /> },
  { icon: <SiNextdotjs size={40} color="#000000" /> },
  { icon: <FaHtml5 size={40} color="#e44d26" /> },
  { icon: <FaCss3Alt size={40} color="#1572B6" /> },
  { icon: <FaJs size={40} color="#f7df1e" /> },
  { icon: <SiTailwindcss size={40} color="#38bdf8" /> },
  { icon: <FaPhp size={40} color="#8892be" /> },
  { icon: <FaGithub size={40} color='black' />},
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
  { icon: <SiAdobeillustrator size={40} color="#FF9A00" /> }, // Illustrator Icon
]

export default function TechSection() {
  return (
    <motion.section
      className="bg-white py-20 px-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10 text-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Technologies We Work With
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="w-20 h-20 flex items-center justify-center bg-white shadow-md rounded-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.1,
            }}
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
