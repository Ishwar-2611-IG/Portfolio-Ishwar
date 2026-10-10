import type { ReactNode } from "react";
import { Arrow } from "./Arrow";

interface Props {
  href:      string;
  children:  ReactNode;
  /** Switches to a light (white) color scheme for use on dark backgrounds. */
  light?:    boolean;
  className?: string;
}

/** Underlined text link with an animated trailing arrow. */
export function ArrowLink({ href, children, light = false, className = "" }: Props) {
  return (
    <a
      className={`arrow-link${light ? " arrow-link--light" : ""}${className ? ` ${className}` : ""}`}
      href={href}
    >
      <span>{children}</span>
      <Arrow />
    </a>
  );
}
