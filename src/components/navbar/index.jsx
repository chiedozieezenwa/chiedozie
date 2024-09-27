import { NavLink } from "react-router-dom";
import { logo } from "../../assets";
import design from "./navbar.module.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getActiveClass = ({ isActive }) =>
    isActive ? design.active : undefined;

  return (
    <header className={design.container}>
      <nav className={design.nav}>
        <section className={design["left-section"]}>
          <img src={logo} alt="Logo" />
          <p>cE</p>
        </section>

        <section className={design["right-section"]}>
          <ul className={design.navlinks}>
            <li>
              <NavLink className={getActiveClass} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={getActiveClass}>About</NavLink>
            </li>
            <li>
              <NavLink className={getActiveClass}>Resume</NavLink>
            </li>
            <li>
              <NavLink className={getActiveClass}>Skills</NavLink>
            </li>
            <li>
              <NavLink className={getActiveClass}>Projects</NavLink>
            </li>
            <li>
              <NavLink className={getActiveClass}>Contact</NavLink>
            </li>
          </ul>

          <div className={design.icon} onClick={toggleMenu}>
            <FaBars />
          </div>
        </section>
      </nav>
    </header>
  );
};
