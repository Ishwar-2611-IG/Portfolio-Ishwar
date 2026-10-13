import { Arrow, SectionLabel } from "../../components/ui";
import { contact } from "../../data";
import imageIshwar from "../../imports/ishwaaar.png";

interface Props {
  onNavigate: (id: string) => void;
}

export function Hero({ onNavigate }: Props) {
  return (
    <section className="hero section" id="home" aria-labelledby="hero-title">
      <div className="topline">
        <span>Portfolio / 2026</span>
        <nav aria-label="Quick links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a className="top-cta" href="#contact">Let's talk</a>
        </nav>
      </div>

      <div className="hero-grid">
        <div className="hero-copy">
          <SectionLabel number="01">Full-Stack Developer / India</SectionLabel>
          <h1 id="hero-title">
            Hey, I'm<br /><em>Ishwar Gosavi</em>
          </h1>
          <p className="hero-kicker">
            <em>I build fast, accessible and<br />beautiful web experiences.</em>
          </p>
          <p className="body-copy">
            I turn ideas into clean, scalable interfaces. I care about performance,
            accessibility and systems that make a real difference.
          </p>
          <button type="button" className="outline-cta" onClick={() => onNavigate("work")}>
            <i aria-hidden="true" /> View My Work <Arrow />
          </button>
        </div>

        <figure className="portrait-wrap">
          <span className="tan-block" aria-hidden="true" />
          <img
            src={imageIshwar}
            alt={`Portrait of ${contact.name}`}
            width={640}
            height={800}
            fetchPriority="high"
          />
          <figcaption className="image-caption">
            <span>Based in India</span>
            <i aria-hidden="true" />
          </figcaption>
          <span className="coordinates">{contact.coords}</span>
        </figure>
      </div>

      <div className="hero-foot">
        <span>React &nbsp;/&nbsp; Next.js &nbsp;/&nbsp; TypeScript &nbsp;/&nbsp; Tailwind CSS</span>
        <span aria-hidden="true">Scroll ↓</span>
      </div>
    </section>
  );
}