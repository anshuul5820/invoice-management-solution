import React from "react";
import { connect } from "react-redux";
import { fetchCustomerRecords } from "../../services/services";
import { useEffect } from "react";
import Table from "./DataTable";

const DataTable = (props) => {
  const handleFetchData = (res) => {
    props.setDataFromBackEnd(res);
    props.onPageChange();
  };

  useEffect(() => {
    fetchCustomerRecords(props.page)
      .then((res) => {
        handleFetchData(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      style={{
        height: "55vh",
        width: "100%",
        display: "flex",
        border: 0,
      }}
    >
      <Table />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.client_list,
    page: state.pageNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSelectedRows: (rowId) =>
      dispatch({ type: "ADD_SELECTED_ROWS", rId: rowId }),
    deleteSelectedRows: (rowId) =>
      dispatch({ type: "DELETE_SELECTED_ROWS", rId: rowId }),
    setDataFromBackEnd: (data) => {
      dispatch({ type: "HANDLE_FETCH_DATA", data: data });
    },
    onPageChange: () => dispatch({ type: "HANDLE_PAGE_CHANGE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
