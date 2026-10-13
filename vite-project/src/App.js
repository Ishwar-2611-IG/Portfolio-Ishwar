import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useState } from "react";
import { Sidebar, MobileHeader } from "./components/layout";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Work } from "./sections/Work";
import { Skills } from "./sections/Skills";
import { CurrentlyLearning } from "./sections/CurrentlyLearning";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { scrollToSection } from "./utils/scroll";
import "./styles/index.css";
export default function App() {
    const { progress, active } = useScrollSpy();
    const [menuOpen, setMenuOpen] = useState(false);
    const go = useCallback((id) => {
        scrollToSection(id);
        setMenuOpen(false);
    }, []);
    const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);
    return (_jsxs("div", { className: "site-shell", children: [_jsx("a", { className: "skip-link", href: "#main", children: "Skip to content" }), _jsx(Sidebar, { active: active, progress: progress, onNavigate: go }), _jsx(MobileHeader, { progress: progress, menuOpen: menuOpen, onToggleMenu: toggleMenu, onNavigate: go }), _jsxs("main", { id: "main", children: [_jsx(Hero, { onNavigate: go }), _jsx(About, { onNavigate: go }), _jsx(Work, {}), _jsx(Skills, {}), _jsx(CurrentlyLearning, {}), _jsx(Experience, {}), _jsx(Contact, {})] })] }));
}
