/*eslint-disable*/
import React from "react";
import Styles from "./style.module.css";
// reactstrap components
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";

const MapWrapper = () => {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "33.95526469327193";
    let lng = "-84.66014725998876";
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 16,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
      ],
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Now UI Dashboard React!",
    });

    const contentString =
      '<div class="info-window-content"><h2>Now UI Dashboard React</h2>' +
      "<p>A free Admin for React, Reactstrap, and React Hooks.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  });
  return (
    <>
      <div style={{ height: `100%` }} ref={mapRef}></div>
    </>
  );
};

function FullScreenMap() {
  return (
    <>
      <div style={{ marginTop: "10vh" }} className="content">
        <Row>
          <Col xs={12}>
            <Card id={Styles.bs}>
              <CardHeader>Google Maps</CardHeader>
              <CardBody>
                <div
                  id="map"
                  className="map"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <MapWrapper />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default FullScreenMap;
