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
        // src={props.image || ASSETS.avatar}
        src="https://images.unsplash.com/photo-1679419510159-bd45f61e27d0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=40&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MDg1NTI3NQ&ixlib=rb-4.0.3&q=80&w=40"
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
