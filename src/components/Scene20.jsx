import React from "react";

const Scene20 = React.forwardRef((props, ref) => {
  return (
    <p
      ref={ref}
      className="centered-paragraph top-[25%]"
      style={{ opacity: 0 }}
    >
      หลังจากตายครบ 7 วันแล้ว
      <br />
      ความทรงจำของผู้ตายทุกคนจะหายไป
    </p>
  );
});

export default Scene20;
