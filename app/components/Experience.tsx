"use client";

import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer - Co-op",
    company: "Credwise Financial Inc.",
    date: "May 2025 – Dec 2025",
    description: [
      "Collaborated with the RewardsX Internal Applications Team to enhance and maintain the Live Module using Next.js, React.js, Redux, and Tailwind CSS.",
      "Designed, developed, tested, and deployed full-stack features with Node.js, PL/SQL, and MongoDB.",
      "Optimized performance and UX, achieving a 30% performance improvement and 40% reduction in bug reports.",
      "Improved product impact with 20% higher user retention and 15% boost in UX ratings.",
    ],
    techStack: ["Next.js", "React.js", "Redux", "Tailwind CSS", "PL/SQL", "MongoDB"],
  },
  {
    title: "Web Developer",
    company: "Shivaay Software Solutions",
    date: "May 2022 – Apr 2023",
    description: [
      "Collaborated with the development team to build and maintain responsive web applications using HTML, CSS, JavaScript, React.js, Node.js, and jQuery.",
      "Optimized website performance, improving load times by 30% through efficient coding, testing, and asset optimization.",
      "Reduced API call errors by 20% and increased transaction success rates by 15%.",
      "Ensured seamless cross-browser and multi-device compatibility for a consistent user experience.",
    ],
    techStack: ["Node.js", "React.js", "HTML", "CSS", "JavaScript", "jQuery"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative overflow-hidden bg-[var(--ink)] py-16">
      <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-[var(--mint)] blur-[130px] opacity-[0.06] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10">
        <p className="eyebrow text-sm text-[var(--mint)] mb-4">// git log --experience</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--paper)] mb-10">
          Professional Experience
        </h2>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[var(--line)]" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-14 mb-12 last:mb-0"
            >
              {/* Node */}
              <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[var(--ink-soft)] border border-[var(--mint)]/50 flex items-center justify-center">
                <FaBriefcase className="text-[var(--mint)] text-sm" />
              </div>

              <div className="card-surface rounded-xl p-8 hover:border-[var(--mint)]/40 transition-colors">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-2xl font-semibold text-[var(--paper)] font-display">{exp.title}</h3>
                  <span className="font-mono-ui text-sm text-[var(--amber)]">{exp.date}</span>
                </div>
                <h4 className="text-base font-medium text-[var(--mint)] mb-5">{exp.company}</h4>

                <ul className="space-y-2">
                  {exp.description.map((d, i) => (
                    <li key={i} className="text-base text-[var(--muted)] leading-relaxed pl-4 relative">
                      <span className="absolute left-0 text-[var(--mint)]">–</span>
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-5">
                  {exp.techStack.map((tech, i) => (
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

export default Experience;
