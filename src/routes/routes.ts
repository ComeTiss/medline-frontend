import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Logout from "../pages/Logout";

const routes = [
  {
    path: "/login",
    exact: true,
    name: "login",
    component: Login
  },
  {
    path: "/signup",
    exact: true,
    name: "signup",
    component: Signup
  },
  {
    path: "/logout",
    exact: true,
    name: "logout",
    component: Logout
  },
  {
    path: "/",
    exact: true,
    name: "home",
    component: Home
  }
];

export default routes;
