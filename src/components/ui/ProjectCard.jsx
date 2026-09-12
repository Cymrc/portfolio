import Badge from "./Badge";

function ProjectCard({ project }) {
  return (
    <article className="bg-white p-6 rounded-lg border border-stone-200">
      {project.image && (
        <img src={project.image} alt={`${project.name} project screenshot`} />
      )}

      <h3>{project.name}</h3>

      <p>{project.description}</p>

      <div>
        {project.tech.map((tech) => (
          <Badge key={tech} name={tech} />
        ))}
      </div>

      <ul>
        {project.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      <div>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            {project.name} GitHub
          </a>
        )}

        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            {project.name} Live Demo
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
