import { certifications } from "../data/certifications";

export default function Education() {
  return (
    <section id="education" className="min-h-screen px-8 py-24 md:px-20">
      <div className="grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h3 className="mb-12 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
            Education
          </h3>

          <div className="space-y-16">
            <div>
              <h4 className="text-2xl font-bold text-white">
                NYU Tandon School of Engineering
              </h4>
              <p className="mt-2 text-xl text-white/80">
                MS in Management of Technology
              </p>
              <p className="mt-1 text-lg text-white/55">May 2026</p>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white">
                Pune University
              </h4>
              <p className="mt-2 text-xl text-white/80">
                BE in Computer Engineering
              </p>
              <p className="mt-1 text-lg text-white/55">May 2024</p>
            </div>
          </div>
        </div>

        <div className="border-l border-white/25 pl-10">
          <h3 className="mb-12 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
            Certifications
          </h3>

          <div
            className="
              max-h-80
              overflow-y-auto
              space-y-5
              pr-4
              [scrollbar-width:thin]
              [scrollbar-color:rgba(255,255,255,0.35)_transparent]
              [&::-webkit-scrollbar]:w-2
              [&::-webkit-scrollbar-track]:bg-white/5
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-white/30
              [&::-webkit-scrollbar-thumb:hover]:bg-white/50
            "
          >
            {certifications.map((cert) => (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                className="
                  block
                  rounded-xl
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
                <h4 className="text-lg font-semibold text-white">
                  {cert.title}
                </h4>
                <p className="text-white/75">{cert.subtitle}</p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-white/50">{cert.issuer}</span>
                  <span className="text-sm font-medium text-cyan-300">
                    Verify ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}