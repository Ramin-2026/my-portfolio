import { profile } from '../data/site'
import photo from '../assets/ramin.jpg'

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-16 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
        <div className="animate-fade-up order-2 md:order-1">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-xl text-slate-300 sm:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-xl text-slate-400">
            I build fast, responsive and user-friendly websites with React and
            Tailwind CSS. Explore the projects I built during my React course or
            get in touch to work together.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-emerald-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              View my projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-slate-600 px-5 py-3 font-semibold text-slate-100 transition hover:border-emerald-400 hover:text-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <img
            src={photo}
            alt="Portrait of Ramin Ranjoor"
            width="350"
            height="467"
            className="h-72 w-60 rounded-2xl border-4 border-slate-800 object-cover shadow-xl shadow-emerald-500/10 sm:h-96 sm:w-72"
          />
        </div>
      </div>
    </section>
  )
}
