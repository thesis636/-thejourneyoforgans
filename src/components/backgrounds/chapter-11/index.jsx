import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

export function BackgroundChapter14(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (backgroundReducer.step === '14') {
      setTimeout(() => {
        dispatch({ type: "SET_LAYOUT", payload: '16' });
      }, 1000);

      // setTimeout(() => {
      //   dispatch({ type: "SET_BACKGROUND", payload: '15' });
      // }, 7000);
    }
  }, [backgroundReducer.step]);

  return (
    <div
      style={{
        display: backgroundReducer.step === '14' ? "flex" : "none",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        animation:
          backgroundReducer.step === '14' &&
          "keyframe-background-10 2s cubic-bezier(1, -1, 0, 2)  infinite alternate",
      }}
    >
      {props.children}
    </div>
  );
}

export default BackgroundChapter14;
