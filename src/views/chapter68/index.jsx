import * as React from "react";
import { useSelector } from "react-redux";
import AudioChapter68 from "../../components/audio/chapter68";
import BackgroundChapter68 from "../../components/backgrounds/chapter68";
import "./style.css";
import MessageChapter68 from "../../components/messages/chapter68";

export function Chapter68(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "68" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter68>
      <MessageChapter68></MessageChapter68>
      </BackgroundChapter68>
      <AudioChapter68></AudioChapter68>
      {props.children}
    </div>
  );
}

export default Chapter68;
