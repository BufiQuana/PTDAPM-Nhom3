import * as React from "react";

const Circle = (props) => {
  return (
    <div
      className="d-flex align-items-center justify-content-center me-2"
      style={{
        width: props.size || 30,
        height: props.size || 30,
        backgroundColor: `#${props.color}`,
        borderRadius: props.size / 2 || 15,
      }}
    >
      {props.active && (
        <i
          className={`fa fa-xs fa-check ${
            props.colorCheckBlack ? "text-black" : "text-white"
          }`}
        ></i>
      )}
    </div>
  );
};

export default Circle;
