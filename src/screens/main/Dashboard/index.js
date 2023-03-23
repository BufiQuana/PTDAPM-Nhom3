import axios from "axios";
import * as React from "react";
import { ChartNganSach } from "../../../components/Dashboard/ChartNganSach/index";
import { ChartTienDo } from "../../../components/Dashboard/ChartTienDo";
import CustomerDashboard from "../../../components/Dashboard/CustomerDashboard";
import ListContentDashboard from "../../../components/Dashboard/ListContentDashboard";
import TableDashboard from "../../../components/Dashboard/TableDashboard";
import Template from "../../../components/Template";
import { Link } from "react-router-dom";
import { ASSETS } from "../../../constants/ASSETS";
import "./style.css";

const Dashboard = () => {
  axios
    // .get("https://jsonplaceholder.typicode.com/todos/1")
    .get("http://127.0.0.1:8000/api/get-user")
    .then((response) => {
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

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

  const listTaiNguyen = [
    {
      icon: ASSETS.icVatLieu,
      content: "Vật liệu",
      amount: 0,
    },
    {
      icon: ASSETS.icThongTin,
      content: "Thông tin",
      amount: 0,
    },
    {
      icon: ASSETS.icCongNghe,
      content: "Công nghệ",
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

  const listBaoCao = [
    {
      icon: ASSETS.icNote,
      content: "Đã tạo",
      amount: 0,
    },
    {
      icon: ASSETS.icDone,
      content: "Đã phê duyệt",
      amount: 0,
    },
  ];

  const listCustomer = [
    {
      name: "Nguyễn Thị Thuý Lan",
      gender: 0,
      job: "PM",
      icon: null,
    },
    {
      name: "Bùi Trung Quân",
      gender: 1,
      job: "Dev",
      icon: null,
    },
    {
      name: "Đỗ Hải Đoan",
      gender: 0,
      job: "BA",
      icon: null,
    },
  ];

  return (
    <Template>
      <div className="container-fluid pt-4 px-32">
        <div className="row g-4">
          <div className="col-12 col-xl-12">
            <div className="bg-light p-3 rounded-3 h-100 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center">
                <p className="fw-semibold mb-4">Dự án tổng quan</p>
                <Link to="/manager/project">Xem tất cả</Link>
              </div>
              <ListContentDashboard list={listDuAn} />
            </div>
          </div>
          {/* <div className="col-12 col-xl-4">
            <div className="bg-light p-3 rounded-3 h-100 d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center">
            </div>  
            <ListContentDashboard list={listCongViec} />
            <Link to="/">Xem tất cả</Link>
            <p className="fw-semibold mb-4">Công việc</p>
            </div>
          </div> */}
          <div className="col-12 col-xl-8">
            <div className="bg-light p-3 rounded-3 h-100 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center">
                <p className="fw-semibold mb-4">Tài nguyên</p>
                <Link to="/manager/project">Xem tất cả</Link>
              </div>
              <ListContentDashboard list={listTaiNguyen} />
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="bg-light p-3 rounded-3 h-100 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center">
                <p className="fw-semibold mb-4">Báo cáo</p>
                <Link to="/manager/report">Xem tất cả</Link>
              </div>
              <ListContentDashboard list={listBaoCao} />
            </div>
          </div>
          <div className="col-12 col-xl-8">
            <div className="bg-light p-3 rounded-3 h-100 d-flex flex-column overflow-scroll">
              <p className="fw-semibold mb-4">Ngân sách</p>
              <ChartNganSach />
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="bg-light p-3 rounded-3 h-100 d-flex flex-column overflow-scroll">
              <p className="fw-semibold mb-4">Tiến độ dự án</p>
              <ChartTienDo />
            </div>
          </div>
          <div className="col-12 col-xl-8 ">
            <div className="bg-light p-3 rounded-3 h-100 d-flex flex-column overflow-scroll">
              <div className="d-flex justify-content-between">
                <p className="fw-semibold mb-4">Xếp hạng thành viên</p>
                <a href="">Xem tất cả</a>
              </div>
              <TableDashboard />
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="bg-light p-3 rounded-3 h-100 d-flex flex-column">
              <div className="d-flex justify-content-between">
                <p className="fw-semibold mb-4">Khách hàng</p>
                <a href="">Xem tất cả</a>
              </div>
              {listCustomer.map((item) => {
                return (
                  <div key={item.name}>
                    <CustomerDashboard info={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Dashboard;
