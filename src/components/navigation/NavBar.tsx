import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Menu,
  MenuItem,
  makeStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { isAuthenticated } from "../../utils/authentication/AuthUtils";

const logo = require("../../images/medline-logo.png");

const useStyles = makeStyles(() => ({
  logo: {
    width: "200px",
    position: "absolute",
    right: "calc(50% - 100px)"
  },
  navBar__container: {
    color: "black"
  },
  navBar__linkBtn: {
    marginRight: 16
  },
  navBar__link: {
    color: "black",
    textDecoration: "none"
  },
  navBar__menuBtn: {
    flexGrow: 1
  },
  navBar__menu: {
    padding: 0
  },
  navBar__menuItem: {
    height: "50px"
  }
}));

const menuLinks = [
  { name: "Home", path: "/" },
  { name: "Profile", path: "/profile" },
  { name: "About us", path: "/about-us" },
  { name: "Contact us", path: "/contact-us" },
  { name: "FAQ", path: "/faq" }
];

function NavBar() {
  const styles = useStyles();
  const cookies = useCookies();
  const isUserLoggedIn = isAuthenticated(cookies[0]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const showMenu = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const LinkBtn = (name: string, path: string) => (
    <Button color="inherit" className={styles.navBar__linkBtn}>
      <Link to={path} className={styles.navBar__link}>
        {name}
      </Link>
    </Button>
  );

  return (
    <AppBar
      position="static"
      color="inherit"
      className={styles.navBar__container}
    >
      <img src={String(logo)} className={styles.logo} alt="medline-logo" />
      <Toolbar>
        <div className={styles.navBar__menuBtn} />
        {isUserLoggedIn && LinkBtn("Logout", "/logout")}
        {!isUserLoggedIn && LinkBtn("Login", "/login")}
        {!isUserLoggedIn && LinkBtn("Signup", "/signup")}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={showMenu}
          onClose={handleClose}
          classes={{
            list: styles.navBar__menu
          }}
        >
          {menuLinks.map(it => (
            <MenuItem
              key={it.name}
              onClick={handleClose}
              className={styles.navBar__menuItem}
            >
              <Link to={it.path} className={styles.navBar__link}>
                {it.name}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
