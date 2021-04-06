import React from "react";

class ReactComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cnt: 1
    };
    this.renderCnt = 1;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.cnt !== this.state.cnt) return true;
    if (nextProps.data !== this.props.data) return true;
    return false;
    // return false;
  }

  handleClick = () => {
    this.setState((prev) => {
      return { cnt: prev.cnt + 1 };
    });
  };

  componentDidUpdate() {
    this.renderCnt++;
  }
  render() {
    return (
      <>
        <h2>Normal Component</h2>
        <h3>Cnt : {this.state.cnt}</h3>
        <h3>Data : {this.props.data}</h3>
        <button onClick={this.handleClick}>Inc</button>
        <h4>Render : {this.renderCnt}</h4>
      </>
    );
  }
}

export default ReactComponent;
