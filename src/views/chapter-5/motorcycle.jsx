import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter5Motorcycle from "../../components/backgrounds/chapter-5/motorcycle";
import "./style.css";

export function Chapter5Motorcycle(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.step === "5-motorcycle" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
        // animation: startReducer.status && "screen-move 5s ease-in both",
      }}
    >
      <BackgroundChapter5Motorcycle></BackgroundChapter5Motorcycle>
      {props.children}
    </div>
  );
}

export default Chapter5Motorcycle;
