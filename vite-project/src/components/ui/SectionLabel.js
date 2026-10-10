import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/** Small numbered eyebrow label used above every section heading. */
export function SectionLabel({ number, children }) {
    return (_jsxs("p", { className: "section-label", children: [number, " ", _jsx("span", { "aria-hidden": "true", children: "/" }), " ", children] }));
}
