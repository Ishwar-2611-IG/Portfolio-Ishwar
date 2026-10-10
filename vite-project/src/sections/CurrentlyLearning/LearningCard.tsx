import type { LearningCategory } from "../../data";

interface Props {
  category: LearningCategory;
  index: number;
}

export function LearningCard({ category, index }: Props) {
  return (
    <article className="learning-card" style={{ animationDelay: `${index * 70}ms` }}>
      <div className="learning-card-meta">
        <span className="learning-card-number">{String(index + 1).padStart(2, "0")}</span>
        <span className="learning-card-label">{category.label}</span>
      </div>
      <h3>{category.title}</h3>
      <p className="learning-card-description">{category.description}</p>
      <ul className="learning-topics" aria-label={`${category.title} learning topics`}>
        {category.topics.map((topic) => <li key={topic}>{topic}</li>)}
      </ul>
    </article>
  );
}