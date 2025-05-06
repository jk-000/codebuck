/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

export default function PortfolioSection() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const projects = [
    {
      title: "Women's Fashion E-Com UI Desingn App",
      description:
        "A stylish app UI designed for a women's fashion brand. Features elegant visuals and enhanced shopping experience with curated collections.",
      image: "/15.png",
      link: "https://www.behance.net/gallery/203613961/Fashion-APP-UI-Design",
    },
    {
      title: "Movie Download Platform",
      description:
        "A high-performance movie downloading website built using the MERN stack and styled with Tailwind CSS.",
      image: "/2.png",
      link: "https://jkhubmovies.site/",
    },
    {
      title: "ZARA – Mobile App UI Redesign",
      description:
        "A user-friendly redesign of the ZARA mobile app. Streamlined navigation and improved checkout flow, while maintaining the brand's premium identity.",
      image: "/14.png",
      link: "https://www.behance.net/gallery/210145357/Zara-Re-Design-Project",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "A seamless real-time chat web app developed using PHP, enabling instant communication between users.",
      image: "/1.png",
      link: "https://chat.jkhubmovies.site/",
    },
    {
      title: "Modern E-Commerce Store",
      description:
        "A feature-rich e-commerce store developed using Wix and Node.js, offering a smooth and responsive shopping experience.",
      image: "/3.png",
      link: "https://www.glowraa.com/",
    },
    {
      title: "Car Buying & Enquiry Platform",
      description:
        "A professional web portal for car buyers to explore brands, submit inquiries, and get offers — built with PHP.",
      image: "/4.png",
      link: "https://car.jkhubmovies.site/",
    },
    {
      title: "Real-Time Food Delivery App",
      description:
        "A Flutter-based food delivery app with real-time order tracking and features similar to Swiggy and Zomato.",
      image: "/5.png",
      link: "https://www.figma.com/design/uqKYwdwxb1F14NdKYM49uB/Untitled?node-id=0-1&t=7vBoKgX5VoXxQuS6-1",
    },
    {
      title: "BeatBuzz – Music & Chat Experience",
      description:
        "An innovative web app combining music streaming and real-time chat, allowing users to listen together and interact — like a social Spotify.",
      image: "/6.png",
      link: "https://beat-buzz-flax.vercel.app/",
    },
    {
      title: "Responsive E-Commerce Store",
      description:
        "A fully responsive, full-stack e-commerce platform built using PHP, offering smooth user experience and modern design.",
      image: "/7.png",
      link: "https://paperpulse.jkhubmovies.site/",
    },
    {
      title: "Restaurant Logo Design",
      description:
        "A custom logo, a modern restaurant. Reflects quality food with a contemporary, memorable design for versatile branding use.",
      image: "/17.png",
      link: "https://www.behance.net/gallery/197354465/Fusion-Logo-Designing",
    },
    {
      title: "Instagram Reel Downloader",
      description:
        "A sleek and responsive Instagram Reel downloader built with TypeScript and Tailwind CSS. Easily download reels in one click with a clean UI.",
      image: "/8.png",
      link: "https://reeldownloader-jks-projects-08e5b54c.vercel.app/",
    },
    {
      title: "Modern Job Portal Platform",
      description:
        "A full-stack job portal inspired by platforms like Naukri and Upwork. Designed with a clean UI and responsive layout for seamless hiring and job search.",
      image: "/9.png",
      link: "https://jobportal-eta-black.vercel.app/",
    },
    {
      title: "Digital Services Website UI Design",
      description:
        "A modern website UI for a digital services agency. Designed in Figma with focus on clean layout, user experience, and clear service offerings.",
      image: "/13.png",
      link: "https://www.behance.net/gallery/215207779/Web-banner",
    },
    {
      title: "Bank Website UI Design",
      description:
        "A clean and professional website UI for a loan services platform. Designed with easy loan options, EMI calculators, and an intuitive application flow.",
      image: "/10.png",
      link: "https://www.behance.net/gallery/210089995/Website-Design",
    },
    {
      title: "Healthcare Website UI Design",
      description:
        "A modern website UI for a healthcare center. Focuses on appointment booking, doctor profiles, and emergency services with a clean, responsive design.",
      image: "/11.png",
      link: "https://www.behance.net/gallery/210089699/Website-Design",
    },
    {
      title: "Space & Satellite Exploration Website UI",
      description:
        "A futuristic website UI for space exploration. Features satellite tracking, mission data, and scientific insights with a high-tech visual aesthetic.",
      image: "/12.png",
      link: "https://www.behance.net/gallery/202197701/website-design",
    },
    {
      title: "FoodSmile – Online Food Ordering App UI",
      description:
        "A vibrant and user-centric UI for a food delivery app. Smooth restaurant browsing, easy cart management, and real-time order tracking.",
      image: "/16.png",
      link: "https://www.behance.net/gallery/202732281/Food-App-UI-Design",
    },
    {
      title: "Coffee Shop Logo Design",
      description:
        "A warm logo for coffee shop. Combines coffee culture elements with a sleek, modern design for signage and branding.",
      image: "/18.png",
      link: "https://www.behance.net/gallery/199548297/Black-bunny-coffee-Branding-Design",
    },
  ];

  const visibleProjects = projects.slice(0, visibleCount);

  return (
    <motion.section
      className="bg-white py-20 px-6 text-center md:pt-10 pt-30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="relative inline-block mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-medium text-black text-center">
          Our Work
        </h2>

        {/* Line 1 - Blue */}
        <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-24 h-0.5 rounded-full bg-blue-600 shadow-md"></span>

        {/* Line 2 - Fuchsia */}
        <span className="absolute left-1/2 transform -translate-x-1/2 mt-5 w-32 h-0.5 rounded-full bg-fuchsia-400 shadow-md"></span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mt-10">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105"
            variants={fadeInUp} // Ensure this is present for animation
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.5, delay: index * 0.2 }} // Add delay for staggered animation
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform transform hover:scale-110"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-black transition-all hover:text-blue-600">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                className="text-blue-600 hover:underline font-medium transition-all hover:text-blue-800"
              >
                Visit Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {visibleCount < projects.length && (
        <button
          onClick={handleViewMore}
          className="cursor-pointer mt-10 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          View More
        </button>
      )}
    </motion.section>
  );
}
