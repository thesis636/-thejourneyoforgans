import * as React from "react";
// import "./style.css";
import { useSelector } from "react-redux";

export function LayoutChapter9() {
  const layoutReducer = useSelector((state) => state.layoutReducer);

  // const dispatch = useDispatch();
  return (
    <div
      style={{
        display: layoutReducer.step === "9" ? "block" : "none",
        animation:
          layoutReducer.step === "9" && `keyframe-layout-chapter-show-text 1s`,
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
          ใช่แล้ว ที่นี่ว่างเปล่า
        </p>
       
      </div>
    </div>
  );
}

export default LayoutChapter9;
