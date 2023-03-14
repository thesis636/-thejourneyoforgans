import * as React from "react";
// import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import icon from "./img/IMG_4571.PNG";

export function LayoutChapter1() {
  const layoutReducer = useSelector((state) => state.layoutReducer);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (layoutReducer.step === "1")
      setTimeout(() => {
        dispatch({ type: "SET_LAYOUT", payload: '2' });
      }, 3000);
  }, [layoutReducer.step]);
  return (
    <div
      style={{
        display: layoutReducer.step === "1" ? "block" : "none",
        animation:
          layoutReducer.step === "1" && `keyframe-layout-chapter-show-text 2s`,
      }}
    >
      <img height={300} src={icon} />
    </div>
  );
}

export default LayoutChapter1;
