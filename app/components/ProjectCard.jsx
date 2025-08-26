import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import ProjectPicture from "./ProjectPicture";
import "./ProjectCard.css";

const VARIANTS = {
    stacked: "card--stacked",
    compact: "card--compact",
};
export default function ProjectCard ({project, variant = "stacked",  className = "",}) {
    if (!project) return null;
    const vClass = VARIANTS[variant] ?? VARIANTS.stacked;
    const classes = ["card", vClass, className].filter(Boolean).join(" ");

    return (
        <article className={classes} data-variant={variant}>
            <div className="cardImgTag">
                {variant === "compact" && (
                    <ProjectPicture variant="compact" slug={project.slug} title={project.title} />
                )}
                {variant === "stacked" && (
                    <ProjectPicture variant="stacked" slug={project.slug} title={project.title}/>
                )}
                <div className="cardTags">
                    {project.delivered && (
                        <span className="card__tag caption">{project.delivered}</span>
                    )}
                    {variant !== "compact" && project.scope && (
                        <span className="card__tag caption">{project.scope}</span>
                    )}
                </div>
            </div>

            <div className="cardInfo">
                <div className="cardTitle">
                    <p className="card__title h5">{project.title}</p>
                    <Link to={`/my-work/${project.slug || project.id}`} className="btn btn--primary btn--icon" aria-label={`Open ${project.title}`}>
                        <ArrowUpRight size={19} strokeWidth={2.5}/>
                    </Link>
                </div>

                {project.summary && <p className="card__summary">{project.summary}</p>}
            </div>
        </article>
    );
}
