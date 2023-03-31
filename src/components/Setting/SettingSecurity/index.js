import * as React from "react";
import "./style.css";

const SettingSecurity = () => {
  return (
    <div className="bg-white p-3 rounded-3 h-100 d-flex flex-column">
      <div className="d-flex align-items-center border-bottom pb-4 mb-4">
        <div className="">
          <p>Địa chỉ email</p>
          <p className="text-muted">
            Địa chỉ email đã liên kết với tài khoản của bạn.
          </p>
        </div>
        <div className="ms-auto text-end">
          <p>quannb2k1@gmail.com</p>
          <p className="text-danger">Chưa xác minh</p>
        </div>
        <div className="ms-4 border p-2 rounded-pill px-3">
          <span>Edit</span>
          <i className="fa-regular fa-pen-to-square ms-2"></i>
        </div>
      </div>
      <div className="d-flex align-items-center border-bottom pb-4 mb-4">
        <div className="">
          <p>Mật khẩu</p>
          <p className="text-muted">
            Đặt mật khẩu duy để bảo vệ tài khoản của bạn
          </p>
        </div>
        <div className="ms-auto border p-2 rounded-pill px-3">
          <span>Thay đổi mật khẩu</span>
        </div>
      </div>
      <div className="d-flex align-items-center border-bottom pb-4 mb-4">
        <div className="">
          <p>Mật khẩu cấp 2</p>
          <p className="text-muted">
            Làm cho tài khoản của bạn thêm an toàn hơn.Cùng với mật khẩu của
            bạn, bạn sẽ cần phải nhập một mã xác nhận.
          </p>
        </div>
        <div className="ms-auto">
          <div className="form-check form-switch form-switch-lg">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center border-bottom pb-4 mb-4">
        <div className="">
          <p>Xoá tài khoản</p>
          <p className="text-muted">
            Tài khoản của bạn sẽ bị xoá bỏ hoàn toàn trong hệ thống.
          </p>
        </div>
        <div className="ms-auto">
          <div className="btn border-danger text-danger border rounded-pill px-3">
            Xoá
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingSecurity;
