import { Arrow, ArrowLink, SectionLabel } from "../../components/ui";
import { principles } from "../../data";

interface Props {
  onNavigate: (id: string) => void;
}

export function About({ onNavigate }: Props) {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      {/* ── Left: copy ── */}
      <div className="about-copy">
        <SectionLabel number="02">About</SectionLabel>
        <h2 id="about-title">
          Design with<br /><em>intention.</em>
        </h2>
        <p>
          I'm a full-stack engineer who works where design meets production engineering. I build
          modern web applications with React, Next.js and Tailwind CSS, turn complex problems into
          simple, elegant solutions, and enjoy collaborating on products people love.
        </p>
        <ArrowLink href="#capabilities">My skills</ArrowLink>
      </div>

      {/* ── Right: principles list ── */}
      <div className="about-details">
        <ol className="principles">
          {principles.map((principle, i) => (
            <li key={principle}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <p>{principle}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* ── Bottom-left: availability note ── */}
      <div className="about-note">
        <i aria-hidden="true" />
        <p>
          Currently open to<br />
          <em>new opportunities.</em> Let's build<br />
          something great together.
        </p>
        <button type="button" onClick={() => onNavigate("contact")}>
          Get in Touch <Arrow />
        </button>
      </div>

      {/* ── Bottom-right: architecture photo ── */}
      <div className="architecture">
        <img
          src="https://images.unsplash.com/photo-1565626424178-c699f6601afd?auto=format&fit=crop&w=1100&q=80"
          alt="Geometric concrete architecture"
          width={1100}
          height={1400}
          loading="lazy"
          decoding="async"
        />
        <i aria-hidden="true" />
      </div>
    </section>
  );
}
