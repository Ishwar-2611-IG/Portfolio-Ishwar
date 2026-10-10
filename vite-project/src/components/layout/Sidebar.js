import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import igMonogram from "@/imports/Sleek_Black_and_Blue_IG_Monogram.png";
import { sections } from "../../data";
export function Sidebar({ active, progress, onNavigate }) {
    const activeLabel = sections.find((s) => s.id === active)?.label;
    return (_jsxs("aside", { className: "sidebar", children: [_jsx("button", { type: "button", className: "brand brand--sidebar", onClick: () => onNavigate("home"), "aria-label": "Ishwar Gosavi \u2014 back to top", children: _jsx("img", { src: igMonogram, alt: "", width: 64, height: 64 }) }), _jsx("nav", { className: "side-nav", "aria-label": "Portfolio sections", children: sections.map(({ id, number, label }) => (_jsxs("button", { type: "button", className: active === id ? "active" : "", "aria-current": active === id ? "true" : undefined, onClick: () => onNavigate(id), children: [_jsx("span", { children: number }), label] }, id))) }), _jsxs("div", { className: "scroll-meter", role: "status", "aria-label": `Page scrolled ${progress}%`, children: [_jsx("span", { className: "scroll-word scroll-word--sidebar", children: "Scroll" }), _jsx("div", { className: "meter-track", children: _jsx("span", { style: { height: `${Math.max(progress, 2)}%` } }) }), _jsxs("strong", { children: [progress, "%"] }), _jsxs("small", { children: ["Current", _jsx("br", {}), activeLabel] })] })] }));
}
