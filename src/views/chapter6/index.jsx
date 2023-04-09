import * as React from "react";
import { useSelector } from "react-redux";
import AudioChapter6 from "../../components/audio/chapter6";
import BackgroundChapter6 from "../../components/backgrounds/chapter6";
import MessageChapter6 from "../../components/messages/chapter6";
// import { OneFrame } from "../../components/frames/one";
import "./style.css";

export function Chapter6(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === '6' ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
        // animation: startReducer.status && "screen-move 5s ease-in both",
      }}
    >
      <BackgroundChapter6>
        <MessageChapter6></MessageChapter6>
      </BackgroundChapter6>
      <AudioChapter6></AudioChapter6>
      {props.children}
    </div>
  );
}

export default Chapter6;
