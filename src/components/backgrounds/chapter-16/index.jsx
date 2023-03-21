import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

export function BackgroundChapter16(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (backgroundReducer.step === "16") {
      setTimeout(() => {
        dispatch({ type: "SET_LAYOUT", payload: "18" });
      }, 1000);

      setTimeout(() => {
        dispatch({ type: "SET_LAYOUT", payload: "19" });
      }, 7000);

      setTimeout(() => {
        dispatch({ type: "SET_LAYOUT", payload: "19" });
      }, 13000);

      setTimeout(() => {
        dispatch({ type: "SET_BACKGROUND", payload: "16" });
      }, 19000);
    }
  }, [backgroundReducer.step]);

  return (
    <div
      className="lazy-background"
      style={{
        display: backgroundReducer.step === "16" ? "flex" : "none",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        animation:
          backgroundReducer.step === "16" &&
          "keyframe-background-12 3s cubic-bezier(1, -1, 0, 2)  infinite alternate",
      }}
    >
      {props.children}
    </div>
  );
}

export default BackgroundChapter16;
