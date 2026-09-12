import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="px-4 py-20">
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
