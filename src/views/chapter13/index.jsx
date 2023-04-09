import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter13 from "../../components/backgrounds/chapter13";
import MessageChapter13 from "../../components/messages/chapter13";
import "./style.css";
import AudioChapter13 from "../../components/audio/chapter13";

export function Chapter13(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "13" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter13>
        <MessageChapter13></MessageChapter13>
      </BackgroundChapter13>
      <AudioChapter13></AudioChapter13>
      {props.children}
    </div>
  );
}

export default Chapter13;
