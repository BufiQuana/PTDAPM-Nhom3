import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { ASSETS } from "../../constants/ASSETS";

const Navbar2 = () => {
  const location = useLocation();

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

  const [currentActive, setCurrentActive] = React.useState(location.pathname);

  return (
    <div className="row g-0 h-100">
      {listSidebarItem.map((item) => {
        return (
          <Link
            to={item.href}
            key={item.title}
            onClick={() => {
              setCurrentActive(item.href);
            }}
            className="col-3 d-flex align-items-center justify-content-center border-end-light-red"
          >
            <img
              src={currentActive === item.href ? item.iconAcitve : item.icon}
              alt=""
              className="img-fluid"
            />
          </Link>
        );
      })}

      {/* <div className="col-3 d-flex align-items-center justify-content-center border-end-light-red">
        <img src={ASSETS.icHomeActive} alt="" className="img-fluid" />
      </div>
      <div className="col-3 d-flex align-items-center justify-content-center border-end-light-red">
        <img src={ASSETS.icInventory} alt="" className="img-fluid" />
      </div>
      <div className="col-3 d-flex align-items-center justify-content-center border-end-light-red">
        <img src={ASSETS.icReport} alt="" className="img-fluid" />
      </div>
      <div className="col-3 d-flex align-items-center justify-content-center">
        <img src={ASSETS.icSuppliers} alt="" className="img-fluid" />
      </div> */}
    </div>
  );
};

export default Navbar2;
