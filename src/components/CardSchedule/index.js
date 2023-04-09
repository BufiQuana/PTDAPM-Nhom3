import * as React from "react";
import "./style.css";

const CardSchedule = (props) => {
  const {
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

  const existenceFormatted = existence.replaceAll("0h", "");

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
        <div className="btn btn-primary ms-auto">
          <i className="fa fa-pen me-2"></i>
          Sửa
        </div>
        <div className="btn btn-danger ms-3">
          <i className="fa fa-trash me-2"></i>
          Xoá
        </div>
      </div>
    </div>
  );
};

export default CardSchedule;
