import { useCallback, useState } from "react";

import { Sidebar, MobileHeader }   from "./components/layout";
import { Hero }                     from "./sections/Hero";
import { About }                    from "./sections/About";
import { Work }                     from "./sections/Work";
import { Skills }                   from "./sections/Skills";
import { CurrentlyLearning }        from "./sections/CurrentlyLearning";
import { Experience }               from "./sections/Experience";
import { Contact }                  from "./sections/Contact";
import { useScrollSpy }             from "./hooks/useScrollSpy";
import { scrollToSection }          from "./utils/scroll";
import "./styles/index.css";

export default function App() {
  const { progress, active } = useScrollSpy();
  const [menuOpen, setMenuOpen] = useState(false);

  const go = useCallback((id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <Sidebar active={active} progress={progress} onNavigate={go} />
      <MobileHeader
        progress={progress}
        menuOpen={menuOpen}
        onToggleMenu={toggleMenu}
        onNavigate={go}
      />
      <main id="main">
        <Hero       onNavigate={go} />
        <About      onNavigate={go} />
        <Work />
        <Skills />
        <CurrentlyLearning />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}