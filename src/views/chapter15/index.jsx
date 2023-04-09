import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter15 from "../../components/backgrounds/chapter15";
import MessageChapter15 from "../../components/messages/chapter15";
import "./style.css";

export function Chapter15(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "15" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter15>
        <MessageChapter15></MessageChapter15>
      </BackgroundChapter15>
      {props.children}
    </div>
  );
}

export default Chapter15;
