import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SectionLabel } from "../../components/ui";
import { projects } from "../../data";
import { ProjectCard } from "./ProjectCard";
export function Work() {
    return (_jsxs("section", { className: "work section", id: "work", "aria-labelledby": "work-title", children: [_jsxs("div", { className: "section-heading", children: [_jsxs("div", { children: [_jsx(SectionLabel, { number: "04", children: "Selected Work" }), _jsxs("h2", { id: "work-title", children: ["Featured", _jsx("br", {}), _jsx("em", { children: "projects." })] })] }), _jsxs("div", { className: "section-intro", children: [_jsx("p", { children: "A curated showcase of projects where design thinking meets full-stack engineering." }), _jsx("span", { "aria-hidden": "true", children: "\u2190 \u00A0\u00A0 \u2192" })] })] }), _jsx("div", { className: "project-rail", role: "region", "aria-label": "Selected projects, scrollable", tabIndex: 0, children: projects.map((project, i) => (_jsx(ProjectCard, { project: project, index: i, total: projects.length }, project.title))) }), _jsx("p", { className: "rail-note", "aria-hidden": "true", children: "Scroll horizontally \u00A0\u2192" })] }));
}
