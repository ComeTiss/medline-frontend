import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Logout from "../pages/Logout";
import ConfirmEmail from "../pages/ConfirmEmail";
import ContactUs from "../pages/ContactUs";
import User from "../pages/User";

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
    path: "/verify",
    exact: true,
    name: "verify",
    protected: false,
    component: ConfirmEmail
  },
  {
    path: "/contact-us",
    exact: true,
    name: "contactus",
    protected: false,
    component: ContactUs
  },
  {
    path: "/",
    exact: true,
    name: "home",
    protected: false,
    component: Home
  },
  {
    path: "/user",
    exact: true,
    name: "user",
    protected: false,
    component: User
  }
];

export default routes;
