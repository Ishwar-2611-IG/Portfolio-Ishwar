import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { contact } from "../../data";
export function Footer() {
    return (_jsxs("footer", { children: [_jsx("strong", { children: "IG" }), _jsxs("p", { children: ["\u00A9 ", new Date().getFullYear(), " ", contact.name, ". All rights reserved."] })] }));
}
