import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: "3px",
    "&$disabled": {
      border: "1px solid #97A1A9",
      color: "#97A1A9",
      textTransform: "none",
    },
    textTransform: "none",
  },
  primaryButton: { backgroundColor: "#14AFF1", textTransform: "none" },
  disabled: {},
  outlineBtnEnabled: {
    border: "1px solid #14AFF1",
    color: "#FFFFFF",
    textTransform: "none",
  },
  plainBtnEnabled: {
    color: "#14AFF1",
    textTransform: "none",
  },
}));

export const PrimaryButton = (props) => {
  const classes = useStyles();
  return (
    <Button
      onClick={(_) => props.clicked()}
      disabled={!props.isEnabled}
      className={classes.primaryButton}
      style={{
        top: "2vh",
        marginRight: "1rem",
        maxHeight: "2.3rem",
        maxWidth: "35vw",
        marginLeft: "1vw",
      }}
      variant="contained"
      color="primary"
      size="small"
    >
      {props.children}
    </Button>
  );
};

export const OutlinedButton = (props) => {
  const classes = useStyles();
  // console.log(props.clicked);
  return (
    <Button
      onClick={(_) => props.clicked()}
      variant="outlined"
      color="primary"
      size="small"
      disabled={!props.isEnabled}
      className={classes.outlineBtnEnabled}
      style={{
        top: "2vh",
        maxHeight: "2.3rem",
        maxWidth: "20vw",
      }}
      classes={{
        root: classes.root,
        disabled: classes.disabled,
      }}
    >
      {props.children}
    </Button>
  );
};

export const PlainButton = (props) => {
  const classes = useStyles();
  // console.log(props.clicked);
  return (
    <Button
      className={classes.plainBtnEnabled}
      onClick={(_) => props.clicked()}
      disabled={!props.isEnabled}
    >
      {props.children}
    </Button>
  );
};
