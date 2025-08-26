import ContactForm from "./ContactForm.jsx";
import "./ContactForm.css";
import "./ContactSection.css";
import { div } from "three/tsl";

export default function Footer() {
    return (
        <div className="formBg">
            <section className="formSection margins">
                <h2 className="visually-hidden">Contact section</h2>
                <div>
                    <h2>Feel like we might <br />be a great fit?</h2>
                    <p className="h5">Let’s talk</p>
                    <p>creationsmelioristes@gmail.com</p>
                    <p>+32 456 39 12 23</p>
                </div>

                <ContactForm endpoint="https://formspree.io/f/xpwjzydw" />
            </section>
        </div>
    )
}