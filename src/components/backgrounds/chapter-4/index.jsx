import * as React from "react";
import { useSelector } from "react-redux";

export function BackgroundChapter4(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      className="lazy-background"
      style={{
        display: backgroundReducer.step === "4" ? "flex" : "none",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        animation:
          backgroundReducer.step === "4" &&
          "keyframe-background-4 1s cubic-bezier(1, -1, 0, 2) infinite alternate",
      }}
    >
      {props.children}
    </div>
  );
}

export default BackgroundChapter4;
