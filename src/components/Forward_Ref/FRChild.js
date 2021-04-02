import React from "react";

const FRChild = React.forwardRef((props, ref) => {
  return (
    <div>
      <input {...props} ref={ref} type="text" />
    </div>
  );
});

export default FRChild;
