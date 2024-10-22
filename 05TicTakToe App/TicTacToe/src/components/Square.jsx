import React from "react";

const Square = (props) => {
  return (
    <div onClick={props.onClick}
      style={{
        border: "2px solid",
        height: "130px",
        width: "100%",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="square">
        <h4>{props.value}</h4>
      </div>
    </div>
  );
};

export default Square;
