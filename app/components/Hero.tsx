"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import useTypewriter from "./useTypewriter";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPhp
} from "react-icons/fa";

import { 
  SiExpress, 
  SiFirebase,
  SiMongodb 
} from "react-icons/si";

const floatingIcons = [
  { icon: <FaReact className="text-blue-300 text-4xl" /> },
  { icon: <FaNodeJs className="text-green-400 text-4xl" /> },
  { icon: <FaDatabase className="text-yellow-400 text-4xl" /> },
  { icon: <FaJs className="text-yellow-500 text-4xl" /> },
  { icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { icon: <SiExpress className="text-gray-300 text-4xl" /> },
  { icon: <FaJava className="text-red-500 text-4xl" /> },
  { icon: <SiFirebase className="text-yellow-500 text-4xl" /> },
  { icon: <SiMongodb className="text-green-500 text-4xl" /> },
  { icon: <FaPhp className="text-indigo-400 text-4xl" /> },
];


const Hero = () => {
  const displayText = useTypewriter("Hii! I'm Rushi 👋", { speed: 170 });

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-black">

      {/*FLOATING ICONS*/}
      <div className="block absolute inset-0 pointer-events-none z-0">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute opacity-60"
            initial={{
              x: Math.random() * 800 - 400,
              y: Math.random() * 600 - 300,
            }}
            animate={{
              x: [
                Math.random() * 900 - 450,
                Math.random() * 900 - 450,
                Math.random() * 900 - 450,
              ],
              y: [
                Math.random() * 700 - 350,
                Math.random() * 700 - 350,
                Math.random() * 700 - 350,
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Animated Gradient Blob */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-purple-300 dark:bg-purple-600 blur-3xl opacity-40 z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-red-300 dark:bg-red-500 rounded-full blur-3xl opacity-30 z-0"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-20">
        
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-5xl sm:text-6xl font-bold font-sarala text-gray-900 dark:text-white leading-tight"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {displayText}
          </motion.h1>

          <motion.p
            className="mt-6 text-xl text-gray-700 dark:text-gray-300 font-quicksand max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
           A <span className="text-yellow-500 font-semibold">Full-Stack Developer</span> specializing in building responsive, scalable web applications, <br />
          and a <span className="text-green-500 font-semibold">Marketing Specialist</span> specializing in data-driven marketing strategies and engaging content creation.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
          <a href="/Rushi-Suthar-Resume.pdf" download className="px-6 py-3 rounded-xl bg-yellow-600 text-white shadow-lg hover:bg-green-600 transition font-medium">
            Download My Resume</a>
          </motion.div>
        </div>

        {/* Right Image Section */}
        <motion.div
          className="mt-10 md:mt-0 md:w-1/3 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {/* Glow behind image */}
          <div className="absolute w-60 h-60 md:w-72 md:h-72 rounded-full bg-gradient-to-tr from-purple-400 to-red-400 blur-2xl opacity-40" />

          {/* Profile Image */}
          <div className="relative w-70 h-70 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
            <Image
              src="/profilepic.png"
              alt="Profile"
              width={350}
              height={350}
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 inset-x-0 mx-auto flex flex-col items-center w-fit"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-700 dark:text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 font-delius">
          Scroll down to explore more
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;