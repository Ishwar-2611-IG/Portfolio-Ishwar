import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
export function TimelineItem({ item, value, index, onHover }) {
    return (_jsxs(AccordionItem, { value: value, className: "experience-item", onPointerEnter: (event) => {
            if (event.pointerType === "mouse")
                onHover();
        }, children: [_jsxs(AccordionTrigger, { className: "experience-trigger", children: [_jsx("span", { className: "experience-index", children: String(index + 1).padStart(2, "0") }), _jsx("span", { className: "experience-date", children: item.date }), _jsxs("span", { className: "experience-summary", children: [_jsx("span", { className: "experience-role", children: item.role }), _jsx("span", { className: "experience-company", children: item.company }), item.location && _jsx("span", { className: "experience-location", children: item.location })] })] }), _jsx(AccordionContent, { className: "experience-accordion-content", children: _jsxs("div", { className: "experience-details", children: [_jsx("p", { className: "experience-description", children: item.detail }), item.highlights && item.highlights.length > 0 && (_jsx("ul", { className: "experience-highlights", children: item.highlights.map((highlight) => {
                                const separator = highlight.indexOf(":");
                                const title = separator >= 0 ? highlight.slice(0, separator) : "";
                                const description = separator >= 0 ? highlight.slice(separator + 1).trim() : highlight;
                                return (_jsxs("li", { children: [title && _jsxs("strong", { children: [title, ": "] }), description] }, highlight));
                            }) }))] }) })] }));
}
