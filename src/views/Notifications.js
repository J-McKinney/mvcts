import React from "react";
import Styles from "./style.module.css";
import CatDog from "../assets/img/catDog.png";
import DCW from "../assets/img/dogCarWindow.jpg";
import DIC from "../assets/img/dogInCrate.jpg";
import Crew from "../assets/img/GroupOfficePic.jpg";
import Door from "../assets/img/MVCFrontDoor.jpeg";
import JP from "../assets/img/JPeckich.jpg";

// reactstrap components
import {
  Alert,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  Col,
  Button,
} from "reactstrap";

function Notifications() {
  return (
    <>
      <div className={Styles.wrapper}>
        <div
          style={{
            height: "89.99vh",
            marginTop: "0.01vh",
            backgroundImage: `url(${CatDog})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
          className="content"
        ></div>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <h1 id={Styles.title}>
              <span id={Styles.span}>
                Marietta Veterinary Clinic Travel Services
              </span>
            </h1>
          </Col>
        </Row>
        <div style={{ marginTop: "10vh" }} className="content">
          <Row
            style={{
              textAlign: "center",
              alignContent: "center",
              justifyContent: "center",
              justifySelf: "center",
            }}
          >
            {/* First Col on left */}
            <Col className="ml-auto mr-auto" lg={6} md={12} xs={12}>
              <Card
                style={{
                  boxShadow:
                    "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                  borderRadius: "15px",
                }}
              >
                <CardHeader>
                  {/* <CardTitle tag="h4">Notifications Style</CardTitle> */}
                </CardHeader>
                <CardBody>
                  <img
                    className={Styles.DCW}
                    src={DCW}
                    alt="Dog looking out car window"
                  />
                </CardBody>
              </Card>
            </Col>
            {/* First Col on left */}

            {/* Second Col on right */}
            <Col className="align-self-center" lg={6} md={12} xs={12}>
              <h3
                id={Styles.h3}
                style={{ textAlign: "center", alignContent: "center" }}
              >
                Because the pandemic has added a layer of complexity to all
                international pet (and human) travel, we are currently booking
                further in advance than normal and recommend that you Request
                Relocation Support as far in advance as possible. We are
                unfortunately not able to accommodate every request at this
                time; the sooner you submit your request, the more likely we
                will be able to work with you! Before contacting us, we
                recommend reviewing our pricing information and how we move pets
                to make sure our full-service offering aligns with your needs.
              </h3>
            </Col>
            {/* Second Col on right */}

            {/* Second Row */}
            <Col
              lg={12}
              md={12}
              xs={12}
              style={{ marginTop: "10vh", marginBottom: "10vh" }}
            >
              <Card
                style={{
                  boxShadow:
                    "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                  borderRadius: "15px",
                }}
              >
                <CardBody>
                  <div className="places-buttons">
                    <Row>
                      <Col md={6} className="ml-auto mr-auto text-center">
                        <CardTitle
                          style={{
                            color: "dimgrey",
                            fontWeight: "900",
                            fontSize: "40px",
                          }}
                          tag="h4"
                        >
                          Meet our Veterinarian
                          <p
                            style={{
                              color: "lightseagreen",
                              fontWeight: "900",
                              fontSize: "25px",
                            }}
                            className="category"
                          >
                            A DOCTOR WHO TRULY CARES
                          </p>
                        </CardTitle>
                      </Col>
                    </Row>
                    {/* First Row in big container */}
                    <Row>
                      <Col lg={8} xs={12} className="ml-auto mr-auto">
                        <Row>
                          <Col md={4} xs={12}>
                            <img className={Styles.crew} src={Crew} alt="..." />
                          </Col>
                          <Col md={4} xs={12}>
                            <img className={Styles.door} src={Door} alt="..." />
                          </Col>
                          <Col md={4} xs={12}>
                            <img className={Styles.jp} src={JP} alt="..." />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    {/* First Row in big container */}

                    {/* Second row in big container */}
                    <Row>
                      <Col lg={8} xs={12} className="ml-auto mr-auto">
                        <Row>
                          <Col md={4} xs={12}>
                            <img className={Styles.crew} src={Crew} alt="..." />
                          </Col>
                          <Col md={4} xs={12}>
                            <img className={Styles.door} src={Door} alt="..." />
                          </Col>
                          <Col md={4} xs={12}>
                            <img className={Styles.jp} src={JP} alt="..." />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    {/* Second row in big container */}
                  </div>
                </CardBody>
              </Card>
            </Col>
            {/* Second Row */}

            {/* Third Row */}
            <Row
              style={{
                textAlign: "center",
                alignContent: "center",
                justifyContent: "center",
                justifySelf: "center",
              }}
            >
              {/* Third Col on left */}
              <Col className="align-self-center" lg={6} md={12} xs={12}>
                <h3
                  id={Styles.h3}
                  style={{ textAlign: "center", alignContent: "center" }}
                >
                  If this is your first time moving with a pet, you are probably
                  worried about all of the unknowns. Our past clients remember
                  the feeling so they love sharing their stories of moves we
                  have walked them through—even some very complicated moves—and
                  how sweet it was to reunite with their pets on the other side.
                </h3>
              </Col>
              {/* Third Col on left */}

              {/* Fourth Col on right */}
              <Col className="ml-auto mr-auto" lg={6} md={12} xs={12}>
                <Card
                  style={{
                    boxShadow:
                      "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                    borderRadius: "15px",
                  }}
                >
                  <CardBody>
                    <img
                      className={Styles.DIC}
                      src={DIC}
                      alt="Dog looking out car window"
                    />
                  </CardBody>
                </Card>
              </Col>
              {/* Fourth Col on right */}
            </Row>

            {/* Fourth Row */}
            <Col
              lg={12}
              md={12}
              xs={12}
              style={{ marginTop: "10vh", marginBottom: "10vh" }}
            >
              <Card
                style={{
                  boxShadow:
                    "-1px -1px 2px 2px hsl(0, 0%, 79%), 5px 5px 5px 3px hsl(0, 0%, 39%)",
                  borderRadius: "15px",
                }}
              >
                <CardBody>
                  <div className="places-buttons">
                    <Row>
                      <Col md={6} className="ml-auto mr-auto text-center">
                        <CardTitle
                          style={{
                            color: "dimgrey",
                            fontWeight: "900",
                            fontSize: "40px",
                          }}
                          tag="h4"
                        >
                          Meet our Veterinarian
                          <p
                            style={{
                              color: "lightseagreen",
                              fontWeight: "900",
                              fontSize: "25px",
                            }}
                            className="category"
                          >
                            A DOCTOR WHO TRULY CARES
                          </p>
                        </CardTitle>
                      </Col>
                    </Row>
                    {/* First Row in big container */}
                    <Row>
                      <Col lg={8} xs={12} className="ml-auto mr-auto">
                        <Row>
                          <Col md={4} xs={12}>
                            <img className={Styles.crew} src={Crew} alt="..." />
                          </Col>
                          <Col md={4} xs={12}>
                            <img className={Styles.door} src={Door} alt="..." />
                          </Col>
                          <Col md={4} xs={12}>
                            <img className={Styles.jp} src={JP} alt="..." />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    {/* First Row in big container */}

                    {/* Second row in big container */}
                    <Row>
                      <Col lg={8} xs={12} className="ml-auto mr-auto">
                        <Row>
                          <Col md={4} xs={12}>
                            <img className={Styles.crew} src={Crew} alt="..." />
                          </Col>
                          <Col md={4} xs={12}>
                            <img className={Styles.door} src={Door} alt="..." />
                          </Col>
                          <Col md={4} xs={12}>
                            <img className={Styles.jp} src={JP} alt="..." />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    {/* Second row in big container */}
                  </div>
                </CardBody>
              </Card>
            </Col>
            {/* Fourth Row */}
          </Row>
        </div>
      </div>
    </>
  );
}

export default Notifications;
