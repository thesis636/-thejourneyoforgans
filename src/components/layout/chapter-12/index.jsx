import * as React from "react";
// import "./style.css";
import { useSelector } from "react-redux";

export function LayoutChapter12() {
  const layoutReducer = useSelector((state) => state.layoutReducer);

  // const dispatch = useDispatch();
  return (
    <div
      style={{
        display: layoutReducer.step === "12" ? "block" : "none",
        animation:
          layoutReducer.step === "12" && `keyframe-layout-chapter-show-text 1s`,
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
          หลังจากที่เสียชีวิตครบ 7 วันแล้ว
        </p>
        <p
          style={{
            margin: 0,
          }}
        >
          ความทรงจำของผู้ตายทุกคนจะหายไป
        </p>
      </div>
    </div>
  );
}

export default LayoutChapter12;
