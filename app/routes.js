import { index, route, layout } from "@react-router/dev/routes";

export default [
    layout("layouts/main-layout.jsx", [
        index("routes/home.jsx"),
        route("about", "routes/about.jsx"),

        layout("layouts/projects-layout.jsx", [
            route("projects", "routes/projects/index.jsx"),
            route("projects/:slug", "routes/projects/detail.jsx"),
        ]),

        route("*", "routes/not-found.jsx"),
    ]),
];