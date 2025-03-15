import { useState } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="siteInfo">
          <img src="/Excellent-logo.png" alt="" className="site-logo" />
          <h1 className="site-name">Excellent Public School</h1>
        </div>
        <div className="nav-menu ">
          <ul className={`menu-list ${openMenu ? "active open" : ""}`}>
            <Link
              to="about" // Scrolls to the section with id="events"
              smooth={true} // Enables smooth scroll
              duration={500} // Duration of the scroll
              className="menu-list-item"
            >
              Home
            </Link>
            <Link
              to="about" // Scrolls to the section with id="events"
              smooth={true} // Enables smooth scroll
              duration={500} // Duration of the scroll
              className="menu-list-item"
            >
              About
            </Link>

            <Link
              to="achievements" // Scrolls to the section with id="events"
              smooth={true} // Enables smooth scroll
              duration={500} // Duration of the scroll
              className="menu-list-item"
            >
              Admission
            </Link>

            <Link
              to="facility" // Scrolls to the section with id="events"
              smooth={true} // Enables smooth scroll
              duration={500} // Duration of the scroll
              className="menu-list-item"
            >
              Facilities
            </Link>
          </ul>
          <img
            src="/hamburger.svg"
            alt="not found"
            className={`hamburger ${openMenu ? "open" : ""}`}
            onClick={toggleMenu}
          />
        </div>

        <a href="https://wa.me/919827279238" className="contact-button-navbar">
          Contact
        </a>
      </div>
    </div>
  );
};
export default Navbar;
