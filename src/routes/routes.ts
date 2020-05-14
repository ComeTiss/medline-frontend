import Home from "../pages/Home";
import About from "../pages/AboutUs";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Logout from "../pages/Logout";
import ConfirmEmail from "../pages/ConfirmEmail";
import ContactUs from "../pages/ContactUs";
import Profile from "../pages/Profile";
import FAQ from "../pages/FAQ";
import JoinUs from "../pages/JoinUs";
import Donate from "../pages/Donate";
import NeedsView from "../components/needLeadViewPage/needsView";
import LeadsView from "../components/needLeadViewPage/leadsView";

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
    path: "/about-us",
    exact: true,
    name: "aboutus",
    protected: false,
    component: About
  },
  {
    path: "/profile",
    exact: true,
    name: "user",
    protected: true,
    component: Profile
  },
  {
    path: "/faq",
    exact: true,
    name: "faq",
    protected: false,
    component: FAQ
  },
  {
    path: "/join-us",
    exact: true,
    name: "joinus",
    protected: false,
    component: JoinUs
  },
  {
    path: "/donate",
    exact: true,
    name: "donate",
    protected: false,
    component: Donate
  },
  {
    path: "/needs",
    exact: true,
    name: "needs",
    protected: false,
    component: NeedsView
  },
  {
    path: "/leads",
    exact: true,
    name: "leads",
    protected: false,
    component: LeadsView
  }
];

export default routes;
