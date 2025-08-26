import { useParams } from "react-router";

const MAP = {
    summary: {
        dir: s => `assets/${s}/summary/`,
        base: s => `${s}-summary_`,
        avifWidths: [320, 705, 1410],
        fallbackWidths: [320, 400, 512, 640, 705, 1410],
        sizes: "(max-width: 705px) 100vw, 705px",
        fallbackExt: "png",
        intrinsic: [705, 415], 
    },
    cover: {
        dir: s => `assets/${s}/cover/`,
        base: s => `${s}-cover_`,
        avifWidths: [360, 596, 1192],
        fallbackWidths: [360, 596, 1192],
        sizes: "(max-width: 596px) 100vw, 596px",
        fallbackExt: "jpg",
        intrinsic: [596, 295],
    },
    compact: {
        dir: s => `assets/${s}/compact/`,
        base: s => `${s}-compact_`,
        avifWidths: [321, 405, 810],
        fallbackWidths: [321, 405, 810], 
        sizes: "(max-width: 405px) 100vw, 405px",
        fallbackExt: "jpg",
        intrinsic: [405, 253],
    },
    stacked: {
        dir: s => `assets/${s}/stacked/`,
        base: s => `${s}-stacked_`,
        avifWidths: [248, 467, 934],
        fallbackWidths: [248, 467, 934],
        sizes: "(max-width: 467px) 100vw, 467px",
        fallbackExt: "jpg",
        intrinsic: [467, 292],
    },
};

const BASE = import.meta.env.BASE_URL || "/";

const setFrom = (base, widths, ext) =>  widths.map(w => `${base}${w}.${ext} ${w}w`).join(", ");

export default function ProjectPicture({
        variant,                       // "summary" | "cover" | "compact" | "stacked"
        slug: propSlug,
        title: propTitle,
        className,
        priority = false,
        avifWidths, fallbackWidths, sizes, fallbackExt, width, height,
    }) {
    const { slug: routeSlug } = useParams();
    const slug = propSlug ?? routeSlug;
    if (!slug) return null;

    const cfg = MAP[variant];
    if (!cfg) return null;

    const dir = `${BASE}${cfg.dir(slug)}`;
    const base = `${dir}${cfg.base(slug)}`;

    const theAvif = avifWidths ?? cfg.avifWidths;
    const theFb   = fallbackWidths ?? cfg.fallbackWidths;
    const theSizes = sizes ?? cfg.sizes;
    const theExt   = fallbackExt ?? cfg.fallbackExt;
    const [defW, defH] = cfg.intrinsic;
    const w = width ?? defW;
    const h = height ?? defH;

    const priorityAttrs = priority
        ? { fetchPriority: "high", loading: "eager", decoding: "sync" }
        : { loading: "lazy", decoding: "async" };
    
    const variantClass = `pic--${variant}`;
    const rootClass = ["pic", variantClass, className].filter(Boolean).join(" ");

    return (
        <picture className={rootClass}>
            <source
                type="image/avif"
                sizes={theSizes}
                srcSet={setFrom(base, theAvif, "avif")}
            />
            <img
                alt={`${variant} image of ${propTitle ?? slug}`}
                className="pic__img"
                width={w}
                height={h}
                sizes={theSizes}
                srcSet={setFrom(base, theFb, theExt)}
                src={`${base}${Math.max(...theFb)}.${theExt}`}
                {...priorityAttrs}
            />
        </picture>
    );
}