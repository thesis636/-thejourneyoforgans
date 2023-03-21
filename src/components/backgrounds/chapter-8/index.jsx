import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

export function BackgroundChapter8(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (backgroundReducer.step === "8") {
      setTimeout(() => {
        dispatch({ type: "SET_BACKGROUND", payload: "9" });
        // dispatch({ type: "SET_LAYOUT", payload: '4' });
      }, 4000);
    }
  }, [backgroundReducer.step]);

  return (
    <div
      className="lazy-background"
      style={{
        display: backgroundReducer.step === "8" ? "flex" : "none",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        animation:
          backgroundReducer.step === "8" &&
          "keyframe-background-9 1s cubic-bezier(1, -1, 0, 2)  infinite alternate",
      }}
    >
      {props.children}
    </div>
  );
}

export default BackgroundChapter8;
