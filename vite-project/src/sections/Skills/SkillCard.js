import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function SkillCard({ skill, index }) {
    return (_jsxs("article", { className: "skill-card", style: { animationDelay: `${index * 35}ms` }, children: [_jsxs("div", { className: "skill-card-heading", children: [_jsx("span", { className: "skill-index", "aria-hidden": "true", children: String(index + 1).padStart(2, "0") }), _jsx("h3", { children: skill.title })] }), _jsx("ul", { className: "skill-list", "aria-label": `${skill.title} technologies`, children: skill.items.map((item) => _jsx("li", { className: "skill-chip", children: item }, item)) })] }));
}
