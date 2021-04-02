import ErrorBoundries from "./ReactErrorBoundries";
import City from "./City";

import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <ErrorBoundries>
          <City name="pune" />
        </ErrorBoundries>
        <ErrorBoundries>
          <City name="nashik" />
        </ErrorBoundries>
        <ErrorBoundries>
          <City name="chennai" />
        </ErrorBoundries>
      </>
    );
  }
}

export default Main;
