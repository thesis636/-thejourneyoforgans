import * as React from "react";
// import "./style.css";
import { useSelector } from "react-redux";

export function LayoutChapter10() {
  const layoutReducer = useSelector((state) => state.layoutReducer);

  // const dispatch = useDispatch();
  return (
    <div
      style={{
        display: layoutReducer.step === "10" ? "block" : "none",
        animation:
          layoutReducer.step === "10" && `keyframe-layout-chapter-show-text 1s`,
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
          เพราะโลกหลังความตาย
        </p>
        <p
          style={{
            margin: 0,
          }}
        >
          เราไม่สามารถเอาอะไรมาได้
        </p>
      </div>
    </div>
  );
}

export default LayoutChapter10;
