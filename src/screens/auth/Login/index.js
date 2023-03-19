import * as React from "react";
import { ASSETS } from "../../../constants/ASSETS";
import "./style.css";
import HR from "../../../components/HR";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/reducers/Auth";

const Login = () => {
  const dispatch = useDispatch();
  const userTest = [
    {
      username: "btq2001",
      password: "123456",
    },
    {
      username: "bufiquana",
      password: "123456",
    },
    {
      username: "test",
      password: "123456",
    },
  ];

  const [state, setState] = React.useState({
    username: "",
    password: "",
    isRemember: false,
  });
  const [messageValidate, setMessageValidate] = React.useState({
    messageUsername: "",
    messagePassword: "",
  });

  const [isHidden, setIsHidden] = React.useState(true);

  const checkValidate = () => {
    setMessageValidate({
      messageUsername: state.username ? "" : "Hãy nhập tên đăng nhâp",
      messagePassword: state.password ? "" : "Hãy nhập mật khẩu",
    });
    let userCheck = userTest.filter((item) => {
      return (
        item.username === state.username && item.password === state.password
      );
    });
    console.log(userCheck);
    if (userCheck.length) {
      dispatch(login(state.username));
    }

    if (state.username && state.password) {
      setMessageValidate({
        messageUsername: "Sai tài khoản hoặc mật khẩu hãy nhập lại",
        messagePassword: "",
      });
      setState({ ...state, username: "", password: "" });
    }
  };

  return (
    <div className="d-block d-md-flex">
      <div className="vh-100 w-50 d-none d-md-flex flex-column align-items-center justify-content-center">
        <img
          src={ASSETS.logo}
          alt=""
          className="img-fluid"
          width={250}
          height={250}
        />
        <p className="color-009ED8 fs-1 ms-4">Quản lý dự án</p>
      </div>
      <div className="flex-grow-1 vh-100 d-flex justify-content-center align-items-center px-4">
        <div className="login-wrapper d-flex flex-column align-items-center">
          <img
            src={ASSETS.logo}
            className="img-fluid"
            width={48}
            height={48}
            alt=""
          />
          <p className="h3 fw-semibold">Quản lý dự án trực tuyến</p>
          <p className="color-667085">Xin chào! Xin hãy đăng nhập tài khoản.</p>
          <div className="mt-32 w-100">
            <p className="text-grey">Tên đăng nhập</p>
            <input
              type="text"
              placeholder="Nhập tên đăng nhập"
              className="px-2 w-100 input-dang-nhap mt-2"
              onChange={(e) => {
                setState({ ...state, username: e.target.value });
              }}
              value={state.username}
            />
            <div
              className={`text-danger mt-1 px-1 ${
                messageValidate.messageUsername ? "visible" : "invisible"
              }`}
            >
              <i className="fa-solid fa-circle-exclamation me-1"></i>
              <span>{messageValidate.messageUsername}</span>
            </div>
          </div>
          <div className="w-100">
            <p className="text-grey">Mật khẩu</p>
            <div className="position-relative">
              <input
                type={isHidden ? "password" : "text"}
                placeholder="••••••••"
                className="px-2 w-100 input-dang-nhap mt-2"
                onChange={(e) => {
                  setState({ ...state, password: e.target.value });
                }}
                value={state.password}
              />
              <i
                onClick={() => setIsHidden(!isHidden)}
                className={`fa-solid fa-eye${
                  isHidden ? "" : "-slash"
                } position-absolute ic-eye`}
              ></i>
            </div>
            <div
              className={`text-danger mt-1 px-1 ${
                messageValidate.messagePassword ? "visible" : "invisible"
              }`}
            >
              <i className="fa-solid fa-circle-exclamation me-1"></i>
              <span>{messageValidate.messagePassword}</span>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="d-flex align-items-center">
              <i
                onClick={() => {
                  setState({ ...state, isRemember: !state.isRemember });
                }}
                className={`fa-${
                  state.isRemember
                    ? "solid text-primary fa-square-check"
                    : "regular fa-square"
                }  fa-lg`}
              ></i>
              <p className="text-grey fw-light ms-2">Nhớ tài khoản</p>
            </div>
            {/* <p className="fw-semibold ms-2 text-primary">Quên mật khẩu?</p> */}
          </div>
          <div
            onClick={() => {
              checkValidate();
            }}
            className="btn btn-primary w-100 my-md-3 my-3 btnDangNhap d-inline-flex align-items-center justify-content-center fs-5"
          >
            Đăng nhập
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
