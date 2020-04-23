import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
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
    marginLeft: 16,
    flexGrow: 1
  },
  navBar__menu: {
    padding: 0
  },
  navBar__menuItem: {
    height: "50px"
  }
}));

type Props = {
  showLogout?: boolean;
};

type RedirectPath = string | null;

function NavBar(props: Props) {
  const styles = useStyles();
  const { showLogout } = props;
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
      <Toolbar>
        <Typography variant="h6" className={styles.navBar__menuBtn}>
          Medline.io
        </Typography>
        {showLogout && LinkBtn("Logout", "/logout")}
        {!showLogout && LinkBtn("Login", "/login")}
        {!showLogout && LinkBtn("Signup", "/signup")}
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
          <MenuItem onClick={handleClose} className={styles.navBar__menuItem}>
            <Link to={"/"} className={styles.navBar__link}>
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} className={styles.navBar__menuItem}>
            <Link to={"/profile"} className={styles.navBar__link}>
              Profile
            </Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
