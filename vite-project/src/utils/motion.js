// ─── Viewport config ──────────────────────────────────────────────────────────
export const VIEWPORT = { once: true, amount: 0.15 };
// ─── Variants ─────────────────────────────────────────────────────────────────
export const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] } },
};
export const fadeLeft = {
    hidden: { opacity: 0, x: -48 },
    show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 0.61, 0.36, 1] } },
};
export const fadeRight = {
    hidden: { opacity: 0, x: 48 },
    show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.22, 0.61, 0.36, 1] } },
};
export const scaleIn = {
    hidden: { opacity: 0, scale: 0.92 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } },
};
export const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
export const staggerContainerSlow = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};
export const heroTitle = {
    hidden: { opacity: 0, y: 60, skewY: 4 },
    show: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.9, ease: [0.22, 0.61, 0.36, 1] } },
};
export const heroSub = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] } },
};
export const heroImage = {
    hidden: { opacity: 0, scale: 1.06, x: 30 },
    show: { opacity: 1, scale: 1, x: 0, transition: { duration: 1.1, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] } },
};
export const drawLine = {
    hidden: { scaleX: 0, originX: 0 },
    show: { scaleX: 1, transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] } },
};
