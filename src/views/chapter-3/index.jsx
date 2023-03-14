import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter3 from "../../components/backgrounds/chapter-3";
import "./style.css";

export function Chapter3(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.step === '3' ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
        // animation: startReducer.status && "screen-move 5s ease-in both",
      }}
    >
      <BackgroundChapter3>
      </BackgroundChapter3>
      {props.children}
    </div>
  );
}

export default Chapter3;
