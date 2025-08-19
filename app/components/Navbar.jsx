import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

export default function Navbar() {
    return (
        <header>
            <nav>
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="/" className="nav__link">Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="./projects/projects" className="nav__link">My Work</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/about" className="nav__link">About</Link>
                    </li>
                </ul>
                <Link to="/about" className="nav__link btn btn--third">Contact Me <ArrowUpRight className="ml-2 w-4 h-4" /></Link>
            </nav>
        </header>
    )
}