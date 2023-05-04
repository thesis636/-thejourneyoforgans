import React from "react";

const Scene21 = React.forwardRef((props, ref) => {
  return (
    <p
      ref={ref}
      className="centered-paragraph top-[25%]"
      style={{ opacity: 0 }}
    >
      จำไม่ได้แม้แต่ชื่อของตัวเอง...
    </p>
  );
});

export default Scene21;
