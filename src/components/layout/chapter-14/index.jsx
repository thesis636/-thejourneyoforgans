import * as React from "react";
// import "./style.css";
import { useSelector } from "react-redux";

export function LayoutChapter14() {
  const layoutReducer = useSelector((state) => state.layoutReducer);

  // const dispatch = useDispatch();
  return (
    <div
      style={{
        display: layoutReducer.step === "14" ? "block" : "none",
        animation:
          layoutReducer.step === "14" && `keyframe-layout-chapter-show-text 1s`,
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
          ดังนั้นกาอนที่เธอจะลืมความทรงจำ
        </p>
        <p
          style={{
            margin: 0,
          }}
        >
          ทุกอย่างในโลกที่เธอจากมา
        </p>
      </div>
    </div>
  );
}

export default LayoutChapter14;
