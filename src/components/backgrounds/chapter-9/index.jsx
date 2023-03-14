import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

export function BackgroundChapter9(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (backgroundReducer.step === '9') {
      setTimeout(() => {
        dispatch({ type: "SET_BACKGROUND", payload: '10' });
        // dispatch({ type: "SET_LAYOUT", payload: '4' });
      }, 4000);
    }
  }, [backgroundReducer.step]);

  return (
    <div
      style={{
        display: backgroundReducer.step === '9' ? "flex" : "none",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        animation:
          backgroundReducer.step === '9' &&
          "keyframe-background-8 4s cubic-bezier(1, -1, 0, 2)  infinite alternate",
      }}
    >
      {props.children}
    </div>
  );
}

export default BackgroundChapter9;
