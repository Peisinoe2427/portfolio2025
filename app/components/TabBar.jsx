import { House, Archive, User } from "lucide-react";
import { Link, NavLink } from "react-router";

export default function TabBar() {
    return (
        <nav className="tabbar">
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink to="/" end className="nav__linkTab">
                        <House aria-hidden="true" size={19} strokeWidth={1.75} />
                        <span className="nav__label">Home</span>
                    </NavLink>
                </li>

                <li className="nav__item">
                    <NavLink to="/my-work" className="nav__linkTab">
                        <Archive aria-hidden="true" size={19} strokeWidth={1.75} />
                        <span className="nav__label">My Work</span>
                    </NavLink>
                </li>

                <li className="nav__item">
                    <NavLink to="/about" className="nav__linkTab">
                        <User aria-hidden="true" size={19} strokeWidth={1.75} />
                        <span className="nav__label">About</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}