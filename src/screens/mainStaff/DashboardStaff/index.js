import * as React from "react";
import Template from "../../../components/Template";
import ProjectDashboardStaff from "../../../components/ProjectDashboardStaff";
import { setIsShow } from "../../../redux/reducers/Loading";
import { request } from "../../../api/config";
import { useSelector, useDispatch } from "react-redux";

const DashboardStaff = () => {
  const dispatch = useDispatch();
  const listDuAn = [
    {
      name: "a",
      tasks: [
        {
          title: "a",
          content: "a",
        },
      ],
    },
    {
      name: "b",
      tasks: [
        {
          title: "b",
          content: "b",
        },
      ],
    },
    {
      name: "c",
      tasks: [
        {
          title: "c",
          content: "c",
        },
      ],
    },
  ];

  React.useEffect(() => {
    dispatch(setIsShow(true));
    request
      .get("/api/project/management/staff/project")
      .then((response) => {
        console.log(response.data.data.list);
        dispatch(setIsShow(false));
      })
      .catch((error) => {
        dispatch(setIsShow(false));
      });
  }, []);

  return (
    <Template>
      <div className="container-fluid pt-4 px-32">
        <div className="bg-light rounded-3 pt-3">
          <p className="mb-3 ms-3 fw-bold">
            Danh sách công việc được phân công
          </p>
          {listDuAn.map((item, i) => {
            return <ProjectDashboardStaff project={item} key={i} />;
          })}
        </div>
      </div>
    </Template>
  );
};

export default DashboardStaff;
