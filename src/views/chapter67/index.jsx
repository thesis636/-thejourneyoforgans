import * as React from "react";
import { useSelector } from "react-redux";
import BackgroundChapter67 from "../../components/backgrounds/chapter67";
import "./style.css";
import MessageChapter67 from "../../components/messages/chapter67";

export function Chapter67(props) {
  const backgroundReducer = useSelector((state) => state.backgroundReducer);
  return (
    <div
      style={{
        display: backgroundReducer.chapter === "67" ? "flex" : "none",
        width: "100vw",
        height: "100vh",
        backgroundColor: " #ffffff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BackgroundChapter67>
      <MessageChapter67></MessageChapter67>
      </BackgroundChapter67>
      {props.children}
    </div>
  );
}

export default Chapter67;
