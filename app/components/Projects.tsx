import { projects } from "../data/projects";

const skillColors: Record<string, string> = {
  Python: "border-sky-300/40 bg-sky-400/20 text-sky-100",
  Gurobi: "border-indigo-300/40 bg-indigo-400/20 text-indigo-100",
  Matplotlib: "border-cyan-300/40 bg-cyan-400/20 text-cyan-100",
  SQL: "border-emerald-300/40 bg-emerald-400/20 text-emerald-100",
  Excel: "border-green-300/40 bg-green-400/20 text-green-100",
  "Power Query": "border-teal-300/40 bg-teal-400/20 text-teal-100",
  DAX: "border-violet-300/40 bg-violet-400/20 text-violet-100",
  "Power BI": "border-purple-300/40 bg-purple-400/20 text-purple-100",
  Jira: "border-blue-300/40 bg-blue-400/20 text-blue-100",
  UAT: "border-pink-300/40 bg-pink-400/20 text-pink-100",
  Hexaly: "border-yellow-300/40 bg-yellow-400/20 text-yellow-100",
  Optimization: "border-orange-300/40 bg-orange-400/20 text-orange-100",
};

const positions = [
  "left-[-2%] top-[8%]",
  "left-[33%] top-[5%]",
  "left-[66%] top-[8%]",

  "left-[2%] top-[48%]",
  "left-[34%] top-[60%]",
  "left-[64%] top-[50%]",
];

const bubblePositions = [
  "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
  "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
  "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-8 py-24 md:px-20">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-white">Project Schema</h2>
        <p className="mt-4 max-w-2xl text-white/75">
          A relational view of selected projects, connected by shared tools and skills.
        </p>
      </div>

      <div className="relative h-[850px] max-w-6xl">
        <svg
        
  className="pointer-events-none absolute inset-0 h-full w-full"
  viewBox="0 0 1200 850"
  preserveAspectRatio="none"
>
    <defs>
  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur stdDeviation="4" result="blur" />
    <feMerge>
      <feMergeNode in="blur" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
</defs>
  {/* Python: Airline ↔ Housing */}
  <path id="python-line-1" d="M250 280 V425 H520 V520" stroke="#38bdf8" strokeWidth="3" fill="none" />
  {/* Main packet */}
<circle r="5" fill="#38bdf8" filter="url(#glow)">
  <animate
    attributeName="r"
    values="4;6;4"
    dur="1.2s"
    repeatCount="indefinite"
  />
  <animateMotion dur="3s" repeatCount="indefinite">
    <mpath href="#python-line-1" />
  </animateMotion>
</circle>

{/* Trailing packet */}
<circle
  r="3.5"
  fill="#7dd3fc"
  opacity="0.45"
  filter="url(#glow)"
>
  <animate
    attributeName="r"
    values="3;4.5;3"
    dur="1.2s"
    repeatCount="indefinite"
  />
  <animateMotion
    dur="3s"
    begin="-0.35s"
    repeatCount="indefinite"
  >
    <mpath href="#python-line-1" />
  </animateMotion>
</circle>

  {/* Python: Housing ↔ India */}
  <path id="python-line-2" d="M690 620 H820" stroke="#38bdf8" strokeWidth="3" fill="none" />
  {/* Main packet */}
<circle r="5" fill="#38bdf8" filter="url(#glow)">
  <animate
    attributeName="r"
    values="4;6;4"
    dur="1.2s"
    repeatCount="indefinite"
  />
  <animateMotion dur="3s" repeatCount="indefinite">
    <mpath href="#python-line-1" />
  </animateMotion>
</circle>

{/* Trailing packet */}
<circle
  r="3.5"
  fill="#7dd3fc"
  opacity="0.45"
  filter="url(#glow)"
>
  <animate
    attributeName="r"
    values="3;4.5;3"
    dur="1.2s"
    repeatCount="indefinite"
  />
  <animateMotion
    dur="3s"
    begin="-0.35s"
    repeatCount="indefinite"
  >
    <mpath href="#python-line-1" />
  </animateMotion>
</circle>

  {/* Gurobi: Airline ↔ Workforce */}
  <path id="gurobi-line" d="M150 350 V430" stroke="#818cf8" strokeWidth="3" fill="none" />
  <circle r="5" fill="#818cf8" filter="url(#glow)">
    <animateMotion dur="2.8s" repeatCount="indefinite">
      <mpath href="#gurobi-line" />
    </animateMotion>
  </circle>

  {/* SQL/Data: Pizzeria ↔ Housing */}
  <path id="sql-line" d="M560 330 V455 H610 V520" stroke="#22c55e" strokeWidth="3" fill="none" />
  <circle r="5" fill="#22c55e" filter="url(#glow)">
    <animateMotion dur="3.2s" repeatCount="indefinite">
      <mpath href="#sql-line" />
    </animateMotion>
  </circle>

  {/* Power BI/Product Analytics: Pizzeria ↔ DeveloperStar */}
  <path id="powerbi-line" d="M760 180 H820 V210 H880" stroke="#a78bfa" strokeWidth="3" fill="none" />
  <circle r="5" fill="#a78bfa" filter="url(#glow)">
    <animateMotion dur="3s" repeatCount="indefinite">
      <mpath href="#powerbi-line" />
    </animateMotion>
  </circle>

  {/* Optimization: Housing ↔ India */}
  <path id="optimization-line" d="M700 670 H820" stroke="#f59e0b" strokeWidth="3" fill="none" />
  <circle r="5" fill="#f59e0b" filter="url(#glow)">
    <animateMotion dur="2.7s" repeatCount="indefinite">
      <mpath href="#optimization-line" />
    </animateMotion>
  </circle>
</svg>
<div className="pointer-events-none absolute right-3 top-3 z-[999] opacity-0 transition-opacity duration-300 group-hover:opacity-100">    
</div>
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`absolute ${positions[index]} group w-[300px] rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:border-cyan-300/50 hover:bg-white/12 hover:shadow-2xl`}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">
              Dive: {project.dive}
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
              {project.title}
            </h3>

            <div className="my-4 h-px bg-white/15" />

            <p className="text-sm leading-6 text-white/80">
              {project.investigation}
            </p>

            <div className="mt-5">
              <p className="mb-3 text-sm text-white/60">Skills</p>

              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-full border px-3 py-1 text-xs ${
                      skillColors[skill] ?? "border-white/20 bg-white/10 text-white/80"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
<div className="pointer-events-none absolute inset-0 z-[999] opacity-0 transition-opacity duration-300 group-hover:opacity-100">  {project.impacts.map((impact, impactIndex) => (
    <div
      key={impact}
      className={`
  absolute
  ${bubblePositions[impactIndex]}
  h-[64px]
  w-[64px]
  rounded-full
  border
  border-white/80
  bg-slate-900/60
  backdrop-blur-md
  shadow-[0_0_28px_rgba(34,211,238,0.75)]
  flex
  items-center
  justify-center
  text-center
  text-[9px]
  leading-tight
  px-2
  font-semibold
  text-white
  animate-bob
`}
    style={{
  animationDelay: `${impactIndex * 180}ms`,
}}
    >
      {impact}
    </div>
  ))}
</div>
          </div>
        ))}
      </div>
    </section>
  );
}