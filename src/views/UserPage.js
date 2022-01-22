/*eslint-disable*/
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroup,
  InputGroupText,
  Row,
  Col,
} from "reactstrap";
import Button from "react-bootstrap/Button";
import Styles from "./style.module.css";

class User extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    country: "",
    zip: "",
    petName: "",
    petSpecies: "",
    petBreed: "",
    petWeight: "",
    petAge: "",
    dCountry: "",
    dCity: "",
    dState: "",
    aCountry: "",
    aCity: "",
    aState: "",
    moveDate: "",
    reason: "",
    addInfo: "",
  };

  componentDidMount() {
    // console.log("Mount");
    // console.log(this.state.lastName);
  }
  componentDidUpdate() {
    // console.log("Update");
    // console.log(this.state.lastName);
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.firstName &&
      this.state.lastName &&
      this.state.email &&
      this.state.phoneNumber &&
      this.state.address &&
      this.state.city &&
      this.state.country &&
      this.state.zip &&
      this.state.petName &&
      this.state.petSpecies &&
      this.state.petBreed &&
      this.state.petWeight &&
      this.state.petAge &&
      this.state.dCountry &&
      this.state.dCity &&
      this.state.dState &&
      this.state.aCountry &&
      this.state.aCity &&
      this.state.aState &&
      this.state.moveDate &&
      this.state.reason
    ) {
      alert(
        `Thank you ${this.state.firstName} ${this.state.lastName} for submitting your information.`
      );
    } else {
      alert(
        "Please fill out the empty sections of the form highlighted in red."
      );
    }
  };

  render() {
    let fillInForm = {
      color: "red",
      fontWeight: "bold",
    };
    let formFilled = {
      color: "dimgray",
      fontWeight: "normal",
    };
    return (
      <>
        <div style={{ marginTop: "10vh" }} className="content">
          <Row>
            <Col className="ml-auto mr-auto" md="10">
              <Card id={Styles.bs}>
                <CardHeader>
                  <h5 className="title">Your Information</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="1" />
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label
                            style={
                              !this.state.firstName ? fillInForm : formFilled
                            }
                          >
                            First Name
                          </label>
                          <Input
                            onChange={this.handleInputChange}
                            name="firstName"
                            placeholder="First Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label
                            style={
                              !this.state.lastName ? fillInForm : formFilled
                            }
                          >
                            Last Name
                          </label>
                          <Input
                            onChange={this.handleInputChange}
                            name="lastName"
                            placeholder="Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="1" />
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label
                            style={!this.state.email ? fillInForm : formFilled}
                            htmlFor="exampleInputEmail1"
                          >
                            Email Address
                          </label>
                          <InputGroup>
                            <Input
                              onChange={this.handleInputChange}
                              name="email"
                              placeholder="Email Address"
                              type="email"
                            />
                            <InputGroupText
                              style={{
                                borderBottomRightRadius: "50px",
                                borderTopRightRadius: "50px",
                              }}
                            >
                              @gmail.com
                            </InputGroupText>
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label
                            style={
                              !this.state.phoneNumber ? fillInForm : formFilled
                            }
                          >
                            Phone Number
                          </label>
                          <Input
                            onChange={this.handleInputChange}
                            name="phoneNumber"
                            placeholder="Phone Number"
                            type="tel"
                            maxLength="15"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="1" />
                      <Col className="pr-1" md="10">
                        <FormGroup>
                          <label
                            style={
                              !this.state.address ? fillInForm : formFilled
                            }
                          >
                            Address
                          </label>
                          <Input
                            onChange={this.handleInputChange}
                            name="address"
                            placeholder="Home Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="1" />
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label
                            style={!this.state.city ? fillInForm : formFilled}
                          >
                            City
                          </label>
                          <Input
                            onChange={this.handleInputChange}
                            name="city"
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label
                            style={
                              !this.state.country ? fillInForm : formFilled
                            }
                          >
                            Country
                          </label>
                          <Input
                            onChange={this.handleInputChange}
                            name="country"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="2">
                        <FormGroup>
                          <label
                            style={!this.state.zip ? fillInForm : formFilled}
                          >
                            Postal Code
                          </label>
                          <Input
                            onChange={this.handleInputChange}
                            name="zip"
                            placeholder="ZIP Code"
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="ml-auto mr-auto" md="10">
              <Card id={Styles.bs}>
                <CardHeader>
                  <h5 className="title">Pet Information</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="1" />
                      <Col className="pr-1" md="10">
                        <FormGroup>
                          <label
                            style={
                              !this.state.petName ? fillInForm : formFilled
                            }
                          >
                            Pet Name
                          </label>
                          <Input
                            onChange={this.handleInputChange}
                            name="petName"
                            placeholder="Pet Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="1" />
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label
                            style={
                              !this.state.petSpecies ? fillInForm : formFilled
                            }
                          >
                            Species
                          </label>
                          <Input
                            onChange={this.handleInputChange}
                            name="petSpecies"
                            placeholder="Species"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label
                            style={
                              !this.state.petBreed ? fillInForm : formFilled
                            }
                          >
                            Breed
                          </label>
                          <Input
                            onChange={this.handleInputChange}
                            name="petBreed"
                            placeholder="Breed"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="1" />
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label
                            style={
                              !this.state.petWeight ? fillInForm : formFilled
                            }
                          >
                            Estimated weight in pounds
                          </label>
                          <InputGroup>
                            <Input
                              onChange={this.handleInputChange}
                              name="petWeight"
                              placeholder="Weight"
                              type="tel"
                              maxLength="4"
                            />
                            <InputGroupText
                              style={{
                                borderBottomRightRadius: "50px",
                                borderTopRightRadius: "50px",
                              }}
                            >
                              lbs.
                            </InputGroupText>
                          </InputGroup>
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label
                            style={!this.state.petAge ? fillInForm : formFilled}
                          >
                            Estimated age in years
                          </label>
                          <InputGroup>
                            <Input
                              onChange={this.handleInputChange}
                              name="petAge"
                              placeholder="Years old"
                              type="tel"
                              maxLength="3"
                            />
                            <InputGroupText
                              style={{
                                borderBottomRightRadius: "50px",
                                borderTopRightRadius: "50px",
                              }}
                            >
                              Years
                            </InputGroupText>
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col className="ml-auto mr-auto" md="10">
              <Card id={Styles.bs}>
                <CardHeader>
                  <h5 className="title">Trip Information</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="1" />
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label
                            style={
                              !this.state.dCountry ? fillInForm : formFilled
                            }
                          >
                            Departure Country
                          </label>
                          <Input
                            onChange={this.handleInputChange}
                            name="dCountry"
                            placeholder="Departure Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="3">
                        <FormGroup>
                          <label
                            style={!this.state.dCity ? fillInForm : formFilled}
                          >
                            Departure City
                          </label>
                          <Input
                            onChange={this.handleInputChange}
                            name="dCity"
                            placeholder="Departure City"
                            type="Departure City"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="3">
                        <FormGroup>
                          <label
                            style={!this.state.dState ? fillInForm : formFilled}
                          >
                            Departure State
                          </label>
                          <Input
                            onChange={this.handleInputChange}
                            name="dState"
                            placeholder="Departure State"
                            type="Departure State"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="1" />
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label
                            style={
                              !this.state.aCountry ? fillInForm : formFilled
                            }
                          >
                            Arrival Country
                          </label>
                          <Input
                            onChange={this.handleInputChange}
                            name="aCountry"
                            placeholder="Arrival Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="3">
                        <FormGroup>
                          <label
                            style={!this.state.aCity ? fillInForm : formFilled}
                          >
                            Arrival City
                          </label>
                          <Input
                            onChange={this.handleInputChange}
                            name="aCity"
                            placeholder="Arrival City"
                            type="Arrival City"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-1" md="3">
                        <FormGroup>
                          <label
                            style={!this.state.aState ? fillInForm : formFilled}
                          >
                            Arrival State
                          </label>
                          <Input
                            onChange={this.handleInputChange}
                            name="aState"
                            placeholder="Arrival State"
                            type="Arrival State"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="1" />
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label
                            style={
                              !this.state.moveDate ? fillInForm : formFilled
                            }
                          >
                            Move Date
                          </label>
                          <Input
                            onChange={this.handleInputChange}
                            name="moveDate"
                            placeholder="MM/DD/YYYY"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="5">
                        <FormGroup>
                          <label
                            style={!this.state.reason ? fillInForm : formFilled}
                          >
                            Relocation Reason
                          </label>
                          <Input
                            onChange={this.handleInputChange}
                            name="reason"
                            placeholder="Relocation Reason"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <CardHeader>
                        <h5 className="title">Additional Information</h5>
                      </CardHeader>
                      <Col className="pr-1" md="12">
                        <FormGroup>
                          <label>About Me</label>
                          <Input
                            onChange={this.handleInputChange}
                            name="addInfo"
                            cols="80"
                            placeholder="Here can be your description"
                            rows="4"
                            type="textarea"
                            maxLength={1500}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={1} />
            <Col md={10}>
              <div className="d-grid gap-2">
                {/* <Link to="/mvcts/home"> */}
                <Button
                  onClick={this.handleFormSubmit}
                  className={Styles.cb}
                  style={{
                    width: "100%",
                    color: "black",
                    fontWeight: "900",
                    background: "lightseagreen",
                    borderRadius: "15px",
                  }}
                  variant="primary"
                  size="lg"
                >
                  <h5
                    style={{
                      color: "black",
                      fontWeight: "900",
                      marginTop: "10px",
                    }}
                  >
                    Submit Form
                  </h5>
                </Button>
                {/* </Link> */}
              </div>
            </Col>
          </Row>
          <br />
        </div>
      </>
    );
  }
}

export default User;
