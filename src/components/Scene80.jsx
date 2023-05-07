import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Scene80 = React.forwardRef((props, ref) => {
  const { question6 } = useSelector((state) => state.dataReducer);

  return (
    <p
      ref={ref}
      className="centered-paragraph text-black top-[34%]"
      style={{ opacity: 0 }}
    >
      พอถึงเวลาจริงๆ {question6.answer ? question6.answer : "[name]"}
      <br />
      เริ่มรู้สึกกลัวมั้ย?
    </p>
  );
});

export default Scene80;
