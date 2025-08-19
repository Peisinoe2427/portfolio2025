import { useParams } from "react-router";
import { projects } from "../../data/projects";

export default function Detail() {

    const { slug } = useParams();
    const p = projects.find(x => x.slug === slug);

    if (!p) return <p>Project not found.</p>;
    const restrictions = p.restrictions ?? p.restricitons ?? [];

    return (
        <article className="project">
        <header className="project__header">
            <h1 className="project__title">{p.title}</h1>
            <p className="project__meta">
            {p.scope} • {p.delivered} • {p.duration}
            </p>
        </header>

        <img className="project__cover" src={p.cover} alt="" />

        {p.summary && <p className="project__summary">{p.summary}</p>}

        {p.goal && (
            <>
            <h2 className="project__sub">Goal</h2>
            <p>{p.goal}</p>
            </>
        )}

        {restrictions.length > 0 && (
            <>
            <h2 className="project__sub">Restrictions</h2>
            <ul className="project__list">
                {restrictions.map(item => <li key={item}>{item}</li>)}
            </ul>
            </>
        )}

        {p.stack?.length > 0 && (
            <>
            <h2 className="project__sub">Stack</h2>
            <ul className="project__tags">
                {p.stack.map(t => <li key={t} className="tag">{t}</li>)}
            </ul>
            </>
        )}

        {p.process?.length > 0 && (
            <>
            <h2 className="project__sub">Process</h2>
            <ul className="project__tags">
                {p.process.map(step => <li key={step} className="tag">{step}</li>)}
            </ul>
            </>
        )}

        {p.link && (
            <>
            <h2 className="project__sub">Links</h2>
            <ul className="project__links">
                {Object.entries(p.link).filter(([,v]) => v).map(([k, v]) => (
                <li key={k}><a href={v} target="_blank" rel="noreferrer">{k}</a></li>
                ))}
            </ul>
            </>
        )}

        {p.academic && (
            <p className="project__meta">
            Year {p.academic.year} - {p.academic.course}
            </p>
        )}
        </article>
    );
}