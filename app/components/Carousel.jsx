import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState, useCallback } from "react";
import ProjectCard from "../components/ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./carousel.css";


export default function Carousel({ featured = [] }) {  
    const [selected, setSelected] = useState(0);
    const [viewportRef, embla] = useEmblaCarousel({ loop: true, align: "center" });

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelected(embla.selectedScrollSnap());
    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        embla.on("select", onSelect);
        onSelect();
    }, [embla, onSelect]);

    return (    
        <div className="embla">
            <button
                className="embla__arrow embla__arrow--prev"
                onClick={() => embla && embla.scrollPrev()}
                aria-label="Previous slide"
            >
                <ChevronLeft size={28} />
            </button>

            <div className="embla__viewport" ref={viewportRef}>
                <div className="embla__container">
                    {featured.map((p, i) => (
                        <div className="embla__slide" key={p.slug || p.id || i}>
                            <ProjectCard project={p} variant="stacked" />
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="embla__arrow embla__arrow--next"
                onClick={() => embla && embla.scrollNext()}
                aria-label="Next slide"
            >
                <ChevronRight size={28} />
            </button>

            <div className="embla__dots">
                {featured.map((_, i) => (
                    <button
                        key={i}
                        className={`dot ${i === selected ? "is-active" : ""}`}
                        onClick={() => embla?.scrollTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}