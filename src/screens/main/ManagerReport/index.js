import * as React from "react";
import { useSelector } from "react-redux";
import ListContentDashboard from "../../../components/Dashboard/ListContentDashboard";
import TableManagerReport from "../../../components/ManagerReport/TableManagerReport";
import Template from "../../../components/Template";
import { ASSETS } from "../../../constants/ASSETS";
import "./style.css";

const ManagerReport = () => {
  const valueSearch = useSelector((state) => {
    return state.navbarSearch.value;
  });

  const listThanhVien = [
    {
      id: "1",
      name: "A",
      address: "A@gmail.com",
      phone: "0123456789",
      point: "10",
      job: "BA",
    },
    {
      id: "2",
      name: "B",
      address: "B@gmail.com",
      phone: "0123456789",
      point: "9.5",
      job: "PO",
    },
    {
      id: "3",
      name: "C",
      address: "C@gmail.com",
      phone: "0123456789",
      point: "9",
      job: "Dev FE",
    },
    {
      id: "4",
      name: "D",
      address: "D@gmail.com",
      phone: "0123456789",
      point: "8.5",
      job: "Dev BE",
    },
    {
      id: "5",
      name: "E",
      address: "E@gmail.com",
      phone: "0123456789",
      point: "8",
      job: "Tester",
    },
  ].filter((item) => {
    return item.name.toLowerCase().includes(valueSearch.toLowerCase());
  });

  const listDuAn = [
    {
      icon: ASSETS.icBaoCao,
      content: "Tổng báo cáo",
      amount: 0,
    },
    {
      icon: ASSETS.icChuaDuyet,
      content: "Chưa phê duyệt",
      amount: 0,
    },
    {
      icon: ASSETS.icChamTienDo,
      content: "Chậm tiến độ",
      amount: 0,
    },
  ];
  return (
    <Template>
      <div className="container-fluid pt-4 px-32">
        <div className="row g-4">
          <div className="col-12 col-xl-12">
            <div className="bg-light p-3 rounded-3 h-100 d-flex flex-column">
              <p className="fw-semibold mb-4">Tổng quan báo cáo</p>
              <ListContentDashboard list={listDuAn} />
            </div>
          </div>

          <div className="col-12">
            <div className="bg-light p-3 rounded-3 h-100 d-flex flex-column">
              <p className="fw-semibold mb-4 text-nowrap">Danh sách báo cáo</p>
              <div className="overflow-scroll">
                <TableManagerReport />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default ManagerReport;
