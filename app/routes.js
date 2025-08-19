import { index, route, layout } from "@react-router/dev/routes";

export default [
    layout("layouts/main-layout.jsx", [
        index("routes/home.jsx"),
        route("about", "routes/about.jsx"),
        route("projects", "routes/projects/projects.jsx"),
        route("projects/:slug", "routes/projects/detail.jsx"),
        
        route("*", "routes/not-found.jsx"),
    ]),
];