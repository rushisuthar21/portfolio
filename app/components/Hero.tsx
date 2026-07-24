"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const STACK = ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"];

const Hero = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [showCursorBlink, setShowCursorBlink] = useState(true);

  const lines = [
    { key: 'name', label: "name", value: `"Rushi Suthar"` },
    { key: 'role', label: "role", value: `"Full-Stack Developer & UI/UX Designer"` },
    { key: 'base', label: "basedIn", value: `"Toronto, CA"` },
    { key: 'focus', label: "focus", value: `"build scalable web apps + solve problems I didn't create"` },
    { key: 'status', label: "status", value: `"open to work"` },
  ];

  useEffect(() => {
    if (lineIndex >= lines.length) return;
    const t = setTimeout(() => setLineIndex((i) => i + 1), 480);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineIndex]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursorBlink((v) => !v), 600);
    return () => clearInterval(blink);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--ink)] grid-backdrop">
      {/* Ambient glow */}
      <div className="absolute -top-40 left-1/4 w-[40rem] h-[40rem] rounded-full bg-[var(--mint)] blur-[160px] opacity-[0.09] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[36rem] h-[36rem] rounded-full bg-[var(--amber)] blur-[160px] opacity-[0.07] pointer-events-none" />

      {/* Faint circuit trace lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none" preserveAspectRatio="none">
        <line x1="0" y1="15%" x2="35%" y2="15%" stroke="var(--mint)" strokeWidth="1" />
        <circle cx="35%" cy="15%" r="3" fill="var(--mint)" />
        <line x1="100%" y1="80%" x2="65%" y2="80%" stroke="var(--amber)" strokeWidth="1" />
        <circle cx="65%" cy="80%" r="3" fill="var(--amber)" />
      </svg>

      <div className="relative z-10 max-w-[90rem] mx-auto w-full px-6 md:px-16 lg:px-20 py-20 grid md:grid-cols-[1.15fr_0.85fr] gap-16 xl:gap-24 items-center">
        {/* LEFT — Editor window */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden card-surface glow-mint shadow-2xl"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2.5 px-5 py-4 border-b border-[var(--line)] bg-[var(--ink-soft)]">
            <span className="w-3.5 h-3.5 rounded-full bg-[var(--coral)]" />
            <span className="w-3.5 h-3.5 rounded-full bg-[var(--amber)]" />
            <span className="w-3.5 h-3.5 rounded-full bg-[var(--mint)]" />
            <span className="ml-3 text-sm font-mono-ui text-[var(--muted)]">about-rushi.ts</span>
          </div>

          {/* Code body */}
          <div className="p-6 sm:p-8 lg:p-10 font-mono-ui text-sm sm:text-base lg:text-lg leading-7 sm:leading-8">
            <p className="text-[var(--muted)]">
              <span className="text-[var(--amber)]">const</span> developer{" "}
              <span className="text-[var(--muted)]">=</span> {"{"}
            </p>
            {lines.map((l, i) => (
              <p key={l.key} className="pl-6">
                {i < lineIndex ? (
                  <>
                    <span className="text-[var(--paper)]">{l.label}</span>
                    <span className="text-[var(--muted)]">: </span>
                    <span className="text-[var(--mint)]">{l.value}</span>
                    <span className="text-[var(--muted)]">,</span>
                  </>
                ) : i === lineIndex ? (
                  <>
                    <span className="text-[var(--paper)]">{l.label}</span>
                    <span className="text-[var(--muted)]">: </span>
                    <span className={showCursorBlink ? "opacity-100" : "opacity-0"}>▍</span>
                  </>
                ) : (
                  <span className="opacity-0">.</span>
                )}
              </p>
            ))}
            <p className="text-[var(--muted)]">{"}"}</p>

            {lineIndex >= lines.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-7 flex flex-wrap gap-2.5"
              >
                {STACK.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-md text-sm border border-[var(--line)] text-[var(--muted)] bg-[var(--ink-soft)]"
                  >
                    {s}
                  </span>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* RIGHT — Portrait + copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col items-center md:items-start gap-7 text-center md:text-left"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[var(--mint)] to-[var(--amber)] opacity-30 blur-3xl" />
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border border-[var(--line)] rotate-2">
              <Image src="/profilepic.png" alt="Rushi Suthar" width={400} height={400} className="object-cover w-full h-full" />
            </div>
            <span className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-full text-xs font-mono-ui bg-[var(--mint)] text-[var(--ink)] font-semibold">
              ● online
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--paper)] leading-[1.05]">
            Hii! I&apos;m Rushi <span className="inline-block"></span>
          </h1>

          <p className="text-[var(--muted)] text-base lg:text-lg max-w-lg leading-relaxed">
            A <span className="text-[var(--mint)] font-semibold">Full-Stack Developer &amp; UI/UX Designer</span>{" "}
            building responsive, scalable web apps &mdash; and solving problems I definitely didn&apos;t create.
          </p>

          <a
            href="/Rushi-Suthar-Resume.pdf"
            download
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[var(--mint)] text-[var(--ink)] font-semibold font-mono-ui text-base lg:text-lg shadow-lg hover:bg-[var(--paper)] transition-colors"
          >
            ./download-resume
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 inset-x-0 mx-auto flex flex-col items-center w-fit"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[var(--muted)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <p className="text-[var(--muted)] text-sm mt-1 font-mono-ui">scroll</p>
      </motion.div>
    </section>
  );
};

export default Hero;
