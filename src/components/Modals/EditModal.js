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
import { EditButton } from "../Inputs/Buttons/Buttons";
import { useStylesEdit } from "./ModalStyles/ModalStyles";

export default function EditModal(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStylesEdit();

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  const [initialState, changeState] = useState({});

  function handleInput(inputType, e) {
    switch (inputType) {
      case "invoice-amount":
        changeState({ ...initialState, invoice_amount: e.target.value });
        break;
      case "notes":
        changeState({ ...initialState, notes: e.target.value });
        break;
      default:
        changeState({ ...initialState });
    }
  }

  return (
    <div>
      <OutlinedButton
        clicked={handleClickOpen}
        isEnabled={props.state.selected_rows.length === 1}
      >
        <EditButton />
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
            Edit Invoice
            {handleClose ? (
              <IconButton aria-label="close" onClick={handleClose}>
                <CloseIcon className={classes.closeButton} />
              </IconButton>
            ) : null}
          </DialogTitle>
        </div>
        <DialogContent className={classes.dialogContent}>
          <form
            id="edit-modal-form"
            onSubmit={(e) =>
              props.submitted({ ...initialState }, "edit-modal-form", e)
            }
          >
            <div className={classes.Div1}>
              <Typography className={classes.Amountdetails} dividers>
                Invoice Amount
                <InputBase
                  id="outlined-size-small"
                  className={classes.AmountText}
                  variant="outlined"
                  size="small"
                  onChange={(e) => handleInput("invoice-amount", e)}
                />
              </Typography>
            </div>
            <div className={classes.Div2}>
              <Typography className={classes.Notesdetails} dividers>
                Notes
                <InputBase
                  id="outlined-multiline-static"
                  className={classes.NoteText}
                  multiline
                  rows={6}
                  variant="outlined"
                  size="small"
                  onChange={(e) => handleInput("notes", e)}
                />
              </Typography>
            </div>
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
            onClick={() => document.getElementById("edit-modal-form").reset()}
            className={classes.resetClose}
            color="primary"
          >
            Reset
          </Button>
          <Button
            form="edit-modal-form"
            type="submit"
            variant="outlined"
            onClick={handleClose}
            className={classes.saveClose}
            color="primary"
            autoFocus
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
