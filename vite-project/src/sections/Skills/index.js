import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SectionLabel } from "../../components/ui";
import { skills } from "../../data";
import { SkillCard } from "./SkillCard";
export function Skills() {
    return (_jsxs("section", { className: "section capabilities", id: "capabilities", "aria-labelledby": "skills-title", children: [_jsxs("div", { className: "section-heading split-heading", children: [_jsxs("div", { children: [_jsx(SectionLabel, { number: "04", children: "Capabilities" }), _jsxs("h2", { id: "skills-title", children: ["Tools &", _jsx("br", {}), "Technologies"] })] }), _jsx("p", { className: "heading-note", children: "Modern technologies and tools for building visually engaging, intelligent, scalable, and high-performance applications." })] }), _jsx("div", { className: "capability-layout", children: _jsx("div", { className: "skill-grid", children: skills.map((skill, index) => (_jsx(SkillCard, { skill: skill, index: index }, skill.title))) }) })] }));
}
