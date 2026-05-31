"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaUserAlt,
  FaPaperPlane,
} from "react-icons/fa";

const sections = [
  { id: "experience", icon: <FaBriefcase />, label: "Experience" },
  { id: "education", icon: <FaGraduationCap />, label: "Education" },
  { id: "projects", icon: <FaCode />, label: "Projects" },
  { id: "about", icon: <FaUserAlt />, label: "About" },
  { id: "contact", icon: <FaPaperPlane />, label: "Contact" },
];

const FloatingNavbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [hideBar, setHideBar] = useState(false);

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-hide when footer is in view
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setHideBar(entry.isIntersecting);
        });
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================= Desktop Floating Sidebar ================= */}
      <motion.nav
        className="
          fixed right-6 top-1/2 -translate-y-1/2
          hidden md:flex flex-col items-center space-y-6
          z-50
        "
        animate={{
          transform: hideBar
            ? "translateY(-50%) translateX(150%)" // slide off right but remain vertical center
            : "translateY(-50%) translateX(0%)", // centered
        }}
        transition={{ duration: 0.3 }}
      >
        {sections.map((section, index) => (
          <div key={section.id} className="relative flex items-center justify-center">
            {index !== sections.length - 1 && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-10 bg-gray-400/30"></div>
            )}

            <motion.button
              onClick={() =>
                document
                  .getElementById(section.id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`
                w-14 h-14 flex items-center justify-center rounded-full text-2xl transition-all duration-300
                ${
                  activeSection === section.id
                    ? "bg-red-500 text-white shadow-2xl"
                    : "bg-red-500/20 text-red-500 hover:bg-red-500/40 hover:text-white"
                }
              `}
              title={section.label}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            >
              {section.icon}
            </motion.button>
          </div>
        ))}
      </motion.nav>

      {/* ================= Mobile Bottom Floating Bar ================= */}
      <motion.nav
        className="
          fixed bottom-4 left-1/2 -translate-x-1/2
          flex md:hidden items-center space-x-4
          bg-black/70 backdrop-blur-xl
          px-4 py-3 rounded-full
          z-50 shadow-2xl
        "
        animate={{
          transform: hideBar
            ? "translateX(-50%) translateY(120%)" // slide down but keep horizontal center
            : "translateX(-50%) translateY(0%)", // centered
        }}
        transition={{ duration: 0.3 }}
      >
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() =>
              document
                .getElementById(section.id)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`
              w-12 h-12 flex items-center justify-center rounded-full text-xl transition-all duration-300
              ${
                activeSection === section.id
                  ? "bg-red-500 text-white"
                  : "bg-red-500/20 text-red-400 hover:bg-red-500/40 hover:text-white"
              }
            `}
            whileTap={{ scale: 0.9 }}
          >
            {section.icon}
          </motion.button>
        ))}
      </motion.nav>
    </>
  );
};

export default FloatingNavbar;