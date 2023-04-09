import * as React from "react";
import { useSelector } from "react-redux";
import AudioChapter8Motorcycle from "../../components/audio/chapter8/motorcycle";
import BackgroundChapter8Motorcycle from "../../components/backgrounds/chapter8/motorcycle";
import MessageChapter8Motorcycle from "../../components/messages/chapter8/motorcycle";
import "./style.css";

export function Chapter8Motorcycle(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "8-motorcycle" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter8Motorcycle>
        <MessageChapter8Motorcycle></MessageChapter8Motorcycle>
      </BackgroundChapter8Motorcycle>
      <AudioChapter8Motorcycle></AudioChapter8Motorcycle>
      {props.children}
    </div>
  );
}

export default Chapter8Motorcycle;
