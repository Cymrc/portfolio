import Badge from "./Badge";

function ProjectCard({ project }) {
  return (
    <article className="bg-white p-6 rounded-lg border border-stone-200 flex flex-col gap-4">
      {project.image && (
        <img
          className="w-full h-48 object-cover rounded-lg"
          src={project.image}
          alt={`${project.name} project screenshot`}
        />
      )}

      <h3 className="text-xl font-semibold text-stone-800">{project.name}</h3>

      <p className="text-base text-stone-600 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <Badge key={tech} name={tech} />
        ))}
      </div>

      <ul className="list-disc list-inside text-base text-stone-600">
        {project.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-amber-600 px-4 py-2 text-sm text-amber-700 transition-colors duration-200 hover:bg-amber-100/60"
          >
            {project.name} GitHub
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-amber-700 px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-amber-800"
          >
            {project.name} Live Demo
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
