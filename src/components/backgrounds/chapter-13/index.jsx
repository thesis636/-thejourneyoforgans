import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

export function BackgroundChapter13(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (backgroundReducer.step === '13') {
      setTimeout(() => {
        dispatch({ type: "SET_LAYOUT", payload: '11' });
      }, 1000);

      setTimeout(() => {
        dispatch({ type: "SET_LAYOUT", payload: '12' });
      }, 7000);

      setTimeout(() => {
        dispatch({ type: "SET_LAYOUT", payload: '13' });
      }, 13000);

      setTimeout(() => {
        dispatch({ type: "SET_LAYOUT", payload: '14' });
      }, 19000);

      setTimeout(() => {
        dispatch({ type: "SET_LAYOUT", payload: '15' });
      }, 25000);

      // setTimeout(() => {
      //   dispatch({ type: "SET_LAYOUT", payload: '13' });
      // }, 21000);

      // setTimeout(() => {
      //   dispatch({ type: "SET_LAYOUT", payload: '14' });
      // }, 25000);

      // setTimeout(() => {
      //   dispatch({ type: "SET_LAYOUT", payload: '15' });
      // }, 29000);


      setTimeout(() => {
        dispatch({ type: "SET_BACKGROUND", payload: '14' });
      }, 31000);
    }
  }, [backgroundReducer.step]);

  return (
    <div
      style={{
        display: backgroundReducer.step === '13' ? "flex" : "none",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        animation:
          backgroundReducer.step === '13' &&
          "keyframe-background-12 3s cubic-bezier(1, -1, 0, 2)  infinite alternate",
      }}
    >
      {props.children}
    </div>
  );
}

export default BackgroundChapter13;
