import * as React from "react";
import { useSelector } from "react-redux";
import AudioChapter49 from "../../components/audio/chapter49";
import BackgroundChapter49 from "../../components/backgrounds/chapter49";
import "./style.css";
import MessageChapter49 from "../../components/messages/chapter49";

export function Chapter49(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "49" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter49>
        <MessageChapter49></MessageChapter49>
      </BackgroundChapter49>
      <AudioChapter49></AudioChapter49>
      {props.children}
    </div>
  );
}

export default Chapter49;
