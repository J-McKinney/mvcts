import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Maps from "views/Maps.js";
import UserPage from "views/UserPage.js";

var dashRoutes = [
  {
    path: "/home",
    name: "Notifications",
    icon: "ui-1_bell-53",
    component: Notifications,
    layout: "/mvcts",
  },
  {
    path: "/about-us",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
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
];
export default dashRoutes;
