import * as React from "react";
import { useSelector } from "react-redux";
import AudioChapter11 from "../../components/audio/chapter11";
import BackgroundChapter11 from "../../components/backgrounds/chapter11";
import MessageChapter11 from "../../components/messages/chapter11";
import "./style.css";

export function Chapter11(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "11" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter11>
        <MessageChapter11></MessageChapter11>
      </BackgroundChapter11>
      <AudioChapter11></AudioChapter11>
      {props.children}
    </div>
  );
}

export default Chapter11;
