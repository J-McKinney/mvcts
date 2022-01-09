import Home from "views/Home.js";
import AboutUs from "views/AboutUs.js";
import Maps from "views/Maps.js";
import UserPage from "views/UserPage.js";
import Zest from "views/Zest.js"

var dashRoutes = [
  {
    path: "/home",
    name: "Home",
    icon: "ui-1_bell-53",
    component: Home,
    layout: "/mvcts",
  },
  {
    path: "/about-us",
    name: "about-us",
    icon: "design_app",
    component: AboutUs,
    layout: "/mvcts",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "location_map-big",
    component: Maps,
    layout: "/mvcts",
  },
  {
    path: "/travel-form",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/mvcts",
  },
  {
    path: "/zest",
    name: "Zest",
    icon: "users_single-02",
    component: Zest,
    layout: "/mvcts",
  },
];
export default dashRoutes;
