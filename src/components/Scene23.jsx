import React from "react";

const Scene23 = React.forwardRef((props, ref) => {
  return (
    <p
      ref={ref}
      className="centered-paragraph top-[25%]"
      style={{ opacity: 0 }}
    >
      ฉันจะพาเธอไปทบทวน
      <br />
      สิ่งดีๆที่เธอเคยทำกัน
    </p>
  );
});

export default Scene23;
