import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import InfiniteScroll from "react-infinite-scroll-component";
import LinearProgress from "@material-ui/core/LinearProgress";
import { fetchCustomerRecords } from "../../services/services";
import { connect } from "react-redux";
import uniqueIdGenerator from "../../utils/uniqueIdGenerator";

const headRows = [
  {
    id: "name_customer",
    numeric: false,
    label: "Customer Name",
  },
  {
    id: "cust_number",
    numeric: true,
    label: "Customer #",
  },
  { id: "doc_id", numeric: true, label: "Invoice #" },
  {
    id: "total_open_amount",
    numeric: false,
    label: "Invoice Amount",
  },
  {
    id: "due_in_date",
    numeric: false,
    label: "Due Date",
  },
  {
    id: "clear_date",
    numeric: false,
    label: "Predicted payment date",
  },
  {
    id: "bucket",
    numeric: false,
    label: "Predicted aging bucket",
  },
  { id: "notes", numeric: false, label: "Notes" },
];

const useStyles = makeStyles(() => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
      height: "4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#61707B",
    },
  },
  root: {
    width: "100%",
    overflowY: "scroll",
    backgroundColor: "#273D49CC",
    // "& .MuiTableCell-head": { color: "#97A1A9" },
    "& .MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#14AFF1",
    },
    "& .MuiTableCell-root": { borderBottom: "none", color: "#97A1A9" },
    "& .MuiTableCell-body": { color: "#FFFF" },
    "& .MuiCheckbox-root": {
      color: "#97A1A9",
    },
    "& .MuiTableCell-stickyHeader": {
      backgroundColor: "#273D49CC",
    },
  },
}));

const EnhancedTable = (props) => {
  const rows = [...props.data];

  let [initialState, changeState] = useState({
    isSelectAllSelected: false,
  });
  const classes = useStyles();

  const handleSelectAll = () => {
    changeState({
      isSelectAllSelected: !initialState.isSelectAllSelected,
    });
    initialState.isSelectAllSelected
      ? props.onDeSelectAll()
      : props.onSelectAll();
  };

  const handleSelectRow = (row) => {
    props.onSelectRow(row);
  };

  const handleFetchData = (res) => {
    props.setDataFromBackEnd(res);
    props.onPageChange();
  };

  const fetchData = () => {
    fetchCustomerRecords(props.page)
      .then((res) => {
        handleFetchData(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div id="scrollableDiv" className={classes.root}>
      <InfiniteScroll
        dataLength={rows.length}
        next={fetchData}
        hasMore={true}
        loader={
          <div>
            <LinearProgress />
          </div>
        }
        scrollableTarget="scrollableDiv"
      >
        <Table
          className={classes.root}
          aria-labelledby="tableTitle"
          stickyHeader
        >
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  onChange={handleSelectAll}
                  inputProps={{ "aria-label": "select all rows" }}
                />
              </TableCell>
              {headRows.map((row) => (
                <TableCell
                  key={row.id}
                  padding={row.disablePadding ? "none" : "default"}
                >
                  {row.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;
              return (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={uniqueIdGenerator()}
                  style={
                    index % 2
                      ? { background: "#283A46" }
                      : { background: "#273D49CC" }
                  }
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      inputProps={{ "aria-labelledby": labelId }}
                      checked={row.isSelected}
                      onClick={() => {
                        // console.log(row);
                        handleSelectRow(row);
                      }}
                    />
                  </TableCell>
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
      </InfiniteScroll>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.client_list,
    selectedData: state.selected_rows,
    page: state.pageNumber,
    search_data: state.foundSearchRows,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPageChange: () => dispatch({ type: "HANDLE_PAGE_CHANGE" }),
    onSelectAll: () =>
      dispatch({ type: "HANDLE_SELECT_ALL", isSelected: "yes" }),
    onDeSelectAll: () =>
      dispatch({ type: "HANDLE_SELECT_ALL", isSelected: "no" }),
    onSelectRow: (row) =>
      dispatch({ type: "HANDLE_SELECT_ROW", selectedRow: row }),
    setDataFromBackEnd: (data) => {
      dispatch({ type: "HANDLE_FETCH_DATA", data: data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EnhancedTable);
