import React from "react";
import projectLogo from "../images/project-logo.png";

const Scene2 = React.forwardRef((props, ref) => {
  return (
    <div className="grid place-items-center h-full">
      <div ref={ref} className="w-64 mb-28" style={{ opacity: 0 }}>
        <img src={projectLogo} alt="" />
      </div>
    </div>
  );
});

export default Scene2;
