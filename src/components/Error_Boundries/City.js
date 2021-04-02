import React from "react";

class ErrorBoundries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.name === "chennai") throw new Error("Catch Error...");

    return <h1>{this.props.name}</h1>;
  }
}

export default ErrorBoundries;
