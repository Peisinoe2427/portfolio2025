import { Icon } from "@iconify/react";
import { Globe, Award } from "lucide-react";
import "./about.css";
import StackGrid from "../components/StackGrid.jsx";
import ContactSection from "../components/ContactSection.jsx";

export default function About() {
    const designTools = [
        "Figma",
        "Illustrator",
        "Photoshop",
        "Sheets",
        "Miro",
    ];

    const devTools = [
        "HTML",
        "CSS",
        "Github",
        "Vanilla JS",
        "React",
        "GSAP",
        "ML5",
        "PHP",
        "Strapi",
        "Astro",
    ];

    const xp = [
        { title: "4 years", years: 4, note: "Management", color: "var(--lime)" },
        { title: "5 years", years: 5, note: "Canine Behaviourist", color: "var(--purple)" },
        { title: "10+ years", years: 10, note: "Customer service", color: "var(--grey01)" },
    ];

    const maxYears = Math.max(...xp.map(x => x.years));

    return (
        <main>  
            <header class="about__header">
                <picture className="img__about">
                    <source
                    sizes="(max-width: 303px) 100vw, 303px"
                    srcSet="
                        /assets/hero/mini-me_x5letb_c_scale,w_95.avif 95w, 
                        /assets/hero/mini-me_x5letb_c_scale,w_303.avif 303w" 
                    type="image/avif"
                    />
                    <img
                    sizes="(max-width: 303px) 100vw, 303px"
                    srcSet="
                        /assets/hero/mini-me_tc0dp5_c_scale,w_95.png 95w, 
                        /assets/hero/mini-me_tc0dp5_c_scale,w_181.png 181w,
                        /assets/hero/mini-me_tc0dp5_c_scale,w_240.png 240w, 
                        /assets/hero/mini-me_tc0dp5_c_scale,w_289.png 289w, 
                        /assets/hero/mini-me_tc0dp5_c_scale,w_303.png 303w" 
                    src="/assets/hero/mini-me_tc0dp5_c_scale,w_303.png"
                    alt="Picture of Melisa Lauriola"
                    width={303}
                    height={303}
                    fetchPriority="high"
                    />
                </picture>
                <div className="aboutIntro">
                    <h1 class="about__name">
                        <span class="about__firstname">Melisa</span>
                        <span class="about__lastname">Lauriola</span>
                    </h1>

                    <ul class="heroList">
                        <li>UX</li>
                        <li>Visual</li>
                        <li>Dev</li>
                    </ul>
                </div>
                
                <section className="about__years">
                    {xp.map((x) => (
                        <div
                        key={x.title}
                        className="yearBar"
                        style={{ "--w": `${(x.years / maxYears) * 100}%`, "--bg": x.color }}
                        >
                            <strong className="yearsFont">{x.title}</strong>
                            <p>{x.note}</p>
                        </div>
                    ))}
                </section>
            </header>

            <div className="infoAbout">
                <section className="about__tools">
                    <h3 className="about__title">Tools</h3>

                    <div className="about__content">
                        {designTools.length > 0 && (
                            <div className="toolsDesign">
                                <h4 className="h5">Design + UX</h4>
                                <StackGrid items={designTools} size={19} />
                            </div>
                        )}

                        {devTools.length > 0 && (
                            <div className="toolsWeb">
                                <h4 className="h5">Dev</h4>
                                <StackGrid items={devTools} size={19} />
                            </div>
                        )}
                    </div>
                    
                </section>

                <section class="about__education" aria-labelledby="edu-title">
                    <h3 className="about__title">Education</h3>
                    <ol class="timeline about__content">
                        <li class="timeline__item">
                            <div class="timeline__year h5"><time dateTime="2026">2026</time></div>
                            <div class="timeline__content">
                                <p><strong>Bachelor in Digital Design & Development</strong></p>
                                <p>Devine, Howest University, Kortrijk</p>
                            </div>
                        </li>

                        <li class="timeline__item">
                            <div class="timeline__year h5"><time dateTime="2018">2018</time></div>
                            <div class="timeline__content">
                                <p><strong>Specialized courses in Animal Behavior</strong></p>
                            </div>
                        </li>

                        <li class="timeline__item">
                            <div class="timeline__year h5"><time dateTime="2017">2017</time></div>
                            <div class="timeline__content">
                                <p><strong>Animal Behavior Specialist training (ABA1)</strong></p>
                                <p>Dogue Shop, Montreal</p>
                            </div>
                        </li>

                        <li class="timeline__item">
                            <div class="timeline__year h5"><time dateTime="2014">2014</time></div>
                            <div class="timeline__content">
                                <p><strong>College Diploma in Social Sciences</strong></p>
                                <p>Cégep de Bois-de-Boulogne, Montreal</p>
                            </div>
                        </li>
                    </ol>
                </section>

                <section class="about__other" aria-labelledby="other-title">
                    <h3 className="about__title">Other</h3>

                    <div class="other__grid about__content">
                        <div className="gridAwards ">
                            <h4 className="h5"> <Award size={18} strokeWidth={2} aria-hidden="true" />Award</h4>
                            <p>Won the Jury award for the 2024 Hack the Future in Antwerp</p>
                        </div>

                        <div>
                            <h4 className="h5"><Globe size={18} strokeWidth={2} aria-hidden="true" /> Languages</h4>
                            <ul className="lang-list">
                                <li>
                                    <span className="lang-label">English</span>
                                    <div className="lang-bar">
                                        <div className="lang-fill" style={{ "--level": "100%" }}></div>
                                    </div>
                                </li>
                                <li>
                                    <span className="lang-label">French</span>
                                    <div className="lang-bar">
                                        <div className="lang-fill" style={{ "--level": "100%" }}></div>
                                    </div>
                                </li>
                                <li>
                                    <span className="lang-label">Italian</span>
                                    <div className="lang-bar">
                                        <div className="lang-fill" style={{ "--level": "60%" }}></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            <section className="about__skills">
                <h3>Interactive Skill map coming soon...</h3>
            </section>

            <ContactSection/>
        </main>
    )
}