import React, { useState } from "react";
import theme, { pxToVh } from "../utils/theme";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { InputBase, TextField, OutlinedInput, Button } from "@material-ui/core";

import AppBar from "../components/AppBar/AppBar";
import Dashboard from "../components/Dashboard/Dashboard";

const useStyles = makeStyles({
  root: {
    background: "#58687E",
  },
});

const CollectorDashboard = (props) => {
  const [name, setName] = useState("");
  const [started, setStarted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGetStarted = (e) => {
    if (started) setName("");
    setStarted((prev) => !prev);
  };
  const classes = useStyles();

  return (
    <div>
      <AppBar />
      <Dashboard />
    </div>
  );
};

export default CollectorDashboard;
