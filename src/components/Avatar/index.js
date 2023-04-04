import * as React from "react";
import { ASSETS } from "../../constants/ASSETS";
import "./style.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/Auth";
import { useNavigate } from "react-router-dom";

const Avatar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className={`d-none-mobile avatar ${props.className}`}>
      <img
        src={props.image || ASSETS.avatar}
        width="40"
        height="40"
        className="img-fluid rounded-circle"
        onClick={() => {
          if (!props.image) {
            dispatch(logout());
            navigate("/");
          }
        }}
        alt=""
      ></img>
    </div>
  );
};

export default Avatar;
