import { index, route, layout } from "@react-router/dev/routes";

export default [
    layout("layouts/main-layout.jsx", [
        index("routes/home.jsx"),
        route("about", "routes/about.jsx"),
        route("my-work", "routes/projects/projects.jsx"),
        route("my-work/:slug", "routes/projects/detail.jsx"),
    ]),
];