import { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";

export function ScrollingNavBar({ isHomePage }: { isHomePage: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ids = ["home", "vacaciones", "servicios"];
  const idsfaq = ["about us", "privacy policy"];
  const navbarHeight = 60;

  const handleScroll = () => {
    if (window.scrollY > navbarHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavbarToggle = () => {
    setExpanded((prevState) => !prevState);
  };


  return (
    <Navbar
      fixed="top"
      id="scrollingNavbar"
      expand="md"
      collapseOnSelect
      variant="dark"
      expanded={expanded}
      className={
        isHomePage ? (scrolled ? "scrolled" : "scrollingNavbar") : "scrolled"
      }
      onToggle={handleNavbarToggle}
    >
      <Navbar.Brand className="div-busines">
        <a href={"/"} className="div-busines">
          <img src="imgs/logo 1.png" alt="logo.png" className="navbar-logo" />
          <h4 className="busines-name">Vuelos Caribe</h4>
        </a>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="navbar-toggler me-2"
      >
        <span className="toggler-icon top-bar"></span>
        <span className="toggler-icon middle-bar"></span>
        <span className="toggler-icon bottom-bar"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav" className="collapsed">
        {isHomePage ? (
          <Nav className="ms-auto menu">
            {ids.map((id) => (
              <Nav.Item key={`menu-item-${id}`} className="menu-item">
                <Link
                  onClick={() => setExpanded(false)} //for collapseOnSelect work ok
                  activeClass="menu-link-active"
                  to={id}
                  spy={true} //this is for the links highlight
                  smooth={true}
                  duration={100}
                  offset={-60}
                  className="menu-link"
                >
                  {id}
                </Link>
              </Nav.Item>
            ))}
          </Nav>
        ) : (
          <Nav className="ms-auto menu">
            <Nav.Item className="menu-item">
              <a
                onClick={() => setExpanded(false)} //for collapseOnSelect work ok
                href={"/"}
                className="menu-link"
              >
                Inicio
              </a>
            </Nav.Item>
            {idsfaq.map((id) => (
              <Nav.Item className="menu-item">
                <Link
                  onClick={() => setExpanded(false)} //for collapseOnSelect work ok
                  activeClass="menu-link-active"
                  to={id}
                  spy={true} //this is for the links highlight
                  smooth={true}
                  duration={100}
                  offset={-60}
                  className="menu-link"
                >
                  {id}
                </Link>
              </Nav.Item>
            ))}
          </Nav>
        )}

        <div className="social-colapsed-icons"></div>
      </Navbar.Collapse>
    </Navbar>
  );
}
