import * as React from "react";
import Template from "../../../components/Template";
import ProjectDashboardStaff from "../../../components/ProjectDashboardStaff";

const DashboardStaff = () => {
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

  return (
    <Template>
      <div className="container-fluid pt-4 px-32">
        <div className="bg-light rounded-3 py-3">
          <p className="mb-3 ms-3">Danh sách công việc được phân công</p>
          {listDuAn.map((item, i) => {
            return <ProjectDashboardStaff project={item} key={i} />;
          })}
        </div>
      </div>
    </Template>
  );
};

export default DashboardStaff;
