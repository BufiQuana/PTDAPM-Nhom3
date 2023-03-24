import { Colors } from "chart.js";
import * as React from "react";
import { Link } from "react-router-dom";
import Template from "../../../components/Template";

const ManagerTime = () => {
  return (
    <Template>
      <div className="container-fluid pt-4 px-32">
        <h2 class="h2">Danh sách tài nguyên</h2>
        <table
          className="table flex-fill color-5D6679 border-top"
          // style={{ minWidth: 300 }}
        >
          <thead></thead>
          <tbody>
            <tr className="align-middle">
              <td scope="col">ID</td>
              <td scope="col">Tên dự án</td>
              <td scope="col">Tên tài nguyên</td>
              <td scope="col">Hoạt Động</td>
              <td scope="col">Delete</td>
            </tr>
            {[...Array(7).keys()].map((item) => {
              return (
                <tr className="align-middle fw-semibold" key={item}>
                  <td>1</td>
                  <td>Quản lý dự án</td>
                  <td>Tài nguyên Rừng</td>
                  <td>
                    <button type="button" class="btn btn-success">
                      <Link to="/Detail_TN" class="text">
                        chi tiết
                      </Link>
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger "
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      xóa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div class="btn-success">
        <button type="button" class="btn btn-success">
          <Link to="/Newresource" class="text">
            Tạo tài nguyên
          </Link>
        </button>
      </div>
    </Template>
  );
};
export default ManagerTime;
