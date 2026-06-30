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
import FlipCard from "./FlipCard";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen px-8 py-24 md:px-20">
      <h2 className="mb-16 text-4xl font-bold text-white " style={{
  textShadow:
    "0 2px 4px rgba(0,0,0,0.18), 0 8px 18px rgba(0,0,0,0.15)"
}}>
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

                <h3 className="text-xl leading-8 max-w-2xl font-bold text-white group-hover:text-cyan-300 transition">

                    <a href={role.link} target="_blank">
                        {role.title}
                        
                    </a>

                </h3>

                <p className=" text-lg text-white/70">

                    <a href={role.link} target="_blank">
                        {role.company}
                    </a>

                    {" • "}

                    {role.date}

                </p>

                <ul className="mt-5 space-y-2">

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
  
    <h3 className="mb-2 text-xl font-bold text-white">What I bring</h3>

    

    
      <div className="space-y-5 ">

<FlipCard
  frontIcon={<FileText className="h-6 w-6 text-cyan-300 " />}
  frontTitle="Problem Solving"
  frontSubtitle="& Creativity"

  backIcon={<FileText className="h-6 w-6 text-cyan-300" />}
  backTitle="Requirements Gathering"
  backSubtitle="& Documentation"
/>

<FlipCard
  frontIcon={<BarChart3 className="h-6 w-6 text-cyan-300" />}
  frontTitle="Data Analysis"
  frontSubtitle="& Visualization"

  backIcon={<LayoutDashboard className="h-6 w-6 text-cyan-300" />}
  backTitle="Strategic Thinking"
  backSubtitle="& Planning"
/>

<FlipCard
  frontIcon={<Users className="h-6 w-6 text-cyan-300" />}
  frontTitle="Stakeholder Management"
  frontSubtitle="& Collaboration"

  backIcon={<Workflow className="h-6 w-6 text-cyan-300" />}
  backTitle="Business Intelligence"
  backSubtitle="& Market Research"
/>

<FlipCard
  frontIcon={<ClipboardCheck className="h-6 w-6 text-cyan-300" />}
  frontTitle="Leadership"
  frontSubtitle="& Initiative"

  backIcon={<Database className="h-6 w-6 text-cyan-300" />}
  backTitle="People SKills"
  backSubtitle="& Communication"
/>

</div>
    
  
</div>

    </div>

</div>
    </section>
  );
}