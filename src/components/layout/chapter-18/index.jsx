import * as React from "react";
// import "./style.css";
import { useSelector } from "react-redux";

export function LayoutChapter18() {
  const layoutReducer = useSelector((state) => state.layoutReducer);

  // const dispatch = useDispatch();
  return (
    <div
      style={{
        display: layoutReducer.step === "18" ? "block" : "none",
        animation:
          layoutReducer.step === "18" && `keyframe-layout-chapter-show-text 1s`,
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
          ท้ายที่สุดแล้วเธอได้
        </p>
        <p
          style={{
            margin: 0,
          }}
        >
         สร้างสิ่งดีๆก่อนตาย
        </p>
      </div>
    </div>
  );
}

export default LayoutChapter18;
