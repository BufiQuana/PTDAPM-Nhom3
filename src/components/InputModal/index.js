import * as React from "react";

const InputModal = (props) => {
  return (
    <div className="mb-3">
      <label className="form-label">{props.title}</label>
      <input
        type="text"
        className="form-control disable"
        placeholder={`${
          props.placeholder || `Nhập ${props.title.toLowerCase()}`
        }`}
        value={props.value}
        onChange={props.action}
        disabled={props.disabled}
      />
    </div>
  );
};

export default InputModal;
