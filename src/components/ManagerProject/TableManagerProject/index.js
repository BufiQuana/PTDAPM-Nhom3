import * as React from "react";
import { Link } from "react-router-dom";

const TableManagerProject = () => {
  return (
    <>
      <table
        className="table flex-fill color-5D6679 border-top"
        style={{ minWidth: 600 }}
      >
        <thead></thead>
        <tbody>
          <tr className="align-middle">
            <td scope="col">ID</td>
            <td scope="col">Tên dự án</td>
            <td scope="col">Người quản lý</td>
            <td scope="col">Ngân sách dự kiến</td>
            <td scope="col">Thời gian dự kiến</td>
            <td scope="col">Trạng thái</td>
            <td scope="col">Hoạt động</td>
          </tr>
          {[...Array(10).keys()].map((item) => {
            return (
              <tr className="align-middle fw-semibold" key={item}>
                <td style={{ minWidth: 70 }}>28717</td>
                <td style={{ minWidth: 180 }}>Quản lý dự án</td>
                <td style={{ minWidth: 180 }}>Bùi Trung Quân</td>
                <td style={{ minWidth: 130 }}>70000đ</td>
                <td style={{ minWidth: 130 }}>11/12/22</td>
                <td style={{ minWidth: 130 }} className="text-success">
                  Out for delivery
                </td>
                <td style={{ minWidth: 100 }} className="">
                  <Link to="/manager/project/detail">Chi tiết</Link>
                  {/* <a href="/manager/project/detail">Chi tiết</a> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-flex align-items-center justify-content-between text-secondary">
        <div className="btn border text-secondary">Previous</div>
        <small>Page 1 of 10</small>
        <div className="btn border text-secondary">Next</div>
      </div>
    </>
  );
};

export default TableManagerProject;
