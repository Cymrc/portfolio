import { skills } from "../../data/skills";
import Badge from "../ui/Badge";

function Skills() {
  return (
    <section id="skills" className="px-4 py-20">
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
