import * as React from "react";
import Template from "../../../components/Template";
import "./style.css";
import InputModal from "../../../components/InputModal";
import { ASSETS } from "../../../constants/ASSETS";
import { useSelector } from "react-redux";
import TableManagerFile from "../../../components/ManagerFile";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const ManagerFile = () => {
  const valueSearch = useSelector((state) => {
    return state.navbarSearch.value;
  });
  const listFile = [
    {
      id: "1",
      nameTL: "AAA",
      fileTL: "tài liệu.doc",
      status: "Hoàn Thành",
    },
    {
      id: "1",
      nameTL: "AAA",
      fileTL: "tài liệu.doc",
      status: "Đang thi hành",
    },
    {
      id: "1",
      nameTL: "AAA",
      fileTL: "tài liệu.doc",
      status: "Hoàn Thành",
    },
    {
      id: "1",
      nameTL: "AAA",
      fileTL: "tài liệu.doc",
      status: "Hoàn Thành",
    },
    {
      id: "1",
      nameTL: "AAA",
      fileTL: "tài liệu.doc",
      status: "Hoàn Thành",
    },
  ].filter((item) => {
    return item.nameTL.toLowerCase().includes(valueSearch.toLowerCase());
  });
  const [tailieu, settailieu] = React.useState({
    nameTL: "",
    fileTL: "",
    mota: "",
    the: "",
    phanloai: "",
    share: "",
    trangthai: "",
  });
  const [currentFile, setCurrentFile] = React.useState({
    nameTL: "Phát triển dự án phần mềm ",
    fileTL: "PTDAPM.doc",
    mota: "Là một môn học ngành công nghệ thông tin",
    the: "A",
    phanloai: "B",
    share: "@Duchai",
    trangthai: "Hoàn thành",
  });
  const [CTtailieu, setCTtailieu] = React.useState({
    nameTL: "Phát triển dự án phần mềm ",
    fileTL: "PTDAPM.doc",
    mota: "Là một môn học ngành công nghệ thông tin",
    the: "A",
    phanloai: "B",
    share: "@Duchai",
    trangthai: "Hoàn thành",
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
                  Danh Sách Tài Liệu
                </p>
                <div
                  className="mb-4 col-12 col-lg-3 col-xl-2 btn btn-primary text-nowrap"
                  data-bs-toggle="modal"
                  data-bs-target="#addThanhVien"
                >
                  <p>Tạo Tài Liệu</p>
                </div>
              </div>
              <TableManagerFile
                list={listFile}
                action={(item) => setCurrentFile(item)}
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
                Tạo Tài Liệu
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
                title="Tên Tài Liệu"
                value={tailieu.nameTL}
                action={(e) =>
                  settailieu({ ...tailieu, nameTL: e.target.value })
                }
              />

              <InputModal
                title="Tên File"
                value={tailieu.fileTL}
                action={(e) =>
                  settailieu({ ...tailieu, fileTL: e.target.value })
                }
              />

              <InputModal
                title="Mô Tả"
                value={tailieu.mota}
                action={(e) => settailieu({ ...tailieu, mota: e.target.value })}
              />

              <InputModal
                title="Thẻ"
                value={tailieu.the}
                action={(e) => settailieu({ ...tailieu, the: e.target.value })}
              />

              <InputModal
                title="Chia sẻ với"
                value={tailieu.share}
                action={(e) =>
                  settailieu({ ...tailieu, share: e.target.value })
                }
              />
              <InputModal
                title="Trạng Thái"
                value={tailieu.status}
                action={(e) =>
                  settailieu({ ...tailieu, status: e.target.value })
                }
              />
              <label>Phân Loại</label>
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
              <label>Đính kèm tập tin: </label>
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
                onClick={() => console.log(tailieu)}
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
                Chi Tiết Tài Liệu
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
                value={CTtailieu.id}
                action={(e) =>
                  setCTtailieu({
                    ...CTtailieu,
                    id: e.target.value,
                  })
                }
                disabled
              />
              <InputModal
                title="Tên Tài liệu"
                value={CTtailieu.nameTL}
                action={(e) =>
                  setCTtailieu({
                    ...CTtailieu,
                    nameCV: e.target.value,
                  })
                }
              />

              <InputModal
                title="Tên File"
                value={CTtailieu.fileTL}
                action={(e) =>
                  setCTtailieu({
                    ...CTtailieu,
                    fileTL: e.target.value,
                  })
                }
              />

              <InputModal
                title="Mô Tả"
                value={CTtailieu.mota}
                action={(e) =>
                  setCTtailieu({
                    ...CTtailieu,
                    mota: e.target.value,
                  })
                }
              />

              <InputModal
                title="Thẻ"
                value={CTtailieu.the}
                action={(e) =>
                  setCTtailieu({
                    ...CTtailieu,
                    the: e.target.value,
                  })
                }
              />

              <InputModal
                title="Trạng Thái"
                value={CTtailieu.phanloai}
                action={(e) =>
                  setCTtailieu({
                    ...CTtailieu,
                    phanloai: e.target.value,
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
                onClick={() => console.log(CTtailieu)}
              >
                Lưu thay đổi
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="editFile"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Sửa Tài Liệu
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
                value={currentFile.id}
                action={(e) =>
                  setCurrentFile({
                    ...currentFile,
                    id: e.target.value,
                  })
                }
                disabled
              />
              <InputModal
                title="Tên Tài liệu"
                value={currentFile.nameTL}
                action={(e) =>
                  setCurrentFile({
                    ...currentFile,
                    nameCV: e.target.value,
                  })
                }
              />

              <InputModal
                title="Tên File"
                value={currentFile.fileTL}
                action={(e) =>
                  setCurrentFile({
                    ...currentFile,
                    fileTL: e.target.value,
                  })
                }
              />

              <InputModal
                title="Mô Tả"
                value={currentFile.mota}
                action={(e) =>
                  setCurrentFile({
                    ...currentFile,
                    mota: e.target.value,
                  })
                }
              />

              <InputModal
                title="Thẻ"
                value={currentFile.the}
                action={(e) =>
                  setCurrentFile({
                    ...currentFile,
                    the: e.target.value,
                  })
                }
              />

              <InputModal
                title="Trạng Thái"
                value={currentFile.phanloai}
                action={(e) =>
                  setCurrentFile({
                    ...currentFile,
                    phanloai: e.target.value,
                  })
                }
              />
              <label>Phân Loại</label>
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
              <label>Đính kèm tập tin: </label>
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
                onClick={() => console.log(currentFile)}
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
              Bạn có chắc chắn xóa thời gian: {currentFile.date} có ID là:{" "}
              {currentFile.id}
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
                onClick={() => console.log(currentFile)}
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

export default ManagerFile;
