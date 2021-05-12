import { formatter } from "./formatter";
import DateFormatter from "./date_formatter";

export default function processJson(test) {
  return [
    ...test.map((data) => {
      return {
        id: data.doc_id,
        name_customer: data.name_customer.substring(0, 20),
        cust_number: data.cust_number,
        doc_id: String(data.doc_id).replaceAll(",", ""),
        total_open_amount: formatter(data.total_open_amount),
        due_in_date: DateFormatter(
          data.due_in_date.year +
            "-" +
            data.due_in_date.month +
            "-" +
            data.due_in_date.day
        ),
        clear_date: "--",
        bucket: "--",
        notes: data.notes != null ? data.notes : "Lorem Ipsum dolor...",
        isSelected: false,
      };
    }),
  ];
}
