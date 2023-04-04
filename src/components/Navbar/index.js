import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ASSETS } from "../../constants/ASSETS";
import { setValue } from "../../redux/reducers/NavbarSearch";
import Avatar from "../Avatar";
import Notification from "../Notification";
import "./style.css";

const Navbar = () => {
  const valueSearch = useSelector((state) => {
    return state.navbarSearch.value;
  });
  const dispatch = useDispatch();
  const location = useLocation();

  React.useEffect(() => {
    dispatch(setValue(""));
    Array.from(document.getElementsByClassName("modal show")).forEach(
      (element) => {
        element.classList.remove("show");
      }
    );
    Array.from(document.getElementsByClassName("modal-backdrop show")).forEach(
      (element) => {
        element.classList.remove("show");
        element.style.display = "none";
      }
    );
  }, [location]);

  const listNotification = [
    {
      id: "1",
      avatar: ASSETS.avatar,
      userSent: "Bùi Trung Quân",
      action: "vừa bình luận",
      content: "dự án A.",
      time: "5 phút trước",
      action2: true,
    },
    {
      id: "2",
      avatar: ASSETS.avatar,
      userSent: "Nguyễn Thị Thuý Lan",
      action: "vừa bình luận",
      content: "dự án B.",
      time: "10 phút trước",
      action2: false,
    },
    {
      id: "3",
      avatar: ASSETS.avatar,
      userSent: "Bùi Trung Quân",
      action: "vừa bình luận",
      content: "dự án A.",
      time: "5 phút trước",
      action2: true,
    },
    {
      id: "4",
      avatar: ASSETS.avatar,
      userSent: "Nguyễn Thị Thuý Lan",
      action: "vừa bình luận",
      content: "dự án B.",
      time: "10 phút trước",
      action2: false,
    },
    {
      id: "5",
      avatar: ASSETS.avatar,
      userSent: "Bùi Trung Quân",
      action: "vừa bình luận",
      content: "dự án A.",
      time: "5 phút trước",
      action2: true,
    },
    {
      id: "6",
      avatar: ASSETS.avatar,
      userSent: "Nguyễn Thị Thuý Lan",
      action: "vừa bình luận",
      content: "dự án B.",
      time: "10 phút trước",
      action2: false,
    },
  ];

  const [showNotification, setShowNotification] = React.useState(false);

  return (
    <div className="d-flex align-items-center justify-content-between ps-4 w-100 overflow-hidden">
      <div className="d-flex align-items-center input-search-wrapper ms-0 ms-lg-3">
        <img src={ASSETS.icSearch} width="24" height="24" alt="" />
        <input
          type="text"
          placeholder="Search"
          className="border-0 bg-transparent flex-fill ms-1 mb-1 text-truncate"
          value={valueSearch}
          onChange={(e) => {
            dispatch(setValue(e.target.value));
          }}
        />
      </div>
      <div className="d-flex align-items-center mx-3">
        <div
          className="me-3 position-relative"
          onClick={() => {
            setShowNotification(!showNotification);
          }}
        >
          <img src={ASSETS.icBell} alt="" />
        </div>
        {showNotification && (
          <>
            <i className="fa fa-2xl fa-caret-up position-absolute ic-caret-up"></i>
            <div className="position-absolute bg-light border notification-container overflow-scroll">
              {listNotification.map((item, i) => {
                return (
                  <div key={item.id}>
                    <Notification notification={item} />
                    {i !== listNotification.length - 1 && <hr />}
                  </div>
                );
              })}
            </div>
          </>
        )}
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
