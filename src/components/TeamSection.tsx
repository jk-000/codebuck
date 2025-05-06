/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function TeamSection() {
  const team = [
    {
      name: "Jenil Kakadiya",
      role: "Full Stack Developer",
      image: "/jenil.jpg",
      linkedin: "https://www.linkedin.com/in/jenil-kakadiya/",
    },
    {
      name: "Daksh Goswami",
      role: "Full Stack Developer",
      image: "/daksh.jpg",
      linkedin: "https://www.linkedin.com/in/daksh-goswami-b4384b24b/",
    },
    {
      name: "Piyush Nakarani",
      role: "Frontend Developer",
      image: "/piyush.jpg",
      linkedin: "https://www.linkedin.com/in/nakarani-piyush-192a522b1/",
    },
    {
      name: "Sadhana Savaliya",
      role: "UI/UX & Graphic Designer",
      image: "/sadhana.webp",
      linkedin: "https://www.linkedin.com/in/savaliya-sadhana-70a0ab292/",
    },
    {
      name: "Keyur Nakarani",
      role: "Full Stack Developer",
      image: "/keyur.jpg",
      linkedin: "https://www.linkedin.com/in/keyur-nakarani-594256344/",
    },
    {
      name: "Harsh Balar",
      role: "Android App Developer",
      image: "/harsh.jpg",
      linkedin: "https://www.linkedin.com/in/harsh-balar-89232b31a/",
    },
  ];

  return (
    <motion.section
      className="bg-white py-20 px-4 md:px-6 text-center md:pt-10 pt-30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="relative inline-block mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-medium text-black text-center">
          Our Team
        </h2>
        <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-24 h-0.5 rounded-full bg-blue-600 shadow-md"></span>
        <span className="absolute left-1/2 transform -translate-x-1/2 mt-5 w-32 h-0.5 rounded-full bg-rose-400 shadow-md"></span>
      </motion.div>

      <div className="relative max-w-7xl mx-auto overflow-hidden mt-10">
        <Swiper
          modules={[Autoplay, Navigation]}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation
          autoHeight={true}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 10 }, // 👈 mobile view
            640: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              <motion.a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                className="bg-gray-100 rounded-xl p-5 w-full min-h-[250px] shadow-sm hover:scale-[1.02] transition-transform duration-300 flex flex-col items-center justify-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover mb-3"
                />
                <h3 className="text-base md:text-lg font-semibold text-black text-center">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-700 text-center">
                  {member.role}
                </p>
              </motion.a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}
