import React, { useContext } from "react";
import "../../scss/navbar/navbar.scss";

import { FaMoon } from "react-icons/fa";
import { PiSunDimBold } from "react-icons/pi";

import { ThemeContext } from "../../context/theme/theme";

import logo_light from "../../assests/logos/logo_light.png";
import dark_logo from "../../assests/logos/logo_dark.png";
import { Link } from "react-scroll";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="hero" smooth={true} duration={500}>
          <img src={theme ? logo_light : dark_logo} alt="" srcSet="" />
        </Link>
      </div>
      <ul className="nav-items">
        <li>
          <Link to="hero" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skill" smooth={true} duration={500} offset={-50}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="clients" smooth={true} duration={500} offset={-50}>
            Clients
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-50}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="theme-toggle" onClick={toggleTheme}>
        {theme ? <PiSunDimBold /> : <FaMoon />}
      </div>
    </nav>
  );
};

export default NavBar;
