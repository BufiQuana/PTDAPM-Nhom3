import * as React from "react";
import Template from "../../../components/Template";
import ListContentDashboard from "../../../components/Dashboard/ListContentDashboard";
import TableManagerTeam from "../../../components/ManagerTeam/TableManagerTeam";
import { ASSETS } from "../../../constants/ASSETS";

const ManagerTeam = () => {
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

  return (
    <Template>
      <div className="container-fluid pt-4 px-32">
        <div className="row g-4">
          <div className="col-12 col-xl-8">
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
          </div>
          <div className="col-12">
            <div className="bg-light p-3 rounded-3 h-100 d-flex flex-column overflow-scroll">
              <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
                <p className="fw-semibold mb-4 text-nowrap">
                  Thông tin thành viên
                </p>
                <div className="w-100 row justify-content-end">
                  <div className="mb-4 col-12 col-lg-3 col-xl-2">
                    <div className="btn btn-primary w-100">Thêm thành viên</div>
                  </div>
                  <div className="mb-4 col-12 col-lg-3 col-xl-2">
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
                  </div>
                </div>
              </div>
              <TableManagerTeam />
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default ManagerTeam;
