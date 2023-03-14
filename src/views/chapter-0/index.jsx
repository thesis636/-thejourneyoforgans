import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter0 from "../../components/backgrounds/chapter-0";
import LayoutChapter0 from "../../components/layout/chapter-0";
import LayoutChapter1 from "../../components/layout/chapter-1";
import LayoutChapter2 from "../../components/layout/chapter-2";
// import { OneFrame } from "../../components/frames/one";
import "./style.css";

export function Chapter0(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.step === '0' ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
        // animation: startReducer.status && "screen-move 5s ease-in both",
      }}
    >
      <BackgroundChapter0>
        <LayoutChapter0></LayoutChapter0>
        <LayoutChapter1></LayoutChapter1>
        <LayoutChapter2></LayoutChapter2>
      </BackgroundChapter0>
      {props.children}
    </div>
  );
}

export default Chapter0;
