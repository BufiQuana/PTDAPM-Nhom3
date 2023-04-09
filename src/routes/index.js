import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Login from "../screens/auth/Login";
import DemoRedux from "../screens/DemoRedux";
import Dashboard from "../screens/main/Dashboard";
import ManagerProject from "../screens/main/ManagerProject";
import ManagerReport from "../screens/main/ManagerReport";
import ManagerTeam from "../screens/main/ManagerTeam";
import ManagerTime from "../screens/main/ManagerTime";
import NotFound from "../screens/main/NotFound";
import ProjectDetail from "../screens/main/ProjectDetail";
import Setting from "../screens/main/Setting";
import Newresource from "../screens/main/Newresource";
import Detail_TN from "../screens/main/Detail_TN";
import Time from "../screens/main/Time";
import ManagerFile from "../screens/main/ManagerFile";
// import DetailTime from "../screens/main/DetailTime";
import ManagerResource from "../screens/main/ManagerResource";
import ManagerCustomer from "../screens/main/ManagerCustomer";
import DashboardStaff from "../screens/mainStaff/DashboardStaff";
import ReportStaff from "../screens/mainStaff/ReportStaff";
import ManagerBudget from "../screens/main/ManagerBudget";

// import Manageresource from "../screens/main/Manageresource";
// Newresource

export default () => {
  const token = useSelector((state) => {
    return state.auth.token;
  });

  const role = useSelector((state) => {
    if (state.auth.roles.includes("ROLE_ADMIN")) {
      return "admin";
    }
    if (state.auth.roles.includes("ROLE_MANAGER")) {
      return "manager";
    }
    if (state.auth.roles.includes("ROLE_STAFF")) {
      return "staff";
    }

    return "admin";
  });

  const tokenWithoutQuote = token.slice(1, -1);
  return (
    <Router>
      {tokenWithoutQuote ? (
        role === "admin" ? (
          <Routes>
            <Route path={"/"} element={<Dashboard />} />
            <Route path={"/notfound"} element={<NotFound />} />
            <Route path={"/manager/project"} element={<ManagerProject />} />
            <Route path={"/manager/team"} element={<ManagerTeam />} />
            <Route path={"/manager/time"} element={<ManagerTime />} />
            <Route path={"/manager/budget"} element={<ManagerBudget />} />
            <Route path={"/manager/project/:id"} element={<ProjectDetail />} />
            <Route path={"/setting"} element={<Setting />} />

            <Route path={"/manager/report"} element={<ManagerReport />} />
            <Route path={"/manager/customer"} element={<ManagerCustomer />} />
            <Route path={"/manager/resource"} element={<ManagerResource />} />
            <Route path={"/manager/resource/add"} element={<Newresource />} />
            <Route path={"/Detail_TN"} element={<Detail_TN />} />
            <Route path={"/Time"} element={<Time />} />
            <Route path={"/ManagerFile"} element={<ManagerFile />} />
            {/* <Route path={"/DetailTime"} element={<DetailTime />} /> */}

            {/* <Route path={"/Manageresource"} element={<Manageresource/>} /> */}

            <Route path={"*"} element={<Navigate to={"/notfound"} />} />
          </Routes>
        ) : (
          <Routes>
            <Route path={"/"} element={<DashboardStaff />} />
            <Route path={"/manager/project/:id"} element={<ProjectDetail />} />
            <Route path={"/staff/report"} element={<ReportStaff />} />
            <Route path={"/notfound"} element={<NotFound />} />
            <Route path={"/setting"} element={<Setting />} />

            <Route path={"*"} element={<Navigate to={"/notfound"} />} />
          </Routes>
        )
      ) : (
        <Routes>
          <Route path={"*"} element={<Login />} />
        </Routes>
      )}
    </Router>
  );
};
