import React from "react";

const Scene22 = React.forwardRef((props, ref) => {
  return (
    <p
      ref={ref}
      className="centered-paragraph top-[25%]"
      style={{ opacity: 0 }}
    >
      ดังนั้นก่อนที่เธอจะลืมความทรงจำ
      <br />
      ทุกอย่างในโลกที่เธอจากมา
    </p>
  );
});

export default Scene22;
