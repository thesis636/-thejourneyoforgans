import * as React from "react";
import { useSelector } from "react-redux";
import AudioChapter9 from "../../components/audio/chapter9";
import BackgroundChapter9 from "../../components/backgrounds/chapter9";
import MessageChapter9 from "../../components/messages/chapter9";
import "./style.css";

export function Chapter9(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "9" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter9>
        <MessageChapter9></MessageChapter9>
      </BackgroundChapter9>
      <AudioChapter9></AudioChapter9>
      {props.children}
    </div>
  );
}

export default Chapter9;
