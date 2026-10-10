import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Arrow, SectionLabel } from "../../components/ui";
import { contact } from "../../data";
import { ContactArt } from "./ContactArt";
import { Footer } from "./Footer";
function ContactIcon({ name }) {
    const paths = {
        email: "M3 5h18v14H3z M3 7l9 6 9-6",
        phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z",
        location: "M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0ZM12 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z",
    };
    return (_jsx("svg", { className: "contact-icon", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: _jsx("path", { d: paths[name] }) }));
}
export function Contact() {
    return (_jsxs("section", { className: "section contact", id: "contact", "aria-labelledby": "contact-title", children: [_jsxs("div", { className: "contact-main", children: [_jsxs("div", { children: [_jsx(SectionLabel, { number: "07", children: "Contact" }), _jsxs("h2", { id: "contact-title", children: ["Let's build  ", _jsx("br", {}), "something ", _jsx("br", {}), _jsx("em", { children: "useful together." })] })] }), _jsxs("div", { className: "contact-details", children: [_jsxs("p", { children: ["Have a project in mind or just want to say hi? ", _jsx("br", {}), "I'd love to hear from you."] }), _jsxs("a", { href: `mailto:${contact.email}`, children: [_jsx(ContactIcon, { name: "email" }), _jsx("span", { className: "contact-text", children: contact.email })] }), _jsxs("a", { href: `tel:${contact.phone}`, children: [_jsx(ContactIcon, { name: "phone" }), _jsx("span", { className: "contact-text", children: contact.phoneLabel })] }), _jsxs("span", { className: "contact-location", children: [_jsx(ContactIcon, { name: "location" }), _jsx("span", { children: contact.location })] }), _jsxs("a", { className: "solid-cta", href: `mailto:${contact.email}`, children: ["Send Message ", _jsx(Arrow, {})] })] })] }), _jsx(ContactArt, {}), _jsx(Footer, {})] }));
}
