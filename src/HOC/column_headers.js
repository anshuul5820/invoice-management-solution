import React, { useState } from "react";
import searchBtn from "../assets/search_btn2.svg";
import arrow_upward_hollow from "../assets/arrow_upward_hollow.svg";
import arrow_downward_hollow from "../assets/arrow_downward_hollow.svg";
import arrow_downward_filled from "../assets/arrow_downward_filled.svg";
import { sortAscending, sortDescending } from "../utils/sort_table";

export default (props) => {
  const [currentArrow, setArrow] = useState(arrow_downward_hollow);
  const isDownwardArrowSelected = () =>
    currentArrow == arrow_downward_filled ? sortDescending() : sortAscending();

  return (
    <div
      style={{ height: "inherit", width: "inherit", display: "inline-grid" }}
    >
      {props.children}
      <img
        src={arrow_upward_hollow}
        style={{ position: "inherit", bottom: "30px" }}
        onClick={() => {
          setArrow(arrow_downward_hollow);
          isDownwardArrowSelected();
        }}
      />
      <img
        src={currentArrow}
        onClick={() => {
          setArrow(arrow_downward_filled);
          isDownwardArrowSelected();
        }}
      />
    </div>
  );
};

//----------------------------------------
