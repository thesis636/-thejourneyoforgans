import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

export function BackgroundChapter1(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (backgroundReducer.step === '1') {
      setTimeout(() => {
        dispatch({ type: "SET_BACKGROUND", payload: '2' });
        dispatch({ type: "SET_LAYOUT", payload: '3' });
      }, 3000);
    }
  }, [backgroundReducer.step]);

  return (
    <div
      style={{
        display: backgroundReducer.step === '1' ? "flex" : "none",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        animation:
          backgroundReducer.step === '1' &&
          "keyframe-background-1 3s cubic-bezier(1, -1, 0, 2) both",
      }}
    >
      {props.children}
    </div>
  );
}

export default BackgroundChapter1;
