import * as React from "react";
import { ASSETS } from "../../../constants/ASSETS";

const CustomerDashboard = (props) => {
  const { name, gender, job, icon } = props.info;
  return (
    <div className="d-flex mb-3">
      <img
        src={icon || (gender ? ASSETS.customerMale : ASSETS.customerFemale)}
        alt=""
        className="img-fluid"
        style={{ width: 60, height: 70 }}
      />
      <div className="d-flex flex-column justify-content-evenly ms-4">
        <p className="fw-semibold">{name}</p>
        <p className="text-secondary">{job}</p>
      </div>
    </div>
  );
};

export default CustomerDashboard;
