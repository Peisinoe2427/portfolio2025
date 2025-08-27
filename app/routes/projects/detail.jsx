import { useParams, Link } from "react-router";
import { useMemo, useState } from "react";
import { Globe, Github, Figma, PanelsTopLeft} from "lucide-react";

import { getProjectBySlug, getProjectsByScope } from "../../utilis/utilis";
import ProjectPicture from "../../components/ProjectPicture";
import ProjectCard from "../../components/ProjectCard";
import StackGrid from "../../components/StackGrid";
import ContactSection from "../../components/ContactSection";
import "./detail.css";



export default function Detail() {
    const { slug } = useParams();
    const project = getProjectBySlug(slug);
    const [active, setActive] = useState("All");
    const visible = useMemo(() => getProjectsByScope(active), [active]);

    if (!project) {
        return (
            <main>
                <h1>Project not found</h1>
                <p><Link to="/my-work" className="btn btn--large btn--primary">Back to My Work</Link></p>
            </main>
            );
    }

    const currentKey = project.slug ?? project.id;

    const suggestions = visible
    .filter(p => (p.slug ?? p.id) !== currentKey)
    .slice(0, 4);

    const restrictions = project.restrictions || project.restricitons || []; 
    const stackItems = Array.isArray(project.stack)
    ? [...new Set(project.stack.flat().filter(Boolean))] 
    : [];
    const CTA = {
        website: { label: "Visit Website",   Icon: Globe,        variant: "btn--primary" },
        github:  { label: "View Code",       Icon: Github,       variant: "btn--ghos"   },
        figma:   { label: "Explore Design", Icon: Figma,    variant: "btn--ghost"   },
        figjam:  { label: "See Process", Icon: PanelsTopLeft, variant: "btn--ghost" },
    };


    const hasLinks = (link = {}) => Object.values(link).some(v => typeof v === "string" && v.trim().length > 0);

    function normalizeUrl(url){ return url && /^(https?:)?\/\//i.test(url) ? url : `https://${url}`; }

    return (
        <main>
            <nav aria-label="Breadcrumb" className="breadcrumb margins">
                <Link to="/my-work" className="breadcrumbLink">My Work</Link> / <span className="breadcrumbActive">{project.title}</span>
            </nav>


            <section className="projectHead"> 
                <div className="headCover">
                    <ProjectPicture variant="cover" slug={project.slug} title={project.title} />
                </div>
                
                
                <h1 className="visually-hidden">Detail page of the project</h1>
                <div className="headerInfo">
                    <p className="projectScope">
                        {project.scope}
                        {project.delivered ? ` - ${project.delivered}` : null}
                    </p>
                    <h2 className="projectTitle">{project.title}</h2>
                    
                    <div>
                        {Array.isArray(project.process) && project.process.length > 0 && (
                            <>
                                <div className="processList">
                                {project.process.map((t, i) => (
                                    <span key={i} className="processTags">{t}</span>
                                ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            <section className="detailCTASection margins">
                <svg className="iconArrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_261_3255)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 -8.74228e-08C23.1046 -3.91405e-08 24 0.895431 24 2L24 22C24 23.1046 23.1046 24 22 24L2 24C0.895429 24 -4.73491e-07 23.1046 -4.25209e-07 22C-3.76926e-07 20.8954 0.895429 20 2 20L20 20L20 2C20 0.89543 20.8954 -1.35705e-07 22 -8.74228e-08Z" fill="#1B1B1B"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4142 23.4142C22.6332 24.1953 21.3668 24.1953 20.5858 23.4142L0.585787 3.41421C-0.195261 2.63316 -0.195261 1.36683 0.585787 0.585785C1.36684 -0.195263 2.63317 -0.195263 3.41421 0.585786L23.4142 20.5858C24.1953 21.3668 24.1953 22.6332 23.4142 23.4142Z" fill="#1B1B1B"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_261_3255">
                        <rect width="24" height="24" fill="white" transform="translate(24) rotate(90)"/>
                        </clipPath>
                    </defs>
                </svg>
                
                <div className="detailCTAText" >
                    <h3>Want to Jump Right In?</h3>
                
                    {hasLinks(project.link) && (
                        <>
                            <ul className="links links--cta">
                                {Object.entries(CTA).map(([key, cfg]) => {
                                    const href = normalizeUrl(project.link?.[key]);
                                    if (!href) return null;
                                    const { Icon, label, variant } = cfg;
                                    return (
                                    <li key={key}>
                                        <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`btn ${variant} btn--small btn--cta`}
                                        aria-label={`${label} — ${project.title}`}
                                        >
                                        {Icon ? <Icon size={16} aria-hidden="true" /> : null}
                                        <span>{label}</span>

                                        </a>
                                    </li>
                                    );
                                })}
                            </ul>
                        </>
                    )}
                </div>
            </section>

            <section className="projectSummary margins">
                <h3>Project Summary</h3>

                <div className="projectPic">
                    <ProjectPicture variant="summary" slug={project.slug} title={project.title} />
                </div>

                <div className="sumGoals">
                    {project.goal && (
                        <>
                            <h3 className="subtitleProcess">Goal</h3>
                            <p>{project.goal}</p>
                        </>
                    )}
                </div>

                <div className="sumStack">
                    {stackItems.length > 0 && (
                    <>
                        <h3 className="subtitleProcess">Stack</h3>
                        <StackGrid
                            items={stackItems}
                            size={28}              
                        />
                    </>
                    )}
                </div>

                <div className="sumRestriction">
                    {restrictions.length > 0 && (
                        <>
                            <h3 className="subtitleProcess">Restrictions</h3>
                            <ul className="list list--pill">
                                <li>
                                    {project.duration ? `Duration: ${project.duration}. ` : null}
                                </li>
                                <li>
                                    {project.academic?.year
                                        ? `Made during year ${project.academic.year}`
                                        : null}
                                    {project.academic?.course
                                        ? ` for ${project.academic.course}`
                                        : null}
                                </li>
                                {restrictions.map((r, i) => <li key={i}>{r}</li>)}
                            </ul>
                        </>
                    )}
                </div>
            </section>
            

            <section className="projectSuggestion margins">
                <h2>Explore More Projects</h2>
                <div className="suggList">
                    {suggestions.map(p => (
                        <ProjectCard key={p.slug ?? p.id} project={p} variant="compact" />
                    ))}
                </div>
            </section>
            

            <ContactSection/>
        </main>
    );
}