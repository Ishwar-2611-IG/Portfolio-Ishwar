import igMonogram from "@/imports/Sleek_Black_and_Blue_IG_Monogram.png";
import { sections, type SectionId } from "../../data";

interface Props {
  active:      SectionId;
  progress:    number;
  onNavigate:  (id: string) => void;
}

export function Sidebar({ active, progress, onNavigate }: Props) {
  const activeLabel = sections.find((s) => s.id === active)?.label;

  return (
    <aside className="sidebar">
      <button
        type="button"
        className="brand brand--sidebar"
        onClick={() => onNavigate("home")}
        aria-label="Ishwar Gosavi — back to top"
      >
        <img src={igMonogram} alt="" width={64} height={64} />
      </button>

      <nav className="side-nav" aria-label="Portfolio sections">
        {sections.map(({ id, number, label }) => (
          <button
            type="button"
            key={id}
            className={active === id ? "active" : ""}
            aria-current={active === id ? "true" : undefined}
            onClick={() => onNavigate(id)}
          >
            <span>{number}</span>
            {label}
          </button>
        ))}
      </nav>

      <div className="scroll-meter" role="status" aria-label={`Page scrolled ${progress}%`}>
        <span className="scroll-word scroll-word--sidebar">Scroll</span>
        <div className="meter-track">
          <span style={{ height: `${Math.max(progress, 2)}%` }} />
        </div>
        <strong>{progress}%</strong>
        <small>
          Current<br />{activeLabel}
        </small>
      </div>
    </aside>
  );
}
