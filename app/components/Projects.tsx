import { projects } from "../data/projects";

const skillColors: Record<string, string> = {
  Python: "border-sky-300/40 bg-sky-400/20 text-sky-100",
  Gurobi: "border-blue-300/40 bg-blue-400/20 text-blue-100",
  Matplotlib: "border-cyan-300/40 bg-cyan-400/20 text-cyan-100",
  SQL: "border-emerald-300/40 bg-emerald-400/20 text-emerald-100",
  Excel: "border-green-300/40 bg-green-400/20 text-green-100",
  "Power Query": "border-teal-300/40 bg-teal-400/20 text-teal-100",
  DAX: "border-violet-300/40 bg-violet-400/20 text-violet-100",
  "Power BI": "border-purple-300/40 bg-purple-400/20 text-purple-100",
  Jira: "border-indigo-300/40 bg-indigo-400/20 text-indigo-100",
  UAT: "border-pink-300/40 bg-pink-400/20 text-pink-100",
  Analytics: "border-orange-300/40 bg-orange-400/20 text-orange-100",
};

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-8 py-24 md:px-20">
  <div className="mb-12">
    <p className="text-sm uppercase tracking-[0.3em] text-white/70">
      03 Projects
    </p>
    <h2 className="mt-4 text-4xl font-bold text-white">Project Schema</h2>
    <p className="mt-4 max-w-2xl text-white/75">
      A relational view of selected projects, connected by shared tools and skills.
    </p>
  </div>

  <div className="relative max-w-6xl">
    {/* Relationship lines */}
    <svg
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      viewBox="0 0 1200 520"
      preserveAspectRatio="none"
    >
      {/* Python relationship */}
      <path
        d="M300 160 C450 80, 720 80, 900 160"
        stroke="#38bdf8"
        strokeWidth="2"
        strokeDasharray="6 6"
        fill="none"
        opacity="0.75"
      />

      {/* Power BI relationship */}
      <path
        d="M300 330 C470 430, 700 430, 900 330"
        stroke="#a78bfa"
        strokeWidth="2"
        strokeDasharray="6 6"
        fill="none"
        opacity="0.75"
      />

      {/* SQL relationship */}
      <path
        d="M300 245 C460 245, 720 245, 900 245"
        stroke="#34d399"
        strokeWidth="2"
        strokeDasharray="6 6"
        fill="none"
        opacity="0.75"
      />

      <text x="560" y="90" fill="#38bdf8" fontSize="14">
        Python
      </text>
      <text x="555" y="238" fill="#34d399" fontSize="14">
        SQL / Data
      </text>
      <text x="550" y="450" fill="#a78bfa" fontSize="14">
        Power BI
      </text>
    </svg>

    <div className="relative z-10 grid gap-8 lg:grid-cols-3">
      {[
        {
          title: "Airline Optimization",
          dive: "Operations Research",
          description:
            "Built Python-based optimization models using Gurobi to evaluate flight allocation scenarios across 30 airline routes.",
          impact: "+$43M projected profit • 7.47% increase • 85% capacity utilization",
          skills: [
            { name: "Python", color: "bg-sky-400/20 text-sky-200 border-sky-300/30" },
            { name: "Gurobi", color: "bg-blue-400/20 text-blue-200 border-blue-300/30" },
            { name: "Matplotlib", color: "bg-cyan-400/20 text-cyan-200 border-cyan-300/30" },
          ],
        },
        {
          title: "Pizzeria Analysis",
          dive: "Financial Analytics",
          description:
            "Queried, cleaned, and normalized operational and financial data, then built decision-support models.",
          impact: "Evaluated investment options using NPV, IRR, Payback Period, and Profitability Index.",
          skills: [
            { name: "SQL", color: "bg-emerald-400/20 text-emerald-200 border-emerald-300/30" },
            { name: "Excel", color: "bg-green-400/20 text-green-200 border-green-300/30" },
            { name: "Power Query", color: "bg-teal-400/20 text-teal-200 border-teal-300/30" },
            { name: "DAX", color: "bg-violet-400/20 text-violet-200 border-violet-300/30" },
          ],
        },
        {
          title: "DeveloperStar Analytics",
          dive: "Product Analytics",
          description:
            "Created dashboards and translated stakeholder needs into business and technical user stories.",
          impact: "Supported visibility across 20+ tools and contributed to a platform with 2,000+ users.",
          skills: [
            { name: "Power BI", color: "bg-purple-400/20 text-purple-200 border-purple-300/30" },
            { name: "Jira", color: "bg-indigo-400/20 text-indigo-200 border-indigo-300/30" },
            { name: "UAT", color: "bg-pink-400/20 text-pink-200 border-pink-300/30" },
          ],
        },
      ].map((project) => (
        <div
          key={project.title}
          className="
            group
            overflow-hidden
            rounded-2xl
            border
            border-white/15
            bg-white/8
            backdrop-blur-md
            transition-all
            duration-500
            hover:-translate-y-3
            hover:border-cyan-300/50
            hover:bg-white/12
            hover:shadow-2xl
          "
        >
          <div className="border-b border-white/15 bg-white/10 px-5 py-4">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">
              Table
            </p>
            <h3 className="mt-1 text-xl font-bold text-white">
              {project.title}
            </h3>
          </div>

          <div className="divide-y divide-white/10 text-sm">
            <div className="grid grid-cols-[90px_1fr] gap-4 px-5 py-4">
              <p className="font-semibold text-white/50">Dive</p>
              <p className="text-white/85">{project.dive}</p>
            </div>

            <div className="grid grid-cols-[90px_1fr] gap-4 px-5 py-4">
              <p className="font-semibold text-white/50">Description</p>
              <p className="text-white/80">{project.description}</p>
            </div>

            <div className="grid grid-cols-[90px_1fr] gap-4 px-5 py-4">
              <p className="font-semibold text-white/50">Impact</p>
              <p className="text-white/80">{project.impact}</p>
            </div>

            <div className="grid grid-cols-[90px_1fr] gap-4 px-5 py-4">
              <p className="font-semibold text-white/50">Skills</p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`rounded-full border px-2.5 py-1 text-xs ${skill.color}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}