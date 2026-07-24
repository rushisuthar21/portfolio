"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const description = `As a developer, I love building things, breaking them (sometimes on purpose 😄), and making them better. From problem-solving to performance optimization, I'm always iterating, learning, and growing with my code.`;

  const listItems = [
    { tag: "debug", text: "When I'm not shipping features or optimizing code, you'll find me deep in problem-solving — puzzles I like to crack." },
    { tag: "build", text: "Side projects are my playground for curiosity." },
    { tag: "reset", text: "Outside of coding, I'm either gaming or enjoying quiet time in nature to relax, reset, and come back stronger." },
  ];

  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-16 lg:px-24 overflow-hidden bg-[var(--ink-soft)]"
    >
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[var(--mint)] blur-[130px] opacity-[0.07] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-20">
        {/* Left Content */}
        <motion.div
          className="md:w-3/5 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow text-sm text-[var(--mint)] mb-4">// about-me.md</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--paper)]">
            Who&apos;s writing this code?
          </h2>

          <p className="mt-10 text-xl text-[var(--muted)] leading-relaxed max-w-3xl">
            {description}
          </p>

          <ul className="mt-10 space-y-5">
            {listItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex items-start gap-4 text-lg text-[var(--paper)]/90"
              >
                <span className="mt-1 shrink-0 font-mono-ui text-sm px-3 py-1.5 rounded bg-[var(--ink)] border border-[var(--line)] text-[var(--amber)]">
                  {item.tag}
                </span>
                <span>{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-2/5 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[var(--mint)] to-[var(--amber)] blur-3xl opacity-20" />

          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden card-surface shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-300">
            <Image
              src="/rushi.JPG"
              alt="Profile Picture"
              width={500}
              height={500}
              className="object-contain p-6"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
