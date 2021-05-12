import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { PlainButton, PrimaryButton } from "../../Inputs/Buttons/ButtonLayout";
import uniqueIdGenerator from "../../../utils/uniqueIdGenerator";
import pdf from "../../../utils/pdfGenerator";

export default (props) => {
  const classes = { ...props.classes };
  const selected_rows = [...props.selected_rows];

  const handlePdf = () => {
    pdf(
      selected_rows,
      // headers: headers,
      uniqueIdGenerator()
    );
  };

  return (
    <div style={{ color: "#C0C6CA", height: "55vh" }}>
      <TableContainer
        // component={Paper}
        className={classes.paper}
        style={{ width: "65vw" }}
      >
        <p>
          Subject:
          <span style={{ color: "#FFFFFF" }}>
            <span> </span>Invoice Details - ANSUL SAH,
          </span>
          <div>
            <p>Dear Sir/Madam,</p>
            <p>Greetings!</p>
          </div>
          This is to remind you that there are one or more open invoices on your
          account. lease provide at your earliest convenience an update on the
          payment details or clarify the reason for the delay. If you have any
          specific issue with the invoice(s), please let us know so that we can
          address it to the correct Department. Please find the details of the
          invoices below:
        </p>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Invoice Number</TableCell>
              <TableCell>PO Number</TableCell>
              <TableCell>Invoice date</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Currency</TableCell>
              <TableCell>Open Amount($)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selected_rows.map((row) => (
              <TableRow key={uniqueIdGenerator()}>
                <TableCell>{row.doc_id}</TableCell>
                <TableCell>{row.doc_id}</TableCell>
                <TableCell>{row.due_in_date}</TableCell>
                <TableCell>{row.due_in_date}</TableCell>
                <TableCell>USD</TableCell>
                <TableCell>{row.total_open_amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p>
          Total Amount to be Paid: ${props.total_amount} In case you have
          already made a payment for the above items, please send us the details
          to ensure the payment is posted. Let us know if we can be of any
          further assistance. Looking forward to hearing from you. Kind Regards,
          [Sender’s First Name][Sender’s Last Name] Phone : [Sender’s contact
          number] Fax : [If any] Email : [Sender’s Email Address] Company
          Name[Sender’s Company Name]
        </p>
        <span>
          <PlainButton isEnabled={true} clicked={props.closed}>
            Cancel
          </PlainButton>
          <PrimaryButton clicked={handlePdf} isEnabled={true}>
            Download
          </PrimaryButton>
        </span>
      </TableContainer>
    </div>
  );
};
