import React from "react";

const Scene64 = React.forwardRef((props, ref) => {
  return (
    <p
      ref={ref}
      className="centered-paragraph text-black !text-[28px] top-[25%] right-[5.5rem]"
      style={{ opacity: 0 }}
    >
      1 อวัยวะของเธอ
      <br />
      ไม่ได้ช่วยได้แค่คุณตา
    </p>
  );
});

export default Scene64;
