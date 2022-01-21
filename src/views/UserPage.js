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
  Container,
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

  handleInputChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (!this.state.firstName) {
      alert("Please fill in your first name!");
    }
    if (!this.state.lastName) {
      alert("Please fill in your last name!");
    }
    if (!this.state.email) {
      alert("Please fill in your email address!");
    }
    if (!this.state.phoneNumber) {
      alert("Please fill in your phone number!");
    }
    if (!this.state.address) {
      alert("Please fill in your home address!");
    }
    if (!this.state.city) {
      alert("Please fill in your home city!");
    }
    if (!this.state.country) {
      alert("Please fill in your country!");
    }
    if (!this.state.zip) {
      alert("Please fill in your zip code!");
    }
    if (!this.state.petName) {
      alert("Please fill in your pets name!");
    }
    if (!this.state.petSpecies) {
      alert("Please fill in your pets species!");
    }
    if (!this.state.petBreed) {
      alert("Please fill in your pets breed!");
    }
    if (!this.state.petWeight) {
      alert("Please fill in your pets weight!");
    }
    if (!this.state.petAge) {
      alert("Please fill in your pets age!");
    }
    if (!this.state.dCountry) {
      alert("Please fill in your departure country!");
    }
    if (!this.state.dCity) {
      alert("Please fill in your departure city!");
    }
    if (!this.state.dState) {
      alert("Please fill in your departure state!");
    }
    if (!this.state.aCountry) {
      alert("Please fill in your arrival country!");
    }
    if (!this.state.aCity) {
      alert("Please fill in your arrival city!");
    }
    if (!this.state.aState) {
      alert("Please fill in your arrival state!");
    }
    if (!this.state.moveDate) {
      alert("Please fill in your move in date!");
    }
    if (!this.state.reason) {
      alert("Please fill out your reason for moving!");
    } else {
      alert(
        `Thank you ${this.state.firstName} ${this.state.lastName} for submitting your information.`
      );
    }

    this.setState({
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
    });
  };

  render() {
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
                          <label>First Name</label>
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
                          <label>Last Name</label>
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
                          <label htmlFor="exampleInputEmail1">
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
                          <label>Phone Number</label>
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
                          <label>Address</label>
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
                          <label>City</label>
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
                          <label>Country</label>
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
                          <label>Postal Code</label>
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
                          <label>Pet Name</label>
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
                          <label>Species</label>
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
                          <label>Breed</label>
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
                          <label>Estimated weight in pounds</label>
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
                          <label>Estimated age in years</label>
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
                          <label>Departure Country</label>
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
                          <label>Departure City</label>
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
                          <label>Departure State</label>
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
                          <label>Arrival Country</label>
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
                          <label>Arrival City</label>
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
                          <label>Arrival State</label>
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
                          <label>Move Date</label>
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
                          <label>Relocation Reason</label>
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
                {/* <Link to="/"> */}
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
