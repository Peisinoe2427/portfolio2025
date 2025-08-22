import ProjectCard from "../../components/ProjectCard";
import { useMemo, useState } from "react";
import { getProjectsByScope, getUniqueScopes } from "../../utilis/utilis";

export default function Projects() {
    const scopes = useMemo(() => ["all", ...getUniqueScopes()], []);
    const [active, setActive] = useState("all");
    const visible = useMemo(() => getProjectsByScope(active), [active]);
    return (
        <main>
            <h1>My work</h1>
            <p>A selection of UX, design, and development work from my journey as a digital designer.</p>

            <nav aria-label="Project scopes">
                {scopes.map(s => (
                <button
                    key={s}
                    onClick={() => setActive(s)}
                    aria-pressed={active === s}
                >
                    {s}
                </button>
                ))}
            </nav>

            <section className="projects-list">
                <div className="projects__grid">
                    {visible.map(p => (
                        <ProjectCard key={p.slug || p.id} project={p} />
                    ))}
                </div>
            </section>
        </main>
    )
}