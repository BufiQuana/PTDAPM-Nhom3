import * as React from "react";
//import DetailAdjustments from "../../../components/Detail/DetailAdjustments";
import DetailOverview from "../../../components/Detail/DetailOverview";
import DetailProgress from "../../../components/Detail/DetailProgress";
import DetailSchedule from "../../../components/Detail/DetailSchedule";
import DetailMission from "../../../components/Detail/DetailMission";
import InputModal from "../../../components/InputModal";
import Template from "../../../components/Template";
import "./style.css";

const ProjectDetail = () => {
  const listContentDetail = [
    {
      title: "Dự án tổng quan",
      component: <DetailOverview />,
    },
    {
      title: "Danh sách nhiệm vụ",
      component: <DetailMission />,
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
    component: <DetailOverview />,
  });

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
              <InputModal title="Tên dự án" />

              <InputModal title="Người quản lý" />
              <InputModal title="Mô tả" />

              <InputModal title="Ngày hết hạn dự kiến" />

              <InputModal title="Ngân sách dự kiến" />

              <InputModal title="Quá trình phát triển dự án" />
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
                onClick={() => console.log()}
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
            <div className="modal-header d-block">
              <h1
                className="modal-title fs-5 text-center"
                id="exampleModalLabel"
              >
                Xoá dự án
              </h1>
            </div>
            <div className="modal-body">
              Bạn có chắc chắn muốn xóa dự án này không ?
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
                onClick={() => console.log()}
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
