import { SectionLabel } from "../../components/ui";
import { projects } from "../../data";
import { ProjectCard } from "./ProjectCard";

export function Work() {
  return (
    <section className="work section" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <div>
          <SectionLabel number="04">Selected Work</SectionLabel>
          <h2 id="work-title">
            Featured<br /><em>projects.</em>
          </h2>
        </div>
        <div className="section-intro">
          <p>
            A curated showcase of projects where design thinking meets full-stack engineering.
          </p>
          <span aria-hidden="true">← &nbsp;&nbsp; →</span>
        </div>
      </div>

      <div
        className="project-rail"
        role="region"
        aria-label="Selected projects, scrollable"
        tabIndex={0}
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            total={projects.length}
          />
        ))}
      </div>

      <p className="rail-note" aria-hidden="true">Scroll horizontally &nbsp;→</p>
    </section>
  );
}
