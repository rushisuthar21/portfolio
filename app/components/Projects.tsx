"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ---------------- TYPES ---------------- */
interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  githubLink: string;
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

const aiDocImages = ["/ai1.png", "/ai2.png",
];

const travelImages = [
  "/travel1.png", "/travel2.png", "/travel3.png", "/travel4.png"];
  
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
    githubLink:
      "https://github.com/rushisuthar21/IKEA-Web-Application-MERN-Stack",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
  id: 2,
  title: "AI Document Chatbot",
  description:
    "An AI-powered document chatbot that allows users to upload documents and interact with them through natural language conversations. Built with modern AI technologies for document understanding, retrieval, and intelligent question answering.",
  images: aiDocImages,
  githubLink: "https://github.com/rushisuthar21/ai-doc-chatbot",
  tech: [
    "Next.js",
    "TypeScript",
    "OpenAI",
    "LangChain",
    "Vector Database",
    "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Travelion Inc. – Travel & Tourism Website UI Design",
    description:
      "Designed a modern and immersive travel website UI in Figma that helps users discover destinations, explore accommodations, and plan memorable trips. The design features a visually appealing hero section, destination showcases, accommodation categories, intuitive navigation, and conversion-focused call-to-action elements.",
    images: travelImages,
    githubLink: "https://github.com/rushisuthar21/Travelion-Website-UI-Design",
    tech: ["Figma", "Components & Variants"],
  },
  {
    id: 4,
    title: "Sunrise Airways – Airline Reservation System",
    description:
      "A Java-based airline reservation system with role-based authentication, ticket booking, flight management, and booking history.",
    images: sunriseImages,
    githubLink:
      "https://github.com/rushisuthar21/Sunrise-Airlines---Airline-Management-System",
    tech: ["Java", "Swing", "AWT", "MySQL"],
  },
  {
    id: 5,
    title: "Shipping Company Client Records Management System",
    description:
      "A Java-based web application built using JSP, Servlets, JDBC, and Bootstrap.",
    images: shipImages,
    githubLink:
      "https://github.com/rushisuthar21/Roosewald-Shipping-Company",
    tech: ["Java", "JSP", "Servlets", "JDBC", "Bootstrap", "MySQL"],
  }
];

/* ---------------- PROJECT CARD ---------------- */
const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [showTech, setShowTech] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowTech(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!project.images.length) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [project.images]);

  const currentImage =
    project.images.length > 0
      ? project.images[currentSlide % project.images.length]
      : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="flex flex-col md:flex-row bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-yellow-300 shadow-xl rounded-2xl p-10 gap-10"
    >
      {/* LEFT */}
      <div className="md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold text-yellow-500 dark:text-yellow-400">
          {project.title}
        </h3>

        <p className="text-gray-800 dark:text-gray-200">
          {project.description}
        </p>

        {showTech && (
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech: string, i: number) => (
              <span
                key={i}
                className="bg-green-600 text-white px-4 py-1 rounded-lg text-sm font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg"
        >
          GitHub
        </a>
      </div>

      {/* RIGHT IMAGE */}
      <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
        {currentImage ? (
          <motion.img
            key={currentSlide}
            src={currentImage}
            alt={project.title}
            className="w-full h-[350px] object-contain"
            initial={{ opacity: 0.5, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          />
        ) : (
          <div className="text-gray-400">No Image Available</div>
        )}
      </div>
    </motion.div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */
const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="font-quicksand relative overflow-hidden py-20 bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-black"
    >
      <div className="relative text-center mb-12 px-4 z-20">
        <h2 className="text-4xl md:text-5xl font-bold font-sarala text-gray-900 dark:text-white inline-block relative">
          Projects 🛠️
        <span className="absolute inset-x-0 bottom-[-10px] h-4 bg-yellow-300 opacity-50 blur-md rounded-lg -z-10"></span>
        </h2>
      </div>

      <div className="mt-9 max-w-7xl mx-auto px-6 space-y-5">
        {projects.map((project: Project, index: number) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;