import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchModal from "../Modals/SearchColumnsModal";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#283A46",
    maxHeight: "2rem",
    marginTop: "1.7vh",
    width: "20.4vw",
    paddingBottom: "0.22em",
    border: "2px solid #356680",
    "& .MuiIconButton-root": { padding: "0.3em" },
  },
  input: {
    color: "#97A1A9",
    paddingLeft: "0.5vw",
    marginRight: "4.7vw",
  },
  iconButton: { color: "#97A1A9" },
}));

export const TextField = (props) => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search by Invoice Number"
        inputProps={{ "aria-label": "Search by Invoice Number" }}
        onChange={(e) => props.handleSearch(e.target.value)}
      />
      <SearchModal classes={classes} />
    </Paper>
  );
};
