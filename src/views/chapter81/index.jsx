import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter81 from "../../components/backgrounds/chapter81";
import "./style.css";
import MessageChapter81 from "../../components/messages/chapter81";

export function Chapter81(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "81" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter81>
      <MessageChapter81></MessageChapter81>
      </BackgroundChapter81>
      {props.children}
    </div>
  );
}

export default Chapter81;
