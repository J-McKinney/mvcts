import React from "react";
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Footer from "components/Footer/Footer.js";
import Styles from "../views/style.module.css";
import routes from "routes.js";

var ps;

function Admin(props) {
  const location = useLocation();
  // Below changes the color of the side nav bar
  const [backgroundColor, setBackgroundColor] = React.useState("blue");
  //
  const mainPanel = React.useRef();
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
  }, [location]);
  const handleColorClick = (color) => {
    setBackgroundColor(color);
  };
  return (
    <div className="wrapper">
      <div className="main-panel" ref={mainPanel}>
        <DemoNavbar {...props} />
        <Switch>
          {routes.map((prop, key) => {
            return (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            );
          })}
          <Redirect from="/mvcts" to="/mvcts/home" />
        </Switch>
        <h2 className="align-self-center" id={Styles.title}>
          <span id={Styles.span}>Travel Services</span>
        </h2>
        <Footer fluid />
      </div>
    </div>
  );
}

export default Admin;
