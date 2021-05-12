import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
// import { searchCustomerRecords } from "../../services/services";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import idGenerator from "../../utils/uniqueIdGenerator";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  table: {
    minWidth: 650,
    backgroundColor: "#283A46",
    borderRadius: "5px",
    borderBottom: "none",
    "& .MuiTableCell-root": { borderBottom: 0 },
  },
  paper: {
    backgroundColor: "#2A3E4C",
    height: "60%",
    color: "white",
    width: "70%",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  input: {
    color: "#97A1A9",
    paddingLeft: "0.5vw",
    marginRight: "4.7vw",
  },
  iconButton: { color: "#97A1A9" },
}));

function SearchModal(props) {
  let classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{ display: "inline-table" }}>
      <IconButton
        className={classes.iconButton}
        aria-label="search"
        onClick={handleOpen}
      >
        <SearchIcon />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Searched Records</h2>
            <div style={{ overflowY: "scroll", height: "80%" }}>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Customer Name</TableCell>
                      <TableCell>Customer #</TableCell>
                      <TableCell>Invoice #</TableCell>
                      <TableCell>Invoice Amount</TableCell>
                      <TableCell>Due Date</TableCell>
                      <TableCell>Predicted payment date</TableCell>
                      <TableCell>Predicted aging bucket</TableCell>
                      <TableCell>Notes</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.search_data.map((row, index) => {
                      return (
                        <TableRow hover key={idGenerator()}>
                          <TableCell>{row.name_customer}</TableCell>
                          <TableCell>{row.cust_number}</TableCell>
                          <TableCell>{row.doc_id}</TableCell>
                          <TableCell>{row.total_open_amount}</TableCell>
                          <TableCell>{row.due_in_date}</TableCell>
                          <TableCell>{row.clear_date}</TableCell>
                          <TableCell>{row.bucket}</TableCell>
                          <TableCell>{row.notes}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    search_data: state.foundSearchRows,
  };
};

export default connect(mapStateToProps)(SearchModal);
