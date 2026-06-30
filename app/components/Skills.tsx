import { skills } from "../data/skills";

const pillColors = [
  "bg-sky-400/20 border-sky-300/40 text-sky-100",
  "bg-blue-400/20 border-blue-300/40 text-blue-100",
  "bg-cyan-400/20 border-cyan-300/40 text-cyan-100",
  "bg-teal-400/20 border-teal-300/40 text-teal-100",
  "bg-emerald-400/20 border-emerald-300/40 text-emerald-100",
  "bg-green-400/20 border-green-300/40 text-green-100",
  "bg-lime-400/20 border-lime-300/40 text-lime-100",

  "bg-indigo-400/20 border-indigo-300/40 text-indigo-100",
  "bg-violet-400/20 border-violet-300/40 text-violet-100",
  "bg-purple-400/20 border-purple-300/40 text-purple-100",
  "bg-fuchsia-400/20 border-fuchsia-300/40 text-fuchsia-100",

  "bg-pink-400/20 border-pink-300/40 text-pink-100",
  "bg-rose-400/20 border-rose-300/40 text-rose-100",

  "bg-orange-400/20 border-orange-300/40 text-orange-100",
  "bg-amber-400/20 border-amber-300/40 text-amber-100",
  "bg-yellow-400/20 border-yellow-300/40 text-yellow-100",

  "bg-red-400/20 border-red-300/40 text-red-100",

  "bg-slate-400/20 border-slate-300/40 text-slate-100",
  "bg-zinc-400/20 border-zinc-300/40 text-zinc-100",
  "bg-stone-400/20 border-stone-300/40 text-stone-100",

  "bg-neutral-400/20 border-neutral-300/40 text-neutral-100",
  "bg-gray-400/20 border-gray-300/40 text-gray-100",

  "bg-cyan-500/20 border-cyan-400/40 text-cyan-100",
  "bg-sky-500/20 border-sky-400/40 text-sky-100",
  "bg-blue-500/20 border-blue-400/40 text-blue-100",
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-8 py-24 md:px-20">
     

      <h2 className="text-4xl font-bold text-white" style={{
  textShadow:
    "0 2px 4px rgba(0,0,0,0.18), 0 8px 18px rgba(0,0,0,0.15)"
}}>Skills Map</h2>

      <p className="mt-4 max-w-2xl text-white/70">
        Click a skill to jump to where it is demonstrated best.
      </p>

      <div className="mt-14 flex max-w-5xl flex-wrap gap-4">
        {skills.map((skill) => {
  const color =
    pillColors[Math.floor(Math.random() * pillColors.length)];

  return (
          <a
            key={skill.name}
            href={`#${skill.target}`}
            className={`
  group
  relative z-0 hover:z-50
  rounded-full
  border
  ${color}
  px-5
  py-3
  text-sm
  font-medium
  backdrop-blur-md
  transition-all
  duration-300
  hover:-translate-y-1
  hover:border-cyan-300/70
  hover:bg-cyan-300/15
  hover:text-white
  hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]
`}
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
  );
}
)}
      </div>
    </section>
  );
}