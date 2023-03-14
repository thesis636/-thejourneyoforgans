import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter5Walk from "../../components/backgrounds/chapter-5/walk";
import "./style.css";

export function Chapter5Walk(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.step === "5-walk" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
        // animation: startReducer.status && "screen-move 5s ease-in both",
      }}
    >
      <BackgroundChapter5Walk></BackgroundChapter5Walk>
      {props.children}
    </div>
  );
}

export default Chapter5Walk;
