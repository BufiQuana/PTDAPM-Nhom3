import * as React from "react";
import { Link } from "react-router-dom";

const TableManagerReport = () => {
  return (
    <>
      <div className="w-100 overflow-scroll">
        <table
          className="table flex-fill color-5D6679 border-top"
          style={{ minWidth: 600 }}
        >
          <thead></thead>
          <tbody>
            <tr className="align-middle">
              <td scope="col">ID</td>
              <td scope="col">Công việc</td>
              <td scope="col">Người thực hiện</td>
              <td scope="col">Người giao việc</td>
              <td scope="col">Ngày giao việc</td>
              <td scope="col">Ngày hết hạn</td>
              <td scope="col">Tỷ lệ hoàn thành</td>
              <td scope="col">Trạng thái</td>
              <td scope="col">Tiến độ</td>
            </tr>
            {[...Array(10).keys()].map((item) => {
              return (
                <tr className="align-middle fw-semibold" key={item}>
                  <td className="text-nowrap" style={{ minWidth: 70 }}>
                    28717
                  </td>
                  <td className="text-nowrap" style={{ minWidth: 180 }}>
                    Quản lý dự án
                  </td>
                  <td className="text-nowrap" style={{ minWidth: 180 }}>
                    Bùi Trung Quân
                  </td>
                  <td className="text-nowrap" style={{ minWidth: 180 }}>
                    Bùi Trung Quân
                  </td>
                  <td className="text-nowrap" style={{ minWidth: 180 }}>
                    10/10/22
                  </td>
                  <td className="text-nowrap" style={{ minWidth: 180 }}>
                    11/12/22
                  </td>
                  <td className="text-nowrap" style={{ minWidth: 180 }}>
                    100%
                  </td>
                  <td className="text-nowrap" style={{ minWidth: 180 }}>
                    Chưa phê duyệt
                  </td>
                  <td className="text-nowrap" style={{ minWidth: 180 }}>
                    Đúng tiến độ
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="d-flex align-items-center justify-content-between text-secondary">
        <div className="btn border text-secondary">Previous</div>
        <small>Page 1 of 10</small>
        <div className="btn border text-secondary">Next</div>
      </div>
    </>
  );
};

export default TableManagerReport;
