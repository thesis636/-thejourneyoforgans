import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter50 from "../../components/backgrounds/chapter50";
import "./style.css";
import MessageChapter50 from "../../components/messages/chapter50";

export function Chapter50(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "50" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter50>
        <MessageChapter50></MessageChapter50>
      </BackgroundChapter50>
      {props.children}
    </div>
  );
}

export default Chapter50;
