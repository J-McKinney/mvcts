/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
  Label,
  FormGroup,
  Input,
} from "reactstrap";
import Styles from "./style.module.css";
import MO from "../assets/img/MVCOriginal.jpg";
import PP from "../assets/img/passports.jpg";
import CND from "../assets/img/cnd.jpg";
import HU from "../assets/img/husky.jpg";

function Dashboard() {
  return (
    <>
      <div style={{ marginTop: "10vh" }} className="content">
        <Row>
          <Col xs={12} md={6}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                <CardTitle tag="h4">Updates</CardTitle>
              </CardHeader>
              <CardBody>
                <div
                  style={{ textAlign: "center", height: "40vh" }}
                  className="chart-area"
                >
                  <img
                    className={Styles.mo}
                    style={{
                      width: "90%",
                      height: "40vh",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                    src={MO}
                    alt="girl with dog"
                  />
                </div>
                <br />
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                <CardTitle tag="h4">New Updates</CardTitle>
              </CardHeader>
              <CardBody>
                <div
                  style={{ textAlign: "center", height: "40vh" }}
                  className="chart-area"
                >
                  <h3 style={{ margin: "30px" }} id={Styles.h3}>
                    Effective, the CDC temporarily suspended dog imports from
                    countries as a high-risk for rabies. Effective, the CDC
                    updated its requirements to allow certain dogs returning to
                    the US to be imported from countries as a high-risk for
                    rabies, if the pet meets specific requirements.
                  </h3>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* First Row */}

        <br />

        {/* Second Row */}
        <Row>
          <Col xs={12} md={6}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                <CardTitle tag="h4">Pet Travel</CardTitle>
              </CardHeader>
              <CardBody>
                <div
                  style={{ textAlign: "center", height: "40vh" }}
                  className="chart-area"
                >
                  <h3 style={{ margin: "30px" }} id={Styles.h3}>
                    Pet travel isn't easy, and everything else you have to do,
                    obtaining all the right documents with all the endorsements
                    can seem like quite the endeavor. We commonly receive
                    questions regarding the APHIS 7001, a Veterinary Health
                    Certificate that comes into play for pet moves.
                  </h3>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                <CardTitle tag="h4">International Travel</CardTitle>
              </CardHeader>
              <CardBody>
                <div
                  style={{ textAlign: "center", height: "40vh" }}
                  className="chart-area"
                >
                  <img
                    className={Styles.pp}
                    style={{
                      width: "90%",
                      height: "40vh",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                    src={PP}
                    alt="Passport cheers"
                  />
                </div>
                <br />
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* Second Row */}

        <br />

        {/* Third Row */}
        <Row>
          <Col xs={1} md={1} />
          <Col xs={10} md={10}>
            <Card id={Styles.bs} className="card-tasks">
              <CardHeader>
                <h5 className="card-category">Pet Travel Scheme (or PETS)</h5>
                <CardTitle tag="h4">Checklist for travel</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                type="checkbox"
                                disabled={true}
                              />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-left">
                          <p>
                            <strong>Microchip: </strong>Each Pet shall be
                            identified by means of a microchip. No other form of
                            identification is acceptable. The microchip used
                            should comply with ISO Standard 11784 or Annex A to
                            ISO standard 11785- otherwise the pet will need to
                            be sent with it’s own scanner attached to the top of
                            the crate.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                type="checkbox"
                                disabled={true}
                              />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-left">
                          <p>
                            <strong>Rabies Vaccination & Certificate: </strong>
                            All pets must have an original Rabies Certificate
                            and this certificate must state the microchip
                            number, the date of inoculation and the validity of
                            the particular vaccination you obtain. Some are good
                            for two years, others are only good for one.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                type="checkbox"
                                disabled={true}
                              />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-left">
                          <p>
                            <strong>Rabies Titer / FAVN-OIE Tests: </strong>FAVN
                            or Fluorescent Antibody Viral Neutralization (FAVN)
                            Blood Test is to ensure that the rabies vaccinations
                            have provided adequate rabies antibody levels and
                            will need to be approved by an approved Government
                            Facility prior to export (i.e. the USDA).
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                type="checkbox"
                                disabled={true}
                              />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-left">
                          <p>
                            <strong>Letter From Your Vet: </strong>Please have a
                            typed letter, on the Vet’s Company Letterhead, which
                            states the date the microchip was implanted. Please
                            include the microchip number and the Pet(s)
                            information (name, breed, sex & age) * Please note –
                            if the Rabies Vaccination and the blood draw date
                            were done on the same day, please state that the
                            vaccination was given BEFORE the blood was drawn. We
                            will need this letter signed by your Vet – in BLUE
                            ink.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                type="checkbox"
                                disabled={true}
                              />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-left">
                          <p>
                            <strong>EU Vet Health Certificate: </strong>(Form
                            EC#: 998) – This is the standard Health Certificate
                            to be filled out by Marietta Veterinary Clinic. This
                            certificate is valid for 4 months prior to departure
                            date, so do not get this issued too early.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                type="checkbox"
                                disabled={true}
                              />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-left">
                          <p>
                            <strong>
                              USDA Endorsement With Referenced Forms:{" "}
                            </strong>
                            Microchip Implantation Record. Rabies Certificate.
                            Rabies Titer Test Results. Vet Letter. EU Vet Health
                            Certificate. Must be sent to your local USDA for
                            their stamp of approval. Please contact Marietta
                            Veterinary Clinic on the best way of handling this.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                type="checkbox"
                                disabled={true}
                              />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                        </td>
                        <td className="text-left">
                          <p>
                            <strong>24-48 Hours Prior to Departure: </strong>
                            we will need to issue both an International Health
                            Certificate and Tick / Tapeworm Treatment we have
                            administered. Along with all files and additional
                            certificates to validate pet records and results.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* Third Row */}

        <br />

        {/* Fourth Row */}
        <Row>
          <Col xs={12} md={6}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                <CardTitle tag="h4">Updates</CardTitle>
              </CardHeader>
              <CardBody>
                <div
                  style={{ textAlign: "center", height: "40vh" }}
                  className="chart-area"
                >
                  <img
                    className={Styles.mo}
                    style={{
                      width: "90%",
                      height: "40vh",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                    src={CND}
                    alt="girl with dog"
                  />
                </div>
                <br />
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                <CardTitle tag="h4">New Updates</CardTitle>
              </CardHeader>
              <CardBody>
                <div
                  style={{ textAlign: "center", height: "40vh" }}
                  className="chart-area"
                >
                  <h3 style={{ margin: "30px" }} id={Styles.h3}>
                    Your destination may have specific requirements that must be
                    met before your pet can enter. Since the requirements are
                    determined by each country and can change frequently, every
                    plan pet travel will need to verified. Note that airlines
                    may have separate requirements.
                  </h3>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* Fourth Row */}

        <br />

        {/* Fifth Row */}
        <Row>
          <Col xs={12} md={6}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                <CardTitle tag="h4">New Updates</CardTitle>
              </CardHeader>
              <CardBody>
                <div
                  style={{ textAlign: "center", height: "40vh" }}
                  className="chart-area"
                >
                  <h3 style={{ margin: "30px" }} id={Styles.h3}>
                    The process for taking a pet bird or other exotic animal out
                    of the United States may involve multiple agencies including
                    USDA APHIS Veterinary Services (VS), and U.S. Fish and
                    Wildlife Service (FWS). It is critical that you meet ALL
                    requirements for each of these agencies prior to export.
                  </h3>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                <CardTitle tag="h4">Updates</CardTitle>
              </CardHeader>
              <CardBody>
                <div
                  style={{ textAlign: "center", height: "40vh" }}
                  className="chart-area"
                >
                  <img
                    className={Styles.mo}
                    style={{
                      width: "90%",
                      height: "40vh",
                      objectFit: "cover",
                      borderRadius: "15px",
                    }}
                    src={HU}
                    alt="girl with dog"
                  />
                </div>
                <br />
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* Fifth Row */}

        <br />
        {/* END */}
      </div>
    </>
  );
}

export default Dashboard;
