import * as React from "react";
import { useSelector } from "react-redux";
import AudioChapter12 from "../../components/audio/chapter12";
import BackgroundChapter12 from "../../components/backgrounds/chapter12";
import MessageChapter12 from "../../components/messages/chapter12";
import "./style.css";

export function Chapter12(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "12" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter12>
        <MessageChapter12></MessageChapter12>
      </BackgroundChapter12>
      <AudioChapter12></AudioChapter12>
      {props.children}
    </div>
  );
}

export default Chapter12;
