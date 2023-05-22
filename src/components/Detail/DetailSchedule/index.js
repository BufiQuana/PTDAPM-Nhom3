import * as React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import CardSchedule from "../../CardSchedule";
import "./style.css";
import { request } from "../../../api/config";
import { setIsShow } from "../../../redux/reducers/Loading";
import { useDispatch } from "react-redux";
import moment, { min } from "moment";
import { useLocation, useParams } from "react-router-dom";

const DetailSchedule = () => {
  const dispatch = useDispatch();
  const [currentSchedule, setCurrentSchedule] = React.useState({
    id: "",
    title: "",
    description: "",
    address: "",
    date: "",
    startDate: "",
    endDate: "",
  });

  const [value, onChange] = React.useState(new Date());
  const [valueTime, onChangeTime] = React.useState("10:00");
  const params = useParams();

  // const listScheduleA = [
  //   {
  //     id: "A",
  //     title: "Schedule A",
  //     description: "Description A",
  //     address: "Place A",
  //     date: new Date(),
  //     startDate: "12:00",
  //     endDate: "12:30",
  //   },
  //   {
  //     id: "B",
  //     title: "Schedule B",
  //     description: "Description B",
  //     address: "Place B",
  //     date: "10/30/2023",
  //     startDate: "12:00",
  //     endDate: "13:15",
  //   },
  //   {
  //     id: "C",
  //     title: "Schedule C",
  //     description: "Description C",
  //     address: "Place C",
  //     date: "02/21/2023",
  //     startDate: "12:00",
  //     endDate: "16:00",
  //   },
  // ];

  const formatAMPM = (time) => {
    var [hours, minutes] = time.split(":");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    // hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? "0" + hours : hours;
    minutes = parseInt(minutes);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };

  const [listSchedule, setListSchedule] = React.useState([]);

  React.useEffect(() => {
    getAPI();
  }, []);

  const getAPI = async () => {
    dispatch(setIsShow(true));
    request
      .get(
        `https://server.6figurespos.com/gateway/api/project/management/admin/schedule/project/${params.id}`
      )
      .then((response) => {
        setListSchedule(response.data.data);
        console.log(response.data.data);
        dispatch(setIsShow(false));
      })
      .catch((error) => {
        console.log(error);
        dispatch(setIsShow(false));
      });
  };

  const deleteAPI = async (id, action) => {
    request
      .delete(`/api/project/management/admin/schedule/${id}`)
      .then((response) => {
        action();
      })
      .catch((error) => {});
  };

  const addAPI = async (schedule) => {
    request
      .post(`/api/project/management/admin/schedule`, schedule)
      .then((response) => {
        getAPI();
      })
      .catch((error) => {
        getAPI();
      });
  };

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
            onClick={() => {
              setCurrentSchedule({
                id: "",
                title: "",
                description: "",
                address: "",
                date: "",
                startDate: "",
                endDate: "",
              });
            }}
          >
            Tạo cuộc họp
          </div>
        </div>
        {listSchedule.map((item) => {
          return (
            <div className="mt-3" key={item.id}>
              <CardSchedule
                schedule={item}
                deleteAction={() => {
                  deleteAPI(item.id, () => {
                    console.log(`Delete ${item.id}`);
                    setListSchedule(
                      listSchedule.filter((currentItem) => {
                        return currentItem.id !== item.id;
                      })
                    );
                  });
                }}
              />
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
              setCurrentSchedule({
                id: "",
                title: "",
                description: "",
                address: "",
                date: "",
                startDate: "",
                endDate: "",
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
                setCurrentSchedule({ ...currentSchedule, date: value });
              }}
              value={currentSchedule.date}
            />
          </div>

          <div className="border-bottom py-3">
            <div className="ps-4 ms-3">
              <span className="me-3">Thời gian bắt đầu: </span>
              <TimePicker
                className="text-center"
                disableClock
                onChange={(value) => {
                  setCurrentSchedule({ ...currentSchedule, startDate: value });
                }}
                value={currentSchedule.startDate}
              />
            </div>
            <div className="mt-4 ps-4 ms-3">
              <span className="me-3">Thời gian kết thúc:</span>
              <TimePicker
                className="text-center"
                disableClock
                minTime={currentSchedule.startDate}
                onChange={(value) => {
                  setCurrentSchedule({ ...currentSchedule, endDate: value });
                }}
                value={currentSchedule.endDate}
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
                value={currentSchedule.title}
                onChange={(e) => {
                  setCurrentSchedule({
                    ...currentSchedule,
                    title: e.target.value,
                  });
                }}
              />
            </div>
            <div className="mt-4 px-4 mx-3">
              <p className="me-3">Mô tả:</p>
              <textarea
                value={currentSchedule.description}
                onChange={(e) => {
                  setCurrentSchedule({
                    ...currentSchedule,
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
                value={currentSchedule.address}
                onChange={(e) => {
                  setCurrentSchedule({
                    ...currentSchedule,
                    address: e.target.value,
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
              let currentDate = moment(currentSchedule.date).format(
                "yyyy-MM-DD"
              );
              let currentTime = formatAMPM(currentSchedule.startDate);
              let currentTime2 = formatAMPM(currentSchedule.endDate);

              const apiSchedule = {
                ...currentSchedule,
                id: Math.floor(Math.random * 100),
                startDate: `${currentDate} ${currentTime}`,
                endDate: `${currentDate} ${currentTime2}`,
                projectId: `${params.id}`,
              };

              console.log(apiSchedule);
              addAPI(apiSchedule);
              // setListSchedule(() => {
              //   setCurrentSchedule({
              //     id: "",
              //     title: "",
              //     description: "",
              //     address: "",
              //     date: "",
              //     startDate: "",
              //     endDate: "",
              //   });
              //   return [...listSchedule, currentSchedule];
              // });
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
