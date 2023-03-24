import * as React from "react";
import Template from "../../../components/Template";
import "./style.css";

const Newresource = () => {
  return (
    <Template>
      <div className="container-fluid pt-4 px-32">
        <h2 class="h2">Tạo Tài Nguyên</h2>
        <div class="form-tn">
          <form>
            <div class="form-group row">
              <label
                for="colFormLabelSm"
                class="col-sm-2 col-form-label col-form-label-sm"
              >
                Tên tài nguyên
              </label>
              <div class="col-sm-10">
                <input
                  type="tài nguyên"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder=""
                />
              </div>
              <label
                for="colFormLabelSm"
                class="col-sm-2 col-form-label col-form-label-sm"
              >
                Tên dự án
              </label>
              <div class="col-sm-10">
                <input
                  type="tài nguyên"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder=""
                />
              </div>
              <label
                for="colFormLabelSm"
                class="col-sm-2 col-form-label col-form-label-sm"
              >
                Mô tả
              </label>
              <div class="col-sm-10">
                <input
                  type="tài nguyên"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder=""
                />
              </div>
              <label
                for="colFormLabelSm"
                class="col-sm-2 col-form-label col-form-label-sm"
              >
                Số lượng
              </label>
              <div class="col-sm-10">
                <input
                  type="tài nguyên"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder=""
                />
              </div>
              <label
                for="colFormLabelSm"
                class="col-sm-2 col-form-label col-form-label-sm"
              >
                Trạng thái
              </label>
              <div class="col-sm-10">
                <input
                  type="tài nguyên"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder=""
                />
              </div>
              <label
                for="colFormLabelSm"
                class="col-sm-2 col-form-label col-form-label-sm"
              >
                Giá thành
              </label>
              <div class="col-sm-10">
                <input
                  type="tài nguyên"
                  class="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder=""
                />
              </div>

              {/* <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">tài liệu</span>
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
              </div> */}
            </div>
          </form>
        </div>

        <div class="btn-primary">
          {" "}
          <button type="button" class="btn btn-primary btn-sm">
            Tạo
          </button>
          <button type="button" class="btn btn-secondary btn-sm">
            Hủy
          </button>
        </div>
      </div>
    </Template>
  );
};

export default Newresource;
