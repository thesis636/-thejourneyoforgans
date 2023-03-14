import * as React from "react";
// import "./style.css";
import { useSelector, useDispatch } from "react-redux";

export function LayoutChapter6() {
  const layoutReducer = useSelector((state) => state.layoutReducer);

  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: layoutReducer.step === "6" ? "block" : "none",
        animation:
          layoutReducer.step === "6" && `keyframe-layout-chapter-show-text 1s`,
      }}
    >
      <div>
        <p
          style={{
            margin: 0,
            color:"#fff"
          }}
        >
          คุณตายแล้ว..
        </p>
      </div>
    </div>
  );
}

export default LayoutChapter6;
