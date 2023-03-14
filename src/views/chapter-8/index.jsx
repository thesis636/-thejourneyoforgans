import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter8 from "../../components/backgrounds/chapter-8";
import "./style.css";

export function Chapter8(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.step === '8' ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
        // animation: startReducer.status && "screen-move 5s ease-in both",
      }}
    >
      <BackgroundChapter8>
      </BackgroundChapter8>
      {props.children}
    </div>
  );
}

export default Chapter8;
