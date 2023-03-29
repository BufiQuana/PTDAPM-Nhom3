import * as React from "react";
import "./style.css";

const CardSchedule = (props) => {
  const { title, description, place, date, timeStart, timeEnd } =
    props.schedule;

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

  const timeDiffHour = (timeStart, timeEnd) => {
    const [hourStart, minuteStart] = timeStart.split(":");
    const [hourEnd, minuteEnd] = timeEnd.split(":");
    const diffTime =
      -(hourStart - hourEnd) * 60 * 60 - (minuteStart - minuteEnd) * 60;
    const diffHour = Math.floor(diffTime / 3600);
    const diffMinute = diffTime / 60 - diffHour * 60;
    const diffHourString = `${diffHour ? `${diffHour}h` : ""}
    ${diffMinute ? `${diffMinute}m` : ""}
    `;
    return diffHourString;
  };

  return (
    <div className="bg-E9EFFE rounded-2 p-3">
      <div className="d-flex align-items-center justify-content-between">
        <p className="fw-bold">{title}</p>
        <small className="text-muted fw-semibold">
          {timeDiffHour(timeStart, timeEnd)}
        </small>
      </div>
      <p className="mt-1">
        Mô tả: <span className="text-muted  ">{description}</span>
      </p>
      <p className="mt-1">Địa điểm: {place}</p>
      <p className="mt-1">
        Thời gian: {formattedDate(date)} {timeStart} - {timeEnd}
      </p>
    </div>
  );
};

export default CardSchedule;
