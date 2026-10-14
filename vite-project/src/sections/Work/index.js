import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SectionLabel } from "../../components/ui";
import { projects } from "../../data";
import { motion } from "motion/react";
import { fadeUp, staggerContainer, VIEWPORT } from "../../utils/motion";
import { ProjectCard } from "./ProjectCard";
export function Work() {
    return (_jsxs("section", { className: "work section", id: "work", "aria-labelledby": "work-title", children: [_jsxs(motion.div, { className: "section-heading", variants: fadeUp, initial: "hidden", whileInView: "show", viewport: VIEWPORT, children: [_jsxs("div", { children: [_jsx(SectionLabel, { number: "03", children: "Selected Work" }), _jsxs("h2", { id: "work-title", children: ["Featured", _jsx("br", {}), _jsx("em", { children: "projects." })] })] }), _jsxs("div", { className: "section-intro", children: [_jsx("p", { children: "A curated showcase of projects where design thinking meets full-stack engineering." }), _jsx("span", { "aria-hidden": "true", children: "\u2190 \u00A0\u00A0 \u2192" })] })] }), _jsx(motion.div, { className: "project-rail", role: "region", "aria-label": "Selected projects, scrollable", tabIndex: 0, variants: staggerContainer, initial: "hidden", whileInView: "show", viewport: VIEWPORT, children: projects.map((project, i) => (_jsx(ProjectCard, { project: project, index: i, total: projects.length }, project.title))) }), _jsx("p", { className: "rail-note", "aria-hidden": "true", children: "Scroll horizontally \u00A0\u2192" })] }));
}
