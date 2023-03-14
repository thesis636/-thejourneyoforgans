import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter6 from "../../components/backgrounds/chapter-6";
import LayoutChapter5 from "../../components/layout/chapter-5";
import "./style.css";

export function Chapter6(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.step === '6' ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
        // animation: startReducer.status && "screen-move 5s ease-in both",
      }}
    >
      <BackgroundChapter6>
        <LayoutChapter5></LayoutChapter5>
      </BackgroundChapter6>
      {props.children}
    </div>
  );
}

export default Chapter6;
