import * as React from "react";
import { ASSETS } from "../../constants/ASSETS";
import Avatar from "../Avatar";

const Notification = (props) => {
  return (
    <div className="d-flex px-3 pt-3 pb-2">
      <Avatar image={props.notification.avatar} className="mt-1" />
      <div className="ms-3">
        <p>
          <b>{props.notification.userSent}</b> {props.notification.action}{" "}
          <b>{props.notification.content}</b>
        </p>
        <small className="text-muted fw-semibold">
          {props.notification.time}
        </small>
        {props.notification.action2 && (
          <div className="mt-2">
            <div className="btn btn-primary me-2">Accept</div>
            <div className="btn text-secondary border">Deny</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
