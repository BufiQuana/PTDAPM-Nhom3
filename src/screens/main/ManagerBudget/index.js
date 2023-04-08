import * as React from "react";
import Template from "../../../components/Template";
import { Link } from "react-router-dom";
import ListContentDashboard from "../../../components/Dashboard/ListContentDashboard";
import { ASSETS } from "../../../constants/ASSETS";
import TableManagerBudget from "../../../components/TableManagerBudget";
import { useSelector } from "react-redux";

const ManagerBudget = () => {
  const valueSearch = useSelector((state) => {
    return state.navbarSearch.value;
  });

  const listDuAn = [
    {
      icon: ASSETS.icDone,
      content: "Ngân sách",
      amount: 0,
    },
    {
      icon: ASSETS.icCurrent,
      content: "Tổng chi phí",
      amount: 0,
    },
    {
      icon: ASSETS.icIsComing,
      content: "Số loại chi phí",
      amount: 0,
    },
  ];

  const listCost = [
    {
      id: "1",
      name: "CP A",
      price: "DG A",
      amount: "SL A",
      total: "TT A",
      dateAdd: "NT A",
    },
    {
      id: "2",
      name: "CP B",
      price: "DG B",
      amount: "SL B",
      total: "TT B",
      dateAdd: "NT B",
    },
    {
      id: "3",
      name: "CP C",
      price: "DG C",
      amount: "SL C",
      total: "TT C",
      dateAdd: "NT C",
    },
    {
      id: "4",
      name: "CP D",
      price: "DG D",
      amount: "SL D",
      total: "TT D",
      dateAdd: "NT D",
    },
    {
      id: "5",
      name: "CP E",
      price: "DG E",
      amount: "SL E",
      total: "TT E",
      dateAdd: "NT E",
    },
  ].filter((item) => {
    return item.name.toLowerCase().includes(valueSearch.toLowerCase());
  });

  return (
    <Template>
      <div className="container-fluid pt-4 px-32">
        <div className="row g-4">
          <div className="col-12 col-xl-12">
            <div className="bg-light p-3 rounded-3 h-100 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center">
                <p className="fw-semibold mb-4">Quản lý ngân sách</p>
              </div>
              <ListContentDashboard list={listDuAn} />
            </div>
          </div>
          <div className="col-12">
            <div className="bg-light p-3 rounded-3 h-100 d-flex flex-column">
              <div className="d-flex align-items-center mb-4">
                <p className="fw-semibold text-nowrap">Chi phí</p>
                <div className="btn btn-primary ms-auto">Tạo mới chi phí</div>
                <div className="btn border ms-3">
                  <i className="fa fa-sliders me-2"></i>
                  <span>Lọc</span>
                </div>
              </div>
              <div className="overflow-scroll">
                <TableManagerBudget list={listCost} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default ManagerBudget;
