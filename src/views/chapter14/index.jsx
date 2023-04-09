import * as React from "react";
import { useSelector } from "react-redux";
import AudioChapter14 from "../../components/audio/chapter14";
import BackgroundChapter14 from "../../components/backgrounds/chapter14";
import MessageChapter14 from "../../components/messages/chapter14";
import "./style.css";

export function Chapter14(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "14" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter14>
        <MessageChapter14></MessageChapter14>
      </BackgroundChapter14>
      <AudioChapter14></AudioChapter14>
      {props.children}
    </div>
  );
}

export default Chapter14;
