import * as React from "react";
import { useSelector } from "react-redux";
import AudioChapter32 from "../../components/audio/chapter32";
import BackgroundChapter32 from "../../components/backgrounds/chapter32";
import "./style.css";
import MessageChapter32 from "../../components/messages/chapter32";

export function Chapter32(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "32" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter32>
      <MessageChapter32></MessageChapter32>
      </BackgroundChapter32>
      <AudioChapter32></AudioChapter32>
      {props.children}
    </div>
  );
}

export default Chapter32;
