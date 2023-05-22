import * as React from "react";
import Template from "../../../components/Template";
import InputModal from "../../../components/InputModal";

const ReportStaff = () => {
  return (
    <Template>
      <div className="container-fluid pt-4 px-32">
        <div className="bg-light rounded-3 py-3">
          <p className="mb-3 ms-3 fw-bold">Báo cáo công việc</p>
          <div className="px-3">
            <InputModal
              title="Ngày báo cáo"
              value={new Date().toLocaleDateString("en-US")}
              action={(e) => {}}
              disabled
            />

            <InputModal
              title="Bạn đã hoàn thành những công việc gì?"
              value={""}
              action={(e) => {}}
              placeholder={"Nhập công việc"}
            />

            <InputModal
              title="Bạn chưa hoàn thành những công việc gì?"
              value={""}
              action={(e) => {}}
              placeholder={"Nhập công việc"}
            />

            <InputModal
              title="Bạn có gặp vấn đề hoặc thách thức gì trong công việc?"
              value={""}
              action={(e) => {}}
              placeholder={"Nhập vấn đề hoặc thách thức"}
            />

            <InputModal
              title="Bạn có kế hoạch làm gì trong tương lai?"
              value={""}
              action={(e) => {}}
              placeholder={"Nhập kế hoạch"}
            />

            <InputModal
              title="Bạn có ý kiến gì?"
              value={""}
              action={(e) => {}}
              placeholder={"Nhập ý kiến"}
            />
            <div className="text-end">
              <div className="btn me-3 col-2 text-primary">Xoá form</div>
              <div className="btn btn-primary col-2">Gửi</div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default ReportStaff;
