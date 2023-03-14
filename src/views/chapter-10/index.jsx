import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter10 from "../../components/backgrounds/chapter-10";
import LayoutChapter6 from "../../components/layout/chapter-6";
import "./style.css";

export function Chapter10(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.step === '10' ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
        // animation: startReducer.status && "screen-move 5s ease-in both",
      }}
    >
      <BackgroundChapter10>
        <LayoutChapter6></LayoutChapter6>
      </BackgroundChapter10>
      {props.children}
    </div>
  );
}

export default Chapter10;
