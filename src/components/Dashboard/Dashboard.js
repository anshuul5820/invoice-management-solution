import React, { useCallback } from "react";
import DataTable from "./Table";
import { TextField } from "../Inputs/TextField";
import AddModal from "../Modals/AddModal";
import ViewCorrModal from "../Modals/ViewCorrModal";
import EditModal from "../Modals/EditModal";
import DeleteModal from "../Modals/DeleteModal";
import PredictModal from "../Modals/PredictModal";
import { connect } from "react-redux";
import {
  addCustomerRecords,
  editCustomerRecords,
  deleteCustomerRecords,
  searchCustomerRecords,
  fetchCustomerRecords,
} from "../../services/services";

const Dashboard = (props) => {
  const handleOnSubmit = (state, id, e) => {
    e.preventDefault();
    switch (id) {
      case "add-modal-form":
        console.log(state);
        var formData = {
          name_customer: state.customer_name,
          cust_number: state.customer_no,
          doc_id: state.invoice_no,
          total_open_amount: state.invoice_amount,
          due_in_date: state.due_date,
          notes: state.notes,
          invoice_id: state.invoice_no,
        };
        addCustomerRecords(formData).then((res) => console.log(res.status));
        props.handleAddOperation(state);
        break;
      case "edit-modal-form":
        var formData = {
          doc_id: props.selected_rows[0].doc_id,
          total_open_amount: state.invoice_amount,
          notes: state.notes,
        };
        editCustomerRecords(formData).then((res) => console.log(res.status));
        props.handleEditOperation(state);
        break;
      case "delete-modal-form":
        var deletableRows = props.selected_rows.map((row) => row.doc_id);
        deletableRows.map((row) =>
          deleteCustomerRecords({ doc_id: row }).then((res) =>
            console.log(res.status)
          )
        );
        props.handleDeleteOperation();
        break;
    }
  };

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const context = this;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, wait);
    };
  }
  const debounceOnChange = useCallback(debounce(onChange, 1000), []);

  const handleFetchData = (res) => {
    props.onPageChange();
    props.setDataFromBackEnd(res);
  };

  const handleEmptySearch = () =>
    fetchCustomerRecords(props.page)
      .then((res) => {
        handleFetchData(res);
      })
      .catch((error) => console.log(error));

  function onChange(text) {
    if (text.length !== 0)
      searchCustomerRecords(text)
        .then((res) => {
          props.handleSearchOperation(res.slice(0, 99));//show only 100 searched results
        })
        .catch((error) => console.log(error));
    else handleEmptySearch();
  }

  return (
    <div
      style={{
        display: "block",
        padding: "0 30px 19px 30px",
        backgroundColor: "#273D49CC",
        height: "70vh",
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "2vh 0",
          marginBottom: "2vh",
        }}
      >
        <PredictModal />
        <ViewCorrModal state={props} />
        <div style={{ marginLeft: "34.2vw" }}></div>
        <AddModal submitted={handleOnSubmit} />
        <div style={{ marginRight: "1rem" }}></div>
        <EditModal state={props} submitted={handleOnSubmit} />
        <div style={{ marginRight: "1rem", right: "10px" }}></div>
        <DeleteModal state={props} submitted={handleOnSubmit} />
        <div style={{ marginRight: "1rem" }}></div>
        <TextField handleSearch={debounceOnChange} />
      </div>
      <DataTable />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cust_array: state.client_list,
    selected_rows: state.selected_rows,
    page: state.pageNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddOperation: (row) =>
      dispatch({ type: "ADD_NEW_ROW", rowData: row }),
    handleEditOperation: (row) => {
      console.log(row);
      dispatch({ type: "EDIT_DATA", rowData: row });
    },
    handleDeleteOperation: () => dispatch({ type: "DELETE_SELECTED_ROWS" }),
    handleSearchOperation: (rows) =>
      dispatch({ type: "HANDLE_SEARCH", foundRows: rows }),
    setDataFromBackEnd: (data) => {
      dispatch({ type: "HANDLE_FETCH_DATA", data: data });
    },
    onPageChange: () => dispatch({ type: "HANDLE_PAGE_CHANGE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

// export default Dashboard;
