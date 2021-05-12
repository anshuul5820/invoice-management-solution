import addBtn from "../../../assets/add_btn.svg";
import editBtn from "../../../assets/edit_btn.svg";
import deleteBtn from "../../../assets/delete_btn.svg";

export const AddButton = () => (
  <div style={{ display: "flex", fontSize: "1rem" }}>
    <img
      style={{
        width: "10px",
        height: "10px",
        marginTop: "0.5em",
        marginRight: "0.4em",
      }}
      src={addBtn}
    />
    Add
  </div>
);

export const EditButton = () => (
  <div style={{ display: "flex", fontSize: "1rem" }}>
    <img
      style={{
        width: "10px",
        height: "10px",
        marginTop: "0.5em",
        marginRight: "0.4em",
      }}
      src={editBtn}
    />{" "}
    Edit
  </div>
);

export const Deletebutton = () => (
  <div style={{ display: "flex", fontSize: "1rem" }}>
    <img
      style={{
        width: "10px",
        height: "10px",
        marginTop: "0.5em",
        marginRight: "0.4em",
      }}
      src={deleteBtn}
    />
    Delete
  </div>
);
