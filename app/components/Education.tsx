"use client";

import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const educations = [
  {
    title: "Post Graduate in Full Stack Software Development",
    company: "Lambton College, Toronto",
    date: "Jan 2024 – Sep 2025",
    description: [
      "Completed the Post Graduate Certificate with an overall GPA of 3/4.",
      "Developed and deployed full-stack web applications through hands-on academic projects.",
      "Volunteered with Google Developer Group (GDG) Lambton College as Graphic Designer and Design Lead — tech events, branding, and student community engagement.",
    ],
    techStack: ["Web App Development", "OOP", "Database Management", "DSA"],
  },
  {
    title: "Bachelor of Science in Information Technology",
    company: "Gujarat Law Society (GLS University)",
    date: "Jun 2019 – Mar 2022",
    description: [
      "Completed a B.Sc. IT with a strong foundation in computer science fundamentals.",
      "Studied programming, web development, databases, operating systems, and software engineering.",
      "Built academic projects that strengthened problem-solving and logical thinking.",
    ],
    techStack: ["Programming Fundamentals", "Data Structures", "Database Management", "Web Development", "Software Engineering"],
  },
];

const Education = () => {
  return (
    <section id="education" className="relative overflow-hidden bg-[var(--ink-soft)] py-24">
      <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-[var(--amber)] blur-[130px] opacity-[0.07] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10">
        <p className="eyebrow text-sm text-[var(--amber)] mb-4">// academic-journey.log</p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--paper)] mb-16">
          Academic Journey
        </h2>

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[var(--line)]" />

          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-14 mb-12 last:mb-0"
            >
              <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[var(--ink)] border border-[var(--amber)]/50 flex items-center justify-center">
                <FaGraduationCap className="text-[var(--amber)] text-sm" />
              </div>

              <div className="card-surface rounded-xl p-8 hover:border-[var(--amber)]/40 transition-colors">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-2xl font-semibold text-[var(--paper)] font-display">{edu.title}</h3>
                  <span className="font-mono-ui text-sm text-[var(--mint)]">{edu.date}</span>
                </div>
                <h4 className="text-base font-medium text-[var(--amber)] mb-5">{edu.company}</h4>

                <ul className="space-y-2">
                  {edu.description.map((d, i) => (
                    <li key={i} className="text-base text-[var(--muted)] leading-relaxed pl-4 relative">
                      <span className="absolute left-0 text-[var(--amber)]">–</span>
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-5">
                  {edu.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-[var(--ink)] border border-[var(--line)] text-[var(--paper)]/80 text-sm rounded-md font-mono-ui"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
