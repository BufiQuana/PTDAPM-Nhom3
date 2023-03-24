import * as React from "react";
import Template from "../../../components/Template";
import "./style.css";
import { Link } from "react-router-dom";

const Detail_TN = () => {
  return (
    <Template>
      <div className="container-fluid pt-4 px-32">
        <h2 class="detail-title">Chi Tiết Tài Nguyên</h2>
        <div class="detail-content">
          <table class="table">
            <tbody>
              <tr>
                <td>Tên tài nguyên</td>
                <td>Tài nguyên rừng</td>
              </tr>
              <tr>
                <td>Tên dự án</td>
                <td>Dự án bảo vệ, xây dựng rừng nguyên sinh</td>
              </tr>
              <tr>
                <td>Mô tả</td>
                <td>
                  Khi xây dựng rừng, các bước thực hiện thông thường bao gồm:
                  Lập kế hoạch: Xác định mục đích xây dựng rừng, loại cây trồng
                  phù hợp và định vị vị trí cụ thể. Chuẩn bị đất: Đánh bằng cách
                  cày đất, đắp đất và bón phân để chuẩn bị cho việc trồng cây.
                </td>
              </tr>
              <tr>
                <td>Số lượng</td>
                <td>22</td>
              </tr>
              <tr>
                <td>Trạng thái</td>
                <td>Sắp khởi công</td>
              </tr>
              <tr>
                <td>Giá thành</td>
                <td>1.879.000.000đ</td>
              </tr>
            </tbody>
          </table>
          {/* <form>
            <div class="form-group row">
              <label
                for="colFormLabelSm"
                class="col-sm-3 col-form-label col-form-label-sm"
              >
                Tên tài nguyên
              </label>
              <div class="col-sm-9">
                <p>Tài nguyên Rừng</p>
              </div>
            </div>
            <div class="form-group row">
              <label
                for="colFormLabelSm"
                class="col-sm-3 col-form-label col-form-label-sm"
              >
                Tên dự án
              </label>
              <div class="col-sm-9">
                <p>Trồng Rừng</p>
              </div>
            </div>
            <div class="form-group row">
              <label
                for="colFormLabelSm"
                class="col-sm-3 col-form-label col-form-label-sm"
              >
                Mô Tả
              </label>
              <div class="col-sm-9">
                <p>
                  Khi xây dựng rừng, các bước thực hiện thông thường bao gồm:
                  Lập kế hoạch: Xác định mục đích xây dựng rừng, loại cây trồng
                  phù hợp và định vị vị trí cụ thể. Chuẩn bị đất: Đánh bằng cách
                  cày đất, đắp đất và bón phân để chuẩn bị cho việc trồng cây.
                </p>
              </div>
            </div>
            <div class="form-group row">
              <label
                for="colFormLabelSm"
                class="col-sm-3 col-form-label col-form-label-sm"
              >
                Số lượng
              </label>
              <div class="col-sm-9">
                <p>22</p>
              </div>
            </div>
            <div class="form-group row">
              <label
                for="colFormLabelSm"
                class="col-sm-3 col-form-label col-form-label-sm"
              >
                Trạng thái
              </label>
              <div class="col-sm-9">
                <p>Sắp khởi công</p>
              </div>
            </div>
            <div class="form-group row">
              <label
                for="colFormLabelSm"
                class="col-sm-3 col-form-label col-form-label-sm"
              >
                Giá thành
              </label>
              <div class="col-sm-9">
                <p>1.984.000.000</p>
              </div>
            </div>
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
          </form> */}
          <button type="button" class="btn btn-primary">
            <Link to="/manager/time" class="text">
              Quay lại
            </Link>
          </button>
        </div>
      </div>
    </Template>
  );
};

export default Detail_TN;
