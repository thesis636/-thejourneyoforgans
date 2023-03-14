import * as React from "react";
// import "./style.css";
import { useSelector} from "react-redux";

export function LayoutChapter7() {
  const layoutReducer = useSelector((state) => state.layoutReducer);

  // const dispatch = useDispatch();
  return (
    <div
      style={{
        display: layoutReducer.step === "7" ? "block" : "none",
        animation:
          layoutReducer.step === "7" && `keyframe-layout-chapter-show-text 1s`,
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
          จากนั้นคุณตื่นมา แล้วพบว่า
        </p>
        <p
          style={{
            margin: 0,
          }}
        >
          ตอนนี้ตัวเองอยู่ในดินแดนว่างเปล่า
        </p>
      </div>
    </div>
  );
}

export default LayoutChapter7;
