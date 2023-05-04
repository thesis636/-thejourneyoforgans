import React from "react";

const Scene31 = React.forwardRef((props, ref) => {
  return (
    <p
      ref={ref}
      className="centered-paragraph top-[20%]"
      style={{ opacity: 0 }}
    >
      ฉันจะพาเธอไปดูขั้นตอนต่างๆ
      <br />
      ว่าอวัยวะของเธอเดินทางไปที่ไหนบ้าง
    </p>
  );
});

export default Scene31;
