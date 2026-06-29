import {
  FileText,
  Workflow,
  BarChart3,
  Users,
  LayoutDashboard,
  ClipboardCheck,
  Database,
} from "lucide-react";

import { experience, skills } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen px-8 py-24 md:px-20">
      <h2 className="mb-16 text-4xl font-bold text-white">
        Experience
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-20">

    {/* LEFT SIDE */}
    <div className="relative border-l border-white/25 pl-10">

        {experience.map((role) => (

            <div
                key={role.company}
                className="group relative mb-14 last:mb-0 transition-all duration-300 hover:translate-x-2"
            >

                <div
                    className="
                    absolute
                    -left-[49px]
                    top-1
                    h-5
                    w-5
                    rounded-full
                    border-4
                    border-white/80
                    bg-[#00365f]
                    transition-all
                    duration-300
                    group-hover:bg-cyan-300
                    group-hover:shadow-[0_0_18px_rgba(34,211,238,0.9)]
                    "
                />

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition">

                    <a href="#" target="_blank">
                        {role.title}
                    </a>

                </h3>

                <p className="mt-1 text-sm text-white/70">

                    <a href="#" target="_blank">
                        {role.company}
                    </a>

                    {" • "}

                    {role.date}

                </p>

                <ul className="mt-5 space-y-3">

                    {role.details.map((item) => (

                        <li
                            key={item}
                            className="text-[#00365f]"
                        >
                            • {item}
                        </li>

                    ))}

                </ul>

            </div>

        ))}

    </div>

    {/* RIGHT SIDE */}

    <div>

        <div className="pt-20 -translate-x-25">
  <div className="h-64 w-72 overflow-hidden rounded-2xl border border-[#00365f] bg-white/5 p-5 backdrop-blur-md">
    <h3 className="mb-2 text-xl font-bold text-white">What I bring</h3>

    

    <div className="relative h-40 overflow-hidden">
      <div className="animate-[scrollSkills_30s_linear_infinite] space-y-5">
        {[...skills, ...skills].map((skill, index) => (
         <div className="animate-scrollSkills space-y-6">

  {[
    {
      icon: <FileText className="h-6 w-6 text-white/80 transition duration-300 group-hover:text-cyan-300" />,
      title: "Requirements Gathering",
      subtitle: "& Documentation",
    },
    {
      icon: <Workflow className="h-6 w-6 text-white/80 transition duration-300 group-hover:text-cyan-300" />,
      title: "Process Improvement",
      subtitle: "& Automation",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-white/80 transition duration-300 group-hover:text-cyan-300" />,
      title: "Data Analysis",
      subtitle: "& Visualization",
    },
    {
      icon: <Users className="h-6 w-6 text-white/80 transition duration-300 group-hover:text-cyan-300" />,
      title: "Stakeholder Management",
      subtitle: "& Collaboration",
    },
    {
      icon: <LayoutDashboard className="h-6 w-6 text-white/80 transition duration-300 group-hover:text-cyan-300" />,
      title: "Dashboard Development",
      subtitle: "& Reporting",
    },
    {
      icon: <ClipboardCheck className="h-6 w-6 text-white/80 transition duration-300 group-hover:text-cyan-300" />,
      title: "Agile Delivery",
      subtitle: "& UAT",
    },
  ].map((skill, index) => (
    <div key={index} className="group flex items-center gap-3">
      {skill.icon}

      <div>
        <h4 className="text-sm font-semibold text-[#00365f]">
          {skill.title}
        </h4>

        <p className="text-xs text-[#00365f]">
          {skill.subtitle}
        </p>
      </div>
    </div>
  ))}

</div>
        ))}
      </div>
    </div>
  </div>
</div>

    </div>

</div>
    </section>
  );
}