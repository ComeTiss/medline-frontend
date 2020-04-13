import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

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
    path: "/",
    exact: true,
    name: "home",
    component: Home
  }
];

export default routes;
