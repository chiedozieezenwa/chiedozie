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

  return (
    <header className={design.container}>
      <nav className={design.nav}>
        <section className={design["left-section"]}>
          <img src={logo} alt="Logo" />
          <p>cE</p>
        </section>

        <section className={design["right-section"]}>
          <ul className={design.navlinks} onClick={toggleMenu}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? design.active : "")}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? design.active : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) => (isActive ? design.active : "")}
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) => (isActive ? design.active : "")}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? design.active : "")}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? design.active : "")}
              >
                Contact
              </NavLink>
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
