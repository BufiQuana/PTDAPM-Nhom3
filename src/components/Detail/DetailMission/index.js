import * as React from "react";
import { ASSETS } from "../../../constants/ASSETS";
import Avatar from "../../Avatar";
import CardTask from "../../CardTask";
import "./style.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { request } from "../../../api/config";
import { useDispatch } from "react-redux";
import { setIsShow } from "../../../redux/reducers/Loading";

const DetailMission = (props) => {
  // const listTaskTodo = [
  //   {
  //     id: "1",
  //     title: "Task A",
  //     description: "Description A",
  //     dateEnd: "Date A",
  //     assignee: "Person A",
  //     priority: "high",
  //     image: ASSETS.imageCat,
  //     comments: [
  //       {
  //         userId: "1",
  //         userAvatar: ASSETS.avatar,
  //         content: "Comment A",
  //       },
  //       {
  //         userId: "2",
  //         userAvatar: ASSETS.avatar,
  //         content: "Comment B",
  //       },
  //     ],
  //   },
  //   {
  //     id: "2",
  //     title: "Task B",
  //     description: "Description B",
  //     dateEnd: "Date B",
  //     assignee: "Person B",
  //     priority: "medium",
  //     image: null,
  //     comments: [],
  //   },
  // ];

  // const listTaskInProgress = [
  //   {
  //     id: "3",
  //     title: "Task C",
  //     description: "Description C",
  //     dateEnd: "Date C",
  //     assignee: "Person C",
  //     priority: "low",
  //     image: null,
  //     comments: [],
  //   },
  //   {
  //     id: "4",
  //     title: "Task D",
  //     description: "Description D",
  //     dateEnd: "Date D",
  //     assignee: "Person D",
  //     priority: "medium",
  //     image: null,
  //     comments: [],
  //   },
  // ];

  // const listTaskTesting = [
  //   {
  //     id: "5",
  //     title: "Task E",
  //     description: "Description E",
  //     dateEnd: "Date E",
  //     assignee: "Person E",
  //     priority: "high",
  //     image: null,
  //     comments: [],
  //   },
  //   {
  //     id: "6",
  //     title: "Task F",
  //     description: "Description F",
  //     dateEnd: "Date F",
  //     assignee: "Person F",
  //     priority: "medium",
  //     image: ASSETS.imageCat2,
  //     comments: [],
  //   },
  // ];

  const changeTask = (currentTask, isPrev) => {
    const copyTask = currentTask;
    if (currentTask.status === "Cần làm") {
      setListTaskTodo(
        listTaskTodo.filter((task) => task.id !== currentTask.id)
      );
      copyTask.status = "Đang làm";
      setListTaskInProgress([...listTaskInProgress, copyTask]);
    } else if (currentTask.status === "Đang làm") {
      setListTaskInProgress(
        listTaskInProgress.filter((task) => task.id !== currentTask.id)
      );

      isPrev ? (copyTask.status = "Cần làm") : (copyTask.status = "Kiểm thử");

      isPrev
        ? setListTaskTodo([...listTaskTodo, copyTask])
        : setListTaskTesting([...listTaskTesting, copyTask]);
    } else if (currentTask.status === "Kiểm thử") {
      setListTaskTesting(
        listTaskTesting.filter((task) => task.id !== currentTask.id)
      );

      isPrev
        ? (copyTask.status = "Đang làm")
        : (copyTask.status = "Hoàn thành");

      isPrev
        ? setListTaskInProgress([...listTaskInProgress, copyTask])
        : setListTaskDone([...listTaskDone, copyTask]);
    } else {
      setListTaskDone(
        listTaskDone.filter((task) => task.id !== currentTask.id)
      );
      copyTask.status = "Kiểm thử";
      setListTaskTesting([...listTaskTesting, copyTask]);
    }
    request
      .put(
        `/api/project/management/staff/projectTask/${currentTask.id}`,
        copyTask
      )
      .then((response) => {})
      .catch((error) => {});
  };

  const [listTaskTodo, setListTaskTodo] = React.useState(
    props.list.filter((task) => {
      return task.status === "Cần làm";
    })
  );

  const [listTaskInProgress, setListTaskInProgress] = React.useState(
    props.list.filter((task) => {
      return task.status === "Đang làm";
    })
  );

  const [listTaskTesting, setListTaskTesting] = React.useState(
    props.list.filter((task) => {
      return task.status === "Kiểm thử";
    })
  );

  const [listTaskDone, setListTaskDone] = React.useState(
    props.list.filter((task) => {
      return task.status === "Hoàn thành";
    })
  );

  React.useEffect(() => {
    setListTaskTodo(
      props.list.filter((task) => {
        return task.status === "Cần làm";
      })
    );
    setListTaskInProgress(
      props.list.filter((task) => {
        return task.status === "Đang làm";
      })
    );
    setListTaskTesting(
      props.list.filter((task) => {
        return task.status === "Kiểm thử";
      })
    );
    setListTaskDone(
      props.list.filter((task) => {
        return task.status === "Hoàn thành";
      })
    );
  }, [props.list]);

  const [listThanhVien, setListThanhVien] = React.useState([]);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setIsShow(true));
    request
      .get("/api/project/management/admin/user")
      .then((response) => {
        const list = response.data.data.list;
        const listFiltered = list.filter((item) => {
          const rolesCode = item.roles.map((role) => {
            return role.code;
          });
          if (rolesCode.includes("ADMIN")) return false;
          if (rolesCode.includes("MANAGER")) return false;
          if (rolesCode.includes("STAFF")) return true;
        });
        const listFilteredStaff = listFiltered.map((item) => {
          return { ...item, label: item.fullName, value: item.fullName };
        });
        setListThanhVien(listFilteredStaff);
        dispatch(setIsShow(false));
      })
      .catch((error) => {
        dispatch(setIsShow(false));
      });
  }, []);

  const [startDate, setStartDate] = React.useState(new Date());

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const dot = (color = "transparent") => ({
    alignItems: "center",
    display: "flex",

    ":before": {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: "block",
      marginRight: 8,
      height: 10,
      width: 10,
    },
  });

  const optionsPriority = [
    { value: "HIGH_LEVEL", label: "High" },
    { value: "AVARAGE_LEVEL", label: "Medium" },
    { value: "LOW_LEVEL", label: "Low" },
  ];

  const [selectedOption, setSelectedOption] = React.useState(null);

  const [addTask, setAddTask] = React.useState({
    taskName: "",
    description: "",
    status: "",
    priority: "",
    projectId: props.projectId,
  });

  const addTaskAPI = async () => {
    if (addTask.status === "Cần làm") {
      setListTaskTodo([...listTaskTodo, addTask]);
    }
    if (addTask.status === "Đang làm") {
      setListTaskInProgress([...listTaskInProgress, addTask]);
    }
    if (addTask.status === "Kiểm thử") {
      setListTaskTesting([...listTaskTesting, addTask]);
    }
    if (addTask.status === "Hoàn thành") {
      setListTaskDone([...listTaskDone, addTask]);
    }
    request
      .post(
        "https://server.6figurespos.com/gateway/api/project/management/admin/projectTask",
        addTask
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="px-4 pt-3">
      <div className="row">
        <div className="col px-1">
          <div className="border w-100 p-2 bg-white d-flex justify-content-between align-items-center">
            <p>Cần làm</p>
            <i
              className="fa fa-plus"
              data-bs-toggle="modal"
              data-bs-target="#addCard"
              onClick={() => {
                setAddTask({ ...addTask, status: "Cần làm" });
              }}
            ></i>
          </div>
          <div className="d-flex flex-column">
            {listTaskTodo.map((item, i) => {
              return (
                <CardTask
                  task={item}
                  key={i}
                  changeTask={changeTask}
                  disabledPrev
                />
              );
            })}
          </div>
        </div>
        <div className="col px-1">
          <div className="border w-100 p-2 bg-white d-flex justify-content-between align-items-center">
            <p>Đang làm</p>
            <i
              className="fa fa-plus"
              data-bs-toggle="modal"
              data-bs-target="#addCard"
              onClick={() => {
                setAddTask({ ...addTask, status: "Đang làm" });
              }}
            ></i>
          </div>
          <div className="d-flex flex-column">
            {listTaskInProgress.map((item, i) => {
              return <CardTask task={item} changeTask={changeTask} key={i} />;
            })}
          </div>
        </div>
        <div className="col px-1">
          <div className="border w-100 p-2 bg-white d-flex justify-content-between align-items-center">
            <p>Kiểm thử</p>
            <i
              className="fa fa-plus"
              data-bs-toggle="modal"
              data-bs-target="#addCard"
              onClick={() => {
                setAddTask({ ...addTask, status: "Kiểm thử" });
              }}
            ></i>
          </div>
          <div className="d-flex flex-column">
            {listTaskTesting.map((item, i) => {
              return <CardTask task={item} changeTask={changeTask} key={i} />;
            })}
          </div>
        </div>
        <div className="col px-1">
          <div className="border w-100 p-2 bg-white d-flex justify-content-between align-items-center">
            <p>Hoàn thành</p>
            <i
              className="fa fa-plus"
              data-bs-toggle="modal"
              data-bs-target="#addCard"
              onClick={() => {
                setAddTask({ ...addTask, status: "Hoàn thành" });
              }}
            ></i>
          </div>
          <div className="d-flex flex-column">
            {listTaskDone.map((item, i) => {
              return (
                <CardTask
                  task={item}
                  changeTask={changeTask}
                  key={i}
                  disabledNext
                />
              );
            })}
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="addCard"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Thêm công việc
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="modal-body">
                <div className="d-flex align-items-top mb-2">
                  <i className="fa fa-heading me-2 mt-1"></i>
                  <p className="me-2 text-nowrap">Tiêu đề: </p>
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Nhập tiêu đề"
                    className="border rounded-1 ps-2 w-100"
                    value={addTask.taskName}
                    onChange={(e) => {
                      setAddTask({ ...addTask, taskName: e.target.value });
                    }}
                  />
                </div>

                <div className="d-flex align-items-top mb-2">
                  <i className="fa fa-align-left me-2 mt-1"></i>
                  <p className="me-2 text-nowrap">Mô tả công việc: </p>
                </div>
                <ReactQuill
                  className="mb-4"
                  theme="snow"
                  value={addTask.description}
                  onChange={(value) => {
                    setAddTask({ ...addTask, description: value });
                  }}
                />
                <div className="d-flex align-items-top mb-2">
                  <i className="fa-regular fa-calendar me-2 mt-1"></i>
                  <p className="me-2 text-nowrap">Ngày hết hạn:</p>
                  <div className="mb-4">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>

                <div className="d-flex align-items-top mb-4">
                  <i className="fa-regular fa-user me-2 mt-1"></i>
                  <p className="me-2 text-nowrap">Người làm:</p>
                  <div className="flex-fill input-dropdown">
                    <Select
                      styles={{
                        control: (provided, state) => ({
                          ...provided,
                          background: "#fff",
                          minHeight: "30px",
                          height: "30px",
                          boxShadow: state.isFocused ? null : null,
                        }),

                        valueContainer: (provided, state) => ({
                          ...provided,
                          height: "30px",
                          padding: "0 6px",
                        }),

                        multiValueLabel: (provided, state) => ({
                          ...provided,
                          padding: "0 6px",
                        }),

                        multiValue: (provided, state) => ({
                          ...provided,
                          height: "20px",
                        }),

                        input: (provided, state) => ({
                          ...provided,
                          margin: "0px",
                        }),
                        indicatorSeparator: (state) => ({
                          display: "none",
                        }),
                        indicatorsContainer: (provided, state) => ({
                          ...provided,
                          height: "30px",
                        }),
                      }}
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      // options={options}
                      options={listThanhVien}
                      isMulti
                      closeMenuOnSelect={false}
                      noOptionsMessage={() => {
                        return "Không có thành viên.";
                      }}
                    />
                  </div>
                </div>
                <div className="d-flex align-items-top mb-4">
                  <i className="fa-regular fa-user me-2 mt-1"></i>
                  <p className="me-2 text-nowrap">Độ ưu tiên:</p>
                  <div className="flex-fill input-dropdown">
                    <Select
                      styles={{
                        control: (provided, state) => ({
                          ...provided,
                          background: "#fff",
                          minHeight: "30px",
                          height: "30px",
                          boxShadow: state.isFocused ? null : null,
                        }),

                        valueContainer: (provided, state) => ({
                          ...provided,
                          height: "30px",
                          padding: "0 6px",
                        }),

                        multiValueLabel: (provided, state) => ({
                          ...provided,
                          padding: "0 6px",
                        }),

                        multiValue: (provided, state) => ({
                          ...provided,
                          height: "20px",
                        }),

                        input: (provided, state) => ({
                          ...provided,
                          margin: "0px",
                        }),
                        indicatorSeparator: (state) => ({
                          display: "none",
                        }),
                        indicatorsContainer: (provided, state) => ({
                          ...provided,
                          height: "30px",
                        }),
                      }}
                      defaultValue={addTask.priority}
                      onChange={(target) => {
                        setAddTask({ ...addTask, priority: target.value });
                      }}
                      options={optionsPriority}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Huỷ
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => {
                  addTaskAPI();
                }}
              >
                Thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMission;
