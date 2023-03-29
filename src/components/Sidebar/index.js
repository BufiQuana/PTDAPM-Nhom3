import * as React from "react";
import { useDispatch } from "react-redux";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { ASSETS } from "../../constants/ASSETS";
import { logout } from "../../redux/reducers/Auth";
import { setValue } from "../../redux/reducers/NavbarSearch";
import "./style.css";

const Sidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const listSidebarItem = [
    {
      title: "Trang chủ",
      icon: ASSETS.icHome,
      iconAcitve: ASSETS.icHomeActive,
      href: "/",
    },
    {
      title: "Quản lý dự án",
      icon: ASSETS.icSuppliers,
      iconAcitve: ASSETS.icSuppliersActive,
      href: "/manager/project",
    },
    {
      title: "Quản lý thời gian",
      icon: ASSETS.icReport,
      iconAcitve: ASSETS.icReportActive,
      href: "/manager/time",
    },
    {
      title: "Quản lý thành viên",
      icon: ASSETS.icInventory,
      iconAcitve: ASSETS.icInventoryActive,
      href: "/manager/team",
    },
  ];

  const listSidebarItemBelow = [
    {
      title: "Cài đặt",
      icon: ASSETS.icSetting,
      iconAcitve: ASSETS.icSettingActive,
      href: "/setting",
    },
    {
      title: "Log out",
      icon: ASSETS.icLogOut,
      href: "/",
    },
  ];

  const [currentActive, setCurrentActive] = React.useState(location.pathname);

  return (
    <div className="h-100 d-flex flex-column">
      <a
        href="/"
        className="sidebar-header d-flex align-items-center ps-5 mb-2"
      >
        <img src={ASSETS.logo} width={48} height={48} alt="" />
        <p className="text-primary h4 ms-2">Nhóm 3</p>
      </a>
      <div className="d-flex flex-column justify-content-between flex-fill">
        <div className="d-flex flex-column">
          {listSidebarItem.map((item) => {
            return (
              <Link
                to={item.href}
                onClick={() => {
                  setCurrentActive(item.href);
                }}
                className={`sidebar-item d-flex align-items-center ps-5 color-5D6679 ${
                  currentActive === item.href && "text-primary text-semibold"
                }`}
                key={item.title}
              >
                <img
                  src={
                    currentActive === item.href ? item.iconAcitve : item.icon
                  }
                  alt=""
                  width={24}
                  height={24}
                />
                <p className="ms-3">{item.title}</p>
              </Link>
            );
          })}
        </div>

        <div className="d-flex flex-column">
          {listSidebarItemBelow.map((item) => {
            return (
              <Link
                to={item.href}
                onClick={() => {
                  setCurrentActive(item.href);
                  if (item.title === "Log out") {
                    dispatch(logout());
                    navigate("/");
                  }
                }}
                className={`sidebar-item d-flex align-items-center ps-5 color-5D6679 ${
                  currentActive === item.href &&
                  item.title !== "Log out" &&
                  "text-primary text-semibold"
                }`}
                key={item.title}
              >
                <img
                  src={
                    currentActive === item.href && item.title !== "Log out"
                      ? item.iconAcitve
                      : item.icon
                  }
                  alt=""
                  width={24}
                  height={24}
                />
                <p className="ms-3">{item.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
