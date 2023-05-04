import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Scene30 = React.forwardRef((props, ref) => {
  const { user } = useSelector((state) => state.dataReducer);
  return (
    <div ref={ref} style={{ fontFamily: "THSarabun" }}>
      <h1 className="absolute top-[51.5%] left-[20%]">{user.nickname}</h1>
      <h2 className="absolute top-[58.1%] right-[18%]">{user.id}</h2>
    </div>
  );
});

export default Scene30;
