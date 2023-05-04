import React from "react";

const Scene40 = React.forwardRef((props, ref) => {
  return (
    <p
      ref={ref}
      className="centered-paragraph text-white top-20"
      style={{ opacity: 0 }}
    >
      จากนั้นแพทย์จะมาแจ้ง
      <br />
      ให้ญาติของเธอทราบว่าเธอ
      <br />
      ได้แสดงความจำนงบริจาคอวัยวะไว้
    </p>
  );
});

export default Scene40;
