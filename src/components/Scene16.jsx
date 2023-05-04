import React from "react";

const Scene16 = React.forwardRef((props, ref) => {
  return (
    <p
      ref={ref}
      className="centered-paragraph top-[25%]"
      style={{ opacity: 0 }}
    >
      สวัสดีเด็กใหม่
      <br />
      ที่นี่คือดินแดนว่างเปล่า
    </p>
  );
});

export default Scene16;
