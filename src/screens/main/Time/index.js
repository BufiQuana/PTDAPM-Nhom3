import * as React from "react";
import Template from "../../../components/Template";
import "./style.css";
import InputModal from "../../../components/InputModal";
import { ASSETS } from "../../../constants/ASSETS";
import { useSelector } from "react-redux";
import TableManagerTime from "../../../components/Time";

const Time = () => {
  const valueSearch = useSelector((state) => {
    return state.navbarSearch.value;
  });
  const listTime = [
    {
      id: "1",
      date: "may 1, 2023-->may 29, 2023",
      nameCV: "Kế toán",
      nameDA: "Dự án A",
      namePT: "A",
      status: "Thi hành",
    },
    {
      id: "2",
      date: "may 1, 2023-->may 29, 2023",
      nameCV: "Kế toán",
      nameDA: "Dự án B",
      namePT: "A",
      status: "Thi hành",
    },
    {
      id: "3",
      date: "may 1, 2023-->may 29, 2023",
      nameCV: "Kế toán",
      nameDA: "Dự án C",
      namePT: "A",

      status: "Thi hành",
    },
    {
      id: "4",
      date: "may 1, 2023-->may 29, 2023",
      nameCV: "Kế toán",
      nameDA: "Dự án D",
      namePT: "A",

      status: "Thi hành",
    },
    {
      id: "5",
      date: "may 1, 2023-->may 29, 2023",
      nameCV: "Kế toán",
      nameDA: "Dự án E",
      namePT: "A",
      status: "Thi hành",
    },
  ].filter((item) => {
    return item.nameCV.toLowerCase().includes(valueSearch.toLowerCase());
  });
  const [thoigian, setthoigian] = React.useState({
    nameCV: "",
    nameDA: "",
    namePT: "",
    status: "",
    date_start: "",
    date_end: "",
    mota: "",
    list: "",
  });
  const [currentTime, setCurrentTime] = React.useState({
    nameCV: "HAHA",
    nameDA: "AAS",
    namePT: "AAAA",
    mota: "CCCC",
    status: "Đang thi hành",
    date_start: "29/3/2023",
    date_end: "30/4/2023",
    list: "Loại 1",
  });
  const [Dtthoigian, setDtthoigian] = React.useState({
    ID: "1",
    nameCV: "CV A",
    nameDA: "DA A",
    namePT: "PT A",
    status: "Đang hoạt động",
    date_start: "29/3/2023",
    date_end: "30/4/2023",
    mota: "Là một dự án tiềm năng",
    list: "Loại 1",
  });

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
                  Thông tin Thời gian
                </p>
                <div
                  className="mb-4 col-12 col-lg-3 col-xl-2 btn btn-primary text-nowrap"
                  data-bs-toggle="modal"
                  data-bs-target="#addThanhVien"
                >
                  <p>Tạo Thời Gian</p>
                </div>
              </div>
              <TableManagerTime
                list={listTime}
                action={(item) => setCurrentTime(item)}
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
                Tạo Thời Gian
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
                title="Tên Công Việc"
                value={thoigian.nameCV}
                action={(e) =>
                  setthoigian({ ...thoigian, nameCV: e.target.value })
                }
              />

              <InputModal
                title="Tên Dự Án"
                value={thoigian.nameDA}
                action={(e) =>
                  setthoigian({ ...thoigian, nameDA: e.target.value })
                }
              />

              <InputModal
                title="Người Thực Hiện"
                value={thoigian.namePT}
                action={(e) =>
                  setthoigian({ ...thoigian, namePT: e.target.value })
                }
              />

              <InputModal
                title="Thời gian bắt đầu"
                value={thoigian.date_start}
                action={(e) =>
                  setthoigian({ ...thoigian, date_start: e.target.value })
                }
              />
              <InputModal
                title="Thời gian kết thúc"
                value={thoigian.date_end}
                action={(e) =>
                  setthoigian({ ...thoigian, date_end: e.target.value })
                }
              />

              <InputModal
                title="Trạng Thái"
                value={thoigian.status}
                action={(e) =>
                  setthoigian({ ...thoigian, status: e.target.value })
                }
              />
              <InputModal
                title="Mô tả"
                value={thoigian.status}
                action={(e) =>
                  setthoigian({ ...thoigian, mota: e.target.value })
                }
              />
              <label>Nhập List</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">
                    Lựa chọn
                  </label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <label>Chọn file</label>
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">Upload</span>
                </div>
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    id="inputGroupFile01"
                  />
                  <label class="custom-file-label" for="inputGroupFile01">
                    Choose file
                  </label>
                </div>
              </div>
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
                onClick={() => console.log(thoigian)}
              >
                Thêm
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="detail"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Chi Tiết Thời Gian
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
                value={Dtthoigian.id}
                action={(e) =>
                  setDtthoigian({
                    ...Dtthoigian,
                    id: e.target.value,
                  })
                }
                disabled
              />
              <InputModal
                title="Tên Công Việc"
                value={Dtthoigian.nameCV}
                action={(e) =>
                  setDtthoigian({
                    ...Dtthoigian,
                    nameCV: e.target.value,
                  })
                }
              />

              <InputModal
                title="Tên Dự Án"
                value={Dtthoigian.nameDA}
                action={(e) =>
                  setDtthoigian({
                    ...Dtthoigian,
                    nameDA: e.target.value,
                  })
                }
              />

              <InputModal
                title="Người Thi Hành"
                value={Dtthoigian.namePT}
                action={(e) =>
                  setDtthoigian({
                    ...Dtthoigian,
                    namePT: e.target.value,
                  })
                }
              />

              <InputModal
                title="Thời Gian Bắt Đầu"
                value={Dtthoigian.date_start}
                action={(e) =>
                  setDtthoigian({
                    ...Dtthoigian,
                    date_start: e.target.value,
                  })
                }
              />

              <InputModal
                title="Thời Gian Kết Thúc"
                value={Dtthoigian.date_end}
                action={(e) =>
                  setDtthoigian({
                    ...Dtthoigian,
                    date_end: e.target.value,
                  })
                }
              />
              <InputModal
                title="Mô Tả"
                value={Dtthoigian.mota}
                action={(e) =>
                  setDtthoigian({
                    ...Dtthoigian,
                    mota: e.target.value,
                  })
                }
              />
              <InputModal
                title="Loại"
                value={Dtthoigian.list}
                action={(e) =>
                  setDtthoigian({
                    ...Dtthoigian,
                    list: e.target.value,
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
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="editTime"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Sửa Thời Gian
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
                value={currentTime.id}
                action={(e) =>
                  setCurrentTime({
                    ...currentTime,
                    id: e.target.value,
                  })
                }
                disabled
              />
              <InputModal
                title="Tên Công Việc"
                value={currentTime.nameCV}
                action={(e) =>
                  setCurrentTime({
                    ...currentTime,
                    nameCV: e.target.value,
                  })
                }
              />

              <InputModal
                title="Tên Dự Án"
                value={currentTime.nameDA}
                action={(e) =>
                  setCurrentTime({
                    ...currentTime,
                    nameDA: e.target.value,
                  })
                }
              />

              <InputModal
                title="Người Thực Hiện"
                value={currentTime.namePT}
                action={(e) =>
                  setCurrentTime({
                    ...currentTime,
                    namePT: e.target.value,
                  })
                }
              />

              <InputModal
                title="Thời Gian Bắt Đầu"
                value={currentTime.date_start}
                action={(e) =>
                  setCurrentTime({
                    ...currentTime,
                    date_start: e.target.value,
                  })
                }
              />

              <InputModal
                title="Thời Gian Kết Thúc"
                value={currentTime.date_end}
                action={(e) =>
                  setCurrentTime({
                    ...currentTime,
                    date_end: e.target.value,
                  })
                }
              />
              <InputModal
                title="Mô Tả"
                value={currentTime.mota}
                action={(e) =>
                  setCurrentTime({
                    ...currentTime,
                    mota: e.target.value,
                  })
                }
              />
              <InputModal
                title="Loại"
                value={currentTime.list}
                action={(e) =>
                  setCurrentTime({
                    ...currentTime,
                    list: e.target.value,
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
                onClick={() => console.log(currentTime)}
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
                Xoá Thời Gian
              </h1>
            </div>
            <div className="modal-body">
              Bạn có chắc chắn xóa thời gian: {currentTime.date} có ID là:{" "}
              {currentTime.id}
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
                onClick={() => console.log(currentTime)}
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

export default Time;
