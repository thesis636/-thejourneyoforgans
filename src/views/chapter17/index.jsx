import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter17 from "../../components/backgrounds/chapter17";
import MessageChapter17 from "../../components/messages/chapter17";
import "./style.css";

export function Chapter17(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "17" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter17>
        <MessageChapter17></MessageChapter17>
      </BackgroundChapter17>
      {props.children}
    </div>
  );
}

export default Chapter17;
