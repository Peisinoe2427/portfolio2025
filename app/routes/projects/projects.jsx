import ProjectCard from "../../components/ProjectCard";
import "./projects.css";
import { useMemo, useState } from "react";
import { getProjectsByScope, getUniqueScopes } from "../../utilis/utilis";
import ContactSection from "../../components/ContactSection.jsx";



export default function Projects() {
    const scopes = useMemo(() => ["All", ...getUniqueScopes()], []);
    const [active, setActive] = useState("All");
    const visible = useMemo(() => getProjectsByScope(active), [active]);
    return (
        <main>
            <h1 className="titleMyWork">My work</h1>
            <nav aria-label="Project scopes" className="navProject">
                {scopes.map(s => (
                    <button
                        key={s}
                        onClick={e => {
                            setActive(s);
                            e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                        }
                    }
                    aria-pressed={active === s}
                    className={active === s ? 'active' : ''}
                    >
                        {s}
                    </button>
                ))}
            </nav>

            <section className="projectsGrid margins">
                {visible.map(p => (
                    <ProjectCard key={p.slug || p.id} project={p} variant="compact"/>
                ))}
            </section>
            <ContactSection/>
        </main>
    )
}