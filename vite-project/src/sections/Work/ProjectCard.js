import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowLink } from "../../components/ui";
import { motion } from "motion/react";
import { fadeUp } from "../../utils/motion";
export function ProjectCard({ project, index, total }) {
    const cls = [
        "project-card",
        project.featured && "project-card--feature",
        !project.image && "project-card--plain",
    ]
        .filter(Boolean)
        .join(" ");
    const label = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
    return (_jsxs(motion.article, { className: cls, variants: fadeUp, children: [project.image && (_jsxs(_Fragment, { children: [_jsx("img", { src: project.image, alt: "", loading: "lazy", decoding: "async" }), _jsx("div", { className: "project-overlay" })] })), _jsxs("div", { className: "project-content", children: [_jsx("small", { children: label }), _jsx("h3", { children: project.title }), _jsx("b", { children: project.category }), project.description && _jsx("p", { children: project.description }), project.link && (_jsxs(ArrowLink, { href: project.link, light: true, children: ["View case study", _jsxs("span", { className: "sr-only", children: [": ", project.title] })] }))] })] }));
}
