import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter80 from "../../components/backgrounds/chapter80";
import "./style.css";
import MessageChapter80 from "../../components/messages/chapter80";

export function Chapter80(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "80" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter80>
      <MessageChapter80></MessageChapter80>
      </BackgroundChapter80>
      {props.children}
    </div>
  );
}

export default Chapter80;
