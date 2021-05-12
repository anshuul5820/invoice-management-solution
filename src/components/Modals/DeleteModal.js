import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import { Deletebutton } from "../Inputs/Buttons/Buttons";
import { OutlinedButton } from "../Inputs/Buttons/ButtonLayout";
import { useStylesDelete } from "./ModalStyles/ModalStyles";

export default function DeleteModal(props) {
  const classes = useStylesDelete();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <OutlinedButton
        clicked={handleClickOpen}
        isEnabled={true}
        isEnabled={props.state.selected_rows.length >= 1}
      >
        <Deletebutton />
      </OutlinedButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div>
          <DialogTitle className={classes.dialogTitle} id="alert-dialog-title">
            {"Delete record(s)?"}
            <div>
              <CloseIcon
                className={classes.closeButton}
                onClick={handleClose}
              />
            </div>
          </DialogTitle>
        </div>

        <DialogContent className={classes.dialogContent}>
          <DialogContentText
            className={classes.dialogContent}
            id="alert-dialog-description"
          >
            <form
              id="delete-modal-form"
              onSubmit={(e) =>
                props.submitted(null, "delete-modal-form", e)
              }
            >
              You'll lose your record(s) after this action. We can't recover
              them once you delete. Are you sure you want to 
              <span style={{ color: "red" }}> permanently delete </span>
              them?
            </form>
          </DialogContentText>
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
            onClick={handleClose}
            type="submit"
            className={classes.AddClose}
            color="primary"
            autoFocus
            form="delete-modal-form"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
