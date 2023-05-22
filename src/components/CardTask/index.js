import * as React from "react";
import { ASSETS } from "../../constants/ASSETS";
import Avatar from "../Avatar";
import "./style.css";
import { useSelector } from "react-redux";
import { request } from "../../api/config";

const CardTask = (props) => {
  const auth = useSelector((state) => {
    return state.auth;
  });

  const colorPriority =
    props.task.priority === "HIGH_LEVEL"
      ? "border-primary"
      : props.task.priority === "AVARAGE_LEVEL"
      ? "border-success"
      : "border-warning";

  const dateEnd = new Date(props.task.createdDate).toLocaleDateString("en-US");

  const [inputComment, setInputComment] = React.useState({
    projectTaskId: props.task.id,
    userId: auth.user_id,
    title: "title",
    content: "",
  });

  let description = props.task.description.replaceAll(/<\/?[^>]+(>|$)/gi, "");

  const [taskComments, setTaskComments] = React.useState(
    props.task.taskComment
  );

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setTaskComments([...taskComments, inputComment]);
      request
        .post(
          "https://server.6figurespos.com/gateway/api/project/management/admin/taskComment",
          inputComment
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      setInputComment({ ...inputComment, content: "" });
    }
  };

  return (
    <>
      <div className={`border-start border-5 mb-2 ${colorPriority}`}>
        <div className="card rounded-0 position-relative border-top-0">
          {props.task.image && (
            <>
              <img
                src={props.task.image}
                className="card-img-top"
                alt="..."
              ></img>
              <hr className="p-0 m-0" />
            </>
          )}

          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="card-title pe-4">{props.task.taskName}</h5>
              <i
                className="fa fa-ellipsis fa-lg text-secondary"
                data-bs-toggle="modal"
                data-bs-target={`#modal${props.task.id}`}
              ></i>
            </div>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id={`modal${props.task.id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {props.task.taskName}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex align-items-top mb-4">
                <i className="fa fa-align-left me-2 mt-1"></i>
                <p className="me-2 text-nowrap">Mô tả công việc: </p>
                <div className="">
                  <p>{description}</p>
                </div>
              </div>
              <div className="d-flex align-items-top mb-4">
                <i className="fa-regular fa-calendar me-2 mt-1"></i>
                <p className="me-2 text-nowrap">Ngày hết hạn: {dateEnd}</p>
              </div>
              <div className="d-flex align-items-top mb-4">
                <i className="fa-regular fa-user me-2 mt-1"></i>
                <p className="me-2 text-nowrap">
                  Người làm: {props.task.createdBy}
                </p>
              </div>
              <div className="d-flex align-items-top mb-2">
                <i className="fa-regular fa-comment me-2 mt-1"></i>
                <p className="me-2 text-nowrap">Bình luận </p>
              </div>
              {taskComments?.map((item, i) => {
                return (
                  <div className="d-flex align-items-center mb-2" key={i}>
                    <Avatar image={item.userAvatar} />
                    <input
                      type="text"
                      className="flex-fill inputComment ms-2 ps-2"
                      value={item.content}
                      readOnly
                    />
                  </div>
                );
              })}
              <div className="d-flex align-items-center">
                <Avatar image={ASSETS.avatar} />
                <input
                  type="text"
                  className="flex-fill inputComment ms-2 ps-2"
                  placeholder="Viết bình luận"
                  onChange={(e) => {
                    setInputComment({
                      ...inputComment,
                      content: e.target.value,
                    });
                  }}
                  value={inputComment.content}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className={`btn d-flex align-items-center ${
                  props.disabledPrev ? "btn-secondary" : "btn-primary"
                }`}
                data-bs-dismiss="modal"
                disabled={props.disabledPrev}
                onClick={() => {
                  props.changeTask(props.task, true);
                  console.log("Prev");
                }}
              >
                <i className="fa fa-angle-left me-2"></i>
                <p>Chuyển sang mục trước</p>
              </button>
              <button
                type="button"
                className={`btn d-flex align-items-center ${
                  props.disabledNext ? "btn-secondary" : "btn-primary"
                }`}
                data-bs-dismiss="modal"
                disabled={props.disabledNext}
                onClick={() => {
                  props.changeTask(props.task, false);
                  console.log("Next");
                }}
              >
                <p>Chuyển sang mục sau</p>
                <i className="fa fa-angle-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTask;
