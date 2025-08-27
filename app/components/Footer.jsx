import "./Footer.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content margins">
                <div className="footer__col">
                    <p>© Creations Melioristes 2025</p>
                </div>

                <div className="footer__col">
                    <h5>Get In Touch</h5>
                    <ul>
                        <li>
                            <Icon icon="mdi:map-marker" /> Rixensart, Belgium
                        </li>
                        <li>
                            <Icon icon="mdi:phone" /> +32 456 39 12 23
                        </li>
                        <li>
                            <Icon icon="mdi:email" /> creationsmelioristes@gmail.com
                        </li>
                    </ul>
                </div>

                <div className="footer__col">
                    <h5>Follow Me</h5>
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
            </div>
        </footer>
    );
}