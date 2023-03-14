import * as React from "react";
import { useSelector } from "react-redux";

export function BackgroundChapter1(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);

  return (
    <div
      style={{
        display: backgroundReducer.step === '2' ? "flex" : "none",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        animation:
          backgroundReducer.step === '2' &&
          "keyframe-background-2 1s cubic-bezier(1, -1, 0, 2) infinite alternate",
      }}
    >
      {props.children}
    </div>
  );
}

export default BackgroundChapter1;
