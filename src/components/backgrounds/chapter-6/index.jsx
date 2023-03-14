import * as React from "react";
import { useSelector } from "react-redux";

export function BackgroundChapter6(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.step === '6' ? "flex" : "none",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        animation:
          backgroundReducer.step === '6' &&
          "keyframe-background-6 2s cubic-bezier(1, -1, 0, 2) infinite alternate",
      }}
    >
      {props.children}
    </div>
  );
}

export default BackgroundChapter6;
