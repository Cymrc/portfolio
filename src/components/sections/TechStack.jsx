import { techStack } from "../../data/techStack";
import useScrollReveal from "../../hooks/useScrollReveal";

function TechStack() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id="tech-stack"
      className={`px-4 py-20 transition-all duration-700 motion-reduce:transition-none motion-reduce:transform-none ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900">
            Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="flex items-center justify-center p-3 rounded-lg border border-stone-200/80 bg-white text-stone-700 text-xs font-semibold shadow-xs hover:border-stone-400 hover:shadow-sm transition-all duration-200"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
