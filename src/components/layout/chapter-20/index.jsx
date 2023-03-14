import * as React from "react";
// import "./style.css";
import { useSelector } from "react-redux";

export function LayoutChapter20() {
  const layoutReducer = useSelector((state) => state.layoutReducer);

  // const dispatch = useDispatch();
  return (
    <div
      style={{
        display: layoutReducer.step === "20" ? "block" : "none",
        animation:
          layoutReducer.step === "20" && `keyframe-layout-chapter-show-text 1s`,
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
          จำได้มั้ย? เธอเคยลงทะเบียน
        </p>
        <p
          style={{
            margin: 0,
          }}
        >
        บริจาคอวัยวะไว้ก่อนตายนะ
        </p>
      </div>
    </div>
  );
}

export default LayoutChapter20;
