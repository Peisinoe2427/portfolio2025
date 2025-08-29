import { ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router";

export default function TopBar() {
    return (
        <header className="margins">
            <nav className="topbar">
                <NavLink to="/" end className="nav__link">Home</NavLink>
                <NavLink to="/my-work" className="nav__link">My Work</NavLink>
                <NavLink to="/about" className="nav__link">About</NavLink>
        
                <a href="#formSection" className="nav__contact btn btn--small btn--third">
                    Contact Me <ArrowUpRight className="ml-2 w-4 h-4" />
                </a>
            </nav>
        </header>
    );
}