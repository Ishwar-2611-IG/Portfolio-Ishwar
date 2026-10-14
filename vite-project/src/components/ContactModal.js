import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";
import { Mail, MessageCircle, X } from "lucide-react";
import "./ContactModal.css";
const WHATSAPP_PHONE = "919156878033";
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const inquiryTypes = [
    "Project inquiry",
    "Job opportunity",
    "Freelance work",
    "Collaboration",
    "General contact",
];
const initialForm = {
    name: "",
    phone: "",
    email: "",
    inquiry: "Project inquiry",
    message: "",
    website: "",
};
const fieldIds = {
    name: "contact-name",
    phone: "contact-phone",
    email: "contact-email",
    inquiry: "contact-inquiry",
    message: "contact-message",
    website: "contact-website",
};
export default function ContactModal({ trigger }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const triggerRef = useRef(null);
    const dialogRef = useRef(null);
    const nameRef = useRef(null);
    const closeTimer = useRef(null);
    const closeModalRef = useRef(() => { });
    useEffect(() => {
        if (!isOpen)
            return;
        const previousOverflow = document.body.style.overflow;
        const triggerElement = triggerRef.current;
        const focusFrame = window.requestAnimationFrame(() => nameRef.current?.focus());
        document.body.style.overflow = "hidden";
        function handleKeyDown(event) {
            if (event.key === "Escape") {
                event.preventDefault();
                closeModalRef.current();
                return;
            }
            if (event.key !== "Tab" || !dialogRef.current)
                return;
            const focusable = Array.from(dialogRef.current.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter((element) => element.getAttribute("aria-hidden") !== "true");
            if (focusable.length === 0) {
                event.preventDefault();
                return;
            }
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            const active = document.activeElement;
            if (event.shiftKey && (active === first || !dialogRef.current.contains(active))) {
                event.preventDefault();
                last.focus();
            }
            else if (!event.shiftKey && (active === last || !dialogRef.current.contains(active))) {
                event.preventDefault();
                first.focus();
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            window.cancelAnimationFrame(focusFrame);
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = previousOverflow;
            if (closeTimer.current !== null) {
                window.clearTimeout(closeTimer.current);
                closeTimer.current = null;
            }
            triggerElement?.focus();
        };
    }, [isOpen]);
    function openModal() {
        setStatus(null);
        setErrors({});
        setIsClosing(false);
        setIsOpen(true);
    }
    function closeModal() {
        if (isClosing)
            return;
        setIsClosing(true);
        closeTimer.current = window.setTimeout(finishClose, 220);
    }
    function finishClose() {
        if (closeTimer.current !== null) {
            window.clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
        setIsOpen(false);
        setIsClosing(false);
        setStatus(null);
        setErrors({});
    }
    closeModalRef.current = closeModal;
    function handleBackdropAnimationEnd(event) {
        if (event.target !== event.currentTarget || !isClosing)
            return;
        finishClose();
    }
    function updateField(event) {
        const { name, value } = event.target;
        const field = name;
        setForm((previous) => ({ ...previous, [field]: value }));
        setErrors((previous) => {
            if (!previous[field])
                return previous;
            const next = { ...previous };
            delete next[field];
            return next;
        });
        setStatus(null);
    }
    function validateForm() {
        const nextErrors = {};
        const name = form.name.trim();
        const phone = form.phone.trim();
        const email = form.email.trim();
        const digitCount = phone.replace(/\D/g, "").length;
        if (!name)
            nextErrors.name = "Please enter your name.";
        if (!phone) {
            nextErrors.phone = "Please enter your phone number.";
        }
        else if (!/^\+?[\d\s().-]+$/.test(phone) || digitCount < 8 || digitCount > 15) {
            nextErrors.phone = "Enter a valid phone number with 8 to 15 digits.";
        }
        if (!email) {
            nextErrors.email = "Please enter your email address.";
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            nextErrors.email = "Please enter a valid email address.";
        }
        if (!form.message.trim())
            nextErrors.message = "Please add a message.";
        setErrors(nextErrors);
        const firstInvalidField = Object.keys(nextErrors)[0];
        if (firstInvalidField) {
            setStatus({ type: "error", text: "Please correct the highlighted fields." });
            document.getElementById(fieldIds[firstInvalidField])?.focus();
            return false;
        }
        return true;
    }
    function sendWhatsApp() {
        if (!validateForm())
            return;
        if (form.website) {
            setStatus({
                type: "success",
                text: "WhatsApp opened with your message ready. Press Send there to complete delivery.",
            });
            return;
        }
        const message = [
            "Hello! I'm reaching out through your portfolio.",
            "",
            `Name: ${form.name.trim()}`,
            `Phone: ${form.phone.trim()}`,
            `Email: ${form.email.trim()}`,
            `Inquiry: ${form.inquiry}`,
            "",
            "Message:",
            form.message.trim(),
        ].join("\n");
        const phone = WHATSAPP_PHONE.replace(/\D/g, "");
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
        setStatus({
            type: "success",
            text: "WhatsApp opened with your message ready. Press Send there to complete delivery.",
        });
    }
    async function sendEmail() {
        if (!validateForm() || loading)
            return;
        if (form.website) {
            setStatus({ type: "success", text: "Email sent successfully." });
            return;
        }
        if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
            setStatus({ type: "error", text: "Email service is not configured yet." });
            return;
        }
        setLoading(true);
        setStatus(null);
        try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                from_name: form.name.trim(),
                from_email: form.email.trim(),
                phone: form.phone.trim(),
                inquiry: form.inquiry,
                message: form.message.trim(),
                reply_to: form.email.trim(),
            }, { publicKey: EMAILJS_PUBLIC_KEY });
            setStatus({ type: "success", text: "Email sent successfully." });
            setForm(initialForm);
            setErrors({});
        }
        catch {
            setStatus({ type: "error", text: "Unable to send email. Please try again." });
        }
        finally {
            setLoading(false);
        }
    }
    return (_jsxs(_Fragment, { children: [_jsx("button", { ref: triggerRef, type: "button", className: "contact-modal__trigger solid-cta", onClick: openModal, children: trigger }), isOpen &&
                createPortal(_jsx("div", { className: `contact-modal__backdrop${isClosing ? " is-closing" : ""}`, onMouseDown: (event) => {
                        if (event.target === event.currentTarget)
                            closeModal();
                    }, onAnimationEnd: handleBackdropAnimationEnd, children: _jsxs("div", { ref: dialogRef, className: `contact-modal__dialog${isClosing ? " is-closing" : ""}`, role: "dialog", "aria-modal": "true", "aria-labelledby": "contact-modal-title", "aria-describedby": "contact-modal-description", tabIndex: -1, children: [_jsxs("header", { className: "contact-modal__header", children: [_jsxs("div", { children: [_jsx("p", { className: "contact-modal__eyebrow", children: "Get in touch" }), _jsx("h2", { id: "contact-modal-title", children: "Let's connect." }), _jsx("p", { id: "contact-modal-description", className: "contact-modal__intro", children: "Tell me what you have in mind." })] }), _jsx("button", { type: "button", className: "contact-modal__close", onClick: closeModal, "aria-label": "Close contact form", children: _jsx(X, { "aria-hidden": "true", size: 20 }) })] }), _jsxs("form", { className: "contact-modal__form", onSubmit: (event) => {
                                    event.preventDefault();
                                    void sendEmail();
                                }, noValidate: true, children: [_jsxs("div", { className: "contact-modal__field", children: [_jsxs("label", { htmlFor: fieldIds.name, children: ["Full name ", _jsx("span", { children: "*" })] }), _jsx("input", { ref: nameRef, id: fieldIds.name, name: "name", value: form.name, onChange: updateField, autoComplete: "name", required: true, maxLength: 100, placeholder: "Your name", "aria-invalid": Boolean(errors.name), "aria-describedby": errors.name ? `${fieldIds.name}-error` : undefined }), errors.name && _jsx("p", { id: `${fieldIds.name}-error`, className: "contact-modal__field-error", children: errors.name })] }), _jsxs("div", { className: "contact-modal__row", children: [_jsxs("div", { className: "contact-modal__field", children: [_jsxs("label", { htmlFor: fieldIds.phone, children: ["Phone number ", _jsx("span", { children: "*" })] }), _jsx("input", { id: fieldIds.phone, name: "phone", type: "tel", value: form.phone, onChange: updateField, autoComplete: "tel", required: true, maxLength: 30, placeholder: "+91 ...", "aria-invalid": Boolean(errors.phone), "aria-describedby": errors.phone ? `${fieldIds.phone}-error` : undefined }), errors.phone && _jsx("p", { id: `${fieldIds.phone}-error`, className: "contact-modal__field-error", children: errors.phone })] }), _jsxs("div", { className: "contact-modal__field", children: [_jsxs("label", { htmlFor: fieldIds.email, children: ["Email address ", _jsx("span", { children: "*" })] }), _jsx("input", { id: fieldIds.email, name: "email", type: "email", value: form.email, onChange: updateField, autoComplete: "email", required: true, maxLength: 254, placeholder: "you@example.com", "aria-invalid": Boolean(errors.email), "aria-describedby": errors.email ? `${fieldIds.email}-error` : undefined }), errors.email && _jsx("p", { id: `${fieldIds.email}-error`, className: "contact-modal__field-error", children: errors.email })] })] }), _jsxs("div", { className: "contact-modal__field", children: [_jsx("label", { htmlFor: fieldIds.inquiry, children: "Reason for contacting" }), _jsx("select", { id: fieldIds.inquiry, name: "inquiry", value: form.inquiry, onChange: updateField, children: inquiryTypes.map((type) => _jsx("option", { value: type, children: type }, type)) })] }), _jsxs("div", { className: "contact-modal__field", children: [_jsxs("label", { htmlFor: fieldIds.message, children: ["Your message ", _jsx("span", { children: "*" })] }), _jsx("textarea", { id: fieldIds.message, name: "message", value: form.message, onChange: updateField, required: true, rows: 4, maxLength: 3000, placeholder: "Tell me about your inquiry...", "aria-invalid": Boolean(errors.message), "aria-describedby": errors.message ? `${fieldIds.message}-error ${fieldIds.message}-count` : `${fieldIds.message}-count` }), _jsxs("div", { className: "contact-modal__message-meta", children: [errors.message && _jsx("p", { id: `${fieldIds.message}-error`, className: "contact-modal__field-error", children: errors.message }), _jsxs("p", { id: `${fieldIds.message}-count`, className: "contact-modal__counter", "aria-live": "polite", children: [form.message.length, "/3000"] })] })] }), _jsx("input", { id: fieldIds.website, type: "text", name: "website", value: form.website, onChange: updateField, tabIndex: -1, autoComplete: "off", "aria-hidden": "true", className: "contact-modal__honeypot" }), status && (_jsx("p", { className: `contact-modal__status contact-modal__status--${status.type}`, role: status.type === "error" ? "alert" : "status", "aria-live": status.type === "error" ? "assertive" : "polite", children: status.text })), _jsxs("div", { className: "contact-modal__actions", children: [_jsxs("button", { type: "button", className: "contact-modal__action contact-modal__action--whatsapp", onClick: sendWhatsApp, disabled: loading, children: [_jsx(MessageCircle, { "aria-hidden": "true", size: 18 }), _jsx("span", { children: "Send via WhatsApp" })] }), _jsxs("button", { type: "submit", className: "contact-modal__action contact-modal__action--email", disabled: loading, children: [_jsx(Mail, { "aria-hidden": "true", size: 18 }), _jsx("span", { children: loading ? "Sending..." : "Send via Email" })] })] }), _jsx("p", { className: "contact-modal__note", children: "WhatsApp opens with your message ready; press Send there to deliver it. Email submissions are sent securely through the configured email service." })] })] }) }), document.body)] }));
}
