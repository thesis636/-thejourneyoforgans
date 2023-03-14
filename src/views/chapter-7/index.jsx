import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter7 from "../../components/backgrounds/chapter-7";
import "./style.css";

export function Chapter7(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.step === '7' ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
        // animation: startReducer.status && "screen-move 5s ease-in both",
      }}
    >
      <BackgroundChapter7>
      </BackgroundChapter7>
      {props.children}
    </div>
  );
}

export default Chapter7;
