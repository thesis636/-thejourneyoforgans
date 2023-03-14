import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter13 from "../../components/backgrounds/chapter-13";
import LayoutChapter11 from "../../components/layout/chapter-11";
import LayoutChapter12 from "../../components/layout/chapter-12";
import LayoutChapter13 from "../../components/layout/chapter-13";
import LayoutChapter14 from "../../components/layout/chapter-14";
import LayoutChapter15 from "../../components/layout/chapter-15";
import "./style.css";

export function Chapter13(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.step === '13' ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
        // animation: startReducer.status && "screen-move 5s ease-in both",
      }}
    >
      <BackgroundChapter13>
        <LayoutChapter11></LayoutChapter11>
        <LayoutChapter12></LayoutChapter12>
        <LayoutChapter13></LayoutChapter13>
        <LayoutChapter14></LayoutChapter14>
        <LayoutChapter15></LayoutChapter15>
      </BackgroundChapter13>
      {props.children}
    </div>
  );
}

export default Chapter13;
