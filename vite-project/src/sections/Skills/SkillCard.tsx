import type { Skill } from "../../data";

interface Props {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: Props) {
  return (
    <article className="skill-card" style={{ animationDelay: `${index * 35}ms` }}>
      <div className="skill-card-heading">
        <span className="skill-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <h3>{skill.title}</h3>
      </div>
      <ul className="skill-list" aria-label={`${skill.title} technologies`}>
        {skill.items.map((item) => <li className="skill-chip" key={item}>{item}</li>)}
      </ul>
    </article>
  );
}
