"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Skill = {
  name: string;
  icon: string;
  note?: string;
};

type Category = {
  title: string;
  tag: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    title: "Languages",
    tag: "languages",
    skills: [
      { name: "JavaScript", icon: "/javascript-svgrepo-com.svg" },
      { name: "Java", icon: "/java-original.svg" },
      { name: "Python", icon: "/python-original.svg" },
      { name: "C#", icon: "/csharp-original.svg" },
      { name: "PHP", icon: "/php-svgrepo-com.svg" },
    ],
  },
  {
    title: "Frontend",
    tag: "frontend",
    skills: [
      { name: "React.js", icon: "/react-original.svg" },
      { name: "Next.js", icon: "/nextjs-original.svg" },
      { name: "Redux", icon: "/redux-original.svg" },
      { name: "TypeScript", icon: "/typescript-svgrepo-com.svg" },
      { name: "Tailwind CSS", icon: "/tailwindcss-original.svg" },
      { name: "Bootstrap", icon: "/bootstrap-original.svg" },
      { name: "jQuery", icon: "/jquery-original.svg" },
      { name: "HTML5", icon: "/html-5-svgrepo-com.svg" },
      { name: "CSS3", icon: "/css-3-svgrepo-com.svg" },
    ],
  },
  {
    title: "Backend",
    tag: "backend",
    skills: [
      { name: "Node.js", icon: "/nodejs-original.svg" },
      { name: "Express.js", icon: "/express-original.svg" },
      { name: "REST APIs", icon: "/restapi-generic.svg" },
      { name: "ASP.NET", icon: "/dotnet-original.svg" },
      { name: "Spring MVC", icon: "/spring-original.svg" },
    ],
  },
  {
    title: "Databases",
    tag: "databases",
    skills: [
      { name: "MongoDB", icon: "/mongodb-original.svg" },
      { name: "MySQL", icon: "/mysql-original.svg" },
      { name: "PostgreSQL", icon: "/postgresql-svgrepo-com.svg" },
      { name: "Google Firebase", icon: "/firebase-svgrepo-com.svg" },
      { name: "PL/SQL", icon: "/plsql-svgrepo-com.svg" },
    ],
  },
  {
    title: "Cloud & DevOps",
    tag: "cloud",
    skills: [
      { name: "Microsoft Azure", icon: "/azure-original.svg" },
      { name: "AWS", icon: "/aws-original-wordmark.svg", note: "S3 · IAM · ACL · Bucket Mgmt" },
      { name: "Google Cloud", icon: "/googlecloud-original.svg" },
      { name: "Git", icon: "/git-original.svg" },
      { name: "Netlify", icon: "/netlify-original.svg" },
      { name: "Postman", icon: "/postman-original.svg" },
      { name: "Apache Tomcat", icon: "/tomcat-original.svg" },
    ],
  },
  {
    title: "UI/UX & Design",
    tag: "design",
    skills: [
      { name: "Figma", icon: "/figma-svgrepo-com.svg" },
      { name: "Canva", icon: "/canva-original.svg" },
      { name: "WordPress", icon: "/wordpress-original.svg" },
    ],
  },
  {
    title: "AI & Agentic Coding",
    tag: "ai",
    skills: [
      { name: "Claude / Claude API", icon: "/claude-simple-icons.svg" },
      { name: "OpenAI API", icon: "/openai-generic.svg" },
      { name: "Google Gemini", icon: "/gemini-simple-icons.svg" },
      { name: "Vertex AI", icon: "/vertexai-generic.svg" },
      { name: "Hugging Face", icon: "/huggingface-simple-icons.svg" },
      { name: "n8n", icon: "/n8n-simple-icons.svg" },
    ],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      delay: (i % 5) * 0.05,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.4, rotate: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 260, damping: 16 },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

const Toolkit = () => {
  const shouldReduceMotion = useReducedMotion();

  // Detect whether the device actually supports hover (desktop/trackpad)
  // vs. touch-only (mobile/tablet), so we swap hover choreography for tap feedback.
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCanHover(mq.matches);
    const handler = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section id="toolkit" className="relative py-24 overflow-hidden bg-[var(--ink-soft)]">
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-72 rounded-full bg-[var(--mint)] blur-[150px] opacity-[0.06] pointer-events-none"
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, 40, -30, 0], y: [0, -25, 20, 0] }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="eyebrow text-sm text-[var(--mint)] mb-4 text-center md:text-left"
        >
          {"// stack.json"}
          <motion.span
            aria-hidden
            className="inline-block w-[7px] h-[1em] bg-[var(--mint)] ml-1 align-middle"
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: [1, 1, 0, 0] }}
            transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
          />
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl sm:text-5xl font-bold text-[var(--paper)] mb-16 text-center md:text-left"
        >
          My Toolkit
        </motion.h2>

        <div className="space-y-14">
          {categories.map((category, catIndex) => (
            <div key={category.tag}>
              <div className="flex items-center gap-3 mb-6">
                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  variants={badgeVariants}
                  className="text-xs font-mono-ui text-[var(--mint)]"
                >
                  {String(catIndex + 1).padStart(2, "0")}
                </motion.span>

                <motion.h3
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.4, delay: 0.05 }}
                  className="font-display text-xl sm:text-2xl font-semibold text-[var(--paper)]"
                >
                  {category.title}
                </motion.h3>

                <motion.span
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  variants={lineVariants}
                  style={{ transformOrigin: "left" }}
                  className="flex-1 h-px bg-[var(--mint-dim)]/30"
                />
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardVariants}
                    whileHover={
                      canHover && !shouldReduceMotion
                        ? {
                            y: -6,
                            scale: 1.04,
                            boxShadow: "0 12px 30px rgba(79,227,176,0.18)",
                            transition: { duration: 0.25, ease: "easeOut" },
                          }
                        : undefined
                    }
                    whileTap={{ scale: 0.94 }}
                    className="group flex flex-col items-center gap-4 p-6 rounded-xl card-surface hover:border-[var(--mint)]/50 transition-colors duration-200"
                  >
                    <motion.div
                      className="w-14 h-14 flex items-center justify-center"
                      whileHover={
                        canHover && !shouldReduceMotion
                          ? { rotate: [0, -8, 8, -4, 0], transition: { duration: 0.5 } }
                          : undefined
                      }
                      whileTap={
                        !canHover && !shouldReduceMotion
                          ? { rotate: [0, -6, 6, 0], transition: { duration: 0.4 } }
                          : undefined
                      }
                    >
                      <Image src={skill.icon} alt={skill.name} width={56} height={56} />
                    </motion.div>
                    <div className="text-center">
                      <span className="text-sm font-mono-ui text-[var(--muted)] group-hover:text-[var(--paper)] transition-colors">
                        {skill.name}
                      </span>
                      {skill.note && (
                        <span className="block text-[10px] font-mono-ui text-[var(--muted)]/60 mt-1">
                          {skill.note}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
