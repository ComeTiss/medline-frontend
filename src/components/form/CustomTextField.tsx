import React from "react";
import { TextField, Typography, makeStyles } from "@material-ui/core";

type CustomTextFieldProps = {
  label: string;
  value: string;
  className: string;
  onChange: () => void;
  name: string;
  multiline?: boolean;
};

const useStyles = makeStyles(() => ({
  wrapper: {
    display: "flex",
    alignItems: "center"
  },
  label: {
    flex: "170px"
  }
}));

const CustomTextField = ({
  label,
  value,
  className,
  onChange,
  name,
  multiline
}: CustomTextFieldProps) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography className={classes.label}>{label}</Typography>
      <TextField
        fullWidth
        className={className}
        onChange={onChange}
        value={value}
        name={name}
        multiline={multiline}
        variant={multiline ? "outlined" : "standard"}
      />
    </div>
  );
};

CustomTextField.defaultValues = { multiline: false };

export default CustomTextField;
