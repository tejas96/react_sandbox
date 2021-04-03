import React from "react";

const ReactFragment = () => {
  return (
    <React.Fragment>
      <h1>Fragment</h1>
      <p>
        Fragment not create extra node in dom tree & let help to return multiple
        elements from component without adding unnecessary node
      </p>
    </React.Fragment>
  );
};

export default ReactFragment;
