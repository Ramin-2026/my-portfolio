// Reusable card: receives one project through props.
export default function ProjectCard({ project }) {
  const { title, description, image, alt, live, tags } = project

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition hover:-translate-y-1 hover:border-emerald-400/60">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        width="1200"
        height="670"
        className="aspect-video w-full object-cover object-top"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
          {description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-slate-800 px-3 py-1 text-xs text-emerald-300"
            >
              {tag}
            </li>
          ))}
        </ul>
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open live demo of ${title} (opens in a new tab)`}
          className="mt-5 inline-flex items-center justify-center rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
        >
          Live demo ↗
        </a>
      </div>
    </article>
  )
}
