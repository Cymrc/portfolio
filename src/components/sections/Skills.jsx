import { skills } from "../../data/skills";
import Badge from "../ui/Badge";
import useScrollReveal from "../../hooks/useScrollReveal";

function Skills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id="skills"
      className={`px-4 py-20 transition-all duration-700 motion-reduce:transition-none motion-reduce:transform-none ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900">
            Skills
          </h2>
          <p className="text-stone-500 mt-1 text-sm">
            Technologies and tools I work with daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((categoryGroup) => (
            <div
              key={categoryGroup.category}
              className="p-5 rounded-xl bg-white border border-stone-200/70 shadow-sm flex flex-col gap-3"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-400">
                {categoryGroup.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {categoryGroup.items.map((skill) => (
                  <Badge key={skill} name={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;