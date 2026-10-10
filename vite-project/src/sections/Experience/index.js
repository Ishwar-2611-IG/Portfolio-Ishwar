import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Accordion } from "@/components/ui/accordion";
import { SectionLabel } from "../../components/ui";
import { experiences } from "../../data";
import { TimelineItem } from "./TimelineItem";
function experienceValue(item) {
    return `${item.company}-${item.date}`;
}
function experienceStartValue(date) {
    const monthYear = date.match(/([A-Za-z]{3,})\s+(\d{4})/);
    if (monthYear) {
        const month = new Date(`${monthYear[1]} 1, ${monthYear[2]}`).getMonth();
        if (!Number.isNaN(month))
            return Number(monthYear[2]) * 12 + month;
    }
    const year = date.match(/\b(19|20)\d{2}\b/);
    return year ? Number(year[0]) * 12 : undefined;
}
function getInitialExperienceValue(items) {
    const current = items.find((item) => /\b(present|current|ongoing)\b/i.test(item.date));
    if (current)
        return experienceValue(current);
    const datedItems = items
        .map((item) => ({ item, start: experienceStartValue(item.date) }))
        .filter((entry) => entry.start !== undefined)
        .sort((a, b) => b.start - a.start);
    return experienceValue(datedItems[0]?.item ?? items[0]);
}
export function Experience() {
    const [activeValue, setActiveValue] = useState(() => experiences.length ? getInitialExperienceValue(experiences) : "");
    return (_jsxs("section", { className: "section experience", id: "experience", "aria-labelledby": "exp-title", children: [_jsxs("div", { className: "section-heading split-heading", children: [_jsxs("div", { children: [_jsx(SectionLabel, { number: "06", children: "Experience" }), _jsxs("h2", { id: "exp-title", children: ["Where I've", _jsx("br", {}), "Worked"] })] }), _jsx("p", { className: "heading-note", children: "My professional journey so far." })] }), experiences.length > 0 && (_jsx(Accordion, { type: "single", collapsible: true, value: activeValue, onValueChange: setActiveValue, className: "timeline experience-accordion", children: experiences.map((item, index) => {
                    const value = experienceValue(item);
                    return (_jsx(TimelineItem, { item: item, value: value, index: index, onHover: () => setActiveValue(value) }, value));
                }) }))] }));
}
