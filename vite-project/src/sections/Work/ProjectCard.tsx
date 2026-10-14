import { ArrowLink } from "../../components/ui";
import type { Project } from "../../data";
import { motion } from "motion/react";
import { fadeUp } from "../../utils/motion";

interface Props {
  project: Project;
  index:   number;
  total:   number;
}

export function ProjectCard({ project, index, total }: Props) {
  const cls = [
    "project-card",
    project.featured   && "project-card--feature",
    !project.image     && "project-card--plain",
  ]
    .filter(Boolean)
    .join(" ");

  const label = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  return (
    <motion.article className={cls} variants={fadeUp}>
      {project.image && (
        <>
          <img src={project.image} alt="" loading="lazy" decoding="async" />
          <div className="project-overlay" />
        </>
      )}
      <div className="project-content">
        <small>{label}</small>
        <h3>{project.title}</h3>
        <b>{project.category}</b>
        {project.description && <p>{project.description}</p>}
        {project.link && (
          <ArrowLink href={project.link} light>
            View case study
            <span className="sr-only">: {project.title}</span>
          </ArrowLink>
        )}
      </div>
    </motion.article>
  );
}
