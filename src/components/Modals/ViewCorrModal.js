import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { OutlinedButton } from "../Inputs/Buttons/ButtonLayout";
import ViewCorrespondanceBody from "./ModalBody/ViewCorrModalBody";
import { formatter } from "../../utils/formatter";

const useStyles = makeStyles((theme) => ({
  modal: {
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#2A3E4C",
    height: "20em",
    width: "45vw",
    marginTop: "2vh",
    borderRadius: "4px",
    // border: "2px solid #00000029",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  table: { overflowY: "scroll" },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  let total_amount = 0;
  props.state.selected_rows.map(
    (e) =>
      (total_amount += parseFloat(e.total_open_amount.replace("K", "") * 1000))
  );
  total_amount = formatter(total_amount).toString();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <OutlinedButton
        clicked={handleOpen}
        isEnabled={props.state.selected_rows.length > 0}
      >
        <p style={{ textTransform: "none", fontSize: "1rem" }}>
          View Correspondance
        </p>
      </OutlinedButton>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200,
        }}
      >
        <Fade in={open}>
          <div
            className={classes.paper}
            style={{
              width: "70%",
              height: "60%",
              margin: "auto",
              marginTop: "10%",
            }}
          >
            <h2 id="transition-modal-title" style={{ color: "white" }}>
              View Correspondence({props.state.selected_rows.length})
            </h2>
            <ViewCorrespondanceBody
              selected_rows={props.state.selected_rows}
              classes={classes}
              total_amount={total_amount}
              closed={handleClose}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
