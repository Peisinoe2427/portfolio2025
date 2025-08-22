import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
// import "./card.css";

export default function ProjectCard ({ project }) {
    if (!project) return null;

    return (
        <article className="card">
            <div>
                {project.delivered && (
                    <span>{project.delivered}</span>
                )}
                {/* {project.cover && (
                    <img src={project.cover} alt={project.title} />
                )} */}
            </div>

            <div>
                <h2>{project.title}</h2>
                <Link to={`/my-work/${project.slug || project.id}`} className="btn btn--small btn--primary btn--icon">
                    <ArrowUpRight/>
                </Link>
            </div>

            {project.summary && <p>{project.summary}</p>}
        </article>
    );
}

// TO USE
// <ProjectCard variant="default" ... />
// <ProjectCard variant="stacked" ... />
// <ProjectCard variant="compact" ... />