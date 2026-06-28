import { experience } from "../data/experience";
export default function Experience() {
  return (
    <section id="experience" className="min-h-screen px-8 py-24 md:px-20">
      <h2 className="mb-16 text-4xl font-bold text-white">
        Experience
      </h2>

      <div className="relative max-w-4xl border-l border-white/35 pl-10">
        {experience.map((role) => (
          <div
            key={role.company}
            className="relative mb-14 last:mb-0"
          >
            <div className="absolute -left-[49px] top-1 h-5 w-5 rounded-full border-4 border-white/80 bg-[#00365f]" />

            <h3 className="text-xl font-bold text-white">
              {role.title}
            </h3>

            <p className="mt-1 text-sm text-white/70">
              {role.company} • {role.date}
            </p>

            <ul className="mt-4 space-y-2 max-w-3xl">
              {role.details.map((item) => (
                <li
                  key={item}
                  className="text-white/80"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}