import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter12 from "../../components/backgrounds/chapter-12";
import LayoutChapter8 from "../../components/layout/chapter-8";
import LayoutChapter9 from "../../components/layout/chapter-9";
import LayoutChapter10 from "../../components/layout/chapter-10";
import "./style.css";

export function Chapter12(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.step === '12' ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
        // animation: startReducer.status && "screen-move 5s ease-in both",
      }}
    >
      <BackgroundChapter12>
        <LayoutChapter8></LayoutChapter8>
        <LayoutChapter9></LayoutChapter9>
        <LayoutChapter10></LayoutChapter10>
      </BackgroundChapter12>
      {props.children}
    </div>
  );
}

export default Chapter12;
