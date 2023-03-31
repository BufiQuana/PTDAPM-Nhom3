import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColorAccent } from "../../../redux/reducers/Auth";
import Circle from "../../Circle";
import "./style.css";

const SettingAppearance = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => {
    return state.auth;
  });

  const listColor = [
    "F0F1F3",
    "4059F2",
    "12D267",
    "EBBE10",
    "E99E11",
    "E90F11",
    "EA1293",
    "CC10EA",
    "5A11EA",
    "489FBD",
    "0BBB90",
    "3F90F7",
  ];

  const [checkTheme, setCheckTheme] = React.useState("Light");
  return (
    <div className="bg-white p-3 rounded-3 h-100 d-flex flex-column">
      <p>Hãy chọn màu chính của bạn.</p>
      <div className="d-flex mt-2 mb-4">
        {listColor.map((item) => {
          return (
            <div
              key={item}
              onClick={() => {
                dispatch(changeColorAccent(item));
              }}
            >
              <Circle
                color={item}
                active={auth.colorAccent === item}
                size={24}
                colorCheckBlack={auth.colorAccent === "F0F1F3"}
              />
            </div>
          );
        })}
      </div>

      <p>Hãy chọn chủ đề của bạn.</p>

      <div className="mt-2 d-flex button-theme">
        <div
          className="border p-1 rounded-2 w-100"
          onClick={() => {
            setCheckTheme("Light");
          }}
        >
          <i
            className={`fa fa-circle${
              checkTheme === "Light" ? "-check text-primary" : ""
            } me-2 fa-xs`}
          ></i>
          <span>Light</span>
        </div>
      </div>
      <div className="mt-2 d-flex button-theme">
        <div
          className="border bg-dark text-white p-1 rounded-2 w-100"
          onClick={() => {
            setCheckTheme("Dark");
          }}
        >
          <i
            className={`fa fa-circle${
              checkTheme === "Dark" ? "-check text-primary" : ""
            } me-2 fa-xs`}
          ></i>
          <span>Dark</span>
        </div>
      </div>
    </div>
  );
};

export default SettingAppearance;
