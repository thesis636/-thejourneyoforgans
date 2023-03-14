import * as React from "react";
// import "./style.css";
import { useSelector, useDispatch } from "react-redux";

export function LayoutChapter17NotSatisfied() {
  const layoutReducer = useSelector((state) => state.layoutReducer);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (layoutReducer.step === '17-not-satisfied') {

      setTimeout(() => {
        dispatch({ type: "SET_BACKGROUND", payload: '15' });
      }, 5000);
    }
  }, [layoutReducer.step]);
  return (
    <div
      style={{
        display: layoutReducer.step === "17-not-satisfied" ? "block" : "none",
        animation:
          layoutReducer.step === "17-not-satisfied" && `keyframe-layout-chapter-show-text 1s`,
      }}
    >
      <div>
        <p
          style={{
            margin: 0
          }}
        >
          ไม่เป็นไรนะอย่าได้
        </p>
        <p
          style={{
            margin: 0
          }}
        >
          คิดเสียดายเลย
        </p>
      </div>
    </div>
  );
}

export default LayoutChapter17NotSatisfied;
