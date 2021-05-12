import jsPDF from "jspdf";
import "jspdf-autotable";

export default (data, filename) => {
  const unit = "px";
  const size = "A4"; // Use A1, A2, A3 or A4
  const orientation = "portrait"; // portrait or landscape

  const marginLeft = 40;
  const doc = new jsPDF(orientation, unit, size);

  const title = "Invoice Record";

  doc.setFontSize(20);

  let headers = [
    [
      "Invoice Number",
      "PO Number",
      "Invoice date",
      "Due Date",
      "Open Amount($)",
    ],
  ];
  let rows = data.map((elt) => [
    elt.doc_id,
    elt.doc_id,
    elt.due_in_date,
    elt.due_in_date,
    elt.total_open_amount,
  ]);

  let content = {
    startY: 50,
    head: headers,
    body: rows,
  };

  doc.text(title, marginLeft, 40);
  doc.autoTable(content);
  doc.save(`ansul${filename}.pdf`);
};
