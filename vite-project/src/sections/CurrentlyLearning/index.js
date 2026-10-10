import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SectionLabel } from "../../components/ui";
import { learningCategories } from "../../data";
import { LearningCard } from "./LearningCard";
export function CurrentlyLearning() {
    return (_jsxs("section", { className: "section learning", id: "learning", "aria-labelledby": "learning-title", children: [_jsxs("div", { className: "section-heading", children: [_jsxs("div", { children: [_jsx(SectionLabel, { number: "05", children: "Currently Learning" }), _jsx("p", { className: "learning-active-label", children: "ACTIVE FOCUS" }), _jsxs("h2", { id: "learning-title", children: ["Currently ", _jsx("em", { children: "Exploring" })] })] }), _jsx("p", { className: "heading-note", children: "Actively expanding depth across intelligent systems, large-scale architectures, and low-level computer science fundamentals." })] }), _jsx("div", { className: "learning-grid", children: learningCategories.map((category, index) => (_jsx(LearningCard, { category: category, index: index }, category.title))) })] }));
}
