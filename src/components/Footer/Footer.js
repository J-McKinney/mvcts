/*eslint-disable*/
import React from "react";
import { Container } from "reactstrap";
// import { Link } from "react-router-dom";
import { Button } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <>
      <footer
        style={{ background: "dimgray" }}
        className={"footer" + (props.default ? " footer-default" : "")}
      >
        <Container fluid={props.fluid ? true : false}>
          <nav>
            <div className="button-container">
              <Button
                className="btn-neutral btn-icon btn-round"
                color="default"
                href="https://www.facebook.com/MariettaVetClinic/"
                size="lg"
              >
                <i
                  style={{ color: "steelblue", marginTop: "6px" }}
                  className="fab fa-facebook-f fa-3x"
                />
              </Button>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="default"
                href="https://www.linkedin.com/company/marietta-vet-clinic/"
                size="lg"
              >
                <i
                  style={{ color: "royalblue", marginTop: "6px" }}
                  className="fab fa-linkedin-in fa-3x"
                />
              </Button>
              <Button
                className="btn-neutral btn-icon btn-round"
                color="default"
                href="https://www.google.com/maps?cid=14756440109326445849"
                size="lg"
              >
                <i
                  style={{
                    background:
                      "conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    WebkitTextFillColor: "transparent",
                    marginTop: "6px",
                  }}
                  className="fab fa-google fa-3x"
                ></i>
              </Button>
            </div>
            <br />
          </nav>
          <div
            style={{
              color: "lightseagreen",
              marginTop: "4vh",
              background: "white",
              borderRadius: "15px",
              boxShadow:
                "-1px -1px 2px 2px hsl(0, 0%, 39%), 2px 2px 2px 1px hsl(0, 0%, 79%)",
            }}
            className="copyright"
          >
            &copy; {1900 + new Date().getYear()},{" "}
            <a
              style={{ color: "lightseagreen" }}
              href="https://www.mariettavetclinic.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marietta Veterinary Clinic
            </a>{" "}
            &nbsp;{" "}
            <a
              style={{ color: "lightseagreen" }}
              href="tel:4049195150"
              target="_blank"
              rel="noopener noreferrer"
            >
              (404)9195150
            </a>
          </div>
        </Container>
      </footer>
    </>
  );
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
