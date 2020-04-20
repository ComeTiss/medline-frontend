import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  makeStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
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
    // textAlign: "center",
    marginLeft: 16,
    flexGrow: 1
  }
}));

type Props = {
  showLogout?: boolean;
};

function NavBar(props: Props) {
  const styles = useStyles();
  const { showLogout } = props;

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
      <Toolbar>
        <Typography variant="h6" className={styles.navBar__menuBtn}>
          Medline.io
        </Typography>
        {showLogout && LinkBtn("Logout", "/logout")}
        {!showLogout && LinkBtn("Login", "/login")}
        {!showLogout && LinkBtn("Signup", "/signup")}
        <IconButton edge="end" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
