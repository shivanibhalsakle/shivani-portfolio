import TypingGreeting from "./TypingGreeting";

export default function Hero() {
  return (
  <section
        id="home"
        className="flex min-h-screen items-center px-8 md:px-20"
      >
        <div className="max-w-3xl text-[#062447]">
          <p className="mb-4 text-xl font-medium">
  <TypingGreeting />
</p>

          <h1 className="text-1xl font-bold tracking-tight md:text-7xl">
            Shivani Bhalsakle
          </h1>

          <p className="mt-5 text-xl font-semibold text-[#555555]">
            Business Analyst • Project Analyst • Strategy & Operations
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#2f4f4f] text-italic">
           "Good decisions begin with better questions."
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/SHIVANI__BHALSAKLE_Resume.pdf"
              className="rounded-full bg-[#062447] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0b3a69]"
               target="_blank"
               rel="noopener noreferrer"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="rounded-full border border-[#062447] px-6 py-3 text-sm font-semibold text-[#062447] transition hover:bg-white/40"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="group relative ml-10">
  <div className="absolute inset-0 rounded-full bg-cyan-300/20 blur-2xl transition-all duration-500 group-hover:scale-125 group-hover:bg-cyan-300/35" />

  <img
    src="/profile.png"
    alt="Shivani Bhalsakle"
    className="
      relative
      h-[380px]
      w-[380px]
      rounded-full
      object-cover
      border border-white/10 shadow-[0_1px_30px_rgba(20,255,200,0.3)] bg-white/10 
      transition-all
      duration-500
      group-hover:-translate-y-2
      group-hover:scale-105
      group-hover:border-cyan-300
      group-hover:shadow-[0_0_80px_rgba(34,211,238,0.45)]
    "
  />
</div>
      </section>

      
      
       );
}