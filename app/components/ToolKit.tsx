"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "HTML", icon: "/html-5-svgrepo-com.svg" },
  { name: "CSS", icon: "/css-3-svgrepo-com.svg" },
  { name: "JavaScript", icon: "/javascript-svgrepo-com.svg" },
  { name: "Java", icon: "/java-original.svg" },
  { name: "TypeScript", icon: "/typescript-svgrepo-com.svg" },
  { name: "PHP", icon: "/php-svgrepo-com.svg" },
  { name: "MySQL", icon: "/mysql-original.svg" },
  { name: "PostgreSQL", icon: "/postgresql-svgrepo-com.svg" },
  { name: "MongoDB", icon: "/mongodb-original.svg" },
  { name: "Google Firebase", icon: "/firebase-svgrepo-com.svg" },
  { name: "PL/SQL", icon: "/plsql-svgrepo-com.svg" },

  { name: "React.js", icon: "/react-original.svg" },
  { name: "jQuery", icon: "/jquery-1-logo-svgrepo-com.svg" },

  { name: "Node.js", icon: "/nodejs-original.svg" },
  { name: "Express.js", icon: "/express-original.svg" },
];

const Toolkit = () => {
  return (
    <section
      id="toolkit"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-black font-sarala"
    >
      {/* Floating Animated Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-red-300 dark:bg-red-600 rounded-full blur-3xl opacity-30"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full blur-3xl opacity-30"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.h2
            className="relative inline-block text-4xl font-bold text-gray-900 dark:text-white font-sarala"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My Toolkit 🖥️
            <span className="absolute left-1/2 -bottom-2 w-[110%] h-4 rounded-md bg-yellow-200 dark:bg-yellow-500 opacity-40 blur-sm -translate-x-1/2"></span>
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-center font-quicksand">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 rounded-xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl shadow-md hover:shadow-xl transition-all hover:scale-110 border border-white/30 dark:border-gray-700/40"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src={skill.icon} alt={skill.name} width={55} height={55} />
              </motion.div>

              <span className="mt-3 text-sm font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;