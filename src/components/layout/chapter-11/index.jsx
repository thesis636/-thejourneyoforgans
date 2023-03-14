import * as React from "react";
// import "./style.css";
import { useSelector } from "react-redux";

export function LayoutChapter11() {
  const layoutReducer = useSelector((state) => state.layoutReducer);

  // const dispatch = useDispatch();
  return (
    <div
      style={{
        display: layoutReducer.step === "11" ? "block" : "none",
        animation:
          layoutReducer.step === "11" && `keyframe-layout-chapter-show-text 1s`,
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
          แม้แต่ความทรงจำของทุกคนที่นี้ก็เช่นกัน
        </p>
      </div>
    </div>
  );
}

export default LayoutChapter11;
