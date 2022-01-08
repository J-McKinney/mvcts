import React from "react";
import {
  Button,
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

function User() {
  return (
    <>
      <div style={{ marginTop: "10vh" }} className="content">
        {/* User Information */}
        <Row>
          <Col className="ml-auto mr-auto" md="10">
            <Card>
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
                        <Input placeholder="First Name" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input placeholder="Last Name" type="text" />
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
                          <Input placeholder="Email Address" type="email" />
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
                        <Input placeholder="Home Address" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="1" />
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>City</label>
                        <Input placeholder="City" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Country</label>
                        <Input placeholder="Country" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="2">
                      <FormGroup>
                        <label>Postal Code</label>
                        <Input placeholder="ZIP Code" type="number" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* User Information */}

        <br />

        {/* Pet Information */}
        <Row>
          <Col className="ml-auto mr-auto" md="10">
            <Card>
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
                        <Input placeholder="Pet Name" type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="1" />
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Species</label>
                        <Input placeholder="Species" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Breed</label>
                        <Input placeholder="Breed" type="text" />
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
        {/* Pet Information */}

        <br />

        {/* Trip Information */}
        <Row>
          <Col className="ml-auto mr-auto" md="10">
            <Card>
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
                        <Input placeholder="Departure Country" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <label>Departure City</label>
                        <Input
                          placeholder="Departure City"
                          type="Departure City"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <label>Departure State</label>
                        <Input
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
                        <Input placeholder="Arrival Country" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <label>Arrival City</label>
                        <Input placeholder="Arrival City" type="Arrival City" />
                      </FormGroup>
                    </Col>
                    <Col className="pr-1" md="3">
                      <FormGroup>
                        <label>Arrival State</label>
                        <Input
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
                        <Input placeholder="MM/DD/YYYY" type="text" />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="5">
                      <FormGroup>
                        <label>Relocation Reason</label>
                        <Input placeholder="Relocation Reason" type="text" />
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
        {/* Trip Information */}
      </div>
    </>
  );
}

export default User;
