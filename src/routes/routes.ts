import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Logout from "../pages/Logout";

const routes = [
  {
    path: "/login",
    exact: true,
    name: "login",
    protected: false,
    component: Login
  },
  {
    path: "/signup",
    exact: true,
    name: "signup",
    protected: false,
    component: Signup
  },
  {
    path: "/logout",
    exact: true,
    name: "logout",
    protected: false,
    component: Logout
  },
  {
    path: "/",
    exact: true,
    name: "home",
    protected: false,
    component: Home
  }
];

export default routes;
