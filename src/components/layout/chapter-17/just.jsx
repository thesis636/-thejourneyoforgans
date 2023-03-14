import * as React from "react";
// import "./style.css";
import { useSelector, useDispatch } from "react-redux";

export function LayoutChapter17Just() {
  const layoutReducer = useSelector((state) => state.layoutReducer);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (layoutReducer.step === '17-just') {

      setTimeout(() => {
        dispatch({ type: "SET_BACKGROUND", payload: '15' });
      }, 5000);
    }
  }, [layoutReducer.step]);

  return (
    <div
      style={{
        display: layoutReducer.step === "17-just" ? "block" : "none",
        animation:
          layoutReducer.step === "17-just" && `keyframe-layout-chapter-show-text 1s`,
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

export default LayoutChapter17Just;
