import * as React from "react";

const DetailOverview = (props) => {
  return (
    <div className="px-4">
      <div className="mt-4">
        <i>Tên dự án: {props.overview?.name}</i>
      </div>
      <div className="mt-4">
        <i>Người quản lý: {props.overview?.createdBy}</i>
      </div>
      <div className="mt-4">
        <i>Mô tả dự án: {props.overview?.description}</i>
      </div>
      <div className="mt-4">
        <i>Ngày giao: {props.overview?.startDate}</i>
      </div>
      <div className="mt-4">
        <i>Ngày hết hạn dự kiến: {props.overview?.endDate}</i>
      </div>
      <div className="mt-4">
        <i>Ngân sách dự kiến: {props.overview?.budget}</i>
      </div>
      <div className="mt-4">
        <i>Độ ưu tiên: {props.overview?.priority}</i>
      </div>
      <div className="mt-4">
        <i>Trạng thái: {props.overview?.status}</i>
      </div>
    </div>
  );
};

export default DetailOverview;
