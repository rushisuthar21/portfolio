"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaCloud,
} from "react-icons/fa";


/* ---------------- SLIDER IMAGES ---------------- */
const ikeaImages = [
  "/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png", "/7.png"];
const sunriseImages = [
  "/10.png", "/11.png", "/12.png", "/13.png", "/10.png", "/11.png", "/12.png" ];
const shipImages = [
  "/21.png", "/22.png", "/23.png", "/24.png", "/25.png", "/21.png", "/22.png"];

/* ---------------- PROJECTS DATA ---------------- */
const projects = [
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
    title: "Sunrise Airways – Airline Reservation System",
    description:
      "A Java-based airline reservation system with role-based authentication, ticket booking, flight management, and booking history.",
    images: sunriseImages,
    githubLink:
      "https://github.com/rushisuthar21/Sunrise-Airlines---Airline-Management-System",
    tech: ["Java", "Swing", "AWT", "MySQL"],
  },
  {
    id: 3,
    title: "Shipping Company Client Records Management System",
    description:
      "A Java-based web application built using JSP, Servlets, JDBC, and Bootstrap to manage shipping company client records. Supports full CRUD (Create, Read, Update, Delete) functionality following MVC architecture.",
    images: shipImages,
    githubLink:
      "https://github.com/rushisuthar21/Roosewald-Shipping-Company",
    tech: [
      "Java", "JSP", "Servlets", "JDBC", "Bootstrap", "MySQL", "MVC Architecture"
    ],
  },
  {
    id: 4,
    title: "Talkr – Social Networking Mobile App",
    description:
      "A Flutter-based social networking app with real-time chat, user authentication, and content sharing powered by Firebase.",
    images: ["/talkr2.jpeg", "/talkr3.jpeg", "/talkr4.jpeg", "/talkr5.jpeg", "/talkr6.jpeg", "/talkr7.jpeg"],
      githubLink:
      "https://github.com/rushisuthar21/talkr-social-media-app",
    tech: ["Flutter", "Dart", "Firebase"],
  },
];

const Projects = () => {
  const [showTech, setShowTech] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setTimeout(() => setShowTech(true), 500);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ikeaImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="projects"
      className="font-quicksand relative overflow-hidden py-20 bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-black"
    >
      {/* HEADING */}
      <div className="flex justify-center mt-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Projects 🛠️
        </h2>
      </div>

      {/* PROJECT CARDS */}
      <div className="mt-20 max-w-6xl mx-auto px-6 space-y-20">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.3 }}
            className="flex flex-col md:flex-row bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-yellow-300 shadow-xl rounded-2xl p-10 gap-10"
          >
            {/* LEFT */}
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold text-yellow-200 dark:text-yellow-400">
                {project.title}
              </h3>

              <p className="text-gray-800 dark:text-gray-200">
                {project.description}
              </p>

              {showTech && project.tech && (
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
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
                className="inline-block mt-4 px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg"
              >
                GitHub
              </a>
            </div>

            {/* RIGHT MEDIA */}
            <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
              {project.images && (
                <motion.img
                  key={currentSlide}
                  src={project.images[currentSlide % project.images.length]}
                  className="w-full h-[350px] object-contain"
                  initial={{ opacity: 0.5, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;