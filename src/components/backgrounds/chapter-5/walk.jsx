import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

export function BackgroundChapter5walk(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (backgroundReducer.step === '5-walk') {
      setTimeout(() => {
        dispatch({ type: "SET_BACKGROUND", payload: '6' });
        dispatch({ type: "SET_LAYOUT", payload: '5' });
      }, 5000);
    }
  }, [backgroundReducer.step]);

  return (
    <div
      style={{
        display: backgroundReducer.step === '5-walk' ? "flex" : "none",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        animation:
          backgroundReducer.step === '5-walk' &&
          "keyframe-background-5-walk 4s cubic-bezier(1, -1, 0, 2) both",
      }}
    >
      {props.children}
    </div>
  );
}

export default BackgroundChapter5walk;
