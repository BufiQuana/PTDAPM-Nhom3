import * as React from "react";
import "./style.css";
import { request } from "../../api/config";

const CardSchedule = (props) => {
  const {
    id,
    title,
    description,
    address,
    startDate,
    endDate,
    existence,
    projectId,
  } = props.schedule;

  const timeHourMinute = (date) => {
    let hour = new Date(date).getHours();
    let minute = new Date(date).getMinutes();
    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    return `${hour}:${minute}`;
  };

  const formattedDate = (date) => {
    const today = new Date(date);
    const yyyy = today.getFullYear();
    // let mm = today.getMonth() + 1; // Months start at 0!
    let mm = today.toLocaleString("en", { month: "long" });
    let weekday = today.toLocaleString("en", { weekday: "long" });
    let dd = today.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    const dateFormat = weekday + ", " + dd + " " + mm;
    return dateFormat;
  };

  const timeDiffHour = (startDate, endDate) => {
    // const [hourStart, minuteStart] = new Date(startDate);
    // const [hourEnd, minuteEnd] = new Date(endDate);
    // const diffTime =
    //   -(hourStart - hourEnd) * 60 * 60 - (minuteStart - minuteEnd) * 60;
    // const diffHour = Math.floor(diffTime / 3600);
    // const diffMinute = diffTime / 60 - diffHour * 60;
    // const diffHourString = `${diffHour ? `${diffHour}h` : ""}
    // ${diffMinute ? `${diffMinute}m` : ""}
    // `;
    // return diffHourString;
    return "";
  };

  const existenceFormatted = existence?.replaceAll("0h", "");

  return (
    <div className="bg-E9EFFE rounded-2 p-3">
      <div className="d-flex align-items-center justify-content-between">
        <p className="fw-bold">{title}</p>
        <small className="text-muted fw-semibold">{existenceFormatted}</small>
      </div>
      <p className="mt-1">
        Mô tả: <span className="text-muted  ">{description}</span>
      </p>
      <p className="mt-1">Địa điểm: {address}</p>
      <div className="d-flex align-items-center mt-1">
        <p>
          Thời gian: {formattedDate(startDate)} {timeHourMinute(startDate)} -{" "}
          {timeHourMinute(endDate)}
        </p>
        {!props.isStaff && (
          <>
            {/* <div className="btn btn-primary ms-auto">
              <i className="fa fa-pen me-2"></i>
              Sửa
            </div>
            <div
              className="btn btn-danger ms-3"
              data-bs-toggle="modal"
              data-bs-target={`#deleteLichHop${id}`}
            >
              <i className="fa fa-trash me-2"></i>
              Xoá
            </div> */}
            <div
              className="btn btn-danger ms-auto"
              data-bs-toggle="modal"
              data-bs-target={`#deleteLichHop${id}`}
            >
              <i className="fa fa-trash me-2"></i>
              Xoá
            </div>
          </>
        )}
      </div>
      <div
        className="modal fade"
        id={`deleteLichHop${id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-block">
              <h1
                className="modal-title fs-5 text-center"
                id="exampleModalLabel"
              >
                Xoá lịch họp
              </h1>
            </div>
            <div className="modal-body">
              Bạn có chắc chắn xóa lịch họp có id: {id}
            </div>
            <div className="modal-footer justify-content-evenly">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Quay lại
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={props.deleteAction}
              >
                Xoá
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSchedule;
