/*eslint-disable*/
import React from "react";
import Styles from "./style.module.css";
import CatDog from "../assets/img/catDog.png";
import DCW from "../assets/img/dogCarWindow.jpg";
import DIC from "../assets/img/dogInCrate.jpg";
import Crew from "../assets/img/GroupOfficePic.jpg";
import Door from "../assets/img/MVCFrontDoor.jpeg";
import JP from "../assets/img/JPeckich.jpg";
import BSD from "../assets/img/backSeatDog.jpg";
import CC from "../assets/img/catCase.jpg";
import HD from "../assets/img/hikerDog.jpg";

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

function Home() {
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
          />
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
                      <Col xl={12} lg={12} xs={12} className="ml-auto mr-auto">
                        <Row>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <img
                              className={Styles.crew}
                              src={Crew}
                              alt="MVC Crew"
                            />
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            {/* <img className={Styles.door} src={Door} alt="..." /> */}
                            <h3 id={Styles.h3}>
                              Are you looking for a veterinarian you can trust
                              to care for your furry friend? Our doctor and
                              clinic are obsessed with animals and treat each
                              pet like family. Each pet has its own unique
                              needs, personality, and preferences, and we take
                              the time to truly understand how to best care for
                              your cat or dog.
                            </h3>
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <img
                              className={Styles.jp}
                              src={JP}
                              alt="Julian Peckich"
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    {/* First Row in big container */}

                    {/* Second row in big container */}
                    <Row>
                      <Col xl={12} lg={12} xs={12} className="ml-auto mr-auto">
                        <Row>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <h3 id={Styles.h3}>
                              Our full-service veterinarian clinic in Marietta,
                              GA, takes great pride in caring for your pets and
                              are dedicated to protecting their health with the
                              utmost care and compassion. We understand that
                              going to the vet can be stressful for both you and
                              your pet, and we strive to create a pleasant
                              experience for all.
                            </h3>
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <img
                              className={Styles.door}
                              src={Door}
                              alt="Front door of MVC"
                            />
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <h3 id={Styles.h3}>
                              At Marietta Vet Clinic, we offer comprehensive,
                              high-quality care at our state-of-the-art
                              facility. We strive to create the most welcoming,
                              pleasant experience for you and your furry friend.
                              Dr. Peckich is affiliated with the American
                              Veterinary Medical Association and has been
                              providing specialized care for nearly ten years.{" "}
                            </h3>
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
                          What to Know Before Moving Pets
                          <p
                            style={{
                              color: "lightseagreen",
                              fontWeight: "900",
                              fontSize: "25px",
                            }}
                            className="category"
                          >
                            Important Documents
                          </p>
                        </CardTitle>
                      </Col>
                    </Row>
                    {/* First Row in big container */}
                    <Row>
                      <Col
                        xl={12}
                        lg={12}
                        md={12}
                        xs={12}
                        className="ml-auto mr-auto"
                      >
                        <Row>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <h3 id={Styles.h3}>
                              Once in the United States, or if you are traveling
                              only within the United States, your pets may need
                              to travel by ground transportation. This would
                              depend on a number of factors including
                              destination, current weather, breed and size of
                              your pet.{" "}
                            </h3>
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <img
                              className={Styles.cc}
                              src={CC}
                              alt="Cat in suit case"
                            />
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <h3 id={Styles.h3}>
                              Make sure your pet is vaccinated against rabies.
                              While most states within the United States will
                              accept any valid rabies vaccination, some may
                              require a vaccine that is older than 21 days. Pets
                              should travel with an original Rabies Certificate
                              signed by the vet.
                            </h3>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    {/* First Row in big container */}

                    {/* Second row in big container */}
                    <Row>
                      <Col
                        xl={12}
                        lg={12}
                        md={12}
                        xs={12}
                        className="ml-auto mr-auto"
                      >
                        <Row>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <img
                              className={Styles.bsd}
                              src={BSD}
                              alt="Dog in a hatchback"
                            />
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <h3 id={Styles.h3}>
                              Moving with pets in tow? We can help! Meet our
                              experts and see how we can make this portion of
                              your relocation as stress-free as possible so that
                              you can focus on your human move.
                            </h3>
                          </Col>
                          <Col xl={4} lg={12} md={12} xs={12}>
                            <img
                              className={Styles.hd}
                              src={HD}
                              alt="Dog hitchhiking"
                            />
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

export default Home;
