import * as React from "react";
import SettingAppearance from "../../../components/Setting/SettingAppearance";
import SettingInfo from "../../../components/Setting/SettingInfo";
import SettingNotification from "../../../components/Setting/SettingNotification";
import SettingSecurity from "../../../components/Setting/SettingSecurity";
import Template from "../../../components/Template";

const Setting = () => {
  const listContent = [
    {
      icon: "user",
      title: "Thông tin cá nhân",
      component: <SettingInfo />,
    },
    {
      icon: "palette",
      title: "Giao diện",
      component: <SettingAppearance />,
    },
    {
      icon: "lock",
      title: "Bảo mật",
      component: <SettingSecurity />,
    },
    {
      icon: "bell",
      title: "Thông báo",
      component: <SettingNotification />,
    },
  ];

  const [currentContent, setCurrentContent] = React.useState({
    icon: "user",
    title: "Thông tin cá nhân",
    component: <SettingInfo />,
  });

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
                        item.title === currentContent.title
                          ? "bg-white"
                          : "btn-secondary"
                      }`}
                      onClick={() => {
                        setCurrentContent(item);
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

          <div className="">{currentContent.component}</div>
        </div>
      </div>
    </Template>
  );
};

export default Setting;
