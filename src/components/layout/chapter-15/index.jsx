import * as React from "react";
// import "./style.css";
import { useSelector } from "react-redux";

export function LayoutChapter15() {
  const layoutReducer = useSelector((state) => state.layoutReducer);

  // const dispatch = useDispatch();
  return (
    <div
      style={{
        display: layoutReducer.step === "15" ? "block" : "none",
        animation:
          layoutReducer.step === "15" && `keyframe-layout-chapter-show-text 1s`,
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
          ฉันจะพาเธอไปทบทวน
        </p>
        <p
          style={{
            margin: 0,
          }}
        >
          สิ่งดีๆที่เธอเคยทำกัน
        </p>
      </div>
    </div>
  );
}

export default LayoutChapter15;
