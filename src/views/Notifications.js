import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
import Styles from "./style.module.css";
import CatDog from "../assets/img/catDog.png";

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
  const notificationAlert = React.useRef();
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Now UI Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);
  };
  return (
    <>
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
      >
        <h1
          className={Styles.title}
          // style={{
          //   color: "lightseagreen",
          //   textAlign: "center",
          //   lineHeight: "0.9em",
          //   fontWeight: "900",
          //   paddingTop: "10vh",
          //   WebkitTextFillColor: "black"
          // }}
        >
          {/* <span className={Styles.span}>Marietta Veterinary Clinic</span>{" "}
          <span className={Styles.span}>Travel Services</span> */}
          <span className={Styles.span}>MVC Travel Services</span>
        </h1>
      </div>
      <div style={{ marginTop: "10vh" }} className="content">
        <NotificationAlert ref={notificationAlert} />
        <Row>
          {/* First Col on left */}
          <Col md={6} xs={12}>
            <Card>
              <CardHeader>
                {/* <CardTitle tag="h4">Notifications Style</CardTitle> */}
              </CardHeader>
              <CardBody>
                {/* <Alert color="info">
                  <span>This is a plain notification</span>
                </Alert>
                <Alert color="info" isOpen={true} toggle={() => {}}>
                  <span>This is a notification with close button.</span>
                </Alert>
                <Alert
                  color="info"
                  className="alert-with-icon"
                  isOpen={true}
                  toggle={() => {}}
                >
                  <span
                    data-notify="icon"
                    className="now-ui-icons ui-1_bell-53"
                  />
                  <span data-notify="message">
                    This is a notification with close button and icon.
                  </span>
                </Alert>
                <Alert
                  color="info"
                  className="alert-with-icon"
                  isOpen={true}
                  toggle={() => {}}
                >
                  <span
                    data-notify="icon"
                    className="now-ui-icons ui-1_bell-53"
                  />
                  <span data-notify="message">
                    This is a notification with close button and icon and have
                    many lines. You can see that the icon and the close button
                    are always vertically aligned. This is a beautiful
                    notification. So you don't have to worry about the style.
                  </span>
                </Alert> */}
              </CardBody>
            </Card>
          </Col>
          {/* First Col on left */}

          {/* Second Col on right */}
          <Col md={6} xs={12}>
            <Card>
              <CardHeader>
                {/* <CardTitle tag="h4">Notification states</CardTitle> */}
              </CardHeader>
              <CardBody>
                {/* <Alert color="primary" isOpen={true} toggle={() => {}}>
                  <span>
                    <b> Primary - </b> This is a regular notification made with
                    color="primary"
                  </span>
                </Alert>
                <Alert color="info" isOpen={true} toggle={() => {}}>
                  <span>
                    <b> Info - </b> This is a regular notification made with
                    color="info"
                  </span>
                </Alert>
                <Alert color="success" isOpen={true} toggle={() => {}}>
                  <span>
                    <b> Success - </b> This is a regular notification made with
                    color="success"
                  </span>
                </Alert>
                <Alert color="warning" isOpen={true} toggle={() => {}}>
                  <span>
                    <b> Warning - </b> This is a regular notification made with
                    color="warning"
                  </span>
                </Alert>
                <Alert color="danger" isOpen={true} toggle={() => {}}>
                  <span>
                    <b> Danger - </b> This is a regular notification made with
                    color="danger"
                  </span>
                </Alert> */}
              </CardBody>
            </Card>
          </Col>
          {/* Second Col on right */}

          {/* Second Row */}
          <Col md={12} xs={12}>
            <Card>
              <CardBody>
                <div className="places-buttons">
                  <Row>
                    <Col md={6} className="ml-auto mr-auto text-center">
                      {/* <CardTitle tag="h4">
                        Notifications Places
                        <p className="category">Click to view notifications</p>
                      </CardTitle> */}
                    </Col>
                  </Row>
                  {/* First Row in big container */}
                  <Row>
                    <Col lg={8} xs={12} className="ml-auto mr-auto">
                      <Row>
                        <Col md={4} xs={12}>
                          {/* <Button
                            color="primary"
                            block
                            onClick={() => notify("tl")}
                          >
                            Top Left
                          </Button> */}
                        </Col>
                        <Col md={4} xs={12}>
                          {/* <Button
                            color="primary"
                            block
                            onClick={() => notify("tc")}
                          >
                            Top Center
                          </Button> */}
                        </Col>
                        <Col md={4} xs={12}>
                          {/* <Button
                            color="primary"
                            block
                            onClick={() => notify("tr")}
                          >
                            Top Right
                          </Button> */}
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
                          {/* <Button
                            color="primary"
                            block
                            onClick={() => notify("bl")}
                          >
                            Bottom Left
                          </Button> */}
                        </Col>
                        <Col md={4} xs={12}>
                          {/* <Button
                            color="primary"
                            block
                            onClick={() => notify("bc")}
                          >
                            Bottom Center
                          </Button> */}
                        </Col>
                        <Col md={4} xs={12}>
                          {/* <Button
                            color="primary"
                            block
                            onClick={() => notify("br")}
                          >
                            Bottom Right
                          </Button> */}
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
        </Row>
      </div>
    </>
  );
}

export default Notifications;
