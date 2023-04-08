import * as React from "react";
import { ASSETS } from "../../../constants/ASSETS";
import "./style.css";
import HR from "../../../components/HR";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/reducers/Auth";
import { AUTH_API } from "../../../api/Auth";
import { request } from "../../../api/config";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();

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

  const onLogin = async () => {
    if (!state.username || !state.password) {
      setMessageValidate({
        messageUsername: state.username ? "" : "Hãy nhập tên đăng nhâp",
        messagePassword: state.password ? "" : "Hãy nhập mật khẩu",
      });
    } else {
      console.log("login");
      request
        .post(
          "/api/project/management/user/login",
          {
            username: state.username,
            grant_type: "password",
            password: state.password,
            scope: "openid",
            refresh_token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX25hbWUiOiJ0dWFuYmVvdm5uQGdtYWlsLmNvbSIsInNjb3BlIjpbIm9wZW5pZCJdLCJyb2xlcyI6WyJST0xFX0FETUlOIl0sImF0aSI6IjVkMGVlMWM1LWYyYWEtNGQzNy1hYWQ5LTNkODQ1NGVmYTZjMiIsImZ1bGxOYW1lIjoidHVhbmJlb3ZubkBnbWFpbC5jb20iLCJleHAiOjE2MjgzODg4OTIsImF1dGhvcml0aWVzIjpbIlJPTEVfQURNSU4iXSwianRpIjoiNzJjYjc1MDktNWRlOC00ZDI2LWFhMDUtZmFlNGQxYmQyMmY0IiwiZW1haWwiOiJ0dWFuYmVvdm5uQGdtYWlsLmNvbSIsImNsaWVudF9pZCI6ImNsaWVudF9pZCJ9.X6OGPbl7-TA4fQG0RTilASWWebL5XzDdPeoZDcgqCNA",
          },
          {
            headers: {
              Authorization: "Basic Y2xpZW50X2lkOmNsaWVudF9zZWNyZXQ=",
            },
          }
        )
        .then((response) => {
          console.log("login success");
          dispatch(login(response.data));
          console.log(response.data);
        })
        .catch((error) => {
          console.log("login error",error);
          console.log(error);
          if (state.username && state.password) {
            setMessageValidate({
              messageUsername: "Sai tài khoản hoặc mật khẩu hãy nhập lại",
              messagePassword: "",
            });
            setState({ ...state, username: "", password: "" });
          }
        });
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
            // onClick={() => {
            //   onLogin();
            // }}
            onClick={onLogin}
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
