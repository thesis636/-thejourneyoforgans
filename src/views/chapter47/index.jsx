import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter47 from "../../components/backgrounds/chapter47";
import "./style.css";
import MessageChapter47 from "../../components/messages/chapter47";

export function Chapter47(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "47" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter47>
        <MessageChapter47></MessageChapter47>
      </BackgroundChapter47>
      {props.children}
    </div>
  );
}

export default Chapter47;
