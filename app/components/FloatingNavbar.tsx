"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaUserAlt,
  FaTools,
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaPaperPlane,
} from "react-icons/fa";

const sections = [
  { id: "about", icon: <FaUserAlt />, label: "About" },
  { id: "toolkit", icon: <FaTools />, label: "Toolkit" },
  { id: "experience", icon: <FaBriefcase />, label: "Experience" },
  { id: "projects", icon: <FaCode />, label: "Projects" },
  { id: "education", icon: <FaGraduationCap />, label: "Education" },
  { id: "contact", icon: <FaPaperPlane />, label: "Contact" },
];

const FloatingNavbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [hideBar, setHideBar] = useState(false);

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
      {/* Desktop floating dock */}
      <motion.nav
        className="fixed right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-1 z-50 p-2 rounded-2xl bg-[var(--ink-soft)]/80 backdrop-blur-xl border border-[var(--line)]"
        animate={{
          transform: hideBar ? "translateY(-50%) translateX(150%)" : "translateY(-50%) translateX(0%)",
        }}
        transition={{ duration: 0.3 }}
      >
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })}
            title={section.label}
            className={`group relative w-11 h-11 flex items-center justify-center rounded-xl text-lg transition-all duration-200 ${
              activeSection === section.id
                ? "bg-[var(--mint)] text-[var(--ink)]"
                : "text-[var(--muted)] hover:text-[var(--mint)] hover:bg-[var(--ink)]"
            }`}
          >
            {section.icon}
            <span className="pointer-events-none absolute right-full mr-3 px-2 py-1 rounded-md bg-[var(--ink)] border border-[var(--line)] text-xs font-mono-ui text-[var(--paper)] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {section.label}
            </span>
          </button>
        ))}
      </motion.nav>

      {/* Mobile bottom bar */}
      <motion.nav
        className="fixed bottom-4 left-1/2 -translate-x-1/2 flex md:hidden items-center gap-2 bg-[var(--ink-soft)]/90 backdrop-blur-xl px-3 py-2.5 rounded-full z-50 border border-[var(--line)] shadow-2xl"
        animate={{
          transform: hideBar ? "translateX(-50%) translateY(120%)" : "translateX(-50%) translateY(0%)",
        }}
        transition={{ duration: 0.3 }}
      >
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })}
            className={`w-10 h-10 flex items-center justify-center rounded-full text-base transition-all duration-200 ${
              activeSection === section.id
                ? "bg-[var(--mint)] text-[var(--ink)]"
                : "text-[var(--muted)] hover:text-[var(--mint)]"
            }`}
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
