import {
  FaGraduationCap,
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

const educations = [
  {
    title: "Post Graduate in Full Stack Software Development",
    company: "Lambton College in Toronto",
    date: "Jan 2024 - Sep 2025",
    description: [
      "🎓 Completed a Post Graduate Certificate in Full Stack Software Development with an overall GPA of 3/4, focusing on modern web technologies and software engineering principles.",
      "💻 Developed and deployed full-stack web applications through hands-on academic projects using industry-standard frameworks.",
      "🧠 Strengthened problem-solving abilities through coursework in Data Structures & Algorithms, Object-Oriented Programming, and database management.",
      "🤝 Volunteered with Google Developer Group (GDG) Lambton College as a Graphic Designer and Design Lead, contributing to tech events, branding, and student community engagement.",
    ],
    techStack: ["Web App Development", "OOP", "Database Management", "DSA"],
    icon: <FaGraduationCap className="text-yellow-500" />,
  },
  {
    title: "Bachelor of Science in Information Technology",
    company: "GLS University",
    date: "Jun 2019 - Mar 2022",
    description: [
      "🎓 Completed Bachelor of Science in Information Technology with a strong foundation in computer science fundamentals.",
      "💻 Studied core subjects including programming, web development, databases, operating systems, and software engineering.",
      "🧠 Built academic projects that strengthened problem-solving, logical thinking, and real-world application development skills.",
    ],
    techStack: [
      "Programming Fundamentals",
      "Data Structures",
      "Database Management",
      "Web Development",
      "Software Engineering",
    ],
    icon: <FaGraduationCap className="text-yellow-500" />,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-black py-20 font-quicksand"
    >
      {/* Background Gradient Blobs */}
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full blur-3xl opacity-40 z-0"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300 dark:bg-yellow-500 rounded-full blur-3xl opacity-30 z-0"
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
          Academic Journey 🎓
          <span className="absolute inset-x-0 bottom-[-10px] h-4 bg-yellow-300 opacity-50 blur-md rounded-lg -z-10"></span>
        </h2>
      </div>

      {/* Education Cards */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-20">
        {educations.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-10 flex flex-col md:flex-row items-start md:items-start z-20"
          >
            {/* Date + Icon Wrapper */}
            <div className="flex items-center mb-4 md:mb-0 md:w-1/4 justify-center md:justify-end px-4">
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                {edu.date}
              </span>
              <div className="p-2 ml-2 bg-white dark:bg-gray-800 shadow-lg rounded-full border border-yellow-400">
                {edu.icon}
              </div>
            </div>

            {/* Card */}
            <div className="w-full md:w-3/4 bg-white/70 dark:bg-gray-800/60 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-green-300/40">
              <h3 className="text-2xl font-bold text-yellow-700 dark:text-yellow-400">
                {edu.title}
              </h3>
              <h4 className="text-lg font-semibold text-green-700 dark:text-green-400 mt-1">
                {edu.company}
              </h4>

              <div className="mt-3 space-y-2 text-gray-800 dark:text-gray-200">
                {edu.description.map((d, i) => (
                  <p key={i}>{d}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {edu.techStack.map((tech, i) => (
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

export default Education;