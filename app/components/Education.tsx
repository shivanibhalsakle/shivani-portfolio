"use client";
import { useRef, useState } from "react";
import { certifications } from "../data/certifications";

export default function Education() {
    const scrollRef = useRef<HTMLDivElement>(null);
const [scrollProgress, setScrollProgress] = useState(0);

const handleScroll = () => {
  const el = scrollRef.current;
  if (!el) return;

  const maxScroll = el.scrollHeight - el.clientHeight;
  const progress = maxScroll > 0 ? el.scrollTop / maxScroll : 0;

  setScrollProgress(progress);
};
  return (
    <section id="education" className="min-h-screen px-8 py-24 md:px-20">
      
      <div className="grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
<div className="mb-10">
        <h2 className="text-4xl font-bold text-white" style={{
  textShadow:
    "0 2px 4px rgba(0,0,0,0.18), 0 8px 18px rgba(0,0,0,0.15)"
}}> Education</h2>
      </div>
          <div className="space-y-16">
            <div>
              <h4 className="text-xl font-bold text-cyan-300">
                NYU Tandon School of Engineering
              </h4>
              <p className="mt-2 text-xl text-white/80">
                MS in Management of Technology | GPA 3.69
              </p>
              <p className="mt-1 text-lg text-[#00E5FF]/55">May 2026</p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-cyan-300">
                Pune University
              </h4>
              <p className="mt-2 text-xl text-white/80">
                BS in Computer Science | GPA 3.50
              </p>
              <p className="mt-1 text-lg text-[#00E5FF]/55">May 2024</p>
            </div>
          </div>
        </div>

        <div className="border-l border-white/25 pl-10">
        <div className="mb-10">
        <h2 className="text-4xl font-bold text-white" style={{
  textShadow:
    "0 2px 4px rgba(0,0,0,0.18), 0 8px 18px rgba(0,0,0,0.15)"
}}> Certifications</h2>
      </div>

          <div className="relative">
            <div className="pointer-events-none absolute left-[-59px] top-22 hidden h-20 w-9 rounded-full border border-white/30 bg-[#0d5f73] lg:flex items-start justify-center p-2">
  
    <div
  className="h-3 w-1.5 rounded-full bg-cyan-300 animate-pulse-glow"
  style={{
    transform: `translateY(${scrollProgress * 52}px)`,
  }}
/>
  </div>

  <div
  ref={scrollRef}
  onScroll={handleScroll}
    className="
      max-h-80
      overflow-y-auto
      space-y-5
      pr-10
      cert-scroll-hidden
    "
  >
    {certifications.map((cert) => (
  <a
    key={cert.title}
    href={cert.link}
    target="_blank"
    rel="noopener noreferrer"
    className="
      block
      max-w-sm
      rounded-2xl
      border
      border-white/10
      bg-white/5
      p-5
      transition-all
      duration-300
      hover:translate-x-1
      hover:border-cyan-300/50
      hover:bg-white/10
    "
  >
    <h4 className="text-xl font-bold text-cyan-300">
      {cert.title}
    </h4>

    <p className="mt-1 text-lg text-white">
      {cert.subtitle}
    </p>

    <div className="mt-5 flex items-center justify-between">
      <span className="text-base text-white/50">
        {cert.issuer}
      </span>

      <span className="text-sm font-medium text-cyan-300">
        Verify ↗
      </span>
    </div>
  </a>
))}
  </div>
</div>
        </div>
      </div>
    </section>
  );
}