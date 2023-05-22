import * as React from "react";
//import DetailAdjustments from "../../../components/Detail/DetailAdjustments";
import DetailOverview from "../../../components/Detail/DetailOverview";
import DetailProgress from "../../../components/Detail/DetailProgress";
import DetailSchedule from "../../../components/Detail/DetailSchedule";
import DetailMission from "../../../components/Detail/DetailMission";
import InputModal from "../../../components/InputModal";
import Template from "../../../components/Template";
import "./style.css";
import { useDispatch } from "react-redux";
import { setIsShow } from "../../../redux/reducers/Loading";
import { request } from "../../../api/config";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

const ProjectDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  // const [overview, setOverview] = React.useState(location.state);
  const [overview, setOverview] = React.useState(null);
  const [listTask, setListTask] = React.useState([]);
  const params = useParams();
  const listContentDetail = [
    {
      title: "Dự án tổng quan",
      component: <DetailOverview overview={overview} />,
    },
    {
      title: "Danh sách nhiệm vụ",
      component: <DetailMission list={listTask} projectId={overview?.id} />,
    },
    {
      title: "Lịch họp",
      component: <DetailSchedule />,
    },

    {
      title: "Tiến độ",
      component: <DetailProgress />,
    },
  ];

  const [currentContent, setCurrentContent] = React.useState({
    title: "Dự án tổng quan",
    component: <DetailOverview overview={overview} />,
  });

  React.useEffect(() => {
    if (currentContent.title === "Dự án tổng quan") {
      setCurrentContent({
        ...currentContent,
        component: <DetailOverview overview={overview} />,
      });
    }

    if (currentContent.title === "Danh sách nhiệm vụ") {
      setCurrentContent({
        ...currentContent,
        component: <DetailMission list={listTask} projectId={overview?.id} />,
      });
    }
  }, [overview, listTask]);

  React.useEffect(() => {
    request
      .get(`/api/project/management/admin/project/${params.id}`)
      .then((response) => {
        setListTask(response.data.data.tasks);
      })
      .catch((error) => {});

    request
      .get("/api/project/management/admin/project")
      .then((response) => {
        const list = response.data.data.list.filter((item) => {
          return item.id == params.id;
        });
        console.log(list);
        setOverview(list[0]);
      })
      .catch((error) => {});
  }, []);

  const [editProject, setEditProject] = React.useState(overview);

  const editAPI = async () => {
    setOverview(editProject);
    dispatch(setIsShow(true));
    request
      .put(`/api/project/management/admin/project/${params.id}`, editProject)
      .then((response) => {
        setOverview(editProject);
        dispatch(setIsShow(false));
      })
      .catch((error) => {
        dispatch(setIsShow(false));
      });
  };

  const deleteAPI = async () => {
    request
      .delete(`/api/project/management/admin/project/${params.id}`)
      .then((response) => {})
      .catch((error) => {});
  };

  return (
    <Template>
      <div className="container-fluid pt-3 px-15 ">
        <div className="bg-light rounded-3 p-3 ">
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between ">
            <p className="fw-semibold mb-4 text-nowrap ">Thông tin chi tiết</p>
            <div className="w-100 row justify-content-end ">
              <div className="mb-4 col-6 col-lg-3 col-xl-2 ">
                <div
                  className="btn d-flex align-items-center justify-content-center border"
                  data-bs-toggle="modal"
                  data-bs-target="#editProject"
                >
                  <i className="fa fa-pen"></i>
                  <p className="ps-2">Sửa</p>
                </div>
              </div>

              <div className="mb-4 col-6 col-lg-3 col-xl-2 text-nowrap">
                <div
                  className="btn d-flex align-items-center justify-content-center border"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteThanhVien"
                >
                  <i className="fa fa-trash"></i>
                  <p className="ps-2">Xoá</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex">
            {listContentDetail.map((item, i) => {
              return (
                <div
                  onClick={() => setCurrentContent(item)}
                  key={i}
                  className={`px-4 pb-2 border-bottom  ${
                    currentContent.title === item.title &&
                    "border-2 border-primary"
                  }`}
                >
                  {item.title}
                </div>
              );
            })}
            <div className="flex-fill border-bottom"></div>
          </div>

          {currentContent.component}
        </div>
      </div>
      <div
        className="modal fade"
        id="editProject"
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
                value={editProject?.name}
                title="Tên dự án"
                action={(e) => {
                  setEditProject({ ...editProject, name: e.target.value });
                }}
              />

              <InputModal
                value={editProject?.createdBy}
                title="Người quản lý"
                action={(e) => {
                  setEditProject({
                    ...editProject,
                    createdBy: e.target.value,
                  });
                }}
                disabled
              />

              <InputModal
                value={editProject?.description}
                title="Mô tả"
                action={(e) => {
                  setEditProject({
                    ...editProject,
                    description: e.target.value,
                  });
                }}
              />

              <InputModal
                value={editProject?.startDate}
                title="Ngày giao"
                action={(e) => {
                  setEditProject({ ...editProject, startDate: e.target.value });
                }}
              />

              <InputModal
                value={editProject?.endDate}
                title="Ngày hết hạn dự kiến"
                action={(e) => {
                  setEditProject({ ...editProject, endDate: e.target.value });
                }}
              />

              <InputModal
                value={editProject?.budget}
                title="Ngân sách dự kiến"
                action={(e) => {
                  setEditProject({ ...editProject, budget: e.target.value });
                }}
              />

              <InputModal
                value={editProject?.priority}
                title="Độ ưu tiên"
                action={(e) => {
                  setEditProject({ ...editProject, priority: e.target.value });
                }}
              />

              <InputModal
                value={editProject?.status}
                title="Trạng thái"
                action={(e) => {
                  setEditProject({ ...editProject, status: e.target.value });
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
                onClick={() => editAPI()}
              >
                Sửa
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="deleteThanhVien"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-block border-0">
              <h1
                className="modal-title fs-5 text-center"
                id="exampleModalLabel"
              >
                Xoá dự án
              </h1>
            </div>
            <div className="modal-body text-center">
              Bạn có chắc chắn muốn xóa dự án này không ?
            </div>
            <div className="modal-footer justify-content-evenly border-0">
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
                onClick={() => {
                  deleteAPI();
                  navigate(-1);
                }}
              >
                Xoá
              </button>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default ProjectDetail;
