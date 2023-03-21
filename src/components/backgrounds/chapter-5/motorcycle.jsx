import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

export function BackgroundChapter5Motorcycle(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (backgroundReducer.step === "5-motorcycle") {
      setTimeout(() => {
        dispatch({ type: "SET_BACKGROUND", payload: "6" });
        dispatch({ type: "SET_LAYOUT", payload: "5" });
      }, 7000);
    }
  }, [backgroundReducer.step]);

  return (
    <div
      className="lazy-background"
      style={{
        display: backgroundReducer.step === "5-motorcycle" ? "flex" : "none",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        animation:
          backgroundReducer.step === "5-motorcycle" &&
          "keyframe-background-5-motorcycle 7s cubic-bezier(1, -1, 0, 2) both",
      }}
    >
      {props.children}
    </div>
  );
}

export default BackgroundChapter5Motorcycle;
