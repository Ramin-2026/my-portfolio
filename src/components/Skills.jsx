import { skills } from '../data/site'

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold text-white">Skills</h2>
        <p className="mt-2 max-w-2xl text-slate-400">
          Technologies I have learned and used in my projects.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="rounded-xl border border-slate-800 bg-slate-950 p-5"
            >
              <h3 className="text-lg font-semibold text-emerald-400">
                {skill.name}
              </h3>
              <p className="mt-1 text-sm text-slate-400">{skill.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
