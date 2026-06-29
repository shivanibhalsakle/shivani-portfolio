import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-8 py-24 md:px-20">
      <p className="text-sm uppercase tracking-[0.35em] text-white/70">
        04 Skills
      </p>

      <h2 className="mt-6 text-5xl font-bold text-white">Map Skill</h2>

      <p className="mt-4 max-w-2xl text-white/70">
        Click a skill to jump to where it is demonstrated. Hover to preview the
        mapped project, experience, or credential.
      </p>

      <div className="mt-14 flex max-w-5xl flex-wrap gap-4">
        {skills.map((skill) => (
          <a
            key={skill.name}
            href={`#${skill.target}`}
            className="
              group
              relative z-0 hover:z-50
              rounded-full
              border
              border-white/20
              bg-white/5
              px-5
              py-3
              text-sm
              font-medium
              text-white/85
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-300/70
              hover:bg-cyan-300/15
              hover:text-white
              hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]
            "
          >
            {skill.name}

            <span
  className="
    pointer-events-none
    absolute
    left-1/2
    top-full
    z-[9999]
    mt-3
    min-w-[190px]
    max-w-[240px]
    -translate-x-1/2
    rounded-xl
    border
    border-cyan-300/30
    bg-slate-900/95
    px-4
    py-3
    text-center
    text-xs
    leading-5
    text-white
    opacity-0
    shadow-[0_0_22px_rgba(34,211,238,0.35)]
    backdrop-blur-md
    transition-all
    duration-300
    group-hover:opacity-100
  "
>
  <span className="block text-cyan-300">Maps to</span>
  <span className="block font-semibold">{skill.mapsTo}</span>
</span>
          </a>
        ))}
      </div>
    </section>
  );
}