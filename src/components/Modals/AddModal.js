import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { InputBase, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { OutlinedButton } from "../Inputs/Buttons/ButtonLayout";
import { AddButton } from "../Inputs/Buttons/Buttons";
import { useStylesAdd } from "./ModalStyles/ModalStyles";
import TextField from "@material-ui/core/TextField";
import Snackbar from "../Dashboard/SnackBar";

export default function AddModal(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStylesAdd();

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  const [initialState, changeState] = useState({});

  function handleInput(inputType, e) {
    e.preventDefault();
    switch (inputType) {
      case "customer-name":
        changeState({ ...initialState, customer_name: e.target.value });
        break;
      case "due-date":
        changeState({ ...initialState, due_date: e.target.value });
        break;
      case "customer-no":
        changeState({ ...initialState, customer_no: e.target.value });
        break;
      case "notes":
        changeState({ ...initialState, notes: e.target.value });
        break;
      case "invoice-no":
        changeState({ ...initialState, invoice_no: e.target.value });
        break;
      case "invoice-amount":
        changeState({ ...initialState, invoice_amount: e.target.value });
        break;
      default:
        changeState({ ...initialState });
    }
  }
  return (
    <div>
      <OutlinedButton clicked={handleClickOpen} isEnabled={true}>
        <AddButton />
      </OutlinedButton>
      <Dialog
        maxWidth={"md"}
        classes={classes.dialogPaper}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div>
          <DialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
            className={classes.dialogTitle}
          >
            Add Invoice
            {handleClose ? (
              <IconButton aria-label="close" onClick={handleClose}>
                <CloseIcon className={classes.closeButton} />
              </IconButton>
            ) : null}
          </DialogTitle>
        </div>
        <DialogContent className={classes.dialogContent}>
          <form
            id="add-modal-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (
                initialState.customer_name != null &&
                initialState.customer_no != null &&
                initialState.invoice_no != null &&
                initialState.invoice_amount != null &&
                initialState.due_date != null
              ) {
                console.log(initialState);
                props.submitted({ ...initialState }, "add-modal-form", e);
                changeState({ initialState: {} });
              } else {
                <Snackbar text="Mandatory fields can't be empty" />;
              }
            }}
          >
            <div className={classes.Div1}>
              <Typography className={classes.Customerdetails}>
                Customer Name<span style={{ color: "red" }}>* </span>
                <InputBase
                  id="outlined-size-small"
                  className={classes.Customertext}
                  variant="outlined"
                  size="small"
                  onChange={(e) => handleInput("customer-name", e)}
                />
              </Typography>

              <Typography className={classes.Duedetails}>
                Due Date<span style={{ color: "red" }}>* </span>
                <TextField
                  id="outlined-size-small"
                  type="date"
                  // defaultValue="2000-08-05"
                  className={classes.Duetext}
                  onChange={(e) => handleInput("due-date", e)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Typography>
            </div>
            <div className={classes.Div2}>
              <Typography className={classes.Numberdetails}>
                Customer No.<span style={{ color: "red" }}>* </span>
                <InputBase
                  id="outlined-size-small"
                  className={classes.Numbertext}
                  variant="outlined"
                  size="small"
                  onChange={(e) => handleInput("customer-no", e)}
                />
              </Typography>

              <Typography className={classes.Notesdetails}>
                Notes
                <InputBase
                  id="outlined-multiline-static"
                  className={classes.NoteText}
                  multiline
                  rows={4}
                  variant="outlined"
                  size="small"
                  onChange={(e) => handleInput("notes", e)}
                />
              </Typography>
            </div>
            <div>
              <Typography className={classes.Invoicedetails}>
                Invoice No.<span style={{ color: "red" }}>* </span>
                <InputBase
                  id="outlined-size-small"
                  className={classes.Invoicetext}
                  variant="outlined"
                  size="small"
                  onChange={(e) => handleInput("invoice-no", e)}
                />
              </Typography>
            </div>
            <Typography className={classes.Amountdetails}>
              Invoice Amount<span style={{ color: "red" }}>* </span>
              <InputBase
                id="outlined-size-small"
                className={classes.AmountText}
                variant="outlined"
                size="small"
                onChange={(e) => handleInput("invoice-amount", e)}
              />
            </Typography>
          </form>
        </DialogContent>
        <DialogActions className={classes.dialogAction}>
          <Button
            color="primary"
            onClick={handleClose}
            className={classes.cancelButton}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              document.getElementById("add-modal-form").reset();
              changeState({ initialState: {} });
            }}
            className={classes.clearClose}
            color="primary"
          >
            Clear
          </Button>
          <Snackbar classes={classes} text="Data submitted successfully!" />
        </DialogActions>
      </Dialog>
    </div>
  );
}
