import React from "react";
import { Button, makeStyles } from "@material-ui/core";

type Props = {
  children: React.ReactNode;
};

const useStyles = makeStyles(() => ({
  MainButton__default: {
    background: "linear-gradient(45deg, #990000 30%, #00007f 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 2px 4px 1px rgba(0, 0, 135, .3)"
  }
}));

function MainButton(props: Props) {
  const { children } = props;
  const styles = useStyles();
  return <Button className={styles.MainButton__default}>{children}</Button>;
}

export default MainButton;
