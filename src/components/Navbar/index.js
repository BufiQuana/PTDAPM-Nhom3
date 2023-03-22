import * as React from "react";
import { ASSETS } from "../../constants/ASSETS";
import Avatar from "../Avatar";
import "./style.css";

const Navbar = () => {
  return (
    <div className="d-flex align-items-center justify-content-between ps-4 w-100 overflow-hidden">
      <div className="d-flex align-items-center input-search-wrapper ms-0 ms-lg-3">
        <img src={ASSETS.icSearch} width="24" height="24" alt="" />
        <input
          type="text"
          placeholder="Search"
          className="border-0 bg-transparent flex-fill ms-1 mb-1 text-truncate"
        />
      </div>
      <div className="d-flex align-items-center mx-3">
        <div className="me-3 position-relative">
          <img src={ASSETS.icBell} alt="" />
          {/* <div className="position-fixed bg-primary wrapper-notification mt-2">
            a
          </div> */}
        </div>
        <Avatar />
      </div>
    </div>
  );
};

export default Navbar;
