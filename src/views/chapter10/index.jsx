import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter10 from "../../components/backgrounds/chapter10";
import MessageChapter10 from "../../components/messages/chapter10";
import "./style.css";
import AudioChapter10 from "../../components/audio/chapter10";

export function Chapter10(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "10" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter10>
        <MessageChapter10></MessageChapter10>
      </BackgroundChapter10>
      <AudioChapter10></AudioChapter10>
      {props.children}
    </div>
  );
}

export default Chapter10;
