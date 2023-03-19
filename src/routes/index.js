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
import NotFound from "../screens/main/NotFound";

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
          <Route path={"*"} element={<Navigate to={"/notfound"} />} />
        </Routes>
      )}
    </Router>
  );
};
