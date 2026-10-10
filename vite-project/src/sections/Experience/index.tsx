import { useState } from "react";
import { Accordion } from "@/components/ui/accordion";
import { SectionLabel } from "../../components/ui";
import { experiences, type Experience } from "../../data";
import { TimelineItem } from "./TimelineItem";

function experienceValue(item: Experience): string {
  return `${item.company}-${item.date}`;
}

function experienceStartValue(date: string): number | undefined {
  const monthYear = date.match(/([A-Za-z]{3,})\s+(\d{4})/);
  if (monthYear) {
    const month = new Date(`${monthYear[1]} 1, ${monthYear[2]}`).getMonth();
    if (!Number.isNaN(month)) return Number(monthYear[2]) * 12 + month;
  }

  const year = date.match(/\b(19|20)\d{2}\b/);
  return year ? Number(year[0]) * 12 : undefined;
}

function getInitialExperienceValue(items: Experience[]): string {
  const current = items.find((item) => /\b(present|current|ongoing)\b/i.test(item.date));
  if (current) return experienceValue(current);

  const datedItems = items
    .map((item) => ({ item, start: experienceStartValue(item.date) }))
    .filter((entry): entry is { item: Experience; start: number } => entry.start !== undefined)
    .sort((a, b) => b.start - a.start);

  return experienceValue(datedItems[0]?.item ?? items[0]!);
}

export function Experience() {
  const [activeValue, setActiveValue] = useState(() =>
    experiences.length ? getInitialExperienceValue(experiences) : "",
  );

  return (
    <section className="section experience" id="experience" aria-labelledby="exp-title">
      <div className="section-heading split-heading">
        <div>
          <SectionLabel number="06">Experience</SectionLabel>
          <h2 id="exp-title">
            Where I've<br />Worked
          </h2>
        </div>
        <p className="heading-note">My professional journey so far.</p>
      </div>

      {experiences.length > 0 && (
        <Accordion
          type="single"
          collapsible
          value={activeValue}
          onValueChange={setActiveValue}
          className="timeline experience-accordion"
        >
          {experiences.map((item, index) => {
            const value = experienceValue(item);
            return (
              <TimelineItem
                key={value}
                item={item}
                value={value}
                index={index}
                onHover={() => setActiveValue(value)}
              />
            );
          })}
        </Accordion>
      )}
    </section>
  );
}
