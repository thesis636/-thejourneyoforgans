import React from "react";

const Scene19 = React.forwardRef((props, ref) => {
  return (
    <p
      ref={ref}
      className="centered-paragraph top-[25%]"
      style={{ opacity: 0 }}
    >
      แม้แต่ความทรงจำ
      <br />
      ของทุกคนที่นี่ก็เช่นกัน
    </p>
  );
});

export default Scene19;
