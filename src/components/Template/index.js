import * as React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import "./style.css";
import Navbar2 from "../Navbar2";

const Template = (props) => {
  return (
    <div className="d-flex color-F0F1F3">
      <div className="sidebar bg-light">
        <Sidebar />
      </div>
      <div className="overflow-scroll vh-100 main-content">
        <div className="border-light-red navbar bg-light">
          <Navbar />
        </div>
        <div className="border-horizontal-light-red navbar2 bg-light">
          <Navbar2 />
        </div>
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};

export default Template;
