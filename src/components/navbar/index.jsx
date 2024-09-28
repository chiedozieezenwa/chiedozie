import { HashLink as NavLink } from "react-router-hash-link"; // Import HashLink
import { logo } from "../../assets";
import design from "./navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Import FaTimes for the close icon
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home"); // Default to Home

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSetActive = (section) => {
    setActiveSection(section);
    setIsOpen(false); // Close the mobile menu when a link is clicked
  };

  return (
    <header className={design.container}>
      <nav className={design.nav}>
        <section className={design["left-section"]}>
          <img src={logo} alt="Logo" />
          <p>cE</p>
        </section>

        <section className={design["right-section"]}>
          <ul
            className={`${design.navlinks} ${isOpen ? design.responsive : ""}`}
            onClick={toggleMenu}
          >
            <li>
              <NavLink
                to="#home"
                smooth
                className={activeSection === "#home" ? design.activeLink : ""}
                onClick={() => handleSetActive("#home")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#about"
                smooth
                className={activeSection === "#about" ? design.activeLink : ""}
                onClick={() => handleSetActive("#about")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#resume"
                smooth
                className={activeSection === "#resume" ? design.activeLink : ""}
                onClick={() => handleSetActive("#resume")}
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#skills"
                smooth
                className={activeSection === "#skills" ? design.activeLink : ""}
                onClick={() => handleSetActive("#skills")}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#projects"
                smooth
                className={activeSection === "#projects" ? design.activeLink : ""}
                onClick={() => handleSetActive("#projects")}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#contact"
                smooth
                className={activeSection === "#contact" ? design.activeLink : ""}
                onClick={() => handleSetActive("#contact")}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className={design.icon} onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </section>
      </nav>
    </header>
  );
};
