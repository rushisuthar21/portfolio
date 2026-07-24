import Hero from "./components/Hero";
import About from "./components/About";
import ToolKit from "./components/ToolKit";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--ink)]">
      <Hero />
      <About />
      <ToolKit />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
