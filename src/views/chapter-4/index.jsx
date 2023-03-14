import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter4 from "../../components/backgrounds/chapter-4";
import LayoutChapter4 from "../../components/layout/chapter-4";
import "./style.css";

export function Chapter4(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.step === '4' ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
        // animation: startReducer.status && "screen-move 5s ease-in both",
      }}
    >
      <BackgroundChapter4>
        <LayoutChapter4></LayoutChapter4>
      </BackgroundChapter4>
      {props.children}
    </div>
  );
}

export default Chapter4;
