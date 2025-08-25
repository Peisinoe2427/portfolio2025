import { useParams, Link } from "react-router";
import { getProjectBySlug } from "../../utilis/utilis";

export default function Detail() {
    const { slug } = useParams();
    const project = getProjectBySlug(slug);

    if (!project) {
        return (
            <main>
                <h1>Project not found</h1>
                <p><Link to="/projects" className="btn btn--large btn--primary">Back to My Work</Link></p>
            </main>
            );
    }

    const restrictions =
    project.restrictions || project.restricitons || []; 

    return (
        <main>
            <nav aria-label="Breadcrumb">
                <Link to="/projects" >My Work</Link> / <span>{project.title}</span>
            </nav>


            <section>
                <h1 className="visually-hidden">Detail page of the project</h1>
                {project.cover && (
                    <img src={project.cover} alt={project.title} />
                )}
                <div>
                    <p>
                        {project.scope}
                        {project.delivered ? ` - [${project.delivered}]` : null}
                    </p>
                    <h2>{project.title}</h2>
                    <div className="line--allWidth"></div>
                    {project.summary && <p>{project.summary}</p>}
                </div>
            </section>

            <section>
                <h3>Project Summary</h3>
                <div>
                    <p className="h5">Goal</p>
                    {project.goal && (
                        <>
                            <h3>Goal</h3>
                            <p>{project.goal}</p>
                        </>
                    )}
                </div>
                <div>
                    <p className="h5">Restrictions</p>
                    {restrictions.length > 0 && (
                        <>
                            <h3>Restrictions</h3>
                            <ul>
                            {restrictions.map((r, i) => <li key={i}>{r}</li>)}
                            </ul>
                        </>
                    )}
                </div>

                <p>
                    {project.duration ? `Duration: ${project.duration}. ` : null}
                    {project.academic?.year
                        ? `Made during year ${project.academic.year}`
                        : null}
                    {project.academic?.course
                        ? ` for ${project.academic.course}`
                        : null}
                </p>

                <div>
                    {Array.isArray(project.process) && project.process.length > 0 && (
                        <>
                            <h3>Process</h3>
                            <div>
                            {project.process.map((t, i) => (
                                <span key={i}>{t}</span>
                            ))}
                            </div>
                        </>
                    )}
                </div>
            </section>
            


            {Array.isArray(project.stack) && project.stack.length > 0 && (
                <>
                    <h3>Stack</h3>
                    <ul>
                    {project.stack.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                </>
            )}

            {(project.link?.website || project.link?.github) && (
                <>
                    <h3>Links</h3>
                    <ul>
                    {project.link.website && (
                        <li>
                        <a href={project.link.website} target="_blank" rel="noreferrer">
                            Website
                        </a>
                        </li>
                    )}
                    {project.link.github && (
                        <li>
                        <a href={project.link.github} target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                        </li>
                    )}
                    </ul>
                </>
            )}

            <h2>Explore More Projects</h2>
            <div className="projects__grid">
                {visible.map(p => (
                    <ProjectCard key={p.slug || p.id} project={p} variant="default"/>
                ))}
            </div>
        </main>
    );
}