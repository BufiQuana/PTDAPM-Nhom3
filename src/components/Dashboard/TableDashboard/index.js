import * as React from "react";

const TableDashboard = () => {
  return (
    <table
      className="table flex-fill color-5D6679 border-top"
      style={{ minWidth: 600 }}
    >
      <thead></thead>
      <tbody>
        <tr className="align-middle">
          <td scope="col">Tên</td>
          <td scope="col">Số dự án tham gia</td>
          <td scope="col">Số dự án hoàn thành</td>
          <td scope="col">Số sao</td>
        </tr>
        <tr className="align-middle">
          <td>N.T.T.Lan</td>
          <td>30</td>
          <td>30</td>
          <td>10</td>
        </tr>
        <tr className="align-middle">
          <td>Đ.H.Đoan</td>
          <td>25</td>
          <td>22</td>
          <td>8</td>
        </tr>
        <tr className="align-middle">
          <td className="border-0">B.T.Quân</td>
          <td className="border-0">20</td>
          <td className="border-0">15</td>
          <td className="border-0">7</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableDashboard;
