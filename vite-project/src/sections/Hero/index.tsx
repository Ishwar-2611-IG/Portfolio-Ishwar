import { Arrow, SectionLabel } from "../../components/ui";
import { contact } from "../../data";
import imageIshwar from "../../imports/ishwaaar.png";
import { motion } from "motion/react";
import { drawLine, fadeUp, heroImage, heroSub, heroTitle, staggerContainer } from "../../utils/motion";

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
        <motion.div className="hero-copy" variants={staggerContainer} initial="hidden" animate="show">
          <SectionLabel number="01">Full-Stack Developer / India</SectionLabel>
          <motion.h1 id="hero-title" variants={heroTitle}>
            Hey, I'm<br /><em>Ishwar Gosavi</em>
          </motion.h1>
          <motion.p className="hero-kicker" variants={heroSub}>
            <em>I build fast, accessible and<br />beautiful web experiences.</em>
          </motion.p>
          <motion.p className="body-copy" variants={fadeUp}>
            I turn ideas into clean, scalable interfaces. I care about performance,
            accessibility and systems that make a real difference.
          </motion.p>
          <motion.button type="button" className="outline-cta" onClick={() => onNavigate("work")} variants={fadeUp}>
            <i aria-hidden="true" /> View My Work <Arrow />
          </motion.button>
        </motion.div>

        <motion.figure className="portrait-wrap" variants={heroImage} initial="hidden" animate="show">
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
            <motion.i aria-hidden="true" variants={drawLine} initial="hidden" animate="show" />
          </figcaption>
          <span className="coordinates">{contact.coords}</span>
        </motion.figure>
      </div>

      <div className="hero-foot">
        <span>React &nbsp;/&nbsp; Next.js &nbsp;/&nbsp; TypeScript &nbsp;/&nbsp; Tailwind CSS</span>
        <span aria-hidden="true">Scroll ↓</span>
      </div>
    </section>
  );
}