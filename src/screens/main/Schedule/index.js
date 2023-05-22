import * as React from "react";
import Template from "../../../components/Template";
import "./style.css";
import moment from "moment";
import CardSchedule from "../../../components/CardSchedule";
import { request } from "../../../api/config";

const Schedule = () => {
  const weeks = [0, 1, 2, 3, 4, 5];
  const dayWeeks = [1, 2, 3, 4, 5, 6, 7];
  const event = [5, 12, 13, 16, 28];
  const schedule = [, 4, 5, 10, 13, 16, 20, 22];
  const [currentDate, setCurrentDate] = React.useState(moment());
  const [currentSelectDate, setCurrentSelectDate] = React.useState(
    moment().format("DD/MM/YYYY")
  );
  const firstDay = currentDate.startOf("month").day();

  const handleAngleButtonLeft = () => {
    setCurrentDate(currentDate.clone().subtract(1, "months"));
  };

  const handleAngleButtonRight = () => {
    setCurrentDate(currentDate.clone().add(1, "months"));
  };

  const handleButtonCenter = () => {
    setCurrentDate(moment());
    setCurrentSelectDate(moment().format("DD/MM/YYYY"));
  };

  const checkCurrentDate = (day) => {
    const now = moment();
    const checkYear = currentDate.format("YYYY") === now.format("YYYY");
    const checkMonth = currentDate.format("MMMM") === now.format("MMMM");
    const checkDay = now.format("DD") == day;

    return checkYear && checkMonth && checkDay;
  };

  const checkCurrentDate2 = (date) => {
    const now = moment();
    const [day, month, year] = date.split("/");
    const checkYear = year === now.format("YYYY");
    const checkMonth = month === now.format("MM");
    const checkDay = day === now.format("DD");

    return checkYear && checkMonth && checkDay;
  };
  const [listSchedule, setListSchedule] = React.useState([
    {
      address: "175 Tay Son",
      createdBy: "admin",
      createdDate: "2023-04-08 05:55:02 AM",
      description: "Tien do nhanh",
      endDate: "2023-04-04 10:30 AM",
      existence: "1h 30m",
      id: 2,
      modifiedBy: "admin",
      modifiedDate: "2023-04-08 01:25:21 PM",
      projectId: 1,
      startDate: "2023-04-04 09:00 AM",
      title: "Lich hop 1",
    },
    {
      address: "175 Tay Son",
      createdBy: "admin",
      createdDate: "2023-04-07 11:58:37 PM",
      description: "Tien do",
      endDate: "2023-04-04 08:30 AM",
      existence: "0h 30m",
      id: 3,
      modifiedBy: "admin",
      modifiedDate: "2023-04-07 11:58:37 PM",
      projectId: 1,
      startDate: "2023-04-04 08:00 AM",
      title: "Lich hop 1",
    },
  ]);

  return (
    <Template>
      <div className="container-fluid pt-4 px-32">
        <div className="bg-light rounded-3 py-3">
          <p className="mb-3 ms-3 fw-bold">Lịch họp</p>

          <div className="d-flex align-items-center justify-content-between px-5 mb-3">
            <div
              className="btn"
              onClick={() => {
                handleAngleButtonLeft();
              }}
            >
              <i className="fa fa-angle-left"></i>
            </div>
            <button
              onClick={() => {
                handleButtonCenter();
              }}
              className="fw-bold btn"
            >
              {currentDate.format("MMMM")}, {currentDate.format("YYYY")}
            </button>
            <div
              className="btn"
              onClick={() => {
                handleAngleButtonRight();
              }}
            >
              <i className="fa fa-angle-right"></i>
            </div>
          </div>

          <table className="table table-borderless">
            <thead>
              <tr>
                <th className="text-center pb-3" scope="col">
                  CN
                </th>
                <th className="text-center pb-3" scope="col">
                  T2
                </th>
                <th className="text-center pb-3" scope="col">
                  T3
                </th>
                <th className="text-center pb-3" scope="col">
                  T4
                </th>
                <th className="text-center pb-3" scope="col">
                  T5
                </th>
                <th className="text-center pb-3" scope="col">
                  T6
                </th>
                <th className="text-center pb-3" scope="col">
                  T7
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {weeks.map((week) => {
                return (
                  <tr key={week}>
                    {dayWeeks.map((day, i) => {
                      const currentDay = day + week * 7 - firstDay;
                      if (currentDay >= currentDate.daysInMonth()) weeks.pop();
                      return (
                        <td
                          className="cell-table-schedule"
                          key={day}
                          onClick={() => {
                            if (
                              currentDay > 0 &&
                              currentDay <= currentDate.daysInMonth()
                            ) {
                              const [day, month, year] = currentDate
                                .format("DD/MM/YYYY")
                                .split("/");

                              setCurrentSelectDate(
                                `${currentDay}/${month}/${year}`
                              );
                            }
                          }}
                        >
                          <span
                            className={`${`${
                              checkCurrentDate(currentDay) &&
                              "bg-danger text-white"
                            } rounded-circle date-circle py-1 ${
                              currentDay >= 10 ? "px-1" : "px-2"
                            }`}`}
                          >
                            {currentDay > 0 &&
                            currentDay <= currentDate.daysInMonth()
                              ? currentDay
                              : ""}
                          </span>
                          <div
                            className={`${
                              event.includes(currentDay) ||
                              schedule.includes(currentDay)
                                ? "visible"
                                : "invisible"
                            }`}
                          >
                            <i
                              className={`fa fa-circle fa-2xs text-primary ${
                                !event.includes(currentDay) && "d-none"
                              }`}
                            ></i>
                            <i
                              className={`fa fa-circle fa-2xs text-warning ${
                                !schedule.includes(currentDay) && "d-none"
                              } ${event.includes(currentDay) && "ms-1"}`}
                            ></i>
                            <p
                              className={`${
                                event.includes(currentDay) ||
                                schedule.includes(currentDay)
                                  ? "d-none"
                                  : "d-block"
                              }`}
                            >
                              a
                            </p>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>

          <p className="mb-3 ms-3 fw-bold">
            Lịch họp ngày{" "}
            {checkCurrentDate2(currentSelectDate)
              ? "hôm nay"
              : `${currentSelectDate}`}
          </p>
          <div className="px-3">
            <p>{!listSchedule.length && "Hiện không có lịch họp nào."}</p>
            {listSchedule.map((item) => {
              return (
                <div className="mt-3" key={item.id}>
                  <CardSchedule schedule={item} isStaff />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Schedule;
