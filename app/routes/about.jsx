import ContactSection from "../components/ContactSection.jsx";
import "./about.css";
export default function About() {
    return (
        <main>
            <div className="aboutSection">
                <section className="margins">
                    <h1>About me, loading...</h1>
                    <p>I’m polishing this page. Come back soon.</p>
                    <p>Curious now? Ping me and I’ll send details, links, and work in progress.</p>
                </section>
            </div>

            <ContactSection/>
        </main>
    )
}