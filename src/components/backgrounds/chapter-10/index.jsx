import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

export function BackgroundChapter10(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (backgroundReducer.step === "10") {
      setTimeout(() => {
        dispatch({ type: "SET_LAYOUT", payload: "6" });
      }, 2000);

      setTimeout(() => {
        dispatch({ type: "SET_BACKGROUND", payload: "11" });
      }, 5000);
    }
  }, [backgroundReducer.step]);

  return (
    <div
      className="lazy-background"
      style={{
        display: backgroundReducer.step === "10" ? "flex" : "none",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        animation:
          backgroundReducer.step === "10" &&
          "keyframe-background-9 1s cubic-bezier(1, -1, 0, 2)  infinite alternate",
      }}
    >
      {props.children}
    </div>
  );
}

export default BackgroundChapter10;
