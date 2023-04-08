import * as React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import CardSchedule from "../../CardSchedule";
import "./style.css";
import { request } from "../../../api/config";

const DetailSchedule = () => {
  const [createSchedule, setCreateSchedule] = React.useState({
    id: "",
    title: "",
    description: "",
    place: "",
    date: "",
    timeStart: "",
    timeEnd: "",
  });

  const [value, onChange] = React.useState(new Date());
  const [valueTime, onChangeTime] = React.useState("10:00");

  // const listScheduleA = [
  //   {
  //     id: "A",
  //     title: "Schedule A",
  //     description: "Description A",
  //     place: "Place A",
  //     date: new Date(),
  //     timeStart: "12:00",
  //     timeEnd: "12:30",
  //   },
  //   {
  //     id: "B",
  //     title: "Schedule B",
  //     description: "Description B",
  //     place: "Place B",
  //     date: "10/30/2023",
  //     timeStart: "12:00",
  //     timeEnd: "13:15",
  //   },
  //   {
  //     id: "C",
  //     title: "Schedule C",
  //     description: "Description C",
  //     place: "Place C",
  //     date: "02/21/2023",
  //     timeStart: "12:00",
  //     timeEnd: "16:00",
  //   },
  // ];

  const [listSchedule, setListSchedule] = React.useState([]);

  React.useEffect(() => {
    request
      .get(
        "https://server.6figurespos.com/gateway/api/project/management/admin/schedule/project/1"
      )
      .then((response) => {
        setListSchedule(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="px-4 pt-3">
        <div className="d-flex align-items-center justify-content-between">
          <p>
            {listSchedule.length
              ? "Danh sách lịch họp"
              : "Hiện không có lịch họp nào."}
          </p>
          <div
            className="btn btn-primary"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            Tạo cuộc họp
          </div>
        </div>
        {listSchedule.map((item) => {
          return (
            <div className="mt-3" key={item.id}>
              <CardSchedule schedule={item} />
            </div>
          );
        })}
      </div>

      <div
        className="offcanvas offcanvas-end "
        data-bs-backdrop="static"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          {/* <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button> */}
          <div
            className="rounded-circle border px-2"
            data-bs-dismiss="offcanvas"
            onClick={() => {
              setCreateSchedule({
                id: "",
                title: "",
                description: "",
                place: "",
                date: "",
                timeStart: "",
                timeEnd: "",
              });
            }}
          >
            <i className="fa fa-angle-left text-primary"></i>
          </div>
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Tạo cuộc họp
          </h5>
        </div>
        <div className="offcanvas-body border-top px-0 pb-0">
          <div className="border-bottom pb-3">
            <Calendar
              className="border-0 mx-auto"
              onChange={(value) => {
                setCreateSchedule({ ...createSchedule, date: value });
              }}
              value={createSchedule.date}
            />
          </div>

          <div className="border-bottom py-3">
            <div className="ps-4 ms-3">
              <span className="me-3">Thời gian bắt đầu: </span>
              <TimePicker
                className="text-center"
                disableClock
                onChange={(value) => {
                  setCreateSchedule({ ...createSchedule, timeStart: value });
                }}
                value={createSchedule.timeStart}
              />
            </div>
            <div className="mt-4 ps-4 ms-3">
              <span className="me-3">Thời gian kết thúc:</span>
              <TimePicker
                className="text-center"
                disableClock
                minTime={createSchedule.timeStart}
                onChange={(value) => {
                  setCreateSchedule({ ...createSchedule, timeEnd: value });
                }}
                value={createSchedule.timeEnd}
              />
            </div>
          </div>

          <div className="border-bottom py-3">
            <div className="px-4 mx-3 d-flex align-items-center">
              <p className="me-3">Tiêu đề: &nbsp;</p>
              <input
                type="text"
                className="flex-fill px-2"
                placeholder="Nhập tiêu đề"
                value={createSchedule.title}
                onChange={(e) => {
                  setCreateSchedule({
                    ...createSchedule,
                    title: e.target.value,
                  });
                }}
              />
            </div>
            <div className="mt-4 px-4 mx-3">
              <p className="me-3">Mô tả:</p>
              <textarea
                value={createSchedule.description}
                onChange={(e) => {
                  setCreateSchedule({
                    ...createSchedule,
                    description: e.target.value,
                  });
                }}
                style={{ resize: "none" }}
                placeholder="Nhập mô tả"
                className="w-100 mt-2 px-2"
                name="Text1"
                cols="40"
                rows="3"
              ></textarea>
            </div>
            <div className="mt-4 px-4 mx-3 d-flex align-items-center">
              <p className="me-3">Địa điểm:</p>
              <input
                type="text"
                className="flex-fill px-2"
                placeholder="Nhập tiêu đề"
                value={createSchedule.place}
                onChange={(e) => {
                  setCreateSchedule({
                    ...createSchedule,
                    place: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div className="offcanvas-footer flex-fill text-end px-4 mx-3">
          <div
            data-bs-dismiss="offcanvas"
            className="btn btn-primary px-4"
            onClick={() => {
              setCreateSchedule({
                ...createSchedule,
                id: Math.floor(Math.random * 100),
              });
              console.log(createSchedule);
              setListSchedule(() => {
                setCreateSchedule({
                  id: "",
                  title: "",
                  description: "",
                  place: "",
                  date: "",
                  timeStart: "",
                  timeEnd: "",
                });
                return [...listSchedule, createSchedule];
              });
            }}
          >
            Thêm
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailSchedule;
