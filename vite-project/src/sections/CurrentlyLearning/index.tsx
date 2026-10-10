import { SectionLabel } from "../../components/ui";
import { learningCategories } from "../../data";
import { LearningCard } from "./LearningCard";

export function CurrentlyLearning() {
  return (
    <section className="section learning" id="learning" aria-labelledby="learning-title">
      <div className="section-heading">
        <div>
          <SectionLabel number="05">Currently Learning</SectionLabel>
          <p className="learning-active-label">ACTIVE FOCUS</p>
          <h2 id="learning-title">Currently <em>Exploring</em></h2>
        </div>
        <p className="heading-note">
          Actively expanding depth across intelligent systems, large-scale architectures, and low-level computer science fundamentals.
        </p>
      </div>

      <div className="learning-grid">
        {learningCategories.map((category, index) => (
          <LearningCard key={category.title} category={category} index={index} />
        ))}
      </div>
    </section>
  );
}