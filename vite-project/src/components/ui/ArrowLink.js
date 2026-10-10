import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Arrow } from "./Arrow";
/** Underlined text link with an animated trailing arrow. */
export function ArrowLink({ href, children, light = false, className = "" }) {
    return (_jsxs("a", { className: `arrow-link${light ? " arrow-link--light" : ""}${className ? ` ${className}` : ""}`, href: href, children: [_jsx("span", { children: children }), _jsx(Arrow, {})] }));
}
