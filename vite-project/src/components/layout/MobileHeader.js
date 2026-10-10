import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { sections } from "../../data";
export function MobileHeader({ progress, menuOpen, onToggleMenu, onNavigate }) {
    // Close menu on Escape key
    useEffect(() => {
        if (!menuOpen)
            return;
        const onKey = (e) => { if (e.key === "Escape")
            onToggleMenu(); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [menuOpen, onToggleMenu]);
    return (_jsxs("header", { className: "mobile-header", children: [_jsx("button", { type: "button", className: "brand", onClick: () => onNavigate("home"), "aria-label": "Back to top", children: "IG" }), _jsxs("span", { className: "mobile-progress", "aria-hidden": "true", children: [progress, "%"] }), _jsx("button", { type: "button", className: "menu-toggle", onClick: onToggleMenu, "aria-expanded": menuOpen, "aria-controls": "mobile-menu", children: menuOpen ? "Close" : "Menu" }), menuOpen && (_jsx("nav", { id: "mobile-menu", className: "mobile-menu", "aria-label": "Portfolio sections", children: sections.map(({ id, number, label }) => (_jsxs("button", { type: "button", onClick: () => onNavigate(id), children: [_jsx("span", { children: number }), label] }, id))) })), _jsx("span", { className: "mobile-progress-line", style: { width: `${progress}%` }, "aria-hidden": "true" })] }));
}
