import React from "react";
import WithJSX from "./withJSX";
import WithoutJSX from "./withoutJSX";

const Main = () => {
  return (
    <>
      <h1>With JSX & Without JSX</h1>
      <WithJSX />
      <WithoutJSX />
    </>
  );
};

export default Main;
