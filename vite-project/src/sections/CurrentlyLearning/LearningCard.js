import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function LearningCard({ category, index }) {
    return (_jsxs("article", { className: "learning-card", style: { animationDelay: `${index * 70}ms` }, children: [_jsxs("div", { className: "learning-card-meta", children: [_jsx("span", { className: "learning-card-number", children: String(index + 1).padStart(2, "0") }), _jsx("span", { className: "learning-card-label", children: category.label })] }), _jsx("h3", { children: category.title }), _jsx("p", { className: "learning-card-description", children: category.description }), _jsx("ul", { className: "learning-topics", "aria-label": `${category.title} learning topics`, children: category.topics.map((topic) => _jsx("li", { children: topic }, topic)) })] }));
}
