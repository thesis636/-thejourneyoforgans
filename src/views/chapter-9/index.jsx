import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter9 from "../../components/backgrounds/chapter-9";
import "./style.css";

export function Chapter9(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.step === '9' ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
        // animation: startReducer.status && "screen-move 5s ease-in both",
      }}
    >
      <BackgroundChapter9>
      </BackgroundChapter9>
      {props.children}
    </div>
  );
}

export default Chapter9;
