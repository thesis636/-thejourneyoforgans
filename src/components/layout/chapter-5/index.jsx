import * as React from "react";
// import "./style.css";
import { useSelector, useDispatch } from "react-redux";

export function LayoutChapter5() {
  const layoutReducer = useSelector((state) => state.layoutReducer);

  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: layoutReducer.step === "5" ? "block" : "none",
        animation:
          layoutReducer.step === "5" && `keyframe-layout-chapter-show-text 1s`,
      }}
    >
      <div>
        <p
          style={{
            margin: 0,
          }}
        >
          วันสุดท้ายของสัปดาห์แล้ว
        </p>
        <p
          style={{
            margin: 0,
          }}
        >
          วันหยุดนี้คุณแพลนจะทำอะไรมั้ย?
        </p>
      </div>
      <div>
        <div
          style={{
            display: "flex",
          }}
        >
          <textarea
            style={{
              width: "100%",
              borderRadius: 10,
              border: 0,
              padding: "5px 10px",
            }}
            rows={4}
            id="massage"
            placeholder="พิมพ์คำตอบ"
            name="massage"
          />
        </div>
        <div
          style={{
            padding: 15,
          }}
        >
          <button
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              dispatch({ type: "SET_BACKGROUND", payload: "7" });
              // setTimeout(() => {
              //   dispatch({ type: "SET_BACKGROUND", payload: 2 });
              //   dispatch({ type: "SET_LAYOUT", payload: 5 });
              // }, 8000);
            }}
          >
            {"แตะเพื่อไปต่อ>>"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LayoutChapter5;
