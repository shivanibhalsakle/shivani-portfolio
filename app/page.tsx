import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import FloatingBubbles from "./components/FloatingBubbles";

const sections = ["Home", "About", "Experience", "Projects", "Skills", "Education", "Contact"];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f3dfc5] via-[#3bb7c9] to-[#001f3f] text-white">
      
  <FloatingBubbles />

   <Navigation />
   <Hero />   

      <section id="about" className="min-h-screen px-8 py-24 md:px-20">
        <p className="text-sm uppercase tracking-[0.3em] text-white/70">01 About Me</p>
        <h2 className="mt-4 text-4xl font-bold">Curious mind. Analytical thinker. Impact driven.</h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
          Recent NYU Tandon graduate with experience in business analysis,
          data analytics, and cross-functional project work. I enjoy bridging
          the gap between business needs and technical solutions.
        </p>
      </section>

    <Experience />

    <Projects />

      <section id="skills" className="min-h-screen px-8 py-24 md:px-20">
        <p className="text-sm uppercase tracking-[0.3em] text-white/70">04 Skills</p>
        <h2 className="mt-4 text-4xl font-bold">Skills</h2>
      </section>

  <Skills />
  <Education />

      <section id="contact" className="min-h-screen px-8 py-24 md:px-20">
        <p className="text-sm uppercase tracking-[0.3em] text-white/70">06 Contact</p>
        <h2 className="mt-4 text-4xl font-bold">Let’s Connect</h2>
      </section>
    </main>
  );
}
