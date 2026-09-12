import { techStack } from "../../data/techStack";
import SkillBadge from "../ui/Badge";

function TechStack() {
  return (
    <section id="tech-stack" className="px-4 py-20">
      <div className="max-w-2xl mx-auto flex flex-col gap-8">
        <h2 className="text-3xl font-bold text-stone-800">Tech Stack</h2>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <SkillBadge key={tech.name} name={tech.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
