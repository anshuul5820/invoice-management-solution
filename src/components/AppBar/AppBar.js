import React from "react";
import companyABClogo from "../../assets/companyABClogo.svg";
import aLogo from "../../assets/adroll.svg";

const AppBar = () => {
  return (
    <div style={{ height: "161px" }}>
      <div style={{ paddingTop: "1%" }}>
        <img style={{ marginRight: "20%" }} src={companyABClogo} />
        {/* <img src={aLogo} /> */}
      </div>
      <div>
        <h2 style={{ color: "#FFFFFF" }}>Invoice List</h2>
      </div>
    </div>
  );
};

export default AppBar;
