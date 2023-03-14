import * as React from "react";
// import "./style.css";
import { useSelector } from "react-redux";

export function LayoutChapter19() {
  const layoutReducer = useSelector((state) => state.layoutReducer);

  // const dispatch = useDispatch();
  return (
    <div
      style={{
        display: layoutReducer.step === "19" ? "block" : "none",
        animation:
          layoutReducer.step === "19" && `keyframe-layout-chapter-show-text 1s`,
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
          เธอไม่ได้ตายอย่าง
        </p>
        <p
          style={{
            margin: 0,
          }}
        >
        เปล่าประโยชน์หรอกนะ
        </p>
      </div>
    </div>
  );
}

export default LayoutChapter19;
