import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-8 py-24 md:px-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-white/70">
          06 Contact
        </p>

        <h2 className="mt-6 text-4xl font-bold text-white">
          Let’s Connect
        </h2>

        <p className="mt-4 text-white/70">
          Open to Data Analyst, Business Analyst, Project Analyst, and Strategy & Operations roles.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a href="https://www.linkedin.com/in/shivani-bhalsakle/" target="_blank">
            <FaLinkedin className="h-7 w-7 text-white/80 transition hover:text-cyan-300 hover:scale-110" />
          </a>

          <a href="https://github.com/shivanibhalsakle" target="_blank">
            <FaGithub  className="h-7 w-7 text-white/80 transition hover:text-cyan-300 hover:scale-110" />
          </a>

          <a href="mailto:sab10099@nyu.edu">
            <Mail className="h-7 w-7 text-white/80 transition hover:text-cyan-300 hover:scale-110" />
          </a>
        </div>
        

        <form
          action="https://formspree.io/f/xjgqogwp"
          method="POST"
          className="mt-12 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-md"
        >
          <textarea
            name="message"
            required
            placeholder="Send me a message..."
            className="h-36 w-full resize-none rounded-2xl border border-white/15 bg-slate-900/30 p-4 text-white placeholder:text-white/45 outline-none focus:border-cyan-300/60"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="mt-4 w-full rounded-2xl border border-white/15 bg-slate-900/30 p-4 text-white placeholder:text-white/45 outline-none focus:border-cyan-300/60"
          />

          <button
            type="submit"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-105 hover:bg-cyan-200"
          >
            Send Message <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}