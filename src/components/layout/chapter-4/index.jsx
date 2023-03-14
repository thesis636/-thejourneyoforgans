import * as React from "react";
// import "./style.css";
import { useSelector, useDispatch } from "react-redux";

export function LayoutChapter4() {
  const layoutReducer = useSelector((state) => state.layoutReducer);

  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: layoutReducer.step === '4' ? "block" : "none",
        animation:
          layoutReducer.step === '4' && `keyframe-layout-chapter-show-text 1s`,
      }}
    >
      <div>
        <p
          style={{
            margin: 0,
          }}
        >
          วันนี้คุณจะเดินทาง
        </p>
        <p
          style={{
            margin: 0,
          }}
        >
          ด้วยวิธีไหน?
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
              dispatch({ type: "SET_BACKGROUND", payload: '5-bts' });
              // setTimeout(() => {
              //   dispatch({ type: "SET_BACKGROUND", payload: 2 });
              //   dispatch({ type: "SET_LAYOUT", payload: 4 });
              // }, 8000);
            }}
          >
            {"รถไฟฟ้า"}
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
              dispatch({ type: "SET_BACKGROUND", payload: '5-motorcycle' });
              // setTimeout(() => {
              //   dispatch({ type: "SET_BACKGROUND", payload: 2 });
              //   dispatch({ type: "SET_LAYOUT", payload: 4 });
              // }, 8000);
            }}
          >
            {"วินมอเตอร์ไซค์"}
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
              dispatch({ type: "SET_BACKGROUND", payload: '5-walk' });
              // setTimeout(() => {
              //   dispatch({ type: "SET_BACKGROUND", payload: 2 });
              //   dispatch({ type: "SET_LAYOUT", payload: 4 });
              // }, 8000);
            }}
          >
            {"เดินไป"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LayoutChapter4;
