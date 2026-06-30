import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import FloatingBubbles from "./components/FloatingBubbles";
import Contact from "./components/Contact";

const sections = ["Home", "About", "Experience", "Projects", "Skills", "Education", "Contact"];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f3dfc5] via-[#3bb7c9] to-[#001f3f] text-white ">
      
  <FloatingBubbles />

   <Navigation />
   <Hero />   

      <section id="about" className=" px-8 py-24 md:px-20">
        <p className="text-sm uppercase tracking-[0.3em] text-white/70">About Me</p>
        <h2 className="mt-4 text-4xl font-bold" style={{
  textShadow:
    "0 2px 4px rgba(0,0,0,0.18), 0 8px 18px rgba(0,0,0,0.15)"
}}>Curious. Analytical. Empathetic.</h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#062447]/90  ">
          My journey began in Computer Science, where I learned to think logically 
          and solve complex problems. 
          Along the way, I realized I was most excited by understanding people, 
          uncovering business needs, and translating them into practical solutions. 
          Today, I combine analytical thinking with people skills to build products,
           improve processes, and drive data-centric decisions.
        </p>
      </section>

    <Experience />

    <Projects />

  <Skills />
  <Education />

  <Contact />
    </main>
  );
}
