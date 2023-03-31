import * as React from "react";

const NotificationComponent = (props) => {
  return (
    <div className="row mb-3">
      <div className="form-check form-switch form-switch-md col-1">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          defaultChecked={props.checked}
        />
      </div>
      <div className="col-7">
        <p className="fw-bold">{props.title}</p>
        <p className="text-muted">{props.content}</p>
      </div>
      <div className="col d-flex flex-column">
        <div className="btn border ms-auto d-flex align-items-center justify-content-center">
          <span>Đề nghị</span>
          <i className="fa fa-angle-down ms-2 mt-1"></i>
        </div>
      </div>
    </div>
  );
};

export default NotificationComponent;
