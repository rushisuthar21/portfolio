"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const About = () => {
  /* List item animation variants */
  const listItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const description = `As a Developer, I love building things, breaking them (sometimes on purpose 😄), and making them better. From problem-solving to performance optimization, I’m always iterating, learning, and growing with my code.`;

  const listItems = [
    "💻 When I’m not shipping features or optimizing code, you’ll probably find me deep in problem-solving like puzzles I have to crack.",
    "🛠️ Side projects are my playground for curiosity.",
    "😄 Outside of coding, I’m either gaming or enjoying quiet time in nature to relax, reset, and come back stronger.",
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-12 lg:px-24 overflow-hidden
      bg-gradient-to-br from-purple-100 via-white to-blue-100
      dark:from-gray-900 dark:via-gray-800 dark:to-black"
    >
      {/* Background blobs */}
      <motion.div
        className="absolute -top-20 right-0 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full blur-3xl opacity-30"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-purple-300 dark:bg-purple-700 rounded-full blur-3xl opacity-30"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
        {/* Left Content */}
        <motion.div
          className="md:w-3/4 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold font-sarala text-gray-900 dark:text-white relative inline-block mt-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me :)
            <span className="absolute inset-x-0 bottom-[-6px] h-4 bg-red-300 blur-md opacity-40 rounded-md" />
          </motion.h2>

          <motion.p
            className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-quicksand max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {description}
          </motion.p>

          <motion.ul className="mt-5 text-lg text-gray-700 dark:text-gray-300 list-disc pl-6 space-y-2">
            {listItems.map((item, i) => (
              <motion.li
                key={i}
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: i * 0.15 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center relative perspective-[1200px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Glow */}
          <motion.div
            className="absolute
              w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96
              rounded-full bg-gradient-to-tr from-purple-400 to-blue-400
              blur-3xl opacity-40"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Image Card */}
          <motion.div
            className="relative
              w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96
              rounded-3xl bg-white dark:bg-gray-900
              shadow-2xl ring-4 ring-white dark:ring-gray-700
              overflow-hidden"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{
              rotateX: 8,
              rotateY: -8,
              scale: 1.05,
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src="/rushi.jpg"
              alt="Profile Picture"
              width={400}
              height={400}
              className="object-contain p-4"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;