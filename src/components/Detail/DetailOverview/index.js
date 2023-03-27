import * as React from "react";

const DetailOverview = () => {
  const currentDuAnDetail = {
    manager: "Quản lý A",
    description: "Mô tả A",
    dateStart: "Ngày A",
    dateEnd: "Ngày B",
    budget: "Ngân sách A",
    process: "Quá trình A",
    image: "Ảnh A",
  };

  return (
    <div className="px-4">
      <div className="mt-4">
        <i>Người quản lý: {currentDuAnDetail.manager}</i>
      </div>
      <div className="mt-4">
        <i>Mô tả dự án: {currentDuAnDetail.description}</i>
      </div>
      <div className="mt-4">
        <i>Ngày giao: {currentDuAnDetail.dateStart}</i>
      </div>
      <div className="mt-4">
        <i>Ngày hết hạn dự kiến: {currentDuAnDetail.dateEnd}</i>
      </div>
      <div className="mt-4">
        <i>Ngân sách dự kiến: {currentDuAnDetail.budget}</i>
      </div>
      <div className="mt-4">
        <i>Quá trình phát triển dự án: {currentDuAnDetail.process}</i>
      </div>
      <div className="mt-4">
        <i>Ảnh: {currentDuAnDetail.image}</i>
      </div>
    </div>
  );
};

export default DetailOverview;
