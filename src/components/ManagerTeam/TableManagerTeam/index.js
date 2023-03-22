import * as React from "react";
import { Link } from "react-router-dom";

const TableManagerTeam = () => {
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
            <td scope="col">Tên thành viên</td>
            <td scope="col">Email</td>
            <td scope="col">Số điện thoại</td>
            <td scope="col">Số điểm</td>
            <td scope="col"></td>
            <td scope="col"></td>
          </tr>
          {[...Array(10).keys()].map((item) => {
            return (
              <tr className="align-middle fw-semibold" key={item}>
                <td style={{ minWidth: 70 }}>28717</td>
                <td style={{ minWidth: 180 }}>Nguyễn Văn Đức</td>
                <td style={{ minWidth: 180 }}>nvduc@gmail.com</td>
                <td style={{ minWidth: 130 }}>09812313</td>
                <td style={{ minWidth: 130 }}>5</td>
                <td style={{ minWidth: 130 }} className="text-success">
                  <Link to="/manager/team/edit">Sửa</Link>
                </td>
                <td style={{ minWidth: 100 }} className="">
                  <Link to="/manager/team/delete">Xóa</Link>
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

export default TableManagerTeam;
