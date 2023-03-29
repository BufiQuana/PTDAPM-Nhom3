import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ASSETS } from "../../constants/ASSETS";
import { setValue } from "../../redux/reducers/NavbarSearch";
import Avatar from "../Avatar";
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
        <div className="me-3 position-relative">
          <img src={ASSETS.icBell} alt="" />
        </div>
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
