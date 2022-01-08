import React from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table,
  Button,
  Label,
  FormGroup,
  Input,
  UncontrolledTooltip,
} from "reactstrap";
import Styles from "./style.module.css";
import MO from "../assets/img/MVCOriginal.jpg";
import PP from "../assets/img/passports.jpg";

function Dashboard() {
  return (
    <>
      <div style={{ marginTop: "10vh" }} className="content">
        <Row>
          <Col xs={12} md={6}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                <CardTitle tag="h4">Shipped Products</CardTitle>
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
              </CardBody>
              <CardFooter>
                <div className="stats">
                  {/* <i className="now-ui-icons arrows-1_refresh-69" /> Just
                  Updated */}
                </div>
              </CardFooter>
            </Card>
          </Col>
          {/* <Col xs={12} md={4}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                <h5 className="card-category">2021 Sales</h5>
                <CardTitle tag="h4">All products</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area"></div>
              </CardBody>
              <CardFooter>
                <div className="stats">
                </div>
              </CardFooter>
            </Card>
          </Col> */}
          <Col xs={12} md={6}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                <CardTitle tag="h4">24 Hours Performance</CardTitle>
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
              </CardBody>
              <CardFooter>
                <div className="stats">
                  {/* <i className="now-ui-icons ui-2_time-alarm" /> Last 7 days */}
                </div>
              </CardFooter>
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
                <CardTitle tag="h4">Shipped Products</CardTitle>
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
              </CardBody>
              <CardFooter>
                <div className="stats">
                  {/* <i className="now-ui-icons arrows-1_refresh-69" /> Just
                  Updated */}
                </div>
              </CardFooter>
            </Card>
          </Col>
          {/* <Col xs={12} md={4}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                <h5 className="card-category">2021 Sales</h5>
                <CardTitle tag="h4">All products</CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area"></div>
              </CardBody>
              <CardFooter>
                <div className="stats">
                </div>
              </CardFooter>
            </Card>
          </Col> */}
          <Col xs={12} md={6}>
            <Card id={Styles.bs} className="card-chart">
              <CardHeader>
                <CardTitle tag="h4">24 Hours Performance</CardTitle>
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
              </CardBody>
              <CardFooter>
                <div className="stats">
                  {/* <i className="now-ui-icons ui-2_time-alarm" /> Last 7 days */}
                </div>
              </CardFooter>
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
                            <strong>USDA Endorsement: </strong>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  {/* <i className="now-ui-icons loader_refresh spin" /> Updated 3
                  minutes ago */}
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        {/* Third Row */}

        <br />

        {/* Fourth Row */}
        <Row>
          <Col xs={12} md={6}>
            <Card id={Styles.bs}>
              <CardHeader>
                <h5 className="card-category">All Persons List</h5>
                <CardTitle tag="h4">Employees Stats</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Country</th>
                      <th>City</th>
                      <th className="text-right">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-right">$36,738</td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td className="text-right">$23,789</td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td className="text-right">$56,142</td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <td className="text-right">$63,542</td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <td className="text-right">$78,615</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card id={Styles.bs}>
              <CardHeader>
                <h5 className="card-category">All Persons List</h5>
                <CardTitle tag="h4">Employees Stats</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Country</th>
                      <th>City</th>
                      <th className="text-right">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-right">$36,738</td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td className="text-right">$23,789</td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td className="text-right">$56,142</td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <td className="text-right">$63,542</td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <td className="text-right">$78,615</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* Fourth Row */}
      </div>
    </>
  );
}

export default Dashboard;
