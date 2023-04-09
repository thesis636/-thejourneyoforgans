import * as React from "react";
import { useSelector } from "react-redux";
import AudioChapter4 from "../../components/audio/chapter4";
import BackgroundChapter4 from "../../components/backgrounds/chapter4";
import MessageChapter4 from "../../components/messages/chapter4";
// import { OneFrame } from "../../components/frames/one";
import "./style.css";

export function Chapter4(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === '4' ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
        // animation: startReducer.status && "screen-move 5s ease-in both",
      }}
    >
      <BackgroundChapter4>
        <MessageChapter4></MessageChapter4>
      </BackgroundChapter4>
      <AudioChapter4></AudioChapter4>
      {props.children}
    </div>
  );
}

export default Chapter4;
