import * as React from "react";
import { Link } from "react-router-dom";
import Template from "../../../components/Template";

const ManagerResource = () => {
  const listTaiNguyen = [
    {
      id: "1",
      project: "Quản lý dự án",
      name: "Tài nguyên A",
    },
    {
      id: "2",
      project: "Quản lý dự án",
      name: "Tài nguyên B",
    },
    {
      id: "3",
      project: "Quản lý dự án",
      name: "Tài nguyên C",
    },
    {
      id: "4",
      project: "Quản lý dự án",
      name: "Tài nguyên D",
    },
    {
      id: "5",
      project: "Quản lý dự án",
      name: "Tài nguyên E",
    },
  ];

  const [currentTaiNguyen, setCurrentTaiNguyen] = React.useState({
    id: "",
    project: "",
    name: "",
  });

  return (
    <Template>
      <div className="container-fluid pt-4 px-32">
        <div className="bg-light p-3 rounded-3 h-100 d-flex flex-column">
          <h2 className="h2">Danh sách tài nguyên</h2>
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
              {listTaiNguyen.map((item) => {
                return (
                  <tr className="align-middle fw-semibold" key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.project}</td>
                    <td>{item.name}</td>
                    <td>
                      <button type="button" className="btn btn-success">
                        <Link to="/Detail_TN" className="text">
                          chi tiết
                        </Link>
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger "
                        data-bs-toggle="modal"
                        data-bs-target="#deleteTaiNguyen"
                        onClick={() => {
                          setCurrentTaiNguyen(item);
                        }}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-center">
          <div className="btn-primary btn">
            <Link to="/manager/resource/add" className="text">
              Tạo tài nguyên
            </Link>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="deleteTaiNguyen"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-block">
              <h1
                className="modal-title fs-5 text-center"
                id="exampleModalLabel"
              >
                Xoá thành viên
              </h1>
            </div>
            <div className="modal-body">
              Bạn có chắc chắn xoá tài nguyên{" "}
              {currentTaiNguyen.name.toLowerCase()} có ID là{" "}
              {currentTaiNguyen.id}
            </div>
            <div className="modal-footer justify-content-evenly">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Quay lại
              </button>
              <button
                type="button"
                className="btn btn-danger"
                // onClick={() => console.log(currentThanhVien)}
              >
                Xoá
              </button>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
export default ManagerResource;
