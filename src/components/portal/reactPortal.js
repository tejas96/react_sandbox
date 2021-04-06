import React from "react";
import ReactDOM from "react-dom";

class Portal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <>
        <h2>React Portal</h2>
        <p>Render component outside of the root dom</p>
        <p>
          Portal use case mostly creating a seprate dom in order to avoid css
          restriction or render dom sepratly
        </p>
      </>,
      document.getElementById("portal-root")
    );
  }
}

export default Portal;
