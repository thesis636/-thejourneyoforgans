import React from "react";

const Scene41 = React.forwardRef((props, ref) => {
  return (
    <p
      ref={ref}
      className="centered-paragraph text-white top-20"
      style={{ opacity: 0 }}
    >
      และแพทย์ต้องให้ญาติของ
      <br />
      เธอลงนามยินยอมให้บริจาคอวัยวะ
    </p>
  );
});

export default Scene41;
