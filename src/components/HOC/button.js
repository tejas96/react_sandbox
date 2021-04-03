import React from "react";
import IncrementHoc from "./incrementHoc";

const Button = (props) => {
  return <button onClick={props.handleInc}>{props.cnt} Times Click</button>;
};

export default IncrementHoc(Button);
