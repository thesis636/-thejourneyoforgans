import React from "react";

const Scene50 = React.forwardRef((props, ref) => {
  return (
    <p
      ref={ref}
      className="centered-paragraph text-white top-52"
      style={{ opacity: 0 }}
    >
      เพราะแต่ละอวัยวะมีระยะเวลา
      <br />
      ในขาดเลือดที่แตกต่างกัน
    </p>
  );
});

export default Scene50;
