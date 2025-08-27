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
    GSAP: "simple-icons:greensock",
    Illustrator: "simple-icons:adobeillustrator",
    Photoshop: "simple-icons:adobephotoshop",
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
