import { makeStyles } from "@material-ui/core/styles";
export const pxToRem = (px) => `${px / 22.5}rem`;

//----------------ADD-----------------------------------//

export const useStylesAdd = makeStyles((theme) => ({
  Add: {
    width: pxToRem(99),
    height: pxToRem(45),
    marginTop: pxToRem(10),
    textTransform: "capitalize",
    flex: 1,
    borderColor: "rgba(20, 175, 241, 1)",
    justifyContent: "center",
    borderRadius: pxToRem(10),
    marginLeft: pxToRem(497),
  },
  AddClose: {
    background: "#14AFF1",
    color: "#FFFFFF",
    textTransform: "capitalize",
  },
  clearClose: {
    borderColor: "#14AFF1",
    textTransform: "capitalize",
    color: "#97A1A9",
  },
  cancelButton: {
    color: "#97A1A9",
    textTransform: "capitalize",
    display: "flex",
  },
  Div1: {
    display: "flex",
    justifyContent: "left",
    flexDirection: "row",
  },
  Div2: {
    fontsize: pxToRem(20),
    display: "flex",
    justifyContent: "left",
    flexDirection: "row",
  },
  dialogPaper: {
    width: pxToRem(1106),
    height: pxToRem(),
  },
  dialogContent: {
    backgroundColor: "#2A3E4C",
    color: "#97A1A9",
  },
  dialogAction: {
    height: pxToRem(50.5),
    backgroundColor: "#2A3E4C",
    color: "#97A1A9",
  },
  Customerdetails: {
    color: "#97A1A9",
    fontsize: pxToRem(20),
    textAlign: "left",
    marginTop: pxToRem(40),
    marginLeft: pxToRem(30),
  },
  Customertext: {
    borderRadius: pxToRem(10),
    border: "1px solid #356680",
    marginTop: pxToRem(30),
    backgroundColor: "#283A46",
  },
  Duedetails: {
    marginLeft: pxToRem(80),
    marginTop: pxToRem(40),
  },
  Duetext: {
    borderRadius: pxToRem(10),
    border: "1px solid #356680",
    marginTop: pxToRem(30),
    marginLeft: pxToRem(82),
    backgroundColor: "#283A46",
  },
  Numberdetails: {},
  Numbertext: {
    borderRadius: pxToRem(10),
    border: "1px solid #356680",
    backgroundColor: "#283A46",
  },

  Invoicedetails: {},
  Invoicetext: {
    borderRadius: pxToRem(10),
    border: "1px solid #356680",
  },
  Amountdetails: {},
  AmountText: {
    borderRadius: pxToRem(10),
    border: "1px solid #356680",
  },
  Notesdetails: {},
  NoteText: {
    borderRadius: pxToRem(10),
    border: "1px solid #356680",
  },

  dialogTitle: {
    backgroundColor: "#2A3E4C",
    color: "#FFFFFF",
    height: pxToRem(50),
  },
  dialogBox: {},
  closeIcon: {
    display: "flex",
    marginLeft: pxToRem(1106),

    color: "#FFFFFF",
  },
  closeButton: {
    display: "flex",
    color: "#FFFFFF",
  },
}));

//------------------------- DELETE----------------------------

export const useStylesDelete = makeStyles(() => ({
  root: {
    backgroundColor: "#2A3E4C",
    color: "#97A1A9",
  },
  dialogTitle: {
    display: "flex",
    backgroundColor: "#2A3E4C",
    color: "#FFFFFF",
  },
  dialogContent: {
    backgroundColor: "#2A3E4C",
    color: "#97A1A9",
  },
  dialogAction: {
    height: pxToRem(50.5),
    backgroundColor: "#2A3E4C",
    color: "#97A1A9",
  },
  Delete: {
    color: "97A1A9",
    width: pxToRem(123),
    height: pxToRem(45),
    textTransform: "capitalize",
    borderColor: "#97A1A9",
    justifyContent: "center",
    borderRadius: pxToRem(10),
    marginLeft: pxToRem(20),
    marginTop: pxToRem(10),
  },
  closeButton: {
    display: "flex",
    color: "#FFFFF",
  },
  cancelButton: {
    color: "#97A1A9",
    textTransform: "capitalize",
    display: "flex",
  },
  AddClose: {
    background: "#14AFF1",
    color: "#FFFFFF",
    textTransform: "capitalize",
  },
  DeleteText: {
    textTransform: "capitalize",
    justifyContent: "center",
    fontsize: pxToRem(20),
    color: "#97A1A9",
  },
  closeButton: {
    display: "flex",
    marginTop: pxToRem(1),
    marginLeft: pxToRem(700),
    scrollPaddingTop: pxToRem(10),
    color: "#97A1A9",
  },
}));

//------------------------------ EDIT--------------------------------------

export const useStylesEdit = makeStyles((theme) => ({
  edit: {
    height: pxToRem(45),
    marginTop: pxToRem(10),
    textTransform: "capitalize",
    flex: 1,
    borderColor: "rgba(20, 175, 241, 1)",
    justifyContent: "center",
    borderRadius: pxToRem(10),
    marginLeft: pxToRem(20),
  },
  saveClose: {
    background: "#14AFF1",
    color: "#FFFFFF",
    textTransform: "capitalize",
    borderRadius: pxToRem(10),
    opacity: 1,
  },
  resetClose: {
    borderColor: "#14AFF1",
    textTransform: "capitalize",
    color: "#97A1A9",
    borderRadius: pxToRem(10),
    opacity: 1,
  },
  cancelButton: {
    marginRight: pxToRem(220),
    color: "#97A1A9",
    textTransform: "capitalize",
    display: "flex",
    borderRadius: pxToRem(10),
    opacity: 1,
  },
  Div1: {
    display: "flex",
    justifyContent: "left",
    flexDirection: "row",
  },
  Div2: {
    fontsize: pxToRem(20),
    display: "flex",
    justifyContent: "left",
    flexDirection: "row",
  },
  dialogPaper: {
    width: pxToRem(1106),
    height: pxToRem(),
  },
  dialogContent: {
    backgroundColor: "#2A3E4C",
    color: "#97A1A9",
  },
  dialogAction: {
    height: pxToRem(50.5),
    backgroundColor: "#2A3E4C",
    color: "#97A1A9",
  },

  Amountdetails: {},
  AmountText: {
    width: pxToRem(319),
    marginLeft: pxToRem(36),
    borderRadius: pxToRem(10),
    border: "1px solid #356680",
  },
  Notesdetails: {
    marginTop: pxToRem(51),
  },
  NoteText: {
    width: pxToRem(319),
    marginTop: pxToRem(8),
    marginLeft: pxToRem(125),
    borderRadius: pxToRem(10),
    border: "1px solid #356680",
  },

  dialogTitle: {
    backgroundColor: "#2A3E4C",
    color: "#FFFFFF",
    height: pxToRem(50),
  },
  dialogBox: {},
  closeIcon: {
    // marginTop:pxToRem(33),
    display: "flex",
    marginLeft: pxToRem(1106),

    color: "#FFFFFF",
  },
  closeButton: {
    display: "flex",
    color: "#FFFFFF",
  },
}));
