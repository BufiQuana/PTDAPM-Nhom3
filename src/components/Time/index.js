import * as React from "react";
import { Link } from "react-router-dom";
// import { ASSETS } from "../../../constants/ASSETS";

const TableManagerTime = (props) => {
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
              <td scope="col">
                <i class="fas fa-calendar-alt"></i> Thời gian
              </td>
              <td scope="col">
                <i class="fas fa-user-md"></i> Tên Công Việc
              </td>
              <td scope="col">
                <i class="fab fa-r-project"></i> Tên Dự Án
              </td>
              {/* <td scope="col">
                <i class="fas fa-user-md"></i> Người thực hiện
              </td> */}
              <td scope="col">Trạng thái</td>
              <td scope="col">Tổng Quan</td>
              <td scope="col">
                <i class="fas fa-user-edit"></i> Update
              </td>
              <td scope="col">
                <i class="fas fa-trash"></i> Delete
              </td>
            </tr>
            {props.list.map((item) => {
              return (
                <tr className="align-middle fw-semibold" key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.date}</td>
                  <td>{item.nameCV}</td>
                  <td>{item.nameDA}</td>
                  {/* <td>{item.namePT}</td> */}
                  <td>{item.status}</td>
                  <td style={{ minWidth: 100 }} className="">
                    {/* <Link to="/manager/team/delete">Xóa</Link> */}
                    <button
                      type="button"
                      className="btn text-success fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#detail"
                      onClick={() => props.action(item)}
                    >
                      Chi tiết
                    </button>
                  </td>
                  <td className="text-success">
                    {/* <Link to="/manager/team/edit">Sửa</Link> */}
                    <button
                      type="button"
                      className="btn text-primary fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#editTime"
                      onClick={() => props.action(item)}
                    >
                      <i class="fas fa-pencil"></i>
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
                      <i class="fas fa-trash-alt"></i>
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

export default TableManagerTime;
