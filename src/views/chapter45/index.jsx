import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter45 from "../../components/backgrounds/chapter45";
import "./style.css";
import MessageChapter45 from "../../components/messages/chapter45";

export function Chapter45(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "45" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter45>
        <MessageChapter45></MessageChapter45>
      </BackgroundChapter45>
      {props.children}
    </div>
  );
}

export default Chapter45;
