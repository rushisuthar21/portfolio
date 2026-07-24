"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

// EmailJS config — replace these with the values from your EmailJS
// dashboard (Account > General for the public key; Email Services /
// Email Templates for the other two IDs) if your account changes.
const EMAILJS_SERVICE_ID = "service_7n5e8te";
const EMAILJS_TEMPLATE_ID = "template_q7koe6v";
const EMAILJS_PUBLIC_KEY = "H041afUojg5XmW-hY";
const RECEIVER_EMAIL = "sutharrushi88@gmail.com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    success: boolean;
    error: boolean;
    message?: string;
  }>({ success: false, error: false });
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ success: false, error: true, message: "Please fill in every field." });
      return;
    }

    setSending(true);
    setStatus({ success: false, error: false });

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          message: formData.message,
          to_email: RECEIVER_EMAIL,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setStatus({ success: true, error: false });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      // Log the real EmailJS error (status/text) to the browser console so it's
      // easy to diagnose — e.g. "422 The recipients address is empty" usually
      // means the template's "To Email" field isn't set, and "401/403" means
      // the service/template/public key IDs don't match your EmailJS account.
      console.error("Error sending email:", error);
      const detail =
        typeof error === "object" && error !== null && "text" in error
          ? String((error as { text?: string }).text)
          : "Please try again or email me directly.";
      setStatus({ success: false, error: true, message: detail });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-[var(--ink)] grid-backdrop">
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[var(--mint)] blur-[140px] opacity-[0.07] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[var(--amber)] blur-[140px] opacity-[0.06] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <div className="text-center mb-16">
          <p className="eyebrow text-sm text-[var(--mint)] mb-4">// contact.send()</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--paper)]">
            Let&apos;s Connect
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Left Section */}
          <motion.div
            className="md:w-2/5 text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl text-[var(--muted)] leading-relaxed">
              Drop a message and let&apos;s get started ✨
            </p>

            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/rushi-suthar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-xl card-surface text-[var(--muted)] hover:text-[var(--mint)] hover:border-[var(--mint)]/40 transition-colors"
              >
                <FaLinkedin size={24} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/rushisuthar21/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-xl card-surface text-[var(--muted)] hover:text-[var(--mint)] hover:border-[var(--mint)]/40 transition-colors"
              >
                <FaGithub size={24} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:sutharrushi88@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-xl card-surface text-[var(--muted)] hover:text-[var(--mint)] hover:border-[var(--mint)]/40 transition-colors"
              >
                <FaEnvelope size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Section – Contact Form */}
          <motion.div
            className="md:w-3/5 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-xl overflow-hidden card-surface">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--line)] bg-[var(--ink-soft-2)]">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--coral)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--amber)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--mint)]" />
                <span className="ml-2 text-sm font-mono-ui text-[var(--muted)]">send-message.ts</span>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-5">
                <div>
                  <label className="block text-sm font-mono-ui text-[var(--muted)] mb-2">name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full p-4 text-lg bg-[var(--ink)] border border-[var(--line)] rounded-lg text-[var(--paper)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--mint)]/50 focus:border-[var(--mint)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono-ui text-[var(--muted)] mb-2">email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full p-4 text-lg bg-[var(--ink)] border border-[var(--line)] rounded-lg text-[var(--paper)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--mint)]/50 focus:border-[var(--mint)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-mono-ui text-[var(--muted)] mb-2">message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What's on your mind?"
                    rows={4}
                    className="w-full p-4 text-lg bg-[var(--ink)] border border-[var(--line)] rounded-lg text-[var(--paper)] placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--mint)]/50 focus:border-[var(--mint)] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full font-mono-ui font-semibold text-lg p-4 rounded-lg transition-colors bg-[var(--mint)] hover:bg-[var(--paper)] text-[var(--ink)] disabled:opacity-60"
                >
                  {sending ? "sending..." : "send_message()"}
                </button>

                {status.success && (
                  <p className="text-[var(--mint)] text-center text-sm font-mono-ui">
                    ✓ message sent successfully
                  </p>
                )}
                {status.error && (
                  <p className="text-[var(--coral)] text-center text-sm font-mono-ui">
                    ✗ {status.message || "failed to send — try again later"}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
