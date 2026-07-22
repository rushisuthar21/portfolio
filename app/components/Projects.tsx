"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ---------------- TYPES ---------------- */
interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  video?: string;
  githubLink?: string;
  tech: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

/* ---------------- SLIDER IMAGES ---------------- */
const ikeaImages = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png", "/7.png"];

const sunriseImages = [
  "/10.png", "/11.png", "/12.png", "/13.png", "/10.png", "/11.png", "/12.png",
];

const aiDocImages = ["/ai1.png", "/ai2.png"];

const shipImages = [
  "/21.png", "/22.png", "/23.png", "/24.png", "/25.png", "/21.png", "/22.png",
];

/* ---------------- PROJECTS DATA ---------------- */
const projects: Project[] = [
  {
    id: 1,
    title: "IKEA Home Decor & Furniture Web Application",
    description:
      "A full-stack MERN e-commerce web application simulating an IKEA-style furniture store with secure authentication, product filtering, cart, checkout, and admin management features.",
    images: ikeaImages,
    githubLink: "https://github.com/rushisuthar21/IKEA-Web-Application-MERN-Stack",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    id: 2,
    title: "AI Document Chatbot",
    description:
      "An AI-powered document chatbot that allows users to upload documents and interact with them through natural language conversations. Built for document understanding, retrieval, and intelligent Q&A.",
    images: aiDocImages,
    githubLink: "https://github.com/rushisuthar21/ai-doc-chatbot",
    tech: ["Next.js", "TypeScript", "OpenAI", "LangChain", "Vector Database", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Travelion Inc. – Travel & Tourism Website UI Design",
    description:
      "A modern, immersive travel website UI designed in Figma to help users discover destinations, explore accommodations, and plan trips — with a visually appealing hero, destination showcases, and conversion-focused CTAs.",
    images: [],
    video: "/Travel_Website.mp4",
    githubLink: "https://github.com/rushisuthar21/Travelion-Website-UI-Design",
    tech: ["Figma", "Components & Variants"],
  },
  {
    id: 4,
    title: "Donut Packaging – Figma Motion Design",
    description:
      "An interactive Figma animation exploring product packaging motion — smooth transitions, micro-interactions, and playful timing built entirely with Figma's Smart Animate.",
    images: [],
    video: "/Donut_Figma.mp4",
    tech: ["Figma", "Smart Animate", "Motion Design", "Prototyping"],
  },
  {
    id: 5,
    title: "Red Bull – Figma Motion Design",
    description:
      "A dynamic product-focused animation prototype built in Figma, showcasing brand-driven motion design with fluid transitions and energetic pacing.",
    images: [],
    video: "/Red_Bull.mp4",
    tech: ["Figma", "Smart Animate", "Motion Design", "Prototyping"],
  },
  {
    id: 6,
    title: "Sunrise Airways – Airline Reservation System",
    description:
      "A Java-based airline reservation system with role-based authentication, ticket booking, flight management, and booking history.",
    images: sunriseImages,
    githubLink: "https://github.com/rushisuthar21/Sunrise-Airlines---Airline-Management-System",
    tech: ["Java", "Swing", "AWT", "MySQL"],
  },
  {
    id: 7,
    title: "Shipping Company Client Records Management System",
    description: "A Java-based web application built using JSP, Servlets, JDBC, and Bootstrap.",
    images: shipImages,
    githubLink: "https://github.com/rushisuthar21/Roosewald-Shipping-Company",
    tech: ["Java", "JSP", "Servlets", "JDBC", "Bootstrap", "MySQL"],
  },
];

/* ---------------- PROJECT CARD ---------------- */
const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const reversed = index % 2 === 1;

  useEffect(() => {
    if (project.video || !project.images.length) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [project.images, project.video]);

  const currentImage =
    project.images.length > 0 ? project.images[currentSlide % project.images.length] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      className="card-surface rounded-xl overflow-hidden hover:border-[var(--mint)]/40 transition-colors"
    >
      {/* Window title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--line)] bg-[var(--ink)]">
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--coral)]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--amber)]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--mint)]" />
        <span className="ml-2 text-sm font-mono-ui text-[var(--muted)] truncate">
          {project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 34)}.tsx
        </span>
      </div>

      <div className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"}`}>
        {/* Media */}
        <div className="md:w-1/2 bg-[var(--ink)] flex items-center justify-center p-4">
          {project.video ? (
            <video
              key={project.video}
              src={project.video}
              className="w-full h-[320px] lg:h-[380px] object-contain rounded-lg"
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          ) : currentImage ? (
            <motion.img
              key={currentSlide}
              src={currentImage}
              alt={project.title}
              className="w-full h-[320px] lg:h-[380px] object-contain rounded-lg"
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          ) : (
            <div className="text-[var(--muted)] text-sm">No image available</div>
          )}
        </div>

        {/* Content */}
        <div className="md:w-1/2 p-8 sm:p-10 space-y-5">
          <h3 className="text-2xl font-semibold font-display text-[var(--paper)]">{project.title}</h3>
          <p className="text-base text-[var(--muted)] leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-[var(--ink)] border border-[var(--line)] text-[var(--mint)] text-sm rounded-md font-mono-ui"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 px-6 py-3 rounded-lg bg-[var(--paper)] hover:bg-[var(--mint)] text-[var(--ink)] font-mono-ui text-base font-medium transition-colors"
            >
              View on GitHub →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */
const Projects: React.FC = () => {
  return (
    <section id="projects" className="relative overflow-hidden py-24 bg-[var(--ink)]">
      <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-[var(--mint)] blur-[140px] opacity-[0.06] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <p className="eyebrow text-sm text-[var(--mint)] mb-4">// projects/</p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-[var(--paper)] mb-16">
          Things I&apos;ve built
        </h2>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
