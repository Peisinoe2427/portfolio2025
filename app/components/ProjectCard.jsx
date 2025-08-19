import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
// import "./card.css";

export default function ProjectCard ({ project }) {
    if (!project) return null;

    const { slug, title, summary, cover, scope, delivered } = project;
    const to = `/projects/${slug}`;
    const badges = [scope, delivered].filter(Boolean);

    return (
        <article className="card">
        <div className="card__media">
            <img src={cover} alt={title} className="card__image" />
            {badges.length > 0 && (
            <ul className="card__badges card__badges--overlay">
                {badges.map(b => (
                <li key={b} className="card__badge">{b}</li>
                ))}
            </ul>
            )}
        </div>

        <div className="card__content">
            <div className="card__header">
            <h3 className="card__title">{title}</h3>
            <Link to={to} className="card__cta" aria-label={`Open ${title}`}>
                <ArrowUpRight className="card__icon" />
            </Link>
            </div>

            {badges.length > 0 && (
            <ul className="card__badges card__badges--inline">
                {badges.map(b => (
                <li key={b} className="card__badge">{b}</li>
                ))}
            </ul>
            )}

            {summary && <p className="card__summary">{summary}</p>}
        </div>
        </article>
    );
}

// TO USE
// <ProjectCard variant="default" ... />
// <ProjectCard variant="stacked" ... />
// <ProjectCard variant="compact" ... />