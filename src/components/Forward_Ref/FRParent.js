import React from "react";
import FRChild from "./FRChild";

class FRParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputRef = React.createRef();
  }

  handleButton = () => {
    this.inputRef.current.focus();
  };
  render() {
    return (
      <>
        <FRChild ref={this.inputRef} />
        <button onClick={this.handleButton}>Focus</button>
      </>
    );
  }
}

export default FRParent;
