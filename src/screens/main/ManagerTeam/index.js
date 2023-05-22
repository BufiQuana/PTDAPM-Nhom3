import * as React from "react";
import Template from "../../../components/Template";
import ListContentDashboard from "../../../components/Dashboard/ListContentDashboard";
import TableManagerTeam from "../../../components/ManagerTeam/TableManagerTeam";
import InputModal from "../../../components/InputModal";
import { ASSETS } from "../../../constants/ASSETS";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { setIsShow } from "../../../redux/reducers/Loading";
import { request } from "../../../api/config";

const ManagerTeam = () => {
  const valueSearch = useSelector((state) => {
    return state.navbarSearch.value;
  });

  const dispatch = useDispatch();

  const [listThanhVien, setListThanhVien] = React.useState([]);

  React.useEffect(() => {
    dispatch(setIsShow(true));
    request
      .get("/api/project/management/admin/user")
      .then((response) => {
        const list = response.data.data.list;

        const listFiltered = list.filter((item) => {
          const rolesCode = item.roles.map((role) => {
            return role.code;
          });
          if (rolesCode.includes("ADMIN")) return false;
          if (rolesCode.includes("MANAGER")) return false;
          if (rolesCode.includes("STAFF")) return true;
        });
        setListThanhVien(listFiltered);
        dispatch(setIsShow(false));
      })
      .catch((error) => {
        dispatch(setIsShow(false));
      });
  }, []);

  // const listThanhVien = [
  //   {
  //     id: "1",
  //     name: "A",
  //     address: "A@gmail.com",
  //     phone: "0123456789",
  //     point: "10",
  //     job: "BA",
  //   },
  //   {
  //     id: "2",
  //     name: "B",
  //     address: "B@gmail.com",
  //     phone: "0123456789",
  //     point: "9.5",
  //     job: "PO",
  //   },
  //   {
  //     id: "3",
  //     name: "C",
  //     address: "C@gmail.com",
  //     phone: "0123456789",
  //     point: "9",
  //     job: "Dev FE",
  //   },
  //   {
  //     id: "4",
  //     name: "D",
  //     address: "D@gmail.com",
  //     phone: "0123456789",
  //     point: "8.5",
  //     job: "Dev BE",
  //   },
  //   {
  //     id: "5",
  //     name: "E",
  //     address: "E@gmail.com",
  //     phone: "0123456789",
  //     point: "8",
  //     job: "Tester",
  //   },
  // ].filter((item) => {
  //   return item.name.toLowerCase().includes(valueSearch.toLowerCase());
  // });

  const [thanhvien, setThanhvien] = React.useState({
    email: "",
    fullName: "",
    address: "",
    phone: "",
    point: "",
    job: "",
  });

  const [currentThanhVien, setCurrentThanhVien] = React.useState({
    id: "DAS2321",
    name: "BTQ",
    address: "quannb2k1@gmail.com",
    phone: "0123456789",
    point: "9.5",
    job: "Dev",
  });

  const listDuAn = [
    {
      icon: ASSETS.icDone,
      content: "Số lượng",
      amount: listThanhVien.length,
    },
    {
      icon: ASSETS.icCurrent,
      content: "Đang tiến hành",
      amount: 0,
    },
    {
      icon: ASSETS.icIsComing,
      content: "Sắp bắt đầu",
      amount: 0,
    },
  ];

  const listCongViec = [
    {
      icon: ASSETS.icCreate,
      content: "Đã tạo",
      amount: 0,
    },
    {
      icon: ASSETS.icDone,
      content: "Đã hoàn thành",
      amount: 0,
    },
  ];

  return (
    <Template>
      <div className="container-fluid pt-4 px-32">
        <div className="row g-4">
          {/* <div className="col-12 col-xl-12">
            <div className="bg-light p-3 rounded-3 h-100 d-flex flex-column">
              <p className="fw-semibold mb-4">Tổng quan thành viên</p>
              <ListContentDashboard list={listDuAn} />
            </div>
          </div> */}
          {/* <div className="col-12 col-xl-4">
            <div className="bg-light p-3 rounded-3 h-100 d-flex flex-column">
              <p className="fw-semibold mb-4">Công việc</p>
              <ListContentDashboard list={listCongViec} />
            </div>
          </div> */}
          <div className="col-12">
            <div className="bg-light p-3 rounded-3 h-100 d-flex flex-column">
              <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
                <p className="fw-semibold mb-4 text-nowrap">
                  Thông tin thành viên
                </p>
                {/* <div
                  className="mb-4 col-12 col-lg-3 col-xl-2 btn btn-primary text-nowrap"
                  data-bs-toggle="modal"
                  data-bs-target="#addThanhVien"
                >
                  <p>Thêm thành viên</p>
                </div> */}
              </div>
              <TableManagerTeam
                list={listThanhVien}
                action={(item) => setCurrentThanhVien(item)}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="addThanhVien"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Thêm thành viên
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <InputModal
                title="Tên thành viên"
                value={thanhvien.name}
                action={(e) =>
                  setThanhvien({ ...thanhvien, name: e.target.value })
                }
              />

              <InputModal
                title="Địa chỉ"
                value={thanhvien.address}
                action={(e) =>
                  setThanhvien({ ...thanhvien, address: e.target.value })
                }
              />

              <InputModal
                title="Số điện thoại"
                value={thanhvien.phone}
                action={(e) =>
                  setThanhvien({ ...thanhvien, phone: e.target.value })
                }
              />

              <InputModal
                title="Số điểm"
                value={thanhvien.point}
                action={(e) =>
                  setThanhvien({ ...thanhvien, point: e.target.value })
                }
              />

              <InputModal
                title="Công việc"
                value={thanhvien.job}
                action={(e) =>
                  setThanhvien({ ...thanhvien, job: e.target.value })
                }
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Quay lại
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => console.log(thanhvien)}
              >
                Thêm
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="editThanhVien"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Sửa thành viên
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <InputModal
                title="ID"
                value={currentThanhVien.id}
                action={(e) =>
                  setCurrentThanhVien({
                    ...currentThanhVien,
                    id: e.target.value,
                  })
                }
                disabled
              />
              <InputModal
                title="Tên thành viên"
                value={currentThanhVien.name}
                action={(e) =>
                  setCurrentThanhVien({
                    ...currentThanhVien,
                    name: e.target.value,
                  })
                }
              />

              <InputModal
                title="Địa chỉ"
                value={currentThanhVien.address}
                action={(e) =>
                  setCurrentThanhVien({
                    ...currentThanhVien,
                    address: e.target.value,
                  })
                }
              />

              <InputModal
                title="Số điện thoại"
                value={currentThanhVien.phone}
                action={(e) =>
                  setCurrentThanhVien({
                    ...currentThanhVien,
                    phone: e.target.value,
                  })
                }
              />

              <InputModal
                title="Số điểm"
                value={currentThanhVien.point}
                action={(e) =>
                  setCurrentThanhVien({
                    ...currentThanhVien,
                    point: e.target.value,
                  })
                }
              />

              <InputModal
                title="Công việc"
                value={currentThanhVien.job}
                action={(e) =>
                  setCurrentThanhVien({
                    ...currentThanhVien,
                    job: e.target.value,
                  })
                }
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Quay lại
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => console.log(currentThanhVien)}
              >
                Lưu thay đổi
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="deleteThanhVien"
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
              Bạn có chắc chắn xoá thành viên {currentThanhVien.name} có ID là{" "}
              {currentThanhVien.id}
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
                onClick={() => console.log(currentThanhVien)}
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

export default ManagerTeam;
