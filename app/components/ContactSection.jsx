import ContactForm from "./ContactForm.jsx";
import { Icon } from "@iconify/react";
import "./ContactForm.css";
import "./ContactSection.css";


export default function Footer() {
    return (
        <div className="formBg">
            <section className="formSection margins" id="formSection">
                <h2 className="visually-hidden">Contact section</h2>
                <div>
                    <h2>Feel like we might <br />be a great fit?</h2>
                    <p className="h5">Let’s talk</p>
                    <p>creationsmelioristes@gmail.com</p>
                    <p>+32 456 39 12 23</p>
                    <div className="footer__socials">
                        <a href="https://github.com/Peisinoe2427" target="_blank" rel="noopener noreferrer">
                            <Icon icon="mdi:github" />
                        </a>
                        <a href="https://www.instagram.com/creationsmelioristes" target="_blank" rel="noopener noreferrer">
                            <Icon icon="mdi:instagram" />
                        </a>
                        <a href="https://www.behance.net/mlisalar" target="_blank" rel="noopener noreferrer">
                            <Icon icon="mdi:behance" />
                        </a>
                        <a href="https://www.linkedin.com/in/melisa-lauriola-ux-web-design/" target="_blank" rel="noopener noreferrer">
                            <Icon icon="mdi:linkedin" />
                        </a>
                    </div>
                </div>

                <ContactForm endpoint="https://formspree.io/f/xpwjzydw" />
            </section>
        </div>
    )
}