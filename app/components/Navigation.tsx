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
      <div className="rounded-full border border-white/30 bg-white/10 px-4 py-6 backdrop-blur-md">
        <p className="mb-6 text-center text-2xl font-bold text-white">
          SB.
        </p>

        <nav className="flex flex-col gap-5 text-sm">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="
                text-white
                cursor-pointer
                transition-all
                duration-300
                hover:scale-125
                hover:font-semibold
              "
            >
              {section}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}