import type { Experience } from "../../data";
import type { PointerEvent } from "react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Props {
  item: Experience;
  value: string;
  index: number;
  onHover: () => void;
}

export function TimelineItem({ item, value, index, onHover }: Props) {
  return (
    <AccordionItem value={value} className="experience-item" onPointerEnter={(event: PointerEvent<HTMLDivElement>) => {
      if (event.pointerType === "mouse") onHover();
    }}>
      <AccordionTrigger className="experience-trigger">
        <span className="experience-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="experience-date">{item.date}</span>
        <span className="experience-summary">
          <span className="experience-role">{item.role}</span>
          <span className="experience-company">{item.company}</span>
          {item.location && <span className="experience-location">{item.location}</span>}
        </span>
      </AccordionTrigger>
      <AccordionContent className="experience-accordion-content">
        <div className="experience-details">
          <p className="experience-description">{item.detail}</p>
          {item.highlights && item.highlights.length > 0 && (
            <ul className="experience-highlights">
              {item.highlights.map((highlight) => {
                const separator = highlight.indexOf(":");
                const title = separator >= 0 ? highlight.slice(0, separator) : "";
                const description = separator >= 0 ? highlight.slice(separator + 1).trim() : highlight;
                return (
                  <li key={highlight}>
                    {title && <strong>{title}: </strong>}
                    {description}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
