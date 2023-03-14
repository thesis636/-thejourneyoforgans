import * as React from "react";
// import "./style.css";
import { useSelector, useDispatch } from "react-redux";

export function LayoutChapter3() {
  const layoutReducer = useSelector((state) => state.layoutReducer);

  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: layoutReducer.step === '3' ? "block" : "none",
        animation:
          layoutReducer.step === '3' && `keyframe-layout-chapter-show-text 1s`,
      }}
    >
      <div>
        <p
          style={{
            margin: 0,
          }}
        >
          วันนี้เป็นเช้าวันศุกร์
        </p>
        <p
          style={{
            margin: 0,
          }}
        >
          คุณต้องออกไปข้างนอก
        </p>
        <p
          style={{
            margin: 0,
          }}
        >
          คุณจะออกไปไหน
        </p>
      </div>
      <div>
        <div>
          <button
            style={{
              background: "white",
              width: "100%",
              borderRadius: "10px",
              margin: "5px",
              cursor: "pointer",
            }}
            onClick={() => {
              dispatch({ type: "SET_BACKGROUND", payload: '3' });
            }}
          >
            {"ไปทำงาน"}
          </button>
        </div>
        <div>
          <button
            style={{
              background: "white",
              width: "100%",
              borderRadius: "10px",
              margin: "5px",
              cursor: "pointer",
            }}
            onClick={() => {
              dispatch({ type: "SET_BACKGROUND", payload: '3' });
            }}
          >
            {"ไปโรงเรียน"}
          </button>
        </div>
        <div>
          <button
            style={{
              background: "white",
              width: "100%",
              borderRadius: "10px",
              margin: "5px",
              cursor: "pointer",
            }}
            onClick={() => {
              dispatch({ type: "SET_BACKGROUND", payload: '3' });
            }}
          >
            {"ไปทำธุระ"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LayoutChapter3;
