import { formatter } from "../utils/formatter";
import processJson from "../utils/processJson";

const initialState = {
  client_list: [],
  selected_rows: [],
  pageNumber: 0,
  foundSearchRows: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_FETCH_DATA":
      return {
        ...state,
        client_list: state.client_list.concat(...processJson(action.data)),
        foundSearchRows: [],
      };

    case "HANDLE_PAGE_CHANGE":
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
      };

    case "HANDLE_SELECT_ALL":
    case "yes":
      switch (action.isSelected) {
        case "yes":
          return {
            ...state,
            client_list: [
              ...state.client_list.map((el) => ({
                ...el,
                isSelected: !el.isSelected,
              })),
            ],
            selected_rows: state.selected_rows.concat(...state.client_list),
          };
        case "no":
          return {
            ...state,
            client_list: [
              ...state.client_list.map((el) => ({
                ...el,
                isSelected: !el.isSelected,
              })),
            ],
            selected_rows: [],
          };
      }

    case "HANDLE_SELECT_ROW":
      const selectedRow = state.client_list.find(
        (e) => e.doc_id === action.selectedRow.doc_id
      );
      selectedRow.isSelected = !selectedRow.isSelected;

      switch (selectedRow.isSelected) {
        case true:
          return {
            ...state,
            selected_rows: [...state.selected_rows.concat(selectedRow)],
          };
        case false:
          return {
            ...state,
            selected_rows: [
              ...state.selected_rows.filter(
                (el) => el.doc_id !== action.selectedRow.doc_id
              ),
            ],
          };
      }

    case "ADD_NEW_ROW":
      let newData = {
        name_customer: action.rowData.customer_name,
        cust_number: action.rowData.customer_no,
        invoice_id: action.rowData.invoice_no,
        notes: action.rowData.notes,
        due_in_date: {
          year: action.rowData.due_date.substring(0, 4),
          month: action.rowData.due_date.substring(5, 7),
          day: action.rowData.due_date.substring(8, 10),
        },
        total_open_amount: action.rowData.invoice_amount,
        doc_id: action.rowData.invoice_no,
      };
      return {
        ...state,
        client_list: state.client_list.concat(...processJson([{ ...newData }])),
      };

    case "EDIT_DATA":
      let selected_row_list = [];
      const editableSelectedRow = {
        ...state.selected_rows[0],
        total_open_amount: formatter(action.rowData.invoice_amount),
        notes: action.rowData.notes,
      };
      const selectedRowInClientList = state.client_list.find(
        (e) => e.doc_id === editableSelectedRow.doc_id
      );
      const selectedRowInClientListIndex = state.client_list.indexOf(
        selectedRowInClientList
      );
      state.client_list[selectedRowInClientListIndex].total_open_amount =
        editableSelectedRow.total_open_amount;
      state.client_list[selectedRowInClientListIndex].notes =
        editableSelectedRow.notes;
      selected_row_list.push(editableSelectedRow);
      return {
        ...state,
        selected_rows: [...selected_row_list],
        client_list: [...state.client_list],
      };

    case "DELETE_SELECTED_ROWS":
      return {
        ...state,
        client_list: state.client_list.filter(
          (e) => !state.selected_rows.includes(e)
        ),
        selected_rows: [],
      };

    case "HANDLE_SEARCH":
      let foundList = [];
      foundList = foundList.concat([...processJson(action.foundRows)]);
      return {
        ...state,
        foundSearchRows: foundList,
        client_list: [...foundList],
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
