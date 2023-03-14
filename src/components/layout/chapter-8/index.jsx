import * as React from "react";
// import "./style.css";
import { useSelector } from "react-redux";

export function LayoutChapter8() {
  const layoutReducer = useSelector((state) => state.layoutReducer);

  // const dispatch = useDispatch();
  return (
    <div
      style={{
        display: layoutReducer.step === "8" ? "block" : "none",
        animation:
          layoutReducer.step === "8" && `keyframe-layout-chapter-show-text 1s`,
          marginBottom: 300,
          fontSize: 25,
      }}
    >
      <div>
        <p
          style={{
            margin: 0,
          }}
        >
          สวัสดีเด็กใหม่
        </p>
        <p
          style={{
            margin: 0,
          }}
        >
          ที่นี่คือดินแดนว่างเปล่า
        </p>
      </div>
    </div>
  );
}

export default LayoutChapter8;
