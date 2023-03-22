import React from "react";

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
import ManagerTeam from "../screens/main/ManagerTeam";
import ManagerTime from "../screens/main/ManagerTime";
import NotFound from "../screens/main/NotFound";
import ProjectDetail from "../screens/main/ProjectDetail";
import ManagerTeamDelete from "../screens/main/ManagerTeamDelete";
import ManagerTeamEdit from "../screens/main/ManagerTeamEdit";
import Setting from "../screens/main/Setting";

export default () => {
  const username = useSelector((state) => {
    return state.auth.username;
  });
  return (
    <Router>
      {!username ? (
        <Routes>
          <Route path={"/"} element={<Login />} />
        </Routes>
      ) : (
        <Routes>
          <Route path={"/"} element={<Dashboard />} />
          <Route path={"/notfound"} element={<NotFound />} />
          <Route path={"/manager/project"} element={<ManagerProject />} />
          <Route path={"/manager/team"} element={<ManagerTeam />} />
          <Route path={"/manager/time"} element={<ManagerTime />} />
          <Route path={"/manager/project/detail"} element={<ProjectDetail />} />
          <Route path={"/manager/team/delete"} element={<ManagerTeamDelete />} />
          <Route path={"/manager/team/edit"} element={<ManagerTeamEdit />} />
          <Route path={"/setting"} element={<Setting />} />
          <Route path={"*"} element={<Navigate to={"/notfound"} />} />
        </Routes>
      )}
    </Router>
  );
};
