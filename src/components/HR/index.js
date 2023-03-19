import * as React from "react";

const HR = ({ height, className }) => {
  return (
    <div
      className={className}
      style={{
        height: height,
        backgroundColor: "black",
      }}
    ></div>
  );
};

export default HR;
