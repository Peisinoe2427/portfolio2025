import { projects } from "../data/projects";

export const getAllProjects = () => projects.slice();

export const getProjectById = id => projects.find(p => String(p.id) === String(id));

export const getProjectBySlug = (slug) => {
    return projects.find((p) => p.slug === slug);
};

export const getProjectsByScope = scope => {
    let list =
        !scope || scope === "all"
        ? getAllProjects()
        : projects.filter(p => p.scope === scope);

    return list.slice().sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
    });
};

export const getUniqueScopes = () => Array.from(new Set(projects.map(p => p.scope))).filter(Boolean);
