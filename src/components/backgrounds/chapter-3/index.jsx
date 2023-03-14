import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

export function BackgroundChapter3(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (backgroundReducer.step === '3') {
      setTimeout(() => {
        dispatch({ type: "SET_BACKGROUND", payload: '4' });
        dispatch({ type: "SET_LAYOUT", payload: '4' });
      }, 3000);
    }
  }, [backgroundReducer.step]);

  return (
    <div
      style={{
        display: backgroundReducer.step === '3' ? "flex" : "none",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        animation:
          backgroundReducer.step === '3' &&
          "keyframe-background-3 3s cubic-bezier(1, -1, 0, 2) both",
      }}
    >
      {props.children}
    </div>
  );
}

export default BackgroundChapter3;
