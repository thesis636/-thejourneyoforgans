import * as React from "react";
import { useSelector } from "react-redux";
import AudioChapter3 from "../../components/audio/chapter3";
import BackgroundChapter3 from "../../components/backgrounds/chapter3";
import MessageChapter3 from "../../components/messages/chapter3";
// import { OneFrame } from "../../components/frames/one";
import "./style.css";

export function Chapter3(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === '3' ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
        // animation: startReducer.status && "screen-move 5s ease-in both",
      }}
    >
      <BackgroundChapter3>
        <MessageChapter3></MessageChapter3>
      </BackgroundChapter3>
      <AudioChapter3></AudioChapter3>
      {props.children}
    </div>
  );
}

export default Chapter3;
