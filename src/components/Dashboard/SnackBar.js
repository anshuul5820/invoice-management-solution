import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import EmptyFormSubmission from "../../assets/EmptyFormSubmission.svg";

export default function PositionedSnackbar(props) {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Button
        variant="outlined"
        // onClick={props.submitted}
        className={props.classes.AddClose}
        color="primary"
        onClick={handleClick({ vertical: "bottom", horizontal: "left" })}
        autoFocus
        form="add-modal-form"
        type="submit"
      >
        Add
      </Button>
    </React.Fragment>
  );

  return (
    <div>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={
          <span style={{ backgroundColor: "#21303B" }}>
            <img
              style={{ height: "15px", width: "15px" }}
              src={EmptyFormSubmission}
            />{" "}
            <span> </span>
            {props.text}
            {/* Mandatory fields can't be empty */}
          </span>
        }
        key={vertical + horizontal}
      />
    </div>
  );
}
