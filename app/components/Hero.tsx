
export default function Hero() {
  return (
  <section
        id="home"
        className="flex min-h-screen items-center px-8 md:px-20"
      >
        <div className="max-w-3xl text-[#062447]">
          <p className="mb-4 text-xl font-medium">Hi, I’m</p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Shivani Bhalsakle
          </h1>

          <p className="mt-5 text-xl font-semibold">
            Business Analyst • Project Analyst • Strategy & Operations
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8">
            I turn business problems into structured solutions using data,
            analysis, and collaboration to drive impact.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-full bg-[#062447] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0b3a69]"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-[#062447] px-6 py-3 text-sm font-semibold text-[#062447] transition hover:bg-white/40"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
       );
}