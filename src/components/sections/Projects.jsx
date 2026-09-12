import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import useScrollReveal from "../../hooks/useScrollReveal";

function Projects() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id="projects"
      className={`px-4 py-20 transition-all duration-700 motion-reduce:transition-none motion-reduce:transform-none ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="max-w-2xl mx-auto flex flex-col gap-8">
        <h2 className="text-3xl font-bold text-stone-800">Projects</h2>

        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
