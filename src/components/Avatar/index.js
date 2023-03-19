import * as React from "react";
import { ASSETS } from "../../constants/ASSETS";
import "./style.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/Auth";

const Avatar = () => {
  const dispatch = useDispatch();
  return (
    <div className="d-none-mobile avatar">
      <img
        src={ASSETS.avatar}
        width="40"
        height="40"
        className="img-fluid rounded-circle"
        onClick={() => {
          dispatch(logout());
        }}
        alt=""
      ></img>
    </div>
  );
};

export default Avatar;
