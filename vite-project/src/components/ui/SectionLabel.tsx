import type { ReactNode } from "react";

interface Props {
  number:   string;
  children: ReactNode;
}

/** Small numbered eyebrow label used above every section heading. */
export function SectionLabel({ number, children }: Props) {
  return (
    <p className="section-label">
      {number} <span aria-hidden="true">/</span> {children}
    </p>
  );
}
