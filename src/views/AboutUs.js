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
          <Col xs={12} md={6}>
            <Card id={Styles.bs} className="card-tasks">
              <CardHeader>
                <h5 className="card-category">Backend Development</h5>
                <CardTitle tag="h4">Tasks</CardTitle>
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
                          Sign contract for "What are conference organizers
                          afraid of?" Sign contract for "What are conference
                          organizers afraid of?"
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
                          Sign contract for "What are conference organizers
                          afraid of?" Sign contract for "What are conference
                          organizers afraid of?"
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
                          Sign contract for "What are conference organizers
                          afraid of?" Sign contract for "What are conference
                          organizers afraid of?"
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
      </div>
    </>
  );
}

export default Dashboard;