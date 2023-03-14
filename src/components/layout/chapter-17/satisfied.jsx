import * as React from "react";
// import "./style.css";
import { useSelector, useDispatch } from "react-redux";

export function LayoutChapter17Satisfied() {
  const layoutReducer = useSelector((state) => state.layoutReducer);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (layoutReducer.step === '17-satisfied') {

      setTimeout(() => {
        dispatch({ type: "SET_BACKGROUND", payload: '15' });
      }, 5000);
    }
  }, [layoutReducer.step]);

  return (
    <div
      style={{
        display: layoutReducer.step === "17-satisfied" ? "block" : "none",
        animation:
          layoutReducer.step === "17-satisfied" && `keyframe-layout-chapter-show-text 1s`,
      }}
    >
      <div>
        <p
          style={{
            margin: 0
          }}
        >
          ดีใจด้วยนะที่ได้ทำ
        </p>
        <p
          style={{
            margin: 0
          }}
        >
          ทุกอย่างที่ตัวเองอยากทำ
        </p>
      </div>
    </div>
  );
}

export default LayoutChapter17Satisfied;
