import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
    const sorted = [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));

    return (
        <main>
            <h1>My work</h1>
            <p>A selection of UX, design, and development work from my journey as a digital designer.</p>
            <section className="projects-list">
                <div className="projects__grid">
                    {sorted.map(p => (
                        <ProjectCard key={p.slug} project={p} />
                    ))}
                </div>
            </section>
        </main>
    )
}