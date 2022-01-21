/*eslint-disable*/
// import React, { useState } from "react";
import React from "react";
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

// const initialState = { setFirstName: "" };

function User() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [address, setAddress] = useState("");
  // const [city, setCity] = useState("");
  // const [country, setCountry] = useState("");
  // const [zip, setZip] = useState("");
  // const [petName, setPetName] = useState("");
  // const [petSpecies, setPetSpecies] = useState("");
  // const [petBreed, setPetBreed] = useState("");
  // const [petWeight, setPetWeight] = useState("");
  // const [petAge, setPetAge] = useState("");
  // const [dCountry, setDCountry] = useState("");
  // const [dCity, setDCity] = useState("");
  // const [dState, setDState] = useState("");
  // const [aCountry, setACountry] = useState("");
  // const [aCity, setACity] = useState("");
  // const [aState, setAState] = useState("");
  // const [moveDate, setMoveDate] = useState("");
  // const [reason, setReason] = useState("");
  // const [addInfo, setAddInfo] = useState("");

  // const submitValue = (e) => {
  //   e.preventDefault();
  //   const frmdetails = {
  //     "First Name": firstName,
  //     "Last Name": lastName,
  //     "Phone Number": phoneNumber,
  //     "Email Address": email,
  //     "Home Address": address,
  //     "Home City": city,
  //     "Home Country": country,
  //     "Home Zip": zip,
  //     "Pet Name": petName,
  //     "Pet Species": petSpecies,
  //     "Pet Breed": petBreed,
  //     "Pet Weight": petWeight,
  //     "Pet Age": petAge,
  //     "Country Departure": dCountry,
  //     "City Departure": dCity,
  //     "State Departure": dState,
  //     "Country Arrival": aCountry,
  //     "City Arrival": aCity,
  //     "State Arrival": aState,
  //     "Reason To Move": reason,
  //     "Additional Information": addInfo,
  //   };
  //   // console.log(frmdetails);
  //   alert("Thank You For Submitting");
  // };

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
                          // onChange={(event) => setFirstName(event.target.value)}
                          placeholder="First Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          // onChange={(event) => setLastName(event.target.value)}
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
                            // onChange={(event) => setEmail(event.target.value)}
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
                          // onChange={(event) =>
                          //   setPhoneNumber(event.target.value)
                          // }
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
                          // onChange={(event) => setAddress(event.target.value)}
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
                          // onChange={(event) => setCity(event.target.value)}
                          placeholder="City"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Country</label>
                        <Input
                          // onChange={(event) => setCountry(event.target.value)}
                          placeholder="Country"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="2">
                      <FormGroup>
                        <label>Postal Code</label>
                        <Input
                          // onChange={(event) => setZip(event.target.value)}
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
                          // onChange={(event) => setPetName(event.target.value)}
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
                          // onChange={(event) =>
                          //   setPetSpecies(event.target.value)
                          // }
                          placeholder="Species"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Breed</label>
                        <Input
                          // onChange={(event) => setPetBreed(event.target.value)}
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
                            // onChange={(event) =>
                            //   setPetWeight(event.target.value)
                            // }
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
                            // onChange={(event) => setPetAge(event.target.value)}
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
                          // onChange={(event) => setDCountry(event.target.value)}
                          placeholder="Departure Country"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <label>Departure City</label>
                        <Input
                          // onChange={(event) => setDCity(event.target.value)}
                          placeholder="Departure City"
                          type="Departure City"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <label>Departure State</label>
                        <Input
                          // onChange={(event) => setDState(event.target.value)}
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
                          // onChange={(event) => setACountry(event.target.value)}
                          placeholder="Arrival Country"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <label>Arrival City</label>
                        <Input
                          // onChange={(event) => setACity(event.target.value)}
                          placeholder="Arrival City"
                          type="Arrival City"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <label>Arrival State</label>
                        <Input
                          // onChange={(event) => setAState(event.target.value)}
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
                          // onChange={(event) => setMoveDate(event.target.value)}
                          placeholder="MM/DD/YYYY"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="5">
                      <FormGroup>
                        <label>Relocation Reason</label>
                        <Input
                          // onChange={(event) => setReason(event.target.value)}
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
                          // onChange={(event) => setAddInfo(event.target.value)}
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
              <Link to="/">
                <Button
                  // onClick={submitValue}
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
              </Link>y
            </div>
          </Col>
        </Row>
        <br />
      </div>
    </>
  );
}

export default User;
