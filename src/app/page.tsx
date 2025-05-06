"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ServiceSection from "@/components/ServiceSection";
import TechnologySection from "@/components/TechSection";
import TeamSection from "@/components/TeamSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import dotsAnimation from "../../public/dot-animtion.json"; // Adjust if needed

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll-to-top button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <HomeSection />

      {/* Lottie animation after home */}
      <div className="w-full flex justify-center my-0">
        <div className="w-28 md:w-36 opacity-50">
          <Lottie animationData={dotsAnimation} loop autoplay />
        </div>
      </div>

      <AboutSection />
      <ServiceSection />
      <TechnologySection />
      <PortfolioSection />
      <TeamSection />

      {/* Lottie animation before contact */}
      <div className="w-full flex justify-center my-0">
        <div className="w-28 md:w-36 opacity-50">
          <Lottie animationData={dotsAnimation} loop autoplay />
        </div>
      </div>

      <ContactSection />

      {/* Scroll-to-top arrow button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all animate-bounce z-50"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
