import * as React from "react";
import { Link } from "react-router-dom";

const TableManagerTeam = (props) => {
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
              <td scope="col">Tên thành viên</td>
              <td scope="col">Địa chỉ</td>
              <td scope="col">Số điện thoại</td>
              <td scope="col">Số điểm</td>
              <td scope="col">Công việc</td>
              <td scope="col"></td>
              <td scope="col"></td>
            </tr>
            {props.list.map((item) => {
              return (
                <tr className="align-middle fw-semibold" key={item.id}>
                  <td style={{ minWidth: 70 }}>{item.id}</td>
                  <td style={{ minWidth: 180 }}>{item.name}</td>
                  <td style={{ minWidth: 180 }}>{item.address}</td>
                  <td style={{ minWidth: 130 }}>{item.phone}</td>
                  <td style={{ minWidth: 130 }}>{item.point}</td>
                  <td style={{ minWidth: 80 }}>{item.job}</td>
                  <td style={{ minWidth: 80 }} className="text-success">
                    {/* <Link to="/manager/team/edit">Sửa</Link> */}

                    <button
                      type="button"
                      className="btn text-primary fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#editThanhVien"
                      onClick={() => props.action(item)}
                    >
                      Sửa
                    </button>
                  </td>
                  <td style={{ minWidth: 100 }} className="">
                    {/* <Link to="/manager/team/delete">Xóa</Link> */}
                    <button
                      type="button"
                      className="btn text-danger fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#deleteThanhVien"
                      onClick={() => props.action(item)}
                    >
                      Xoá
                    </button>
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

export default TableManagerTeam;
