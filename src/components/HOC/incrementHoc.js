import React from "react";

const IncrementHoc = (OriginalComponent) => {
  return class WrapperComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cnt: 0
      };
      this.handleInc = this.handleInc.bind(this);
    }
    handleInc() {
      this.setState((prev) => {
        return {
          cnt: prev.cnt + 1
        };
      });
    }
    render() {
      return (
        <OriginalComponent handleInc={this.handleInc} cnt={this.state.cnt} />
      );
    }
  };
};

export default IncrementHoc;
