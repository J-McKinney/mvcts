import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import Styles from "../../views/style.module.css";
import TLI from "../../assets/img/transparentLogoIcon.png";

function DemoNavbar(props) {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [color, setColor] = React.useState("transparent");
  const sidebarToggle = React.useRef();
  const toggle = () => {
    if (isOpen) {
      setColor("transparent");
    } else {
      setColor("white");
    }
    setIsOpen(!isOpen);
  };
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && isOpen) {
      setColor("white");
    } else {
      setColor("transparent");
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
  }, []);
  React.useEffect(() => {
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      sidebarToggle.current.classList.toggle("toggled");
    }
  }, [location]);
  return (
    // add or remove classes depending if we are on full-screen-maps page or not
    <>
      <Navbar
        color={
          props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "white"
            : color
        }
        expand="lg"
        className={
          props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "navbar-absolute fixed-top"
            : "navbar-absolute fixed-top " +
              (color === "transparent" ? "navbar-transparent " : "")
        }
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="MVCLogo">
              <Link to="/mvcts/home" className="nav-link">
                <img
                  // style={{ margin: "0", height: "60px", width: "60px" }}
                  // src={TLI}
                  style={{ margin: "0", height: "70px", width: "70px" }}
                  src={`https://d1l9wtg77iuzz5.cloudfront.net/assets/5637/233039/original_logo.svg?1527722828`}
                  alt="Logo"
                />
              </Link>
            </div>
          </div>
          <NavbarToggler onClick={toggle}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </NavbarToggler>
          {/* Right side of top nav bar on mobile */}
          <Collapse isOpen={isOpen} navbar className="justify-content-end">
            <Nav navbar>
              {/* Home */}
              <NavItem>
                <Link to="/mvcts/home" className="nav-link">
                  <h5
                    style={{
                      color: "lightseagreen",
                      fontSize: "2em",
                      fontWeight: "600",
                    }}
                    id={Styles.h5}
                  >
                    Home
                  </h5>
                  {/* <p> */}
                    <span
                      style={{
                        color: "lightseagreen",
                        fontSize: "2em",
                        fontWeight: "600",
                      }}
                      className="d-lg-none d-md-block"
                    >
                      <i
                        style={{
                          color: "lightseagreen",
                          fontSize: "1em",
                          fontWeight: "600",
                        }}
                        className="now-ui-icons shopping_shop"
                      />{" "}
                      Home
                    </span>
                  {/* </p> */}
                </Link>
              </NavItem>
              {/* Form */}
              <NavItem>
                <Link to="/mvcts/travel-form" className="nav-link">
                  <h5
                    style={{
                      color: "lightseagreen",
                      fontSize: "2em",
                      fontWeight: "600",
                    }}
                    id={Styles.h5}
                  >
                    Travel Form
                  </h5>
                  <p>
                    <span
                      style={{
                        color: "lightseagreen",
                        fontSize: "2em",
                        fontWeight: "600",
                      }}
                      className="d-lg-none d-md-block"
                    >
                      <i
                        style={{
                          color: "lightseagreen",
                          fontSize: "1em",
                          fontWeight: "600",
                        }}
                        className="now-ui-icons files_paper"
                      />{" "}
                      Travel Form
                    </span>
                  </p>
                </Link>
              </NavItem>
              {/* Location */}
              <NavItem>
                <Link to="/mvcts/maps" className="nav-link">
                  <h5
                    style={{
                      color: "lightseagreen",
                      fontSize: "2em",
                      fontWeight: "600",
                    }}
                    id={Styles.h5}
                  >
                    Our Location
                  </h5>
                  <p>
                    <span
                      style={{
                        color: "lightseagreen",
                        fontSize: "2em",
                        fontWeight: "600",
                      }}
                      className="d-lg-none d-md-block"
                    >
                      <i
                        style={{
                          color: "lightseagreen",
                          fontSize: "1em",
                          fontWeight: "600",
                        }}
                        className="now-ui-icons location_pin"
                      />{" "}
                      Our Location
                    </span>
                  </p>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/mvcts/about-us" className="nav-link">
                  <h5
                    style={{
                      color: "lightseagreen",
                      fontSize: "2em",
                      fontWeight: "600",
                    }}
                    id={Styles.h5}
                  >
                    About Us
                  </h5>
                  <p>
                    <span
                      style={{
                        color: "lightseagreen",
                        fontSize: "2em",
                        fontWeight: "600",
                      }}
                      className="d-lg-none d-md-block"
                    >
                      <i
                        style={{
                          color: "lightseagreen",
                          fontSize: "1em",
                          fontWeight: "600",
                        }}
                        className="now-ui-icons users_single-02"
                      />{" "}
                      About Us
                    </span>
                  </p>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default DemoNavbar;
