import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter2 from "../../components/backgrounds/chapter-2";
import LayoutChapter3 from "../../components/layout/chapter-3";
import "./style.css";

export function Chapter2(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);

  return (
    <div
      style={{
        display: backgroundReducer.step === '2' ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
        // animation: startReducer.status && "screen-move 5s ease-in both",
      }}
    >
      <BackgroundChapter2>
        <LayoutChapter3></LayoutChapter3>
      </BackgroundChapter2>
      {props.children}
    </div>
  );
}

export default Chapter2;
