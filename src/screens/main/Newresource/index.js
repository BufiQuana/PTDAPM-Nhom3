import * as React from "react";
import { useNavigate } from "react-router-dom";
import Template from "../../../components/Template";
import "./style.css";

const Newresource = () => {
  const navigate = useNavigate();
  return (
    <Template>
      <div className="container-fluid pt-4 px-32">
        <h2 className="h2">Tạo Tài Nguyên</h2>
        <div className="form-tn">
          <form>
            <div className="form-group row">
              <label
                htmlFor="colFormLabelSm"
                className="col-sm-2 col-form-label col-form-label-sm"
              >
                Tên tài nguyên
              </label>
              <div className="col-sm-10">
                <input
                  type="tài nguyên"
                  className="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder=""
                />
              </div>
              <label
                htmlFor="colFormLabelSm"
                className="col-sm-2 col-form-label col-form-label-sm"
              >
                Tên dự án
              </label>
              <div className="col-sm-10">
                <input
                  type="tài nguyên"
                  className="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder=""
                />
              </div>
              <label
                htmlFor="colFormLabelSm"
                className="col-sm-2 col-form-label col-form-label-sm"
              >
                Mô tả
              </label>
              <div className="col-sm-10">
                <input
                  type="tài nguyên"
                  className="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder=""
                />
              </div>
              <label
                htmlFor="colFormLabelSm"
                className="col-sm-2 col-form-label col-form-label-sm"
              >
                Số lượng
              </label>
              <div className="col-sm-10">
                <input
                  type="tài nguyên"
                  className="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder=""
                />
              </div>
              <label
                htmlFor="colFormLabelSm"
                className="col-sm-2 col-form-label col-form-label-sm"
              >
                Trạng thái
              </label>
              <div className="col-sm-10">
                <input
                  type="tài nguyên"
                  className="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder=""
                />
              </div>
              <label
                htmlFor="colFormLabelSm"
                className="col-sm-2 col-form-label col-form-label-sm"
              >
                Giá thành
              </label>
              <div className="col-sm-10">
                <input
                  type="tài nguyên"
                  className="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder=""
                />
              </div>

              {/* <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">tài liệu</span>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile01"
                  />
                  <label className="custom-file-label" htmlFor="inputGroupFile01">
                    Choose file
                  </label>
                </div>
              </div> */}
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <div
            onClick={() => navigate(-1)}
            className="btn-newresource btn btn-primary btn-sm me-3"
          >
            Tạo
          </div>
          <div
            onClick={() => navigate(-1)}
            className="btn-newresource btn btn-secondary btn-sm ms-3"
          >
            Hủy
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Newresource;
