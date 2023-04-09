import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter40 from "../../components/backgrounds/chapter40";
import "./style.css";
import MessageChapter40 from "../../components/messages/chapter40";

export function Chapter40(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "40" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter40>
        <MessageChapter40></MessageChapter40>
      </BackgroundChapter40>
      {props.children}
    </div>
  );
}

export default Chapter40;
