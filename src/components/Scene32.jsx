import React from "react";

const Scene32 = React.forwardRef((props, ref) => {
  return (
    <p
      ref={ref}
      className="centered-paragraph top-[20%]"
      style={{ opacity: 0 }}
    >
      เธอจะได้ไม่ต้องเป็นห่วงร่างกายนี้
      <br />
      และไปดูว่าร่างกายเธอสามารถ
      <br />
      ช่วยชีวิตคนได้อีกหลายชีวิต
    </p>
  );
});

export default Scene32;
