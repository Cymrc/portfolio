import Badge from "./Badge";

function ProjectCard({ project }) {
  return (
    <article className="bg-white p-6 rounded-xl border border-stone-200/80 shadow-xs flex flex-col gap-5 hover:border-stone-300 transition-all duration-200">
      {/* 1. Project Image / Screenshot Placeholder */}
      {project.image && (
        <div className="overflow-hidden rounded-lg bg-stone-100 border border-stone-100">
          <img
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-[1.02]"
            src={project.image}
            alt={`${project.name} project screenshot`}
            loading="lazy"
          />
        </div>
      )}

      {/* Header & Title */}
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold tracking-tight text-stone-900">
          {project.name}
        </h3>
        <p className="text-sm text-stone-600 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Problem Statement Focus (If available) */}
      {project.problem && (
        <div className="bg-stone-50 p-3 rounded-lg border border-stone-200/60 text-xs text-stone-600 leading-relaxed">
          <span className="font-semibold text-stone-800">Objective: </span>
          {project.problem}
        </div>
      )}

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <Badge key={tech} name={tech} />
        ))}
      </div>

      {/* Key Feature List */}
      {project.features && project.features.length > 0 && (
        <ul className="list-disc list-inside text-xs text-stone-600 space-y-1 mt-1">
          {project.features.map((feature) => (
            <li key={feature} className="leading-snug">
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Action Buttons with Improved Accessibility & Link Indicators */}
      <div className="flex flex-wrap gap-3 mt-auto pt-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View GitHub source code for ${project.name}`}
            className="inline-flex items-center gap-1.5 rounded-lg border border-amber-600 px-4 py-2 text-xs font-semibold text-amber-700 transition-colors duration-200 hover:bg-amber-100/60 focus-visible:outline-2 focus-visible:outline-amber-700"
          >
            GitHub ↗
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${project.name}`}
            className="inline-flex items-center gap-1.5 rounded-lg bg-amber-700 px-4 py-2 text-xs font-semibold text-white transition-colors duration-200 hover:bg-amber-800 focus-visible:outline-2 focus-visible:outline-amber-700 shadow-xs"
          >
            Live Demo ↗
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
