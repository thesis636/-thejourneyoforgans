import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter11 from "../../components/backgrounds/chapter-11";
import LayoutChapter7 from "../../components/layout/chapter-7";
import "./style.css";

export function Chapter11(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.step === '11' ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
        // animation: startReducer.status && "screen-move 5s ease-in both",
      }}
    >
      <BackgroundChapter11>
        <LayoutChapter7></LayoutChapter7>
      </BackgroundChapter11>
      {props.children}
    </div>
  );
}

export default Chapter11;
