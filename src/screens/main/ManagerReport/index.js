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

  const listBaoCao = [
    {
      id: "1",
      task: "CV A",
      member: "NTH A",
      manager: "GV A",
      dateStart: "NGV A",
      dateEnd: "NHH A",
      completion: "TLHT A",
      state: "TT A",
      progress: "TD A",
    },
    {
      id: "2",
      task: "CV B",
      member: "NTH B",
      manager: "GV B",
      dateStart: "NGV B",
      dateEnd: "NHH B",
      completion: "TLHT B",
      state: "TT B",
      progress: "TD B",
    },
    {
      id: "3",
      task: "CV C",
      member: "NTH C",
      manager: "GV C",
      dateStart: "NGV C",
      dateEnd: "NHH C",
      completion: "TLHT C",
      state: "TT C",
      progress: "TD C",
    },
    {
      id: "4",
      task: "CV D",
      member: "NTH D",
      manager: "GV D",
      dateStart: "NGV D",
      dateEnd: "NHH D",
      completion: "TLHT D",
      state: "TT D",
      progress: "TD D",
    },
    {
      id: "5",
      task: "CV E",
      member: "NTH E",
      manager: "GV E",
      dateStart: "NGV E",
      dateEnd: "NHH E",
      completion: "TLHT E",
      state: "TT E",
      progress: "TD E",
    },
  ].filter((item) => {
    return item.task.toLowerCase().includes(valueSearch.toLowerCase());
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
                <TableManagerReport list={listBaoCao} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default ManagerReport;
