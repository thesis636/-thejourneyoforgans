import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

export function BackgroundChapter12(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (backgroundReducer.step === '12') {
      setTimeout(() => {
        dispatch({ type: "SET_LAYOUT", payload: '8' });
      }, 1000);

      setTimeout(() => {
        dispatch({ type: "SET_LAYOUT", payload: '9' });
      }, 7000);

      setTimeout(() => {
        dispatch({ type: "SET_LAYOUT", payload: '10' });
      }, 13000);

      // setTimeout(() => {
      //   dispatch({ type: "SET_LAYOUT", payload: '11' });
      // }, 13000);

      // setTimeout(() => {
      //   dispatch({ type: "SET_LAYOUT", payload: '12' });
      // }, 17000);

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
        dispatch({ type: "SET_BACKGROUND", payload: '13' });
      }, 19000);
    }
  }, [backgroundReducer.step]);

  return (
    <div
      style={{
        display: backgroundReducer.step === '12' ? "flex" : "none",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        animation:
          backgroundReducer.step === '12' &&
          "keyframe-background-11 2s cubic-bezier(1, -1, 0, 2)  infinite alternate",
      }}
    >
      {props.children}
    </div>
  );
}

export default BackgroundChapter12;
