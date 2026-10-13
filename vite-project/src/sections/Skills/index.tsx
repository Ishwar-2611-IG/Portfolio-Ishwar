import { SectionLabel } from "../../components/ui";
import { skills } from "../../data";
import { SkillCard } from "./SkillCard";

export function Skills() {
  return (
    <section className="section capabilities" id="capabilities" aria-labelledby="skills-title">
      <div className="section-heading split-heading">
        <div>
          <SectionLabel number="04">Capabilities</SectionLabel>
          <h2 id="skills-title">
            Tools &amp;<br />Technologies
          </h2>
        </div>
        <p className="heading-note">Modern technologies and tools for building visually engaging, intelligent, scalable, and high-performance applications.</p>
      </div>

      <div className="capability-layout">
        <div className="skill-grid">
          {skills.map((skill, index) => (
            <SkillCard key={skill.title} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
