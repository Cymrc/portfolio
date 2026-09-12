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
      <div className="max-w-2xl mx-auto flex flex-col gap-8">
        <h2 className="text-3xl font-bold text-stone-800">Skills</h2>

        {skills.map((categoryGroup) => (
          <div key={categoryGroup.category}>
            <h3 className="text-xl font-semibold text-stone-700">
              {categoryGroup.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {categoryGroup.items.map((skill) => (
                <Badge key={skill.name} name={skill.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
