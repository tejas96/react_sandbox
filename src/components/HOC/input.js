import React from "react";
import IncrementHoc from "./incrementHoc";

class Input extends React.Component {
  render() {
    return (
      <>
        <input onKeyPress={this.props.handleInc} type="text" />
        <h1>{this.props.cnt} time key press</h1>
      </>
    );
  }
}

export default IncrementHoc(Input);
