import * as React from "react";
import { useSelector } from "react-redux";
import AudioChapter8BTS from "../../components/audio/chapter8/bts";
import BackgroundChapter8BTS from "../../components/backgrounds/chapter8/bts";
import MessageChapter8BTS from "../../components/messages/chapter8/bts";
import "./style.css";

export function Chapter8BTS(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "8-bts" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter8BTS>
        <MessageChapter8BTS></MessageChapter8BTS>
      </BackgroundChapter8BTS>
      <AudioChapter8BTS></AudioChapter8BTS>
      {props.children}
    </div>
  );
}

export default Chapter8BTS;
