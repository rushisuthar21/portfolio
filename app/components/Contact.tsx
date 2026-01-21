"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ success: false, error: false });

  // ✅ Detect if any input has value
  const hasAnyValue =
    formData.name.trim() !== "" ||
    formData.email.trim() !== "" ||
    formData.message.trim() !== "";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ success: false, error: true });
      return;
    }

    try {
      await emailjs.send(
        "service_bl0rvio",
        "template_0zhanl5",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "64b2-KnLKskmMlVNU"
      );

      setStatus({ success: true, error: false });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({ success: false, error: true });
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-black"
    >
      {/* Floating gradient blobs */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full blur-3xl opacity-40"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-red-300 dark:bg-red-500 rounded-full blur-3xl opacity-30"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 font-sarala z-10">
        <div className="text-center mb-16">
          <h2 className="relative text-4xl font-bold inline-block heading text-gray-900 dark:text-white">
            Let's Connect !!!
            <span className="absolute inset-x-0 bottom-[-6px] h-6 bg-yellow-200 dark:bg-yellow-500 blur-sm opacity-40 rounded-md translate-y-2"></span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between font-quicksand gap-12">
          {/* Left Section */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Drop a message and let’s get started! ✨
            </p>

            <div className="mt-8 flex justify-center md:justify-start space-x-8 text-yellow-400">
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/rushi-suthar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={34} className="hover:text-green-600" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/rushisuthar21/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={34} className="hover:text-green-600" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href="mailto:sutharrushi88@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope size={34} className="hover:text-green-600" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Section – Contact Form */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              className="backdrop-blur-xl bg-white/40 dark:bg-gray-800/40 p-6 rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/20"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full p-3 bg-white/70 dark:bg-gray-900/40 
                border border-red-300 dark:border-gray-600 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-red-400 mb-4
                ${formData.name ? "text-white" : "text-gray-800 dark:text-gray-300"}`}
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full p-3 bg-white/70 dark:bg-gray-900/40 
                border border-red-300 dark:border-gray-600 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-red-400 mb-4
                ${formData.email ? "text-white" : "text-gray-800 dark:text-gray-300"}`}
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className={`w-full p-3 bg-white/70 dark:bg-gray-900/40 
                border border-red-300 dark:border-gray-600 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-red-400 mb-4
                ${formData.message ? "text-white" : "text-gray-800 dark:text-gray-300"}`}
              ></textarea>

              {/* ✅ BUTTON COLOR CHANGE */}
              <button
                type="submit"
                className={`w-full font-semibold p-3 rounded-xl transition shadow-md
                ${
                  hasAnyValue
                    ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                    : "bg-yellow-500 hover:bg-yellow-600 text-white"
                }`}
              >
                SEND MESSAGE
              </button>

              {status.success && (
                <p className="text-green-500 mt-3 text-center font-medium">
                  ✅ Message sent successfully!
                </p>
              )}
              {status.error && (
                <p className="text-red-500 mt-3 text-center font-medium">
                  ❌ Failed to send message. Try again later.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;