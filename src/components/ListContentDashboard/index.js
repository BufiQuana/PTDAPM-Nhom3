import * as React from "react";
import "./style.css";

const ListContentDashboard = (props) => {
  return (
    <div className="row">
      {props.list.map((item, i) => {
        return (
          <div
            className={`col d-flex flex-column align-items-center ${
              i + 1 !== props.list.length && "border-end-light-red"
            }`}
            key={i}
          >
            <img src={item.icon} alt="" />
            <p className="fw-semibold color-5D6679 my-1">{item.amount}</p>
            <p className="content-dashboard">{item.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ListContentDashboard;
