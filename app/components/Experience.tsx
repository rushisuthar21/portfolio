"use client";

import {
  FaBriefcase,
  FaCode,
  FaRocket,
  FaLaptopCode,
  FaDatabase,
  FaServer,
  FaCloud,
} from "react-icons/fa";
import { motion } from "framer-motion";

const floatingIcons = [
  { icon: <FaCode className="text-blue-300 text-2xl" /> },
  { icon: <FaRocket className="text-blue-400 text-2xl" /> },
  { icon: <FaLaptopCode className="text-blue-400 text-2xl" /> },
  { icon: <FaDatabase className="text-blue-500 text-2xl" /> },
  { icon: <FaServer className="text-blue-400 text-2xl" /> },
  { icon: <FaCloud className="text-blue-300 text-2xl" /> },
];

const experiences = [
  {
    title: "Full Stack Developer - Co-op",
    company: "Credwise Financial Inc.",
    date: "May 2025 - Aug 2025",
    description: [
      "🚀 Collaborated with the RewardsX Internal Applications Team to enhance and maintain the Live Module using Next.js, React.js, Redux, and Tailwind CSS.",
      "🛠️ Designed, developed, tested, and deployed full-stack features with Node.js, PL/SQL, and MongoDB.",
      "⚡ Optimized performance and user experience, achieving 30% performance improvement and 40% reduction in bug reports.",
      "📈 Improved product impact with 20% higher user retention and 15% boost in UX ratings.",
    ],
    techStack: [
      "Next.js",
      "React.js",
      "Redux",
      "Tailwind CSS",
      "PL/SQL",
      "MongoDB",
    ],
    icon: <FaBriefcase className="text-red-500 text-xl" />,
  },
  {
    title: "Marketing & Sales Intern",
    company: "Sultani Marketing",
    date: "Aug 2024 - Feb 2025",
    description: [
      "🚀 Led end-to-end website redesign from scratch, focusing on modern UI, clear content structure, and brand consistency to improve user experience and online presence.",
      "🔍 Conducted market, audience, and competitor research to support marketing campaigns, content strategy, and data-driven sales decisions.",
      "📊 Created and managed engaging content for social media platforms and blogs, while contributing innovative ideas to marketing strategies, lead generation, and sales initiatives.",
    ],
    techStack: [
      "Website Redesign",
      "Content Creation",
      "Social Media Marketing",
      "Market Research",
      "Competitor Analysis",
      "Branding",
      "SEO",
      "Content Marketing",
    ],
    icon: <FaBriefcase className="text-red-500 text-xl" />,
  },
  {
    title: "SEO Trainee",
    company: "21Twelve Interactive LLP",
    date: "May 2023 - Nov 2023",
    description: [
      "🚀 Created SEO-optimized content for social media, blogs, and websites, increasing organic traffic by 78% in 2–3 months.",
      "🔍 Managed on-page and off-page SEO, including meta optimization, keyword research, internal linking, and competitor analysis.",
      "🔗 Built quality backlinks through guest posting, business listings, broken links, social bookmarking, and Quora engagement.",
      "📊 Tracked and improved SEO performance using Google Analytics, Search Console, SEMrush, Ahrefs, Screaming Frog, and Keyword Planner.",
    ],
    techStack: [
      "Google Analytics",
      "Google Search Console",
      "SEMrush",
      "Ahrefs",
      "Screaming Frog",
      "Google Keyword Planner",
      "SEO",
      "Content Marketing",
    ],
    icon: <FaBriefcase className="text-red-500 text-xl" />,
  },
  {
    title: "Web Developer",
    company: "Shivaay Software Solutions",
    date: "May 2022 - Apr 2023",
    description: [
      "🚀 Collaborated with the development team to build and maintain responsive web applications using HTML, CSS, JavaScript, React.js, Node.js, and jQuery.",
      "⚡ Optimized website performance, improving load times by 30% through efficient coding, testing, and asset optimization.",
      "🛠️ Reduced API call errors by 20% and increased transaction success rates by 15%, enhancing overall system reliability.",
      "📱 Ensured seamless cross-browser and multi-device compatibility, delivering intuitive and consistent user experiences.",
    ],
    techStack: [
      "Node.js",
      "React.js",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
    ],
    icon: <FaBriefcase className="text-red-500 text-xl" />,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-black py-20 font-quicksand"
    >
      {/* Background Gradient Blobs */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full blur-3xl opacity-40 z-0"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-red-300 dark:bg-red-500 rounded-full blur-3xl opacity-30 z-0"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Floating Icons */}
      <div className="block z-30 absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 800 - 400,
              y: Math.random() * 800 - 400,
            }}
            animate={{
              x: [Math.random() * 500 - 250, Math.random() * 500 - 250],
              y: [Math.random() * 500 - 250, Math.random() * 500 - 250],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "reverse",
            }}
            className="absolute opacity-60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      {/* Section Heading */}
      <div className="relative text-center mb-12 px-4 z-20">
        <h2 className="text-4xl md:text-5xl font-bold font-sarala text-gray-900 dark:text-white inline-block relative">
          Professional Experience 💼
          <span className="absolute inset-x-0 bottom-[-10px] h-4 bg-red-300 opacity-50 blur-md rounded-lg -z-10"></span>
        </h2>
      </div>

      {/* Experience Cards */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-20">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-10 flex flex-col md:flex-row items-start z-20"
          >
            {/* Date + Icon Wrapper */}
            <div className="flex items-center mb-4 md:mb-0 md:w-1/4 justify-center md:justify-end px-4">
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                {exp.date}
              </span>
              <div className="p-2 ml-2 bg-white dark:bg-gray-800 shadow-lg rounded-full border border-red-400">
                {exp.icon}
              </div>
            </div>

            {/* Card */}
            <div className="w-full md:w-3/4 bg-white/70 dark:bg-gray-800/60 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-red-300/40">
              <h3 className="text-2xl font-bold text-red-700 dark:text-red-400">
                {exp.title}
              </h3>
              <h4 className="text-lg font-semibold text-red-500 dark:text-red-300 mt-1">
                {exp.company}
              </h4>

              <div className="mt-3 space-y-2 text-gray-800 dark:text-gray-200">
                {exp.description.map((d, i) => (
                  <p key={i}>{d}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-green-800 text-white text-sm rounded-lg font-semibold shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;