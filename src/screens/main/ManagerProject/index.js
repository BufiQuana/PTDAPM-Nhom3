import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import ListContentDashboard from "../../../components/Dashboard/ListContentDashboard";
import InputModal from "../../../components/InputModal";
import TableManagerProject from "../../../components/ManagerProject/TableManagerProject";
import Template from "../../../components/Template";
import { ASSETS } from "../../../constants/ASSETS";
import { request } from "../../../api/config";
import { setIsShow } from "../../../redux/reducers/Loading";

const ManagerProject = () => {
  const dispatch = useDispatch();
  const valueSearch = useSelector((state) => {
    return state.navbarSearch.value;
  });

  const [addProject, setAddProject] = React.useState({});

  const addAPI = async () => {
    setListTableDuAn([...listTableDuAn, addProject]);
    console.log(addProject);
  };
  // const listTableDuAn = [
  //   {
  //     id: "1",
  //     project: "Dự án A",
  //     manager: "Quản lý A",
  //     budget: "Ngân sách A",
  //     estimate: "Thời gian A",
  //     state: "Trạng thái A",
  //   },
  //   {
  //     id: "2",
  //     project: "Dự án B",
  //     manager: "Quản lý B",
  //     budget: "Ngân sách B",
  //     estimate: "Thời gian B",
  //     state: "Trạng thái B",
  //   },
  //   {
  //     id: "3",
  //     project: "Dự án C",
  //     manager: "Quản lý C",
  //     budget: "Ngân sách C",
  //     estimate: "Thời gian C",
  //     state: "Trạng thái C",
  //   },
  //   {
  //     id: "4",
  //     project: "Dự án D",
  //     manager: "Quản lý D",
  //     budget: "Ngân sách D",
  //     estimate: "Thời gian D",
  //     state: "Trạng thái D",
  //   },
  //   {
  //     id: "5",
  //     project: "Dự án E",
  //     manager: "Quản lý E",
  //     budget: "Ngân sách E",
  //     estimate: "Thời gian E",
  //     state: "Trạng thái E",
  //   },
  // ].filter((item) => {
  //   return item.project.toLowerCase().includes(valueSearch.toLowerCase());
  // });

  const [listTableDuAn, setListTableDuAn] = React.useState([]);

  const listDuAn = [
    {
      icon: ASSETS.icDone,
      content: "Đã hoàn thành",
      amount: 0,
    },
    {
      icon: ASSETS.icCurrent,
      content: "Đang tiến hành",
      amount: 0,
    },
    {
      icon: ASSETS.icIsComing,
      content: "Sắp bắt đầu",
      amount: 0,
    },
  ];

  const listCongViec = [
    {
      icon: ASSETS.icCreate,
      content: "Đã tạo",
      amount: 0,
    },
    {
      icon: ASSETS.icDone,
      content: "Đã hoàn thành",
      amount: 0,
    },
  ];

  React.useEffect(() => {
    dispatch(setIsShow(true));
    request
      .get("/api/project/management/admin/project?name=ProjectManage")
      .then((response) => {
        setListTableDuAn(response.data.data.list);
        dispatch(setIsShow(false));
      })
      .catch((error) => {
        dispatch(setIsShow(false));
      });
  }, []);

  return (
    <Template>
      <div className="container-fluid pt-4 px-32">
        <div className="row g-4">
          {/* <div className="col-12 col-xl-8">
            <div className="bg-light p-3 rounded-3 h-100 d-flex flex-column">
              <p className="fw-semibold mb-4">Dự án tổng quan</p>
              <ListContentDashboard list={listDuAn} />
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="bg-light p-3 rounded-3 h-100 d-flex flex-column">
              <p className="fw-semibold mb-4">Công việc</p>
              <ListContentDashboard list={listCongViec} />
            </div>
          </div> */}
          <div className="col-12">
            <div className="bg-light p-3 rounded-3 h-100 d-flex flex-column overflow-scroll">
              <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
                <p className="fw-semibold mb-4 text-nowrap">Dự án tổng quan</p>
                <div className="w-100 row justify-content-end">
                  <div className="mb-4 col-12 col-lg-3 col-xl-2">
                    <div
                      className="btn btn-primary w-100 "
                      data-bs-toggle="modal"
                      data-bs-target="#addProject"
                    >
                      Tạo dự án
                    </div>
                  </div>
                  {/* <div className="mb-4 col-12 col-lg-3 col-xl-2">
                    <div className="btn d-flex align-items-center border">
                      <img
                        src={ASSETS.icFilter}
                        alt=""
                        width={20}
                        height={20}
                      />
                      <p className="ps-2">Lọc</p>
                    </div>
                  </div>
                  <div className="mb-4 col-12 col-lg-3 col-xl-2 text-nowrap">
                    <div className="btn d-flex align-items-center border">
                      Lịch sử dự án
                    </div>
                  </div> */}
                </div>
              </div>
              <TableManagerProject list={listTableDuAn} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="addProject"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Sửa dự án
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <InputModal
                value={addProject.name}
                title="Tên dự án"
                action={(e) => {
                  setAddProject({ ...addProject, name: e.target.value });
                }}
              />

              <InputModal
                value={addProject.createdBy}
                title="Người quản lý"
                action={(e) => {
                  setAddProject({
                    ...addProject,
                    createdBy: e.target.value,
                  });
                }}
              />

              <InputModal
                value={addProject.description}
                title="Mô tả"
                action={(e) => {
                  setAddProject({
                    ...addProject,
                    description: e.target.value,
                  });
                }}
              />

              <InputModal
                value={addProject.startDate}
                title="Ngày giao"
                action={(e) => {
                  setAddProject({ ...addProject, startDate: e.target.value });
                }}
              />

              <InputModal
                value={addProject.endDate}
                title="Ngày hết hạn dự kiến"
                action={(e) => {
                  setAddProject({ ...addProject, endDate: e.target.value });
                }}
              />

              <InputModal
                value={addProject.budget}
                title="Ngân sách dự kiến"
                action={(e) => {
                  setAddProject({ ...addProject, budget: e.target.value });
                }}
              />

              <InputModal
                value={addProject.priority}
                title="Độ ưu tiên"
                action={(e) => {
                  setAddProject({ ...addProject, priority: e.target.value });
                }}
              />

              <InputModal
                value={addProject.status}
                title="Trạng thái"
                action={(e) => {
                  setAddProject({ ...addProject, status: e.target.value });
                }}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Quay lại
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => addAPI()}
              >
                Thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default ManagerProject;
