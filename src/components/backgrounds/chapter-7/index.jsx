import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

export function BackgroundChapter7(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (backgroundReducer.step === "7") {
      setTimeout(() => {
        dispatch({ type: "SET_BACKGROUND", payload: "8" });
        // dispatch({ type: "SET_LAYOUT", payload: '4' });
      }, 4000);
    }
  }, [backgroundReducer.step]);

  return (
    <div
      className="lazy-background"
      style={{
        display: backgroundReducer.step === "7" ? "flex" : "none",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        animation:
          backgroundReducer.step === "7" &&
          "keyframe-background-7 4s cubic-bezier(1, -1, 0, 2) both",
      }}
    >
      {props.children}
    </div>
  );
}

export default BackgroundChapter7;
