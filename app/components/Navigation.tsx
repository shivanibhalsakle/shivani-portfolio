const sections = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Education",
  "Contact",
];

export default function Navigation() {
  return (
    <aside className="fixed right-8 top-1/2 hidden -translate-y-1/2 lg:block">
      <div className="rounded-full border border-[#062447]/20 shadow-[0_1px_100px_rgba(20,255,200,0.2)] bg-white/20 px-4 py-6 ">
        <p className="mb-6 text-center text-2xl font-bold text-cyan-300 glow">
          SB.
        </p>

        <nav className="flex flex-col items-center gap-5 text-sm">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="
                text-[#062447]
                font-bold
                cursor-pointer
                hover:text-cyan-300
                transition-all
                duration-250
                hover:scale-125
                hover:font-semibold
              "
              style={{
  textShadow: "0 0 8px rgba(13, 41, 72, 0.51)",
}}
            >
              {section}
            </a>
          ))}

          
        </nav>
      </div>
    </aside>
  );
}