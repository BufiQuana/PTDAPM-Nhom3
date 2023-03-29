import * as React from "react";
import { useSelector } from "react-redux";
import InputModal from "../../../components/InputModal";
import Template from "../../../components/Template";

const Setting = () => {
  const auth = useSelector((state) => {
    console.log(state.auth);
    return state.auth;
  });

  const listContent = [
    {
      icon: "user",
      title: "Thông tin cá nhân",
    },
    {
      icon: "palette",
      title: "Giao diện",
    },
    {
      icon: "lock",
      title: "Bảo mật",
    },
    {
      icon: "bell",
      title: "Thông báo",
    },
  ];

  const [currentContent, setCurrentContent] =
    React.useState("Thông tin cá nhân");

  return (
    <Template>
      <div className="container-fluid pt-4 px-32">
        <div className="row g-4">
          <div className="col-12 col-xl-12">
            <div className="bg-primary p-3 rounded-3 h-100 d-flex flex-column">
              <div className="d-flex justify-content-evenly align-items-center">
                {listContent.map((item) => {
                  return (
                    <div
                      key={item.title}
                      className={`btn ${
                        item.title == currentContent
                          ? "bg-white"
                          : "btn-secondary"
                      }`}
                      onClick={() => {
                        setCurrentContent(item.title);
                      }}
                    >
                      <i className={`fa fa-${item.icon} me-2`}></i>
                      <span>{item.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="col-12 col-xl-12">
            <div className="bg-white p-3 rounded-3 h-100 d-flex flex-column">
              <InputModal
                title="ID"
                value={auth.user_id}
                action={(e) => {}}
                disabled
              />
              <InputModal
                title="Họ và tên"
                value={auth.fullName}
                action={(e) => {}}
                disabled
              />
              <InputModal
                title="Email"
                value={auth.email}
                action={(e) => {}}
                disabled
              />
              <InputModal
                title="Vai trò"
                value={auth.roles}
                action={(e) => {}}
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Setting;
