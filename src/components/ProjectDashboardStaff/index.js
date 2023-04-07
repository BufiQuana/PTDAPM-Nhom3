import * as React from "react";
import { ASSETS } from "../../constants/ASSETS";
import "./style.css";

const ProjectDashboardStaff = (props) => {
  const project = props.project;

  const listTaskTodo = [
    {
      id: "1",
      title: "Task A",
      description: "Description A",
      dateEnd: "Date A",
      assignee: "Person A",
      priority: "high",
      image: ASSETS.imageCat,
      comments: [
        {
          userId: "1",
          userAvatar: ASSETS.avatar,
          content: "Comment A",
        },
        {
          userId: "2",
          userAvatar: ASSETS.avatar,
          content: "Comment B",
        },
      ],
    },
    {
      id: "2",
      title: "Task B",
      description: "Description B",
      dateEnd: "Date B",
      assignee: "Person B",
      priority: "medium",
      image: null,
      comments: [],
    },
  ];

  const [isExpend, setIsExpend] = React.useState(true);

  return (
    <div className="bg-E9EFFE rounded-2">
      <div className="fw-bold border border-primary rounded-2 p-3 d-flex justify-content-between align-items-center">
        <p>Dự án: {project.name}</p>
        <i
          onClick={() => setIsExpend(!isExpend)}
          className={`fa ${isExpend ? "fa-minus" : "fa-plus"} me-2`}
        ></i>
      </div>
      {isExpend &&
        listTaskTodo.map((item, i) => {
          const colorPriority =
            item.priority === "high"
              ? "border-primary"
              : item.priority === "medium"
              ? "border-success"
              : "border-warning";

          return (
            <div className="row px-0 mx-0" key={i}>
              <div
                className={`col-1 d-flex align-items-center justify-content-center border-5 border-end py-3 ${colorPriority}`}
              >
                <div className="btn btn-primary rounded-circle">
                  <i className="fa fa-angle-right"></i>
                </div>
              </div>
              <div
                className={`col-11 py-2 d-flex flex-column justify-content-between ${
                  i !== listTaskTodo.length - 1 &&
                  "border-bottom border-secondary"
                }`}
              >
                <div className="d-flex justify-content-between pe-3 align-items-center">
                  <p className="fw-bold">{item.title}</p>
                  <small>{item.dateEnd}</small>
                </div>
                <p className="text-muted text-truncate">{item.description}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProjectDashboardStaff;
