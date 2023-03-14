import * as React from "react";
// import "./style.css";
import { useSelector, useDispatch } from "react-redux";

export function LayoutChapter16() {
  const layoutReducer = useSelector((state) => state.layoutReducer);

  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: layoutReducer.step === '16' ? "block" : "none",
        animation:
          layoutReducer.step === '16' && `keyframe-layout-chapter-show-text 1s`,
      }}
    >
      <div>
        <p
          style={{
            margin: 0,
          }}
        >
          แล้วพอใจกับชีวิตที่ผ่านมารึยัง
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
              // dispatch({ type: "SET_BACKGROUND", payload: '5-bts' });
              // setTimeout(() => {
              //   dispatch({ type: "SET_BACKGROUND", payload: 2 });
                dispatch({ type: "SET_LAYOUT", payload: '17-satisfied' });
              // }, 8000);
            }}
          >
            {"พอใจแล้ว"}
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
              // dispatch({ type: "SET_BACKGROUND", payload: '5-motorcycle' });
              // setTimeout(() => {
              //   dispatch({ type: "SET_BACKGROUND", payload: 2 });
              dispatch({ type: "SET_LAYOUT", payload: '17-not-satisfied' });
              // }, 8000);
            }}
          >
            {"ยังไม่พอใจ"}
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
              // dispatch({ type: "SET_BACKGROUND", payload: '5-walk' });
              // setTimeout(() => {
              //   dispatch({ type: "SET_BACKGROUND", payload: 2 });
              dispatch({ type: "SET_LAYOUT", payload: '17-just' });
              // }, 8000);
            }}
          >
            {"เฉยๆนะ"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LayoutChapter16;
