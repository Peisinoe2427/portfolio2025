import "./Stackgrid.css";
import { Icon } from "@iconify/react";

const ICON_KEYS = {
    Figma: "simple-icons:figma",
    Figjam: "simple-icons:figma",
    Sheets: "simple-icons:googlesheets",
    Miro: "simple-icons:miro",
    "React Router 7": "simple-icons:reactrouter",
    Supabase: "simple-icons:supabase",
    Vite: "simple-icons:vite",
    Javascript: "simple-icons:javascript",
    "Vanilla JS": "simple-icons:javascript",
    CSS: "simple-icons:css3",
    Github: "simple-icons:github",
    Illustrator: "simple-icons:adobeillustrator",
    Photoshop: "simple-icons:adobephotoshop",

    HTML: "simple-icons:html5",
    React: "simple-icons:react",
    GSAP: "simple-icons:greensock",
    ML5: "carbon:machine-learning-model", 
    PHP: "simple-icons:php",
    Strapi: "simple-icons:strapi",
    Astro: "simple-icons:astro",
};

export default function StackGrid({ items = [], size = 28}) {

    return (
        <ul className="stack" role="list">
            {items.map(name => (
                <li key={name} className="stack__item">
                    <Icon icon={ICON_KEYS[name]} width={size} height={size} className="stack__logo" />
                    <span className="stack__caption">{name}</span>
                </li>
            ))}
        </ul>
    );
}
