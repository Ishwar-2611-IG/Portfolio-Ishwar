import { useEffect } from "react";
import { sections } from "../../data";

interface Props {
  progress:    number;
  menuOpen:    boolean;
  onToggleMenu: () => void;
  onNavigate:  (id: string) => void;
}

export function MobileHeader({ progress, menuOpen, onToggleMenu, onNavigate }: Props) {
  // Close menu on Escape key
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onToggleMenu(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, onToggleMenu]);

  return (
    <header className="mobile-header">
      <button
        type="button"
        className="brand"
        onClick={() => onNavigate("home")}
        aria-label="Back to top"
      >
        IG
      </button>

      <span className="mobile-progress" aria-hidden="true">{progress}%</span>

      <button
        type="button"
        className="menu-toggle"
        onClick={onToggleMenu}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        {menuOpen ? "Close" : "Menu"}
      </button>

      {menuOpen && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Portfolio sections">
          {sections.map(({ id, number, label }) => (
            <button type="button" key={id} onClick={() => onNavigate(id)}>
              <span>{number}</span>{label}
            </button>
          ))}
        </nav>
      )}

      <span
        className="mobile-progress-line"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
    </header>
  );
}
