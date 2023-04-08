import * as React from "react";
import { Link } from "react-router-dom";

const TableManagerProject = (props) => {
  return (
    <>
      <table
        className="table flex-fill color-5D6679 border-top"
        style={{ minWidth: 600 }}
      >
        <thead></thead>
        <tbody>
          <tr className="align-middle">
            <td scope="col">STT</td>
            <td scope="col">Tên dự án</td>
            <td scope="col">Người quản lý</td>
            <td scope="col">Ngân sách dự kiến</td>
            <td scope="col">Thời gian dự kiến</td>
            <td scope="col">Trạng thái</td>
            <td scope="col">Hoạt động</td>
          </tr>
          {props.list.map((item, i) => {
            return (
              <tr className="align-middle fw-semibold" key={item.id}>
                <td style={{ minWidth: 70 }}>{i + 1}</td>
                <td style={{ minWidth: 180 }}>{item.name}</td>
                <td style={{ minWidth: 180 }}>{item.createdBy}</td>
                <td style={{ minWidth: 130 }}>{item.budget}</td>
                <td style={{ minWidth: 130 }}>{item.startDate}</td>
                <td style={{ minWidth: 130 }} className="text-success">
                  {item.status}
                </td>
                <td style={{ minWidth: 100 }} className="">
                  <Link to={`/manager/project/${item.id}`} state={item}>
                    Chi tiết
                  </Link>
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
