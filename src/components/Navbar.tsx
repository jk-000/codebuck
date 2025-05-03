/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";

// Dynamically import Lottie Player with SSR disabled
const LottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

// Create a generic type for the Lottie player instance
type LottiePlayerInstance = {
  play: () => void;
  stop: () => void;
  setDirection: (dir: number) => void;
};

export default function Navbar() {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const playerRef = useRef<LottiePlayerInstance | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => {
      const newState = !prev;

      if (playerRef.current) {
        playerRef.current.setDirection(newState ? 1 : -1);
        playerRef.current.play();
      }

      return newState;
    });
  };

  const navItems = [
    ["/", "Home"],
    ["/about", "About"],
    ["/technology", "Technology"],
    ["/team", "Team"],
    ["/portfolio", "Portfolio"],
    ["/contact", "Contact"],
  ];

  return (
    <>
      {!isOpen && (
        <motion.nav
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white text-black w-[95%] md:w-[90%] lg:w-[100%] max-w-6xl px-3 sm:px-6 py-2 sm:py-3 flex justify-between items-center shadow-lg rounded-xl border border-black/10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/">
            <img
              src="/codebucklogo.svg"
              alt="CodeBuck Logo"
              className="h-8 sm:h-10"
            />
          </Link>

          <div className="space-x-4 sm:space-x-8 hidden md:flex font-medium uppercase text-sm sm:text-base">
            {navItems.map(([href, label]) => (
              <motion.div
                key={href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={href}
                  className="hover:text-blue-600 transition duration-300"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </div>

          {isClient && (
            <div className="md:hidden">
              <button onClick={handleToggle} className="focus:outline-none">
                <LottiePlayer
                  lottieRef={(instance) => {
                    playerRef.current = instance as LottiePlayerInstance;
                  }}
                  src="/toggle.json"
                  style={{ height: 30, width: 30 }}
                  loop={false}
                  autoplay={false}
                />
              </button>
            </div>
          )}
        </motion.nav>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleToggle}
          >
            <motion.div
              className="absolute top-0 right-0 w-64 h-full bg-white shadow-xl z-50 p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-6">
                <button
                  onClick={handleToggle}
                  className="text-black hover:text-red-500 transition text-xl"
                >
                  ✕
                </button>
              </div>

              <nav className="flex flex-col space-y-5 text-base uppercase font-semibold text-gray-800">
                {navItems.map(([href, label]) => (
                  <Link
                    key={href}
                    href={href}
                    className="hover:text-blue-600 transition"
                    onClick={handleToggle}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
