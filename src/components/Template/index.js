import * as React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import "./style.css";
import Navbar2 from "../Navbar2";
import { useSelector } from "react-redux";
import { Spinner } from "react-activity";
import "react-activity/dist/Spinner.css";

const Template = (props) => {
  const auth = useSelector((state) => {
    return state.auth;
  });

  const loading = useSelector((state) => {
    return state.loading;
  });

  return (
    <div className={`d-flex color-${auth.colorAccent}`}>
      {loading.isShow && (
        <>
          <div className="overlay vw-100 vh-100 position-absolute"></div>
          <div className="position-absolute top-50 start-50">
            <Spinner color="#000000" size={32} speed={1} animating={true} />
          </div>
        </>
      )}
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
