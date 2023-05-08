import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Scene80 = React.forwardRef((props, ref) => {
  const { name } = useSelector((state) => state.dataReducer);

  return (
    <p
      ref={ref}
      className="centered-paragraph text-black top-[34%]"
      style={{ opacity: 0 }}
    >
      พอถึงเวลาจริงๆ {name.nickname ? name.nickname : "[name]"}
      <br />
      เริ่มรู้สึกกลัวมั้ย?
    </p>
  );
});

export default Scene80;
