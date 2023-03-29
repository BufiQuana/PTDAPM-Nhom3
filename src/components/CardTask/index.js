import * as React from "react";
import { ASSETS } from "../../constants/ASSETS";
import Avatar from "../Avatar";
import "./style.css";

const CardTask = (props) => {
  const colorPriority =
    props.task.priority === "high"
      ? "border-primary"
      : props.task.priority === "medium"
      ? "border-success"
      : "border-warning";
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
              <h5 className="card-title pe-4">{props.task.title}</h5>
              <i
                className="fa fa-ellipsis fa-lg text-secondary"
                data-bs-toggle="modal"
                data-bs-target={`#modal${props.task.id}`}
              ></i>
            </div>
            <p className="card-text">{props.task.description}</p>
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
                {props.task.title}
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
                  <p>{props.task.description}</p>
                </div>
              </div>
              <div className="d-flex align-items-top mb-4">
                <i className="fa-regular fa-calendar me-2 mt-1"></i>
                <p className="me-2 text-nowrap">
                  Ngày hết hạn: {props.task.dateEnd}
                </p>
              </div>
              <div className="d-flex align-items-top mb-4">
                <i className="fa-regular fa-user me-2 mt-1"></i>
                <p className="me-2 text-nowrap">
                  Người làm: {props.task.assignee}
                </p>
              </div>
              <div className="d-flex align-items-top mb-2">
                <i className="fa-regular fa-comment me-2 mt-1"></i>
                <p className="me-2 text-nowrap">Bình luận </p>
              </div>
              {props.task.comments.map((item, i) => {
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
                />
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="btn btn-primary d-flex align-items-center"
                data-bs-dismiss="modal"
              >
                <i className="fa fa-angle-left me-2"></i>
                <p>Chuyển sang mục trước</p>
              </button>
              <button
                type="button"
                className="btn btn-primary d-flex align-items-center"
                data-bs-dismiss="modal"
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
